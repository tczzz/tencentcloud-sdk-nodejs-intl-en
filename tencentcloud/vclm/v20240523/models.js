/*
 * Copyright (c) 2018 Tencent. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const AbstractModel = require("../../common/abstract_model");

/**
 * Logo parameter
 * @class
 */
class LogoParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark URL

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogoUrl = null;

        /**
         * Watermark Base64 code is supported. Either the Base64 code or URL must be provided. If both are provided, the URL prevails.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.LogoImage = null;

        /**
         * The coordinates of the watermark image in the generated image. The mark image will be expanded according to the coordinates.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LogoRect || null}
         */
        this.LogoRect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LogoUrl = 'LogoUrl' in params ? params.LogoUrl : null;
        this.LogoImage = 'LogoImage' in params ? params.LogoImage : null;

        if (params.LogoRect) {
            let obj = new LogoRect();
            obj.deserialize(params.LogoRect)
            this.LogoRect = obj;
        }

    }
}

/**
 * DescribeImageAnimateJob response structure.
 * @class
 */
class DescribeImageAnimateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. WAIT: waiting; RUN: running; FAIL: failed; DONE: successful.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code.
         * @type {string || null}
         */
        this.ErrorCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.ErrorMessage = null;

        /**
         * Generated video URL. It is valid for 24 hours.
         * @type {string || null}
         */
        this.ResultVideoUrl = null;

        /**
         * Masked video URL.
         * @type {string || null}
         */
        this.MaskVideoUrl = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrorCode = 'ErrorCode' in params ? params.ErrorCode : null;
        this.ErrorMessage = 'ErrorMessage' in params ? params.ErrorMessage : null;
        this.ResultVideoUrl = 'ResultVideoUrl' in params ? params.ResultVideoUrl : null;
        this.MaskVideoUrl = 'MaskVideoUrl' in params ? params.MaskVideoUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input box
 * @class
 */
class LogoRect extends  AbstractModel {
    constructor(){
        super();

        /**
         * X-axis coordinate of the upper left corner

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.X = null;

        /**
         * Y-axis coordinate of the upper left corner

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Y = null;

        /**
         * Box width

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Box height

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.X = 'X' in params ? params.X : null;
        this.Y = 'Y' in params ? params.Y : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * SubmitImageAnimateJob response structure.
 * @class
 */
class SubmitImageAnimateJobResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * The unique request ID, generated by the server, will be returned for every request (if the request fails to reach the server for other reasons, the request will not obtain a RequestId). RequestId is required for locating a problem.
         * @type {string || null}
         */
        this.RequestId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * SubmitImageAnimateJob request structure.
 * @class
 */
class SubmitImageAnimateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image format: PNG, JPG, and JPEG formats are supported.
Image resolution: The long edge resolution should not exceed 2056.
Image size: The size should not exceed 10 MB.
Image aspect ratio: The ratio of width to height should be in the range of 1:2 to 1:1.2.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Image information after Base64 encoding. Image format: PNG, JPG, and JPEG formats are supported. Image resolution: The long side resolution should not exceed 2056. Image size: The size should not exceed 10 MB. Image aspect ratio: The ratio of width to height should be in the range of 1:2 to 1:1.2.
         * @type {string || null}
         */
        this.ImageBase64 = null;

        /**
         * Action template ID. ke3: kemusan; tuziwu: rabbit dance; huajiangwu: paddling dance.

         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Whether the generated video retains the audio in the template. The default value is true.
         * @type {boolean || null}
         */
        this.EnableAudio = null;

        /**
         * Whether to detect 12 body parts in the input image (head, neck, right shoulder, right elbow, right wrist, left shoulder, left elbow, left wrist, right hip, left hip, left knee, and right knee). They are not detected by default.
         * @type {boolean || null}
         */
        this.EnableBodyJoins = null;

        /**
         * Whether the final video retains the background of the original image. (This parameter does not take effect when TemplateId is set to tuziwu or huajiangwu.)

         * @type {boolean || null}
         */
        this.EnableSegment = null;

        /**
         * Whether to add a mark to the generated video. The default value is 0.
1: A mark is added.
0: No mark is added.
Other values: A mark is added by default.
It is recommended to use an obvious mark to indicate that the video is synthesized by AI.
         * @type {number || null}
         */
        this.LogoAdd = null;

        /**
         * Mark text settings.
By default, the text "Synthesized by AI" is added to the bottom right corner of the generated video. You can also use other text images.
         * @type {LogoParam || null}
         */
        this.LogoParam = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.ImageBase64 = 'ImageBase64' in params ? params.ImageBase64 : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.EnableAudio = 'EnableAudio' in params ? params.EnableAudio : null;
        this.EnableBodyJoins = 'EnableBodyJoins' in params ? params.EnableBodyJoins : null;
        this.EnableSegment = 'EnableSegment' in params ? params.EnableSegment : null;
        this.LogoAdd = 'LogoAdd' in params ? params.LogoAdd : null;

        if (params.LogoParam) {
            let obj = new LogoParam();
            obj.deserialize(params.LogoParam)
            this.LogoParam = obj;
        }

    }
}

/**
 * DescribeImageAnimateJob request structure.
 * @class
 */
class DescribeImageAnimateJobRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.JobId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.JobId = 'JobId' in params ? params.JobId : null;

    }
}

module.exports = {
    LogoParam: LogoParam,
    DescribeImageAnimateJobResponse: DescribeImageAnimateJobResponse,
    LogoRect: LogoRect,
    SubmitImageAnimateJobResponse: SubmitImageAnimateJobResponse,
    SubmitImageAnimateJobRequest: SubmitImageAnimateJobRequest,
    DescribeImageAnimateJobRequest: DescribeImageAnimateJobRequest,

}
