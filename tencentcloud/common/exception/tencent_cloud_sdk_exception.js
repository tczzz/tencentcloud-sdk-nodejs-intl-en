/**
 * @inner
 */
class TencentCloudSDKHttpException extends Error {
    constructor(error, requestId="", traceId="") {
        super(error);
        this.requestId = requestId || '';
        this.traceId = traceId || '';
        // Whether the error is eligible to trigger domain failover.
        this.failover = false;
    }

    getMessage() {
        return this.message;
    }

    getRequestId() {
        return this.requestId;
    }

    getTraceId() {
        return this.traceId;
    }

    toString() {
        return (
            "[TencentCloudSDKException]" +
            "message:" +
            this.getMessage() +
            "  requestId:" +
            this.getRequestId() +
            "  traceId:" +
            this.getTraceId()
        );
    }

    toLocaleString() {
        return (
            "[TencentCloudSDKException]" +
            "message:" +
            this.getMessage() +
            "  requestId:" +
            this.getRequestId() +
            "  traceId:" +
            this.getTraceId()
          );
    }
}
module.exports = TencentCloudSDKHttpException
