/**
 * Circuit breaker that blocks requests after too many failures, using a
 * Closed / HalfOpen / Open state machine.
 *
 * Settings (all optional):
 *   maxFailNum             - max failed requests before opening (default 5)
 *   maxFailPercentage      - max failure percentage before opening (default 0.75)
 *   windowIntervalMs       - window in ms to reset the failure counter (default 300000)
 *   timeoutMs              - Open -> HalfOpen timeout in ms (default 60000)
 *   maxRequests            - HalfOpen -> Closed success threshold (default 1)
 *   maxConsecutiveFailures - opens once consecutive failures exceed this (default 5)
 */

const State = {
  Closed: 0,
  HalfOpen: 1,
  Open: 2,
}

const DEFAULT_SETTING = {
  maxFailNum: 5,
  maxFailPercentage: 0.75,
  windowIntervalMs: 300 * 1000,
  timeoutMs: 60 * 1000,
  maxRequests: 1,
  maxConsecutiveFailures: 5,
}

class CircuitBreaker {
  constructor(setting) {
    this.setting = Object.assign({}, DEFAULT_SETTING, setting)
    this.state = State.Closed
    // Generation counter, bumped on every state change to invalidate stale tokens.
    this.generation = 0
    this.expiry = 0
    this.totalRequests = 0
    this.failures = 0
    this.consecutiveSuccesses = 0
    this.consecutiveFailures = 0
  }

  allow() {
    const now = Date.now()
    const cur = this._currentState(now)

    if (cur.state === State.Open) {
      return { allowed: false, recordResult: function () {} }
    }

    const gen = cur.generation
    const self = this
    return {
      allowed: true,
      recordResult: function (success) {
        self._report(gen, success)
      },
    }
  }

  _currentState(now) {
    switch (this.state) {
      case State.Closed:
        if (this.expiry !== 0 && now >= this.expiry) {
          this._toNewGeneration(State.Closed, now)
        }
        break
      case State.Open:
        if (now >= this.expiry) {
          this._toNewGeneration(State.HalfOpen, now)
        }
        break
      case State.HalfOpen:
        break
    }
    return { state: this.state, generation: this.generation }
  }

  _report(generation, success) {
    const now = Date.now()
    this._currentState(now)

    if (this.generation !== generation) {
      return
    }

    if (success) {
      this._onSuccess(now)
    } else {
      this._onFailure(now)
    }
  }

  _onSuccess(now) {
    this.totalRequests++
    this.consecutiveSuccesses++
    this.consecutiveFailures = 0

    switch (this.state) {
      case State.Closed:
        break
      case State.HalfOpen:
        if (this.consecutiveSuccesses >= this.setting.maxRequests) {
          this._toNewGeneration(State.Closed, now)
        }
        break
      case State.Open:
        break
    }
  }

  _onFailure(now) {
    this.totalRequests++
    this.failures++
    this.consecutiveFailures++
    this.consecutiveSuccesses = 0

    switch (this.state) {
      case State.Closed:
        if (this._readyToOpen()) {
          this._toNewGeneration(State.Open, now)
        }
        break
      case State.HalfOpen:
        this._toNewGeneration(State.Open, now)
        break
      case State.Open:
        break
    }
  }

  _readyToOpen() {
    const failPercentage = this.failures / this.totalRequests
    // maxFailNum uses >= (reach); maxConsecutiveFailures uses > (exceed).
    return (
      (this.failures >= this.setting.maxFailNum &&
        failPercentage >= this.setting.maxFailPercentage) ||
      this.consecutiveFailures > this.setting.maxConsecutiveFailures
    )
  }

  _toNewGeneration(newState, now) {
    this.state = newState
    this.generation++
    this.totalRequests = 0
    this.failures = 0
    this.consecutiveSuccesses = 0
    this.consecutiveFailures = 0

    switch (newState) {
      case State.Closed:
        this.expiry = now + this.setting.windowIntervalMs
        break
      case State.Open:
        this.expiry = now + this.setting.timeoutMs
        break
      case State.HalfOpen:
        this.expiry = 0
        break
    }
  }
}

module.exports = { CircuitBreaker }
