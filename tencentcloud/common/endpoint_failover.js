const nodeFetch = require("node-fetch")
const FetchError = nodeFetch.FetchError
const { CircuitBreaker } = require("./circuit_breaker")

/**
 * Known Tencent Cloud API endpoint suffixes. Failover rotates among these while
 * preserving the host prefix (including family labels like "ai") verbatim.
 */
const KNOWN_API_SUFFIXES = [
  "tencentcloudapi.com",
  "tencentcloudapi.cn",
  "tencentcloudapi.com.cn",
]

/** Prefixes that identify a regional label (e.g. "ap-shanghai"). */
const REGION_PREFIXES = ["ap-", "na-", "eu-", "sa-", "af-", "me-"]

/** Breaker Open -> HalfOpen timeout (ms). */
const BREAKER_TIMEOUT_MS = 60 * 1000

/** Node.js error codes indicating network / DNS / TLS failures eligible for failover. */
const FAILOVER_ERROR_CODES = new Set([
  // DNS resolution failures
  "ENOTFOUND",
  "EAI_AGAIN",
  // Connection failures
  "ECONNREFUSED",
  "ETIMEDOUT",
  "ECONNRESET",
  "ECONNABORTED",
  "EHOSTUNREACH",
  "ENETUNREACH",
  // TLS / certificate failures
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "ERR_TLS_CERT_ALTNAME_INVALID",
  "CERT_HAS_EXPIRED",
  "SELF_SIGNED_CERT_IN_CHAIN",
])

/** Per-originalHost failover state: one CircuitBreaker per candidate host. */
class FailoverState {
  constructor(breakerTimeoutMs) {
    this.breakers = new Map()
    this.breakerTimeoutMs = breakerTimeoutMs
  }

  breakerFor(host) {
    let b = this.breakers.get(host)
    if (!b) {
      b = new CircuitBreaker({ timeoutMs: this.breakerTimeoutMs })
      this.breakers.set(host, b)
    }
    return b
  }
}

/**
 * Domain failover for Tencent Cloud API calls. Two modes share one pipeline:
 * backupEndpoint fallback, or suffix rotation (.com / .cn / .com.cn) preserving
 * the host prefix. Region-pinned hosts try the original host first, then
 * rotate over candidates with the region label stripped. Per-host
 * CircuitBreakers suppress repeated attempts; state is per AbstractClient instance.
 */
class EndpointFailover {
  constructor(options) {
    const bp = options && options.backupEndpoint
    this.backupEndpoint = bp && bp.length > 0 ? bp : null
    // Per-originHost state, created lazily; bounded by the client's fixed endpoint set.
    this.state = new Map()
  }

  /**
   * Execute a request with domain failover.
   *
   * Picks the first candidate whose circuit breaker is closed, sends a single
   * request to it, and returns/throws its outcome without trying the next one.
   * The breaker is updated on both success and network-level failure, so it
   * alone governs when an unhealthy host is reattempted.
   *
   * @param {string} endpoint Original endpoint (e.g. "cvm.tencentcloudapi.com").
   * @param {(host: string) => Promise<any>} requestFn Sends the request to a given host.
   * @param {(res: any) => Promise<any>} parseFn Parses the raw response; throw an error
   *   flagged `failover` (or a network error) to mark the host unhealthy.
   */
  async execute(endpoint, requestFn, parseFn) {
    const candidates = this._planFor(endpoint)
    if (!candidates) {
      return parseFn(await requestFn(endpoint))
    }

    const state = this._stateFor(endpoint)

    for (const c of candidates) {
      const token = state.breakerFor(c.host).allow()
      if (!token.allowed) {
        continue
      }
      try {
        const raw = await requestFn(c.host)
        const result = await parseFn(raw)
        token.recordResult(true)
        return result
      } catch (e) {
        if (EndpointFailover.shouldFailover(e)) {
          token.recordResult(false)
        }
        throw e
      }
    }

    throw new Error("skipped " + candidates[0].host + ": circuit breaker open")
  }

  /**
   * Builds the candidate list, or null when the request should pass through
   * unchanged (custom host without backupEndpoint).
   */
  _planFor(endpoint) {
    if (this.backupEndpoint) {
      const backupHost = backupHostFor(serviceOf(endpoint), this.backupEndpoint)
      return [{ host: endpoint }, { host: backupHost }]
    }
    const m = suffixMatchOf(endpoint)
    if (!m) {
      return null
    }
    // For region-pinned hosts, rotate over candidates with the region label stripped,
    // while still trying the original host (region preserved) first.
    if (m.hasRegion) {
      const order = suffixTryOrder(m.suffixIdx)
      const candidates = [{ host: endpoint }]
      for (const s of order) {
        const host = m.serviceWithoutRegion + "." + KNOWN_API_SUFFIXES[s]
        if (host !== endpoint) {
          candidates.push({ host })
        }
      }
      return candidates
    }
    return suffixTryOrder(m.suffixIdx).map(function (s) {
      return { host: m.servicePrefix + "." + KNOWN_API_SUFFIXES[s] }
    })
  }

  _stateFor(originHost) {
    let s = this.state.get(originHost)
    if (!s) {
      s = new FailoverState(BREAKER_TIMEOUT_MS)
      this.state.set(originHost, s)
    }
    return s
  }

  /**
   * Whether an error is eligible for failover: network-layer errors (DNS,
   * connection, TLS) or errors explicitly flagged `failover`. Business errors are not.
   */
  static shouldFailover(error) {
    if (!error) {
      return false
    }
    // Explicitly flagged by the response parser
    if (error.failover) {
      return true
    }
    // Node.js network error code, directly or via node-fetch's nested cause
    if (error.code && FAILOVER_ERROR_CODES.has(error.code)) {
      return true
    }
    if (error.cause && error.cause.code && FAILOVER_ERROR_CODES.has(error.cause.code)) {
      return true
    }
    // node-fetch FetchError raised at the system level
    if ((error instanceof FetchError || error.name === "FetchError") && error.type === "system") {
      return true
    }
    // Fallback: a known network error code surfaced only in the message text
    if (typeof error.message === "string") {
      for (const code of FAILOVER_ERROR_CODES) {
        if (error.message.indexOf(code) !== -1) {
          return true
        }
      }
    }
    return false
  }

  /**
   * Whether a host is a known Tencent Cloud API domain (region-pinned included).
   */
  static isKnownTencentCloudHost(host) {
    return suffixMatchOf(host) != null
  }

  /**
   * Classify a host against the known endpoint suffixes. Returns null if none matches.
   */
  static suffixMatchOf(host) {
    return suffixMatchOf(host)
  }
}

/**
 * Recognise host = "<prefix>.<suffix>". The prefix is preserved verbatim; only a
 * regional label sets hasRegion. Returns null if no known suffix matches.
 */
function suffixMatchOf(host) {
  if (!host) {
    return null
  }
  const suffixIdx = matchSuffix(host)
  if (suffixIdx < 0) {
    return null
  }
  const prefix = host.substring(0, host.length - KNOWN_API_SUFFIXES[suffixIdx].length - 1)
  const labels = prefix.split(".")
  const hasRegion = labels.some(looksLikeRegionLabel)
  const serviceWithoutRegion = hasRegion
    ? labels.filter(function (l) {
        return !looksLikeRegionLabel(l)
      }).join(".")
    : prefix
  return { suffixIdx: suffixIdx, hasRegion: hasRegion, servicePrefix: prefix, serviceWithoutRegion: serviceWithoutRegion }
}

/** Index of the longest KNOWN_API_SUFFIXES entry suffixing host, or -1. */
function matchSuffix(host) {
  let best = -1
  let bestLen = -1
  for (let i = 0; i < KNOWN_API_SUFFIXES.length; i++) {
    const suffix = "." + KNOWN_API_SUFFIXES[i]
    if (!host.endsWith(suffix) || suffix.length <= bestLen) {
      continue
    }
    const prefix = host.substring(0, host.length - suffix.length)
    if (!prefix || prefix.startsWith(".") || prefix.endsWith(".")) {
      continue
    }
    best = i
    bestLen = suffix.length
  }
  return best
}

function looksLikeRegionLabel(label) {
  return !!label && REGION_PREFIXES.some(function (p) {
    return label.startsWith(p)
  })
}

function serviceOf(host) {
  const dot = host.indexOf(".")
  return dot < 0 ? host : host.substring(0, dot)
}

/**
 * Resolve the backup host from backupEndpoint: prepend the service unless the
 * value already starts with it.
 */
function backupHostFor(service, backupEndpoint) {
  if (service && backupEndpoint.startsWith(service + ".")) {
    return backupEndpoint
  }
  return service + "." + backupEndpoint
}

/** Try order: the original suffix first, then the remaining suffixes in order. */
function suffixTryOrder(originIdx) {
  const order = [originIdx]
  for (let i = 0; i < KNOWN_API_SUFFIXES.length; i++) {
    if (i !== originIdx) {
      order.push(i)
    }
  }
  return order
}

module.exports = {
  EndpointFailover: EndpointFailover,
  suffixMatchOf: suffixMatchOf,
  KNOWN_API_SUFFIXES: KNOWN_API_SUFFIXES,
}
