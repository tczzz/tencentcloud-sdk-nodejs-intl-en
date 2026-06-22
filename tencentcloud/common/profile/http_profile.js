/**
 * HTTP settings.
 * @class
 */
/**
 * @typedef {Object.<string, string>} StringRecord
 * @property {string} key
 * @property {string} value
 */
class HttpProfile {

    /**
     * @param {string} protocol Only supports https://.
     * @param {string} endpoint Domain name, such as cvm.ap-shanghai.tencentcloud.com.
     * @param {string} reqMethod HTTP method, only supports GET and POST.
     * @param {number} reqTimeout Request timeout value, in seconds, default 60.
     * @param {StringRecord} headers HTTP headers, default {}.
     * @param {boolean} domainFailover Whether to enable domain failover (default true).
     */
    constructor(protocol, endpoint, reqMethod, reqTimeout, headers, domainFailover) {
        /**
         * @type {string}
         */
        this.reqMethod = reqMethod || "POST";

        /**
         * @type {string || null}
         */
        this.endpoint = endpoint || null;

        /**
         * @type {string}
         */
        this.protocol = protocol || "https://";

        /**
         * @type {number}
         */
        this.reqTimeout = reqTimeout || 60;

        /**
         * @type {StringRecord}
         */
        this.headers = headers || {};

        /**
         * Whether to enable domain failover. Defaults to true; pass false to disable.
         * @type {boolean}
         */
        this.domainFailover = domainFailover !== false;
    }
}
module.exports = HttpProfile;
