const HttpProfile = require("./http_profile");

/**
 * Client settings.
 * @class
 */
class ClientProfile {

    /**
     * @param {string} signMethod Signature method, valid values: HmacSHA1, HmacSHA256.
     * @param {HttpProfile} httpProfile HTTP settings.
     * @param {string} backupEndpoint Backup endpoint host used by domain failover.
     */
    constructor(signMethod, httpProfile, backupEndpoint) {
        /**
         * @type {string}
         */
        this.signMethod = signMethod || "HmacSHA256";

        /**
         * @type {httpProfile}
         */
        this.httpProfile = httpProfile || new HttpProfile();

        /**
         * Backup endpoint for domain failover. When set, failed requests fall back
         * to "<service>.<backupEndpoint>" (or backupEndpoint verbatim if it already
         * starts with the service prefix).
         * @type {string || null}
         */
        this.backupEndpoint = backupEndpoint || null;
    }
}
module.exports = ClientProfile

