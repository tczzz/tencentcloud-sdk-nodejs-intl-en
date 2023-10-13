/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
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
 * ModifySnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySampleSnapshotTemplate response structure.
 * @class
 */
class ModifySampleSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyWatermarkTemplate request structure.
 * @class
 */
class ModifyWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermarking template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Origin position. Valid values:
<li>TopLeft: The origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>TopRight: The origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>BottomLeft: The origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>BottomRight: The origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is valid only for image watermarking templates.
         * @type {ImageWatermarkInputForUpdate || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is valid only for text watermarking templates.
         * @type {TextWatermarkTemplateInputForUpdate || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is required when `Type` is `svg` and is invalid when `Type` is `image` or `text`.
         * @type {SvgWatermarkInputForUpdate || null}
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInputForUpdate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInputForUpdate();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInputForUpdate();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * Full speech recognition segment.
 * @class
 */
class AiRecognitionTaskAsrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of a recognition segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Start time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Recognized text.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * Control parameter of a custom text audit task.
 * @class
 */
class UserDefineOcrTextReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom text audit task. Valid values:
<li>ON: Enables a custom text audit task;</li>
<li>OFF: Disables a custom text audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom text filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom text keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {string || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Frame interpolation configuration.
 * @class
 */
class FrameRateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The frame rate (Hz). Value range: [0, 100].
Default value: 0.
Note: For transcoding, this parameter will overwrite `Fps` of `VideoTemplate`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * Custom specification parameters for video processing, which are used to override corresponding parameters in templates.
 * @class
 */
class OverrideTranscodeParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Container format. Valid values: mp4, flv, hls, mp3, flac, ogg, and m4a; mp3, flac, ogg, and m4a are formats of audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain</li>
<li>1: remove</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter.
         * @type {VideoTemplateInfoForUpdate || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter.
         * @type {AudioTemplateInfoForUpdate || null}
         */
        this.AudioTemplate = null;

        /**
         * The TSC transcoding parameters.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

        /**
         * The subtitle settings.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SubtitleTemplate || null}
         */
        this.SubtitleTemplate = null;

        /**
         * The information of the external audio track to add.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaInputInfo> || null}
         */
        this.AddonAudioStream = null;

        /**
         * An extended field for transcoding.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StdExtInfo = null;

        /**
         * The subtitle file to add.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<AddOnSubtitle> || null}
         */
        this.AddOnSubtitles = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfoForUpdate();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfoForUpdate();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfigForUpdate();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

        if (params.SubtitleTemplate) {
            let obj = new SubtitleTemplate();
            obj.deserialize(params.SubtitleTemplate)
            this.SubtitleTemplate = obj;
        }

        if (params.AddonAudioStream) {
            this.AddonAudioStream = new Array();
            for (let z in params.AddonAudioStream) {
                let obj = new MediaInputInfo();
                obj.deserialize(params.AddonAudioStream[z]);
                this.AddonAudioStream.push(obj);
            }
        }
        this.StdExtInfo = 'StdExtInfo' in params ? params.StdExtInfo : null;

        if (params.AddOnSubtitles) {
            this.AddOnSubtitles = new Array();
            for (let z in params.AddOnSubtitles) {
                let obj = new AddOnSubtitle();
                obj.deserialize(params.AddOnSubtitles[z]);
                this.AddOnSubtitles.push(obj);
            }
        }

    }
}

/**
 * Input type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskClassificationInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video categorization template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input parameter of an SVG watermarking template
 * @class
 */
class SvgWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark width, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px; if `0px` is entered
 and `Height` is not `0px`, the watermark width will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark width will be the width of the source SVG image;</li>
<li>If the string ends in `W%`, the `Width` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Width` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Width` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Width` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Width` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Width` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Width` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `W%`.</li>
Default value: 10W%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px; if `0px` is entered
 and `Width` is not `0px`, the watermark height will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark height will be the height of the source SVG image;</li>
<li>If the string ends in `W%`, the `Height` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Height` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Height` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Height` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Height` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Height` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Height` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `H%`.</li>
Default value: 0 px.
         * @type {string || null}
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Workflow information details.
 * @class
 */
class WorkflowInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

        /**
         * Workflow name.
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * Workflow status. Valid values:
<li>Enabled: Enabled,</li>
<li>Disabled: Disabled.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Input rule bound to a workflow. If an uploaded video hits the rule for the object, the workflow will be triggered.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * The location to save the media processing output file.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The media processing parameters to use.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Type parameter of a video content audit task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of a video content recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TaskPriority = null;

        /**
         * The directory to save the media processing output file, such as `/movie/201907/`.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * Creation time of a workflow in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a workflow in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * CreateTranscodeTemplate request structure.
 * @class
 */
class CreateTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Container format. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Name of a transcoding template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: Retain</li>
<li>1: Remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: Retain</li>
<li>1: Remove</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter. This field is required when `RemoveVideo` is 0.
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter. This field is required when `RemoveAudio` is 0.
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter. To enable it, please contact your Tencent Cloud sales rep.
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * Audio/Video enhancement configuration.
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
        }

    }
}

/**
 * ProcessLiveStream response structure.
 * @class
 */
class ProcessLiveStreamResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The information of intelligently generated highlight segments.
 * @class
 */
class MediaAiAnalysisHighlightItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the highlight segments.
         * @type {string || null}
         */
        this.HighlightPath = null;

        /**
         * The URL of the thumbnail.
         * @type {string || null}
         */
        this.CovImgPath = null;

        /**
         * The confidence score. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The duration of the highlights.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * A list of the highlight segments.
         * @type {Array.<HighlightSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.HighlightPath = 'HighlightPath' in params ? params.HighlightPath : null;
        this.CovImgPath = 'CovImgPath' in params ? params.CovImgPath : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new HighlightSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeAnimatedGraphicsTemplates request structure.
 * @class
 */
class DescribeAnimatedGraphicsTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of animated image generating templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Result type of ASR-based prohibited information detection in speech task in content audit
 * @class
 */
class AiReviewTaskProhibitedAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of ASR-based prohibited information detection in speech task in content audit
         * @type {AiReviewProhibitedAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of ASR-based prohibited information detection in speech task in content audit
         * @type {AiReviewProhibitedAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Details of an adaptive bitrate streaming template
 * @class
 */
class AdaptiveDynamicStreamingTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of an adaptive bitrate streaming template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of an adaptive bitrate streaming template.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Adaptive bitrate streaming format. Valid values:
<li>HLS;</li>
<li>MPEG-DASH.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Parameter information of input streams for transcoding to adaptive bitrate streaming. Up to 10 streams can be input.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Whether to prohibit transcoding from low bitrate to high bitrate. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * Whether to prohibit transcoding from low resolution to high resolution. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#I).
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate response structure.
 * @class
 */
class DeleteAnimatedGraphicsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of OCR-based prohibited information detection in text task in content audit
 * @class
 */
class AiReviewTaskProhibitedOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of OCR-based prohibited information detection in text task in content audit
         * @type {AiReviewProhibitedOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of OCR-based prohibited information detection in text task in content audit
         * @type {AiReviewProhibitedOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewProhibitedOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewProhibitedOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Full speech recognition result.
 * @class
 */
class AiRecognitionTaskAsrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of full speech recognition segments.
         * @type {Array.<AiRecognitionTaskAsrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

        /**
         * Subtitles file address.
         * @type {string || null}
         */
        this.SubtitlePath = null;

        /**
         * Subtitles file storage location.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.SubtitlePath = 'SubtitlePath' in params ? params.SubtitlePath : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * OCR-detected prohibited information in text
 * @class
 */
class AiReviewProhibitedOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of OCR-detected prohibited information in text between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for OCR-detected prohibited information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the OCR-detected prohibited information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSchedule response structure.
 * @class
 */
class DeleteScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManageTask response structure.
 * @class
 */
class ManageTaskResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteWorkflow request structure.
 * @class
 */
class DeleteWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * An AWS S3 file upload trigger.
 * @class
 */
class AwsS3FileUploadTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * The AWS S3 bucket bound to the scheme.
         * @type {string || null}
         */
        this.S3Bucket = null;

        /**
         * The region of the AWS S3 bucket.
         * @type {string || null}
         */
        this.S3Region = null;

        /**
         * The bucket directory bound. It must be an absolute path that starts and ends with `/`, such as `/movie/201907/`. If you do not specify this, the root directory will be bound.	
         * @type {string || null}
         */
        this.Dir = null;

        /**
         * The file formats that will trigger the scheme, such as ["mp4", "flv", "mov"]. If you do not specify this, the upload of files in any format will trigger the scheme.	
         * @type {Array.<string> || null}
         */
        this.Formats = null;

        /**
         * The key ID of the AWS S3 bucket.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.S3SecretId = null;

        /**
         * The key of the AWS S3 bucket.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.S3SecretKey = null;

        /**
         * The SQS queue of the AWS S3 bucket.
Note: The queue must be in the same region as the bucket.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AwsSQS || null}
         */
        this.AwsSQS = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.S3Bucket = 'S3Bucket' in params ? params.S3Bucket : null;
        this.S3Region = 'S3Region' in params ? params.S3Region : null;
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Formats = 'Formats' in params ? params.Formats : null;
        this.S3SecretId = 'S3SecretId' in params ? params.S3SecretId : null;
        this.S3SecretKey = 'S3SecretKey' in params ? params.S3SecretKey : null;

        if (params.AwsSQS) {
            let obj = new AwsSQS();
            obj.deserialize(params.AwsSQS)
            this.AwsSQS = obj;
        }

    }
}

/**
 * Result information of intelligent cover generating
 * @class
 */
class AiAnalysisTaskCoverOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated covers.
         * @type {Array.<MediaAiAnalysisCoverItem> || null}
         */
        this.CoverSet = null;

        /**
         * Storage location of intelligently generated cover.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.CoverSet) {
            this.CoverSet = new Array();
            for (let z in params.CoverSet) {
                let obj = new MediaAiAnalysisCoverItem();
                obj.deserialize(params.CoverSet[z]);
                this.CoverSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * Rule of the `{number}` variable in the output file name.
 * @class
 */
class NumberFormat extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start value of the `{number}` variable. Default value: 0.
         * @type {number || null}
         */
        this.InitialValue = null;

        /**
         * Increment of the `{number}` variable. Default value: 1.
         * @type {number || null}
         */
        this.Increment = null;

        /**
         * Minimum length of the `{number}` variable. A placeholder will be used if the variable length is below the minimum requirement. Default value: 1.
         * @type {number || null}
         */
        this.MinLength = null;

        /**
         * Placeholder used when the `{number}` variable length is below the minimum requirement. Default value: 0.
         * @type {string || null}
         */
        this.PlaceHolder = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InitialValue = 'InitialValue' in params ? params.InitialValue : null;
        this.Increment = 'Increment' in params ? params.Increment : null;
        this.MinLength = 'MinLength' in params ? params.MinLength : null;
        this.PlaceHolder = 'PlaceHolder' in params ? params.PlaceHolder : null;

    }
}

/**
 * ModifySampleSnapshotTemplate request structure.
 * @class
 */
class ModifySampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a sampled screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Image width in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Image height in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampled screencapturing type. Valid values:
<li>Percent: By percent.</li>
<li>Time: By time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * The image format. Valid values: jpg, png, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * The input parameters for OCR-based detection of politically sensitive information.
 * @class
 */
class AiReviewPoliticalOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Audio/Video enhancement configuration.
 * @class
 */
class EnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VideoEnhanceConfig || null}
         */
        this.VideoEnhance = null;

        /**
         * The audio enhancement configuration.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AudioEnhanceConfig || null}
         */
        this.AudioEnhance = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.VideoEnhance) {
            let obj = new VideoEnhanceConfig();
            obj.deserialize(params.VideoEnhance)
            this.VideoEnhance = obj;
        }

        if (params.AudioEnhance) {
            let obj = new AudioEnhanceConfig();
            obj.deserialize(params.AudioEnhance)
            this.AudioEnhance = obj;
        }

    }
}

/**
 * The information of the object to process.
 * @class
 */
class MediaInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The input type. Valid values:
<li>`COS`: A COS bucket address.</li>
<li> `URL`: A URL.</li>
<li> `AWS-S3`: An AWS S3 bucket address. Currently, this type is only supported for transcoding tasks.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The information of the COS object to process. This parameter is valid and required when `Type` is `COS`.
         * @type {CosInputInfo || null}
         */
        this.CosInputInfo = null;

        /**
         * The URL of the object to process. This parameter is valid and required when `Type` is `URL`.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {UrlInputInfo || null}
         */
        this.UrlInputInfo = null;

        /**
         * The information of the AWS S3 object processed. This parameter is required if `Type` is `AWS-S3`.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {S3InputInfo || null}
         */
        this.S3InputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosInputInfo) {
            let obj = new CosInputInfo();
            obj.deserialize(params.CosInputInfo)
            this.CosInputInfo = obj;
        }

        if (params.UrlInputInfo) {
            let obj = new UrlInputInfo();
            obj.deserialize(params.UrlInputInfo)
            this.UrlInputInfo = obj;
        }

        if (params.S3InputInfo) {
            let obj = new S3InputInfo();
            obj.deserialize(params.S3InputInfo)
            this.S3InputInfo = obj;
        }

    }
}

/**
 * CreateWorkflow request structure.
 * @class
 */
class CreateWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow name of up to 128 characters, which must be unique for the same user.
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * Triggering rule bound to a workflow. If an uploaded video hits the rule for the object, the workflow will be triggered.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * The location to save the output file of media processing. If this parameter is left empty, the storage location in `Trigger` will be inherited.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.
If you do not specify this, the file will be saved to the trigger directory.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * The media processing parameters to use.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Type parameter of a video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of a video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Event notification configuration for a task. If this parameter is left empty, no event notifications will be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Workflow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TaskPriority = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

    }
}

/**
 * Text keyword recognition control parameter.
 * @class
 */
class OcrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a text keyword recognition task. Valid values:
<li>ON: Enables a text keyword recognition task;</li>
<li>OFF: Disables a text keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * Custom watermark specifications.
 * @class
 */
class RawWatermarkParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark type. Valid values:
<li>image: image watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Origin position, which currently can only be:
<li>TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text.</li>
Default value: TopLeft.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermark template. This field is required when `Type` is `image` and is invalid when `Type` is `text`.
         * @type {RawImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new RawImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

    }
}

/**
 * The result of OCR-based detection of politically sensitive information.
 * @class
 */
class AiReviewTaskPoliticalOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input parameter for OCR-based detection of politically sensitive information.
         * @type {AiReviewPoliticalOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of OCR-based detection of politically sensitive information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewPoliticalOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ManageTask request structure.
 * @class
 */
class ManageTaskRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values:
<ul>
<li>Abort: task termination. Description:
<ul><li>If the [task type](https://intl.cloud.tencent.com/document/product/862/37614?from_cn_redirect=1#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) is live stream processing (`LiveStreamProcessTask`), tasks whose [task status](https://intl.cloud.tencent.com/document/product/862/37614?from_cn_redirect=1#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) is `WAITING` or `PROCESSING` can be terminated.</li>
<li>For other [task types](https://intl.cloud.tencent.com/document/product/862/37614?from_cn_redirect=1#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0), only tasks whose [task status](https://intl.cloud.tencent.com/document/product/862/37614?from_cn_redirect=1#3.-.E8.BE.93.E5.87.BA.E5.8F.82.E6.95.B0) is `WAITING` can be terminated.</li></ul>
</li></ul>
         * @type {string || null}
         */
        this.OperationType = null;

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.OperationType = 'OperationType' in params ? params.OperationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The parameters for detecting sensitive information based on OCR.
 * @class
 */
class PoliticalOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on OCR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * CreateImageSpriteTemplate request structure.
 * @class
 */
class CreateImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampling type. Valid values:
<li>Percent: By percent.</li>
<li>Time: By time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * Name of an image sprite generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subimage width of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Subimage height of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The image format. Valid values: jpg (default), png, webp.
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * Information of a time point screenshot
 * @class
 */
class MediaSnapshotByTimePicInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The timestamp (seconds) of the screenshot.
         * @type {number || null}
         */
        this.TimeOffset = null;

        /**
         * Path to the screenshot.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * List of watermarking template IDs if the screenshots are watermarked.
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TimeOffset = 'TimeOffset' in params ? params.TimeOffset : null;
        this.Path = 'Path' in params ? params.Path : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * Control parameter of a custom figure audit task
 * @class
 */
class UserDefineFaceReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom figure audit task. Valid values:
<li>ON: Enables a custom figure audit task;</li>
<li>OFF: Disables a custom figure audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom figure filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for the custom figure library.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Details of a content audit template
 * @class
 */
class ContentReviewTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a content audit template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a content audit template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of a content audit template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Porn information detection control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * The parameters for detecting sensitive information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * The parameters for detecting sensitive information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Custom content audit control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The template type. Valid values:
* Preset
* Custom
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DeleteAIRecognitionTemplate response structure.
 * @class
 */
class DeleteAIRecognitionTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Video enhancement configuration.
 * @class
 */
class VideoEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Frame interpolation configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FrameRateConfig || null}
         */
        this.FrameRate = null;

        /**
         * Super resolution configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SuperResolutionConfig || null}
         */
        this.SuperResolution = null;

        /**
         * HDR configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {HdrConfig || null}
         */
        this.Hdr = null;

        /**
         * Image noise removal configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VideoDenoiseConfig || null}
         */
        this.Denoise = null;

        /**
         * Overall enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ImageQualityEnhanceConfig || null}
         */
        this.ImageQualityEnhance = null;

        /**
         * Color enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ColorEnhanceConfig || null}
         */
        this.ColorEnhance = null;

        /**
         * Detail enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SharpEnhanceConfig || null}
         */
        this.SharpEnhance = null;

        /**
         * Face enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FaceEnhanceConfig || null}
         */
        this.FaceEnhance = null;

        /**
         * Low-light enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LowLightEnhanceConfig || null}
         */
        this.LowLightEnhance = null;

        /**
         * Banding removal configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScratchRepairConfig || null}
         */
        this.ScratchRepair = null;

        /**
         * Artifact removal (smoothing) configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ArtifactRepairConfig || null}
         */
        this.ArtifactRepair = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FrameRate) {
            let obj = new FrameRateConfig();
            obj.deserialize(params.FrameRate)
            this.FrameRate = obj;
        }

        if (params.SuperResolution) {
            let obj = new SuperResolutionConfig();
            obj.deserialize(params.SuperResolution)
            this.SuperResolution = obj;
        }

        if (params.Hdr) {
            let obj = new HdrConfig();
            obj.deserialize(params.Hdr)
            this.Hdr = obj;
        }

        if (params.Denoise) {
            let obj = new VideoDenoiseConfig();
            obj.deserialize(params.Denoise)
            this.Denoise = obj;
        }

        if (params.ImageQualityEnhance) {
            let obj = new ImageQualityEnhanceConfig();
            obj.deserialize(params.ImageQualityEnhance)
            this.ImageQualityEnhance = obj;
        }

        if (params.ColorEnhance) {
            let obj = new ColorEnhanceConfig();
            obj.deserialize(params.ColorEnhance)
            this.ColorEnhance = obj;
        }

        if (params.SharpEnhance) {
            let obj = new SharpEnhanceConfig();
            obj.deserialize(params.SharpEnhance)
            this.SharpEnhance = obj;
        }

        if (params.FaceEnhance) {
            let obj = new FaceEnhanceConfig();
            obj.deserialize(params.FaceEnhance)
            this.FaceEnhance = obj;
        }

        if (params.LowLightEnhance) {
            let obj = new LowLightEnhanceConfig();
            obj.deserialize(params.LowLightEnhance)
            this.LowLightEnhance = obj;
        }

        if (params.ScratchRepair) {
            let obj = new ScratchRepairConfig();
            obj.deserialize(params.ScratchRepair)
            this.ScratchRepair = obj;
        }

        if (params.ArtifactRepair) {
            let obj = new ArtifactRepairConfig();
            obj.deserialize(params.ArtifactRepair)
            this.ArtifactRepair = obj;
        }

    }
}

/**
 * DeleteContentReviewTemplate request structure.
 * @class
 */
class DeleteContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the content moderation template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The input parameters for the detection of politically sensitive information.
 * @class
 */
class AiReviewPoliticalTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * ModifySchedule request structure.
 * @class
 */
class ModifyScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * The scheme name.
         * @type {string || null}
         */
        this.ScheduleName = null;

        /**
         * The trigger of the scheme.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * The subtasks of the scheme.
Note: You need to pass in the full list of subtasks even if you want to change only some of the subtasks.
         * @type {Array.<Activity> || null}
         */
        this.Activities = null;

        /**
         * The bucket to save the output file.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The directory to save the media processing output file, which must start and end with `/`.
Note: If this parameter is left empty, the current `OutputDir` value will be invalidated.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * The notification configuration.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;
        this.ScheduleName = 'ScheduleName' in params ? params.ScheduleName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.Activities) {
            this.Activities = new Array();
            for (let z in params.Activities) {
                let obj = new Activity();
                obj.deserialize(params.Activities[z]);
                this.Activities.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

    }
}

/**
 * DescribePersonSamples request structure.
 * @class
 */
class DescribePersonSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of images to pull. Valid values:
<li>UserDefine: custom image library</li>
<li>Default: default image library</li>

Default value: UserDefine. Samples in the custom image library will be pulled.
Note: you can pull the default image library only using the image name or a combination of the image name and ID, and only one face image is returned.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Image ID. Array length limit: 100
         * @type {Array.<string> || null}
         */
        this.PersonIds = null;

        /**
         * Image name. Array length limit: 20
         * @type {Array.<string> || null}
         */
        this.Names = null;

        /**
         * Image tag. Array length limit: 20
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.PersonIds = 'PersonIds' in params ? params.PersonIds : null;
        this.Names = 'Names' in params ? params.Names : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Control parameter of intelligent categorization task
 * @class
 */
class ClassificationConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent categorization task. Valid values:
<li>ON: enables intelligent categorization task;</li>
<li>OFF: disables intelligent categorization task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Intelligent categorization result
 * @class
 */
class MediaAiAnalysisClassificationItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of intelligently generated category.
         * @type {string || null}
         */
        this.Classification = null;

        /**
         * Confidence of intelligently generated category between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Classification = 'Classification' in params ? params.Classification : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * ModifyWordSample response structure.
 * @class
 */
class ModifyWordSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Audio stream configuration parameter
 * @class
 */
class AudioTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio stream codec.
When the outer `Container` parameter is `mp3`, the valid value is:
<li>libmp3lame.</li>
When the outer `Container` parameter is `ogg` or `flac`, the valid value is:
<li>flac.</li>
When the outer `Container` parameter is `m4a`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame;</li>
<li>ac3.</li>
When the outer `Container` parameter is `mp4` or `flv`, the valid values include:
<li>libfdk_aac: More suitable for mp4;</li>
<li>libmp3lame: More suitable for flv;</li>
<li>mp2.</li>
When the outer `Container` parameter is `hls`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame.</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream bitrate in Kbps. Value range: 0 and [26, 256]. If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Audio stream sample rate. Valid values:
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audio channel system. Valid values:
<li>1: Mono</li>
<li>2: Dual</li>
<li>6: Stereo</li>
When the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.
         * @type {number || null}
         */
        this.AudioChannel = null;

        /**
         * The audio tracks to retain. All audio tracks are retained by default.
         * @type {Array.<number> || null}
         */
        this.StreamSelects = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;
        this.StreamSelects = 'StreamSelects' in params ? params.StreamSelects : null;

    }
}

/**
 * Super resolution configuration.
 * @class
 */
class SuperResolutionConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>lq: For low-resolution videos with obvious noise</li>
<li>hq: For high-resolution videos</li>
Default value: lq.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The ratio of the target resolution to the original resolution. Valid values:
<li>2</li>
Default value: 2.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;

    }
}

/**
 * DeletePersonSample request structure.
 * @class
 */
class DeletePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
         * @type {string || null}
         */
        this.PersonId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;

    }
}

/**
 * Speech recognition segment.
 * @class
 */
class AiRecognitionTaskAsrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of a recognition segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * ParseLiveStreamProcessNotification response structure.
 * @class
 */
class ParseLiveStreamProcessNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Result type of live stream processing. Valid values:
<li>AiReviewResult: Content audit result;</li>
<li>ProcessEof: Live stream processing has been completed.</li>
         * @type {string || null}
         */
        this.NotificationType = null;

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Information of a live stream processing error, which is valid when `NotificationType` is `ProcessEof`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LiveStreamProcessErrorInfo || null}
         */
        this.ProcessEofInfo = null;

        /**
         * Content audit result, which is valid when `NotificationType` is `AiReviewResult`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LiveStreamAiReviewResultInfo || null}
         */
        this.AiReviewResultInfo = null;

        /**
         * Content recognition result, which is valid if `NotificationType` is `AiRecognitionResult`.
         * @type {LiveStreamAiRecognitionResultInfo || null}
         */
        this.AiRecognitionResultInfo = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.NotificationType = 'NotificationType' in params ? params.NotificationType : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

        if (params.ProcessEofInfo) {
            let obj = new LiveStreamProcessErrorInfo();
            obj.deserialize(params.ProcessEofInfo)
            this.ProcessEofInfo = obj;
        }

        if (params.AiReviewResultInfo) {
            let obj = new LiveStreamAiReviewResultInfo();
            obj.deserialize(params.AiReviewResultInfo)
            this.AiReviewResultInfo = obj;
        }

        if (params.AiRecognitionResultInfo) {
            let obj = new LiveStreamAiRecognitionResultInfo();
            obj.deserialize(params.AiRecognitionResultInfo)
            this.AiRecognitionResultInfo = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input parameter type of video content recognition
 * @class
 */
class AiRecognitionTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The information of a video editing/compositing task.

The figure below outlines the relationships among tracks, elements, and the timeline.

![image](https://ie-mps-1258344699.cos.ap-nanjing.tencentcos.cn/common/cloud/EditMedia-Compose-Track-Item.png)
 * @class
 */
class ComposeMediaConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the output video.
         * @type {ComposeTargetInfo || null}
         */
        this.TargetInfo = null;

        /**
         * The canvas information of the output video.
         * @type {ComposeCanvas || null}
         */
        this.Canvas = null;

        /**
         * The global styles. This parameter is used together with `Tracks` to specify styles, such as the subtitle style.
         * @type {Array.<ComposeStyles> || null}
         */
        this.Styles = null;

        /**
         * The information of media tracks (consisting of video, audio, image, and text elements) used to composite the video. About tracks and the timeline:
<ul><li>The timeline of a track is the same as the timeline of the output video. </li><li>The elements of different tracks are overlaid at the same time point in the timeline.</li><ul><li>Video, image, and text elements are overlaid according to their track number, with the first track on top. </li><li>Audio elements are mixed. </li></ul></ul>Note: The different elements of the same track cannot be overlaid (except subtitles).
         * @type {Array.<ComposeMediaTrack> || null}
         */
        this.Tracks = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TargetInfo) {
            let obj = new ComposeTargetInfo();
            obj.deserialize(params.TargetInfo)
            this.TargetInfo = obj;
        }

        if (params.Canvas) {
            let obj = new ComposeCanvas();
            obj.deserialize(params.Canvas)
            this.Canvas = obj;
        }

        if (params.Styles) {
            this.Styles = new Array();
            for (let z in params.Styles) {
                let obj = new ComposeStyles();
                obj.deserialize(params.Styles[z]);
                this.Styles.push(obj);
            }
        }

        if (params.Tracks) {
            this.Tracks = new Array();
            for (let z in params.Tracks) {
                let obj = new ComposeMediaTrack();
                obj.deserialize(params.Tracks[z]);
                this.Tracks.push(obj);
            }
        }

    }
}

/**
 * ExecuteFunction response structure.
 * @class
 */
class ExecuteFunctionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Packed string, which will vary according to the custom API.
         * @type {string || null}
         */
        this.Result = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Result = 'Result' in params ? params.Result : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of intelligent cover generating task
 * @class
 */
class CoverConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent cover generating task. Valid values:
<li>ON: enables intelligent cover generating task;</li>
<li>OFF: disables intelligent cover generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Details of a video content recognition template
 * @class
 */
class AIRecognitionTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a video content recognition template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of a video content recognition template.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Face recognition control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * Full text recognition control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Text keyword recognition control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Full speech recognition control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Speech keyword recognition control parameter.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The template type. Valid values:
* Preset
* Custom
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Input parameter type of an ASR-based porn information detection in text task during content audit
 * @class
 */
class AiReviewPornAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a porn information detection template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Face recognition result.
 * @class
 */
class AiRecognitionTaskFaceResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of a face recognition task.
         * @type {AiRecognitionTaskFaceResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of a face recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskFaceResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskFaceResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskFaceResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitrate streaming format. Valid values:
<li>HLS,</li>
<li>MPEG-DASH.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Parameter information of output substreams for transcoding to adaptive bitrate streaming. Up to 10 substreams can be output.
Note: the frame rate of each substream must be consistent; otherwise, the frame rate of the first substream is used as the output frame rate.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Whether to prohibit transcoding from low bitrate to high bitrate. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
Default value: 0.
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * Whether to prohibit transcoding from low resolution to high resolution. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
Default value: 0.
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Format = 'Format' in params ? params.Format : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * The parameters for detecting sensitive information in images.
 * @class
 */
class TerrorismImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information in images. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The filter labels for sensitive information detection in images, which specify the types of sensitive information to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>guns</li>
<li>crowd</li>
<li>bloody</li>
<li>police</li>
<li>banners (sensitive flags)</li>
<li>militant</li>
<li>explosion</li>
<li>terrorists</li>
<li>scenario (sensitive scenes) </li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Output of full text recognition.
 * @class
 */
class AiRecognitionTaskOcrFullTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full text recognition result set.
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * The result of an intelligent highlight generation task.
 * @class
 */
class AiAnalysisTaskHighlightResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: `PROCESSING`, `SUCCESS`, `FAIL`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. `0`: The task succeeded; other values: The task failed.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the intelligent highlight generation task.
         * @type {AiAnalysisTaskHighlightInput || null}
         */
        this.Input = null;

        /**
         * The output of the intelligent highlight generation task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskHighlightOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskHighlightInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskHighlightOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DeleteAIAnalysisTemplate response structure.
 * @class
 */
class DeleteAIAnalysisTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Text watermarking template
 * @class
 */
class TextWatermarkTemplateInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Font type. Currently, two types are supported:
<li>simkai.ttf: Both Chinese and English are supported;</li>
<li>arial.ttf: Only English is supported.</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * Font size in Npx format where N is a numeric value.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * Font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * Text transparency. Value range: (0, 1]
<li>0: Completely transparent</li>
<li>1: Completely opaque</li>
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * The input parameter for OCR-based detection of sensitive information.
 * @class
 */
class AiReviewTerrorismOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input for text keyword recognition.
 * @class
 */
class AiRecognitionTaskOcrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteWorkflow response structure.
 * @class
 */
class DeleteWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The issues detected by quality control.
 * @class
 */
class QualityControlResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The issue type. Valid values:
`Jitter`
`Blur`
`LowLighting`
`HighLighting` (overexposure)
`CrashScreen` (video corruption)
`BlackWhiteEdge`
`SolidColorScreen` (blank screen)
`Noise`
`Mosaic` (pixelation)
`QRCode`
`AppletCode` (Weixin Mini Program code)
`BarCode`
`LowVoice`
`HighVoice`
`NoVoice`
`LowEvaluation` (low no-reference video quality score)
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The information of a checked segment in quality control.
         * @type {Array.<QualityControlItem> || null}
         */
        this.QualityControlItems = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.QualityControlItems) {
            this.QualityControlItems = new Array();
            for (let z in params.QualityControlItems) {
                let obj = new QualityControlItem();
                obj.deserialize(params.QualityControlItems[z]);
                this.QualityControlItems.push(obj);
            }
        }

    }
}

/**
 * Input parameter type of a porn information detection task during content audit
 * @class
 */
class AiReviewPornTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a porn detection template.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * HDR configuration.
 * @class
 */
class HdrConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>HDR10</li>
<li>HLG</li>
Default value: HDR10.
Note: The video codec must be `libx265`.
Note: The bit depth for video encoding is 10 bits.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The information of a scheme.
 * @class
 */
class ScheduleTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The scheme status. Valid values:
<li>PROCESSING</li>
<li>FINISH</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * If the value returned is not 0, there was a source error. If 0 is returned, refer to the error codes of the corresponding task type.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * If there was a source error, this parameter is the error message. For other errors, refer to the error messages of the corresponding task type.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The information of the file processed.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * The metadata of the source video.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * The output of the scheme.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<ActivityResult> || null}
         */
        this.ActivityResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.ActivityResultSet) {
            this.ActivityResultSet = new Array();
            for (let z in params.ActivityResultSet) {
                let obj = new ActivityResult();
                obj.deserialize(params.ActivityResultSet[z]);
                this.ActivityResultSet.push(obj);
            }
        }

    }
}

/**
 * CreatePersonSample request structure.
 * @class
 */
class CreatePersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of an image. Length limit: 20 characters
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Image usage. Valid values:
1. Recognition: used for content recognition; equivalent to `Recognition.Face`
2. Review: used for inappropriate information recognition; equivalent to `Review.Face`
3. All: equivalent to 1+2
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Image description. Length limit: 1,024 characters
         * @type {string || null}
         */
        this.Description = null;

        /**
         * [Base64](https://tools.ietf.org/html/rfc4648) string converted from an image. Only JPEG and PNG images are supported. Array length limit: 5 images
Note: the image must be a relatively clear facial feature photo of one person with a size of at least 200 x 200 pixels.
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

        /**
         * Image tag
<li>Array length limit: 20 tags</li>
<li>Tag length limit: 128 characters</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Information of intelligently generated cover
 * @class
 */
class MediaAiAnalysisCoverItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage path of intelligently generated cover.
         * @type {string || null}
         */
        this.CoverPath = null;

        /**
         * Confidence of intelligently generated cover between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoverPath = 'CoverPath' in params ? params.CoverPath : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * The information of the COS object to process.
 * @class
 */
class CosInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The COS bucket of the object to process, such as `TopRankVideo-125xxx88`.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The region of the COS bucket, such as `ap-chongqing`.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * The path of the object to process, such as `/movie/201907/WildAnimal.mov`.
         * @type {string || null}
         */
        this.Object = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Object = 'Object' in params ? params.Object : null;

    }
}

/**
 * CreateSchedule response structure.
 * @class
 */
class CreateScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of intelligent tagging task
 * @class
 */
class TagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent tagging task. Valid values:
<li>ON: enables intelligent tagging task;</li>
<li>OFF: disables intelligent tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Output of text keyword recognition.
 * @class
 */
class AiRecognitionTaskOcrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword recognition result set.
         * @type {Array.<AiRecognitionTaskOcrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskOcrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * AI-based sample management - face information.
 * @class
 */
class AiSampleFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Face image ID.
         * @type {string || null}
         */
        this.FaceId = null;

        /**
         * Face image address.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FaceId = 'FaceId' in params ? params.FaceId : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * The audio separation configuration.
 * @class
 */
class AudioSeparateConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>`ON`</li>
<li>`OFF` </li>
Default value: `ON`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The scenario. Valid values:
<li>`normal`: Separate voice and background audio.</li>
<li>`music`: Separate vocals and instrumentals.</li>
Default value: `normal`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The output audio track. Valid values:
<li>`vocal`: Voice.</li>
<li>`background`: Output background audio if the scenario is `normal`, and output instrumentals if the scenario is `music`.</li>
Default value: `vocal`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Track = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Track = 'Track' in params ? params.Track : null;

    }
}

/**
 * DeleteAIRecognitionTemplate request structure.
 * @class
 */
class DeleteAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Result type of intelligent cover generating task
 * @class
 */
class AiAnalysisTaskCoverResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent cover generating task.
         * @type {AiAnalysisTaskCoverInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent cover generating task.
         * @type {AiAnalysisTaskCoverOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskCoverInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskCoverOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The audio improvement configuration.
 * @class
 */
class AudioBeautifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>`ON`</li>
<li>`OFF` </li>
Default value: `ON`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The audio improvement options. You can specify multiple options. Valid values:
<li>`declick`: Noise removal.</li>
<li>`deesser`: De-essing.</li>
Default: `declick`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Types = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Types = 'Types' in params ? params.Types : null;

    }
}

/**
 * EnableWorkflow request structure.
 * @class
 */
class EnableWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * Result information of intelligent categorization
 * @class
 */
class AiAnalysisTaskClassificationOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated video categories.
         * @type {Array.<MediaAiAnalysisClassificationItem> || null}
         */
        this.ClassificationSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ClassificationSet) {
            this.ClassificationSet = new Array();
            for (let z in params.ClassificationSet) {
                let obj = new MediaAiAnalysisClassificationItem();
                obj.deserialize(params.ClassificationSet[z]);
                this.ClassificationSet.push(obj);
            }
        }

    }
}

/**
 * ModifyTranscodeTemplate request structure.
 * @class
 */
class ModifyTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Container format. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Name of a transcoding template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: Retain</li>
<li>1: Remove</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: Retain</li>
<li>1: Remove</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter.
         * @type {VideoTemplateInfoForUpdate || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter.
         * @type {AudioTemplateInfoForUpdate || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter. To enable it, please contact your Tencent Cloud sales rep.
         * @type {TEHDConfigForUpdate || null}
         */
        this.TEHDConfig = null;

        /**
         * Audio/Video enhancement settings.
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfoForUpdate();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfoForUpdate();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfigForUpdate();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
        }

    }
}

/**
 * Input of video editing task.
 * @class
 */
class EditMediaTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of input video file.
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfoSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileInfoSet) {
            this.FileInfoSet = new Array();
            for (let z in params.FileInfoSet) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfoSet[z]);
                this.FileInfoSet.push(obj);
            }
        }

    }
}

/**
 * The transition information of a video editing/compositing task.
 * @class
 */
class ComposeTransitionOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * The transition type.

The image transition, which connects two video segments.
<li>`ImageFadeInFadeOut` </li>
u200c<li>`BowTieHorizontal` </li>
u200c<li>`BowTieVertical` </li>
u200c<li>`ButterflyWaveScrawler` </li>
<li>`Cannabisleaf` </li>
<li>`Circle` </li>
<li>`CircleCrop` </li>
u200c<li>`Circleopen` </li>
<li>`Crosswarp` </li>
<li>`Cube` </li>
<li>`DoomScreenTransition` </li>
<li>`Doorway` </li>
<li>`Dreamy` </li>
<li>`DreamyZoom` </li>
<li>`FilmBurn` </li>
<li>`GlitchMemories` </li>
<li>`Heart` </li>
<li>`InvertedPageCurl` </li>
<li>`Luma` </li>
<li>`Mosaic` </li>
<li>`Pinwheel` </li>
<li>`PolarFunction` </li>
<li>`PolkaDotsCurtain` </li>
<li>`Radial` </li>
<li>`RotateScaleFade` </li>
<li>`Squeeze` </li>
<li>`Swap` </li>
<li>`Swirl` </li>
<li>`UndulatingBurnOutSwirl` </li>
<li>`Windowblinds` </li>
<li>`WipeDown` </li>
<li>`WipeLeft` </li>
<li>`WipeRight` </li>
<li>`WipeUp` </li>
<li>`ZoomInCircles` </li> 
The audio transition, which connects two audio segments.
<li>`AudioFadeInFadeOut` </li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Control parameter of a custom speech audit task
 * @class
 */
class UserDefineAsrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom speech audit task. Valid values:
<li>ON: Enables a custom speech audit task;</li>
<li>OFF: Disables a custom speech audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom speech filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom speech keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The time information of an element on the output video track of a video editing/compositing task.
 * @class
 */
class ComposeTrackTime extends  AbstractModel {
    constructor(){
        super();

        /**
         * The time when the element starts on the track.
<li>The value of this parameter ends with `s`, which means seconds. For example, `3.5s` indicates the time when 3.5 seconds of the video elapses.</li>
Note: If this parameter is not specified, the start time will be the end time of the previous element. Therefore, you can also use the placeholder parameter `ComposeEmptyItem` to configure the start time.
         * @type {string || null}
         */
        this.Start = null;

        /**
         * The element duration.
<li>The value of this parameter ends with `s`, which means seconds. For example, `3.5s` means 3.5 seconds.</li>
The default value is the material duration, which is determined by `EndTime` and `StartTime` of `ComposeSourceMedia`. If `ComposeSourceMedia` is not specified, the duration will be 1 second.
         * @type {string || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Start = 'Start' in params ? params.Start : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * Result information of intelligent frame-specific tagging
 * @class
 */
class AiAnalysisTaskFrameTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of frame-specific video tags.
         * @type {Array.<MediaAiAnalysisFrameTagSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaAiAnalysisFrameTagSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Result type of adaptive bitrate streaming task
 * @class
 */
class MediaProcessTaskAdaptiveDynamicStreamingResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of an adaptive bitrate streaming task.
         * @type {AdaptiveDynamicStreamingTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of an adaptive bitrate streaming task.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {AdaptiveDynamicStreamingInfoItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AdaptiveDynamicStreamingTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AdaptiveDynamicStreamingInfoItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Text keyword recognition control parameter.
 * @class
 */
class OcrWordsConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a text keyword recognition task. Valid values:
<li>ON: Enables a text keyword recognition task;</li>
<li>OFF: Disables a text keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * Details of a watermarking template
 * @class
 */
class WatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermark type. Valid values:
<li>image: Image watermark;</li>
<li>text: Text watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a watermarking template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Horizontal position of the origin of the watermark image relative to the origin of the video.
<li>If the string ends in %, the `Left` edge of the watermark will be at the position of the specified percentage of the video width; for example, `10%` means that the `Left` edge is at 10% of the video width;</li>
<li>If the string ends in px, the `Left` edge of the watermark will be at the position of the specified px of the video width; for example, `100px` means that the `Left` edge is at the position of 100 px.</li>
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * Vertical position of the origin of the watermark image relative to the origin of the video.
<li>If the string ends in %, the `Top` edge of the watermark will beat the position of the specified percentage of the video height; for example, `10%` means that the `Top` edge is at 10% of the video height;</li>
<li>If the string ends in px, the `Top` edge of the watermark will be at the position of the specified px of the video height; for example, `100px` means that the `Top` edge is at the position of 100 px.</li>
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is valid only when `Type` is `image`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ImageWatermarkTemplate || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is valid only when `Type` is `text`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is valid when `Type` is `svg`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Origin position. Valid values:
<li>topLeft: The origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>topRight: The origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>bottomLeft: The origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>bottomRight: The origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkTemplate();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;

    }
}

/**
 * A subtask of a scheme.
 * @class
 */
class ActivityPara extends  AbstractModel {
    constructor(){
        super();

        /**
         * A transcoding task.
         * @type {TranscodeTaskInput || null}
         */
        this.TranscodeTask = null;

        /**
         * An animated screenshot generation task.
         * @type {AnimatedGraphicTaskInput || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * A time point screencapturing task.
         * @type {SnapshotByTimeOffsetTaskInput || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * A sampled screencapturing task.
         * @type {SampleSnapshotTaskInput || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * An image sprite generation task.
         * @type {ImageSpriteTaskInput || null}
         */
        this.ImageSpriteTask = null;

        /**
         * An adaptive bitrate streaming task.
         * @type {AdaptiveDynamicStreamingTaskInput || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

        /**
         * A content moderation task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * A content analysis task.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * A content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeTask) {
            let obj = new TranscodeTaskInput();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new AnimatedGraphicTaskInput();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new SnapshotByTimeOffsetTaskInput();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new SampleSnapshotTaskInput();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new ImageSpriteTaskInput();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new AdaptiveDynamicStreamingTaskInput();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

    }
}

/**
 * Text watermarking template
 * @class
 */
class TextWatermarkTemplateInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Font type. Currently, two types are supported:
<li>simkai.ttf: Both Chinese and English are supported;</li>
<li>arial.ttf: Only English is supported.</li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * Font size in Npx format where N is a numeric value.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * Font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * Text transparency. Value range: (0, 1]
<li>0: Completely transparent</li>
<li>1: Completely opaque</li>
Default value: 1.
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * ModifyAIAnalysisTemplate response structure.
 * @class
 */
class ModifyAIAnalysisTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWordSamples response structure.
 * @class
 */
class DescribeWordSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Keyword information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiSampleWord> || null}
         */
        this.WordSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WordSet) {
            this.WordSet = new Array();
            for (let z in params.WordSet) {
                let obj = new AiSampleWord();
                obj.deserialize(params.WordSet[z]);
                this.WordSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIRecognitionTemplates response structure.
 * @class
 */
class DescribeAIRecognitionTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of video content recognition template details.
         * @type {Array.<AIRecognitionTemplateItem> || null}
         */
        this.AIRecognitionTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIRecognitionTemplateSet) {
            this.AIRecognitionTemplateSet = new Array();
            for (let z in params.AIRecognitionTemplateSet) {
                let obj = new AIRecognitionTemplateItem();
                obj.deserialize(params.AIRecognitionTemplateSet[z]);
                this.AIRecognitionTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Banding removal configuration.
 * @class
 */
class ScratchRepairConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Value range: 0.0-1.0
Default value: 0.0
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

    }
}

/**
 * Result of AI-based live stream audit
 * @class
 */
class LiveStreamAiReviewResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of content audit results.
         * @type {Array.<LiveStreamAiReviewResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiReviewResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * EditMedia response structure.
 * @class
 */
class EditMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video editing task ID, which can be used to query the status of an editing task.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The parameters for detecting sensitive information based on OCR.
 * @class
 */
class PoliticalOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on OCR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The noise reduction configuration.
 * @class
 */
class AudioDenoiseConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>`ON`</li>
<li>`OFF` </li>
Default value: `ON`.
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Control parameter of a porn information detection in speech task.
 * @class
 */
class PornAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in speech task. Valid values:
<li>ON: Enables a porn information detection in speech task;</li>
<li>OFF: Disables a porn information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates request structure.
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of time point screencapturing templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The result of a content recognition task of a scheme.
 * @class
 */
class ScheduleRecognitionTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task has failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. 0 indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of the content recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiRecognitionResult> || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

    }
}

/**
 * The output video information of a video editing/compositing task.
 * @class
 */
class ComposeTargetInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The container. Valid values:
<li>`mp4` (default), for video files. </li>
<li>`mp3`, for audio files. </li>
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Whether to remove video data. Valid values:
<li>`0` (default): No. </li>
<li>`1`: Yes. </li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>`0` (default): No. </li>
<li>`1`: Yes. </li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * The information of the output video stream.
         * @type {ComposeVideoStream || null}
         */
        this.VideoStream = null;

        /**
         * The information of the output audio stream.
         * @type {ComposeAudioStream || null}
         */
        this.AudioStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoStream) {
            let obj = new ComposeVideoStream();
            obj.deserialize(params.VideoStream)
            this.VideoStream = obj;
        }

        if (params.AudioStream) {
            let obj = new ComposeAudioStream();
            obj.deserialize(params.AudioStream)
            this.AudioStream = obj;
        }

    }
}

/**
 * The type of media processing task.
 * @class
 */
class MediaProcessTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of transcoding tasks.
         * @type {Array.<TranscodeTaskInput> || null}
         */
        this.TranscodeTaskSet = null;

        /**
         * List of animated image generating tasks.
         * @type {Array.<AnimatedGraphicTaskInput> || null}
         */
        this.AnimatedGraphicTaskSet = null;

        /**
         * List of time point screencapturing tasks.
         * @type {Array.<SnapshotByTimeOffsetTaskInput> || null}
         */
        this.SnapshotByTimeOffsetTaskSet = null;

        /**
         * List of sampled screencapturing tasks.
         * @type {Array.<SampleSnapshotTaskInput> || null}
         */
        this.SampleSnapshotTaskSet = null;

        /**
         * List of image sprite generating tasks.
         * @type {Array.<ImageSpriteTaskInput> || null}
         */
        this.ImageSpriteTaskSet = null;

        /**
         * List of adaptive bitrate streaming tasks.
         * @type {Array.<AdaptiveDynamicStreamingTaskInput> || null}
         */
        this.AdaptiveDynamicStreamingTaskSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeTaskSet) {
            this.TranscodeTaskSet = new Array();
            for (let z in params.TranscodeTaskSet) {
                let obj = new TranscodeTaskInput();
                obj.deserialize(params.TranscodeTaskSet[z]);
                this.TranscodeTaskSet.push(obj);
            }
        }

        if (params.AnimatedGraphicTaskSet) {
            this.AnimatedGraphicTaskSet = new Array();
            for (let z in params.AnimatedGraphicTaskSet) {
                let obj = new AnimatedGraphicTaskInput();
                obj.deserialize(params.AnimatedGraphicTaskSet[z]);
                this.AnimatedGraphicTaskSet.push(obj);
            }
        }

        if (params.SnapshotByTimeOffsetTaskSet) {
            this.SnapshotByTimeOffsetTaskSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTaskSet) {
                let obj = new SnapshotByTimeOffsetTaskInput();
                obj.deserialize(params.SnapshotByTimeOffsetTaskSet[z]);
                this.SnapshotByTimeOffsetTaskSet.push(obj);
            }
        }

        if (params.SampleSnapshotTaskSet) {
            this.SampleSnapshotTaskSet = new Array();
            for (let z in params.SampleSnapshotTaskSet) {
                let obj = new SampleSnapshotTaskInput();
                obj.deserialize(params.SampleSnapshotTaskSet[z]);
                this.SampleSnapshotTaskSet.push(obj);
            }
        }

        if (params.ImageSpriteTaskSet) {
            this.ImageSpriteTaskSet = new Array();
            for (let z in params.ImageSpriteTaskSet) {
                let obj = new ImageSpriteTaskInput();
                obj.deserialize(params.ImageSpriteTaskSet[z]);
                this.ImageSpriteTaskSet.push(obj);
            }
        }

        if (params.AdaptiveDynamicStreamingTaskSet) {
            this.AdaptiveDynamicStreamingTaskSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTaskSet) {
                let obj = new AdaptiveDynamicStreamingTaskInput();
                obj.deserialize(params.AdaptiveDynamicStreamingTaskSet[z]);
                this.AdaptiveDynamicStreamingTaskSet.push(obj);
            }
        }

    }
}

/**
 * DisableSchedule request structure.
 * @class
 */
class DisableScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

    }
}

/**
 * The information of the output COS object after media processing.
 * @class
 */
class CosOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The bucket to which the output file of media processing is saved, such as `TopRankVideo-125xxx88`. If this parameter is left empty, the value of the upper layer will be inherited.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * The region of the output bucket, such as `ap-chongqing`. If this parameter is left empty, the value of the upper layer will be inherited.
         * @type {string || null}
         */
        this.Region = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * Face recognition result segment
 * @class
 */
class AiRecognitionTaskFaceSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of a recognition segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of a recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * ProcessMedia response structure.
 * @class
 */
class ProcessMediaResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWordSamples response structure.
 * @class
 */
class CreateWordSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of intelligent categorization task
 * @class
 */
class ClassificationConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent categorization task. Valid values:
<li>ON: enables intelligent categorization task;</li>
<li>OFF: disables intelligent categorization task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateSchedule request structure.
 * @class
 */
class CreateScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme name (max 128 characters). This name should be unique across your account.
         * @type {string || null}
         */
        this.ScheduleName = null;

        /**
         * The trigger of the scheme. If a file is uploaded to the specified bucket, the scheme will be triggered.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * The subtasks of the scheme.
         * @type {Array.<Activity> || null}
         */
        this.Activities = null;

        /**
         * The bucket to save the output file. If you do not specify this parameter, the bucket in `Trigger` will be used.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.
If you do not specify this, the file will be saved to the trigger directory.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * The notification configuration. If you do not specify this parameter, notifications will not be sent.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleName = 'ScheduleName' in params ? params.ScheduleName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.Activities) {
            this.Activities = new Array();
            for (let z in params.Activities) {
                let obj = new Activity();
                obj.deserialize(params.Activities[z]);
                this.Activities.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

    }
}

/**
 * ParseNotification request structure.
 * @class
 */
class ParseNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Event notification obtained from CMQ.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * The input parameters of a live recording task.
 * @class
 */
class LiveRecordTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The live recording template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The storage of the recording file. If this parameter is left empty, the `OutputStorage` value of the parent folder will be inherited.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The output path of the recording file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

    }
}

/**
 * CreateWordSamples request structure.
 * @class
 */
class CreateWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
7. All: ASR- and OCR-based content recognition and inappropriate information detection; equivalent to 1+2+3+4
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Keyword. Array length limit: 100.
         * @type {Array.<AiSampleWordInfo> || null}
         */
        this.Words = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.Words) {
            this.Words = new Array();
            for (let z in params.Words) {
                let obj = new AiSampleWordInfo();
                obj.deserialize(params.Words[z]);
                this.Words.push(obj);
            }
        }

    }
}

/**
 * The parameters for detecting sensitive information based on ASR.
 * @class
 */
class PoliticalAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on ASR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * AI-based sample management - face data operation.
 * @class
 */
class AiSampleFaceOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values: add, delete, reset. The `reset` operation will clear the existing face data of a figure and add `FaceContents` as the specified face data.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Face ID set. This field is required when `Type` is `delete`.
         * @type {Array.<string> || null}
         */
        this.FaceIds = null;

        /**
         * String set generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) the face image.
<li>This field is required when `Type` is `add` or `reset`;</li>
<li>Array length limit: 5 images.</li>
Note: The image must be a relatively clear full-face photo of a figure in at least 200 * 200 px.
         * @type {Array.<string> || null}
         */
        this.FaceContents = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.FaceIds = 'FaceIds' in params ? params.FaceIds : null;
        this.FaceContents = 'FaceContents' in params ? params.FaceContents : null;

    }
}

/**
 * Input parameter of an SVG watermarking template
 * @class
 */
class SvgWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark width, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px; if `0px` is entered
 and `Height` is not `0px`, the watermark width will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark width will be the width of the source SVG image;</li>
<li>If the string ends in `W%`, the `Width` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Width` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Width` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Width` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Width` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Width` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Width` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `W%`.</li>
Default value: 10W%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height, which supports six formats of px, %, W%, H%, S%, and L%:
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px; if `0px` is entered
 and `Width` is not `0px`, the watermark height will be proportionally scaled based on the source SVG image; if `0px` is entered for both `Width` and `Height`, the watermark height will be the height of the source SVG image;</li>
<li>If the string ends in `W%`, the `Height` of the watermark will be the specified percentage of the video width; for example, `10W%` means that `Height` is 10% of the video width;</li>
<li>If the string ends in `H%`, the `Height` of the watermark will be the specified percentage of the video height; for example, `10H%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in `S%`, the `Height` of the watermark will be the specified percentage of the short side of the video; for example, `10S%` means that `Height` is 10% of the short side of the video;</li>
<li>If the string ends in `L%`, the `Height` of the watermark will be the specified percentage of the long side of the video; for example, `10L%` means that `Height` is 10% of the long side of the video;</li>
<li>If the string ends in %, the meaning is the same as `H%`.
Default value: 0 px.
         * @type {string || null}
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
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * The result of OCR-based detection of terrorism content.
 * @class
 */
class AiReviewTaskTerrorismOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0: success; other values: failure.
<li>40000: invalid input parameter. Please check it;</li>
<li>60000: invalid source file (e.g., video data is corrupted). Please check whether the source file is normal;</li>
<li>70000: internal service error. Please try again.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input parameter for OCR-based detection of terrorism content.
         * @type {AiReviewTerrorismOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of OCR-based detection of terrorism content.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTerrorismOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Text keyword recognition result.
 * @class
 */
class AiRecognitionTaskOcrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of a text keyword recognition task.
         * @type {AiRecognitionTaskOcrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of a text keyword recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Control parameter of a porn information detection in speech task
 * @class
 */
class PornAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in speech task. Valid values:
<li>ON: Enables a porn information detection in speech task;</li>
<li>OFF: Disables a porn information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The video stream information of a video edit/compositing task.
 * @class
 */
class ComposeVideoStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * The codec. Valid values:
<li>`H.264` (default) </li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * The video frame rate (Hz). Value range: 0–60.  
The default value is `0`, which means that the frame rate will be the same as that of the first video.
         * @type {number || null}
         */
        this.Fps = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;

    }
}

/**
 * Control parameter of prohibited information detection in speech task
 * @class
 */
class ProhibitedAsrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in speech task. Valid values:
<li>ON: enables prohibited information detection in speech task;</li>
<li>OFF: disables prohibited information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DisableSchedule response structure.
 * @class
 */
class DisableScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAnimatedGraphicsTemplate response structure.
 * @class
 */
class ModifyAnimatedGraphicsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of intelligent frame-specific tagging
 * @class
 */
class AiAnalysisTaskFrameTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent frame-specific tagging task.
         * @type {AiAnalysisTaskFrameTagInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent frame-specific tagging task.
         * @type {AiAnalysisTaskFrameTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskFrameTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskFrameTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Full text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Recognition segment result set.
         * @type {Array.<AiRecognitionTaskOcrFullTextSegmentTextItem> || null}
         */
        this.TextSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TextSet) {
            this.TextSet = new Array();
            for (let z in params.TextSet) {
                let obj = new AiRecognitionTaskOcrFullTextSegmentTextItem();
                obj.deserialize(params.TextSet[z]);
                this.TextSet.push(obj);
            }
        }

    }
}

/**
 * Configuration for output files of video editing
 * @class
 */
class EditMediaOutputConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The container. Valid values: `mp4` (default), `hls`, `mov`, `flv`, `avi`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * The clip mode. Valid values: `normal` (default), `fast`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The parameters for a video quality control task.
 * @class
 */
class AiQualityControlTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the quality control template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The channel extension parameter, which is a serialized JSON string.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ChannelExtPara = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ChannelExtPara = 'ChannelExtPara' in params ? params.ChannelExtPara : null;

    }
}

/**
 * ASR-detected porn information in text
 * @class
 */
class AiReviewPornAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of the ASR-detected porn information in text from 0 to 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for the ASR-detected porn information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the ASR-detected porn information in text.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * The transition element information of a video editing/compositing task.
 * @class
 */
class ComposeTransitionItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The element duration. <li>The value of this parameter ends with `s`, which means seconds. For example, `3s` indicates 3 seconds. </li>
Default value: `1s`.
Note
<li>The number before `s` must be an integer. Non-integers will be rounded down to the nearest integer. </li>
<li>The transition element must be between two non-empty elements. </li>
<li>The duration of the transition element must be shorter than that of the preceding element and the following element. </li>
u200c<li>The start time of the following element on the track will be automatically changed to the end time of the preceding element minus the duration of the transition element. </li>
         * @type {string || null}
         */
        this.Duration = null;

        /**
         * The transition effects.
The default transition effect is fade.
Note: You can add at most one image transition and one audio transition.
         * @type {Array.<ComposeTransitionOperation> || null}
         */
        this.Transitions = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.Transitions) {
            this.Transitions = new Array();
            for (let z in params.Transitions) {
                let obj = new ComposeTransitionOperation();
                obj.deserialize(params.Transitions[z]);
                this.Transitions.push(obj);
            }
        }

    }
}

/**
 * DeleteAIAnalysisTemplate request structure.
 * @class
 */
class DeleteAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * EditMedia request structure.
 * @class
 */
class EditMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information of input video file.
         * @type {Array.<EditMediaFileInfo> || null}
         */
        this.FileInfos = null;

        /**
         * The storage location of the media processing output file.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The path to save the media processing output file.

Note: For complex compositing tasks, the filename can be up to 64 characters long and can only contain digits, letters, and special characters -_

         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * The output settings for a video clipping task.
         * @type {EditMediaOutputConfig || null}
         */
        this.OutputConfig = null;

        /**
         * The settings for a video compositing task.

Note: If this parameter is not empty, the task is a video compositing task. Otherwise, the task is a video clipping task.
         * @type {ComposeMediaConfig || null}
         */
        this.ComposeConfig = null;

        /**
         * Event notification information of task. If this parameter is left empty, no event notifications will be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Task priority. The higher the value, the higher the priority. Value range: -10–10. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FileInfos) {
            this.FileInfos = new Array();
            for (let z in params.FileInfos) {
                let obj = new EditMediaFileInfo();
                obj.deserialize(params.FileInfos[z]);
                this.FileInfos.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.OutputConfig) {
            let obj = new EditMediaOutputConfig();
            obj.deserialize(params.OutputConfig)
            this.OutputConfig = obj;
        }

        if (params.ComposeConfig) {
            let obj = new ComposeMediaConfig();
            obj.deserialize(params.ComposeConfig)
            this.ComposeConfig = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

    }
}

/**
 * The AWS S3 storage information of a source file.
 * @class
 */
class S3InputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The AWS S3 bucket.
         * @type {string || null}
         */
        this.S3Bucket = null;

        /**
         * The region of the AWS S3 bucket.
         * @type {string || null}
         */
        this.S3Region = null;

        /**
         * The path of the AWS S3 object.
         * @type {string || null}
         */
        this.S3Object = null;

        /**
         * The key ID required to access the AWS S3 object.
         * @type {string || null}
         */
        this.S3SecretId = null;

        /**
         * The key required to access the AWS S3 object.
         * @type {string || null}
         */
        this.S3SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.S3Bucket = 'S3Bucket' in params ? params.S3Bucket : null;
        this.S3Region = 'S3Region' in params ? params.S3Region : null;
        this.S3Object = 'S3Object' in params ? params.S3Object : null;
        this.S3SecretId = 'S3SecretId' in params ? params.S3SecretId : null;
        this.S3SecretKey = 'S3SecretKey' in params ? params.S3SecretKey : null;

    }
}

/**
 * Result type of an image sprite generating task
 * @class
 */
class MediaProcessTaskImageSpriteResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for an image sprite generating task.
         * @type {ImageSpriteTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of an image sprite generating task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaImageSpriteItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new ImageSpriteTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaImageSpriteItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates response structure.
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of adaptive bitrate streaming template details.
         * @type {Array.<AdaptiveDynamicStreamingTemplate> || null}
         */
        this.AdaptiveDynamicStreamingTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AdaptiveDynamicStreamingTemplateSet) {
            this.AdaptiveDynamicStreamingTemplateSet = new Array();
            for (let z in params.AdaptiveDynamicStreamingTemplateSet) {
                let obj = new AdaptiveDynamicStreamingTemplate();
                obj.deserialize(params.AdaptiveDynamicStreamingTemplateSet[z]);
                this.AdaptiveDynamicStreamingTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Suspected segment identified during OCR-based text audit during content audit
 * @class
 */
class MediaContentReviewOcrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of a suspected segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for suspected segment audit. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of suspected keywords.
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

        /**
         * Zone coordinates (at the pixel level) of suspected text: [x1, y1, x2, y2], i.e., the coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * URL of a suspected image (which will not be permanently stored
and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * The URL of the object to process.
 * @class
 */
class UrlInputInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * URL of a video.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * DescribeAdaptiveDynamicStreamingTemplates request structure.
 * @class
 */
class DescribeAdaptiveDynamicStreamingTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of adaptive bitrate streaming templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: preset template;</li>
<li>Custom: custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Input parameter of an image watermarking template
 * @class
 */
class ImageWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * String generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) a watermark image. JPEG and PNG images are supported.
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width. For example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in pixels. For example, `100px` means that `Width` is 100 pixels. Value range: [8, 4096].</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height. For example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in pixels. For example, `100px` means that `Height` is 100 pixels. Value range: 0 or [8, 4096].</li>
Default value: 0px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

    }
}

/**
 * The live recording result.
 * @class
 */
class LiveRecordResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The storage of the recording file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The recording segments.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<LiveRecordFile> || null}
         */
        this.FileList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

        if (params.FileList) {
            this.FileList = new Array();
            for (let z in params.FileList) {
                let obj = new LiveRecordFile();
                obj.deserialize(params.FileList[z]);
                this.FileList.push(obj);
            }
        }

    }
}

/**
 * Control parameter of a full speech recognition task.
 * @class
 */
class AsrFullTextConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a full speech recognition task. Valid values:
<li>ON: Enables an intelligent full speech recognition task;</li>
<li>OFF: Disables an intelligent full speech recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Format of the generated subtitles file. If an empty string is entered, no subtitles files will be generated. Valid value:
<li>vtt: Generates a WebVTT subtitles file.</li>
         * @type {string || null}
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * The information of a live recording file.
 * @class
 */
class LiveRecordFile extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the recording file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The size of the recording file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * The duration of the recording file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * The recording start time in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The recording end time in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * The material source of a video editing/compositing task.
 * @class
 */
class ComposeSourceMedia extends  AbstractModel {
    constructor(){
        super();

        /**
         * The material ID, which can be found in `FileInfos`.
         * @type {string || null}
         */
        this.FileId = null;

        /**
         * The start time of the material. The following two formats are supported.
<li>If the value of this parameter ends with `s`, it specifies the time in seconds. For example, `3.5s` indicates the time when 3.5 seconds of the material elapses.</li>
u200c<li>If the value of this parameter ends with `%`, it specifies the time as a percentage of the material's duration. For example, `10%` indicates the time when 10% of the material's duration elapses. </li>
Default value: `0s`.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * The end time of the material. This parameter and `StartTime` determine which time segment of the material is used. The following two formats are supported:
<li>If the value of this parameter ends with `s`, it specifies the time in seconds. For example, `3.5s` indicates the time when 3.5 seconds of the material elapses.</li>
u200c<li>If the value of this parameter ends with `%`, it specifies the time as a percentage of the material's duration. For example, `10%` indicates the time when 10% of the material's duration elapses. </li>
If the track duration is set, the default value is `StartTime` plus the track duration. If not, the default value is `StartTime` plus 1 second.
Note: `EndTime` must be at least 0.02 seconds later than `StartTime`.

         * @type {string || null}
         */
        this.EndTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileId = 'FileId' in params ? params.FileId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * CreatePersonSample response structure.
 * @class
 */
class CreatePersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image information
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * Information of images that failed the verification by facial feature positioning
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateContentReviewTemplate response structure.
 * @class
 */
class CreateContentReviewTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the content moderation template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of prohibited information detection task
 * @class
 */
class ProhibitedConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of prohibited information detection in speech.
         * @type {ProhibitedAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of prohibited information detection in text.
         * @type {ProhibitedOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The placeholder element information of a video editing/compositing task.
 * @class
 */
class ComposeEmptyItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The element duration.
<li>The value of this parameter ends with `s`, which means seconds. For example, `3.5s` indicates 3.5 seconds. </li>
         * @type {string || null}
         */
        this.Duration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;

    }
}

/**
 * Control parameter of intelligent tagging task
 * @class
 */
class TagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent tagging task. Valid values:
<li>ON: enables intelligent tagging task;</li>
<li>OFF: disables intelligent tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DeleteWordSamples request structure.
 * @class
 */
class DeleteWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Array length limit: 100 words.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;

    }
}

/**
 * EnableSchedule request structure.
 * @class
 */
class EnableScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

    }
}

/**
 * Specifications for custom transcoding
 * @class
 */
class RawTranscodeParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * Container. Valid values: mp4; flv; hls; mp3; flac; ogg; m4a. Among them, mp3, flac, ogg, and m4a are for audio files.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: retain;</li>
<li>1: remove.</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: retain;</li>
<li>1: remove.</li>
Default value: 0.
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter. This field is required when `RemoveVideo` is 0.
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter. This field is required when `RemoveAudio` is 0.
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter.
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Container = 'Container' in params ? params.Container : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }

    }
}

/**
 * Event notification configuration of a task.
 * @class
 */
class LiveStreamTaskNotifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * CMQ model. There are two types: `Queue` and `Topic`. Currently, only `Queue` is supported.
         * @type {string || null}
         */
        this.CmqModel = null;

        /**
         * CMQ region, such as `sh` and `bj`.
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * This parameter is valid when the model is `Queue`, indicating the name of the CMQ queue for receiving event notifications.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * This parameter is valid when the model is `Topic`, indicating the name of the CMQ topic for receiving event notifications.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The notification type, `CMQ` by default. If this parameter is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`.

<font color="red">Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.</font>
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * HTTP callback URL, required if `NotifyType` is set to `URL`
         * @type {string || null}
         */
        this.NotifyUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;

    }
}

/**
 * Video stream configuration parameter
 * @class
 */
class VideoTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video codec. Valid values:
<li>`libx264`: H.264</li>
<li>`libx265`: H.265</li>
<li>`av1`: AOMedia Video 1</li>
Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.
Note: You can only use the AOMedia Video 1 codec for MP4 files.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * The video frame rate (Hz). Value range: [0, 100].
If the value is 0, the frame rate will be the same as that of the source video.
Note: For adaptive bitrate streaming, the value range of this parameter is [0, 60].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * The video bitrate (Kbps). Value range: 0 and [128, 35000].
If the value is 0, the bitrate of the video will be the same as that of the source video.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Resolution adaption. Valid values:
<li>open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side.</li>
<li>close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.</li>
Default value: open.
Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame interval between I keyframes. Value range: 0 and [1,100000].
If this parameter is 0 or left empty, the system will automatically set the GOP length.
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * The fill mode, which indicates how a video is resized when the video’s original aspect ratio is different from the target aspect ratio. Valid values:
<li>stretch: Stretch the image frame by frame to fill the entire screen. The video image may become "squashed" or "stretched" after transcoding.</li>
<li>black: Keep the image's original aspect ratio and fill the blank space with black bars.</li>
<li>white: Keep the image’s original aspect ratio and fill the blank space with white bars.</li>
<li>gauss: Keep the image’s original aspect ratio and apply Gaussian blur to the blank space.</li>
Default value: black.
Note: Only `stretch` and `black` are supported for adaptive bitrate streaming.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * The control factor of video constant bitrate. Value range: [1, 51]
If this parameter is specified, CRF (a bitrate control method) will be used for transcoding. (Video bitrate will no longer take effect.)
It is not recommended to specify this parameter if there are no special requirements.
         * @type {number || null}
         */
        this.Vcrf = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;

    }
}

/**
 * The subtitle style of a video editing/compositing task.
 * @class
 */
class ComposeSubtitleStyle extends  AbstractModel {
    constructor(){
        super();

        /**
         * The subtitle height. Two formats are supported:
u200c<li>If the value ends with %, it specifies the height as a percentage of the canvas height. For example, `10%` means that the height is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the height in pixels. For example, `100px` means that the height is 100 pixels. </li>
The default value is the value of `FontSize`.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * The bottom margin. Two formats are supported:
u200c<li>If the value ends with %, it specifies the margin as a percentage of the canvas height. For example, `10%` means that the margin is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the margin in pixels. For example, `100px` means that the margin is 100 pixels. </li>
Default value: `0px`.
         * @type {string || null}
         */
        this.MarginBottom = null;

        /**
         * The font type. Valid values:
<li>`SimHei`(default): Chinese font Heiti. </li>
<Li>`SimSun`: Chinese font Songti. </li>
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * The font size. Two formats are supported:
u200c<li>If the value ends with %, it specifies the size as a percentage of the canvas height. For example, `10%` means that the size is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the size in pixels. For example, `100px` means that the size is 100 pixels. </li>
Default value: `2%`.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * Whether to bold the text (some fonts may not support bold). Valid values:
<li>`0` (default): No. </li>
<li>`1`: Yes. </li>
         * @type {number || null}
         */
        this.FontBold = null;

        /**
         * Whether to italicize the text (some fonts may not support italics). Valid values:
<li>`0` (default): No. </li>
<li>`1`: Yes. </li>
         * @type {number || null}
         */
        this.FontItalic = null;

        /**
         * The font color (#RRGGBBAA).  
Default value: `0x000000FF` (black).  
Note: `AA` in the color notation defines the opacity of the color. It's optional.

         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * The text alignment. Valid values:
<li>`Center`(default) </li>
<li>`Left` </li>
<li>`Right` </li>
         * @type {string || null}
         */
        this.FontAlign = null;

        /**
         * The margin for left/right align.
<li>If `FontAlign` is `Left`, this parameter specifies the left margin of the subtitles. </li>
<li>If `FontAlign` is `Right`, this parameter specifies the right margin of the subtitles. </li>
Two formats are supported:
u200c<li>If the value ends with %, it specifies the margin as a percentage of the canvas width. For example, `10%` means that the margin is 10% of the canvas width. </li>
u200c<li>If the value ends with px, it specifies the margin in pixels. For example, `100px` means that the margin is 100 pixels. </li>
         * @type {string || null}
         */
        this.FontAlignMargin = null;

        /**
         * The subtitle border width. Two formats are supported:
u200c<li>If the value ends with %, it specifies the width as a percentage of the canvas height. For example, `10%` means that the width is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the width in pixels. For example, `100px` means that the width is 100 pixels. </li>
The default value is `0`, which means the subtitles will have no borders.
         * @type {string || null}
         */
        this.BorderWidth = null;

        /**
         * The border color, whose format is the same as that for `FontColor`. This parameter is valid if `BorderWidth` is not `0`.
         * @type {string || null}
         */
        this.BorderColor = null;

        /**
         * The text background color, whose format is the same as that for `FontColor`.  
The default value is an empty string, which means the subtitles will not have a background color.
         * @type {string || null}
         */
        this.BottomColor = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Height = 'Height' in params ? params.Height : null;
        this.MarginBottom = 'MarginBottom' in params ? params.MarginBottom : null;
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontBold = 'FontBold' in params ? params.FontBold : null;
        this.FontItalic = 'FontItalic' in params ? params.FontItalic : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlign = 'FontAlign' in params ? params.FontAlign : null;
        this.FontAlignMargin = 'FontAlignMargin' in params ? params.FontAlignMargin : null;
        this.BorderWidth = 'BorderWidth' in params ? params.BorderWidth : null;
        this.BorderColor = 'BorderColor' in params ? params.BorderColor : null;
        this.BottomColor = 'BottomColor' in params ? params.BottomColor : null;

    }
}

/**
 * Control parameter of a porn information detection in text task.
 * @class
 */
class PornOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in text task. Valid values:
<li>ON: Enables a porn information detection in text task;</li>
<li>OFF: Disables a porn information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Result type of an OCR-based porn information detection in text task during content audit
 * @class
 */
class AiReviewTaskPornOcrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for an OCR-based porn information detection in text task during content audit.
         * @type {AiReviewPornOcrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of an OCR-based porn information detection in text task during content audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornOcrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornOcrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornOcrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyContentReviewTemplate response structure.
 * @class
 */
class ModifyContentReviewTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeWatermarkTemplates request structure.
 * @class
 */
class DescribeWatermarkTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of watermarking templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Watermark type filter. Valid values:
<li>image: Image watermark;</li>
<li>text: Text watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries
<li>Default value: 10;</li>
<li>Maximum value: 100.</li>
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * The information of the media processing output object.
 * @class
 */
class TaskOutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The storage type for a media processing output file. Valid values:
<li>`COS`: Tencent Cloud COS</li>
<li>`>AWS-S3`: AWS S3. This type is only supported for AWS tasks, and the output bucket must be in the same region as the bucket of the source file.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The location to save the output object in COS. This parameter is valid and required when `Type` is COS.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {CosOutputStorage || null}
         */
        this.CosOutputStorage = null;

        /**
         * The AWS S3 bucket to save the output file. This parameter is required if `Type` is `AWS-S3`.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {S3OutputStorage || null}
         */
        this.S3OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosOutputStorage) {
            let obj = new CosOutputStorage();
            obj.deserialize(params.CosOutputStorage)
            this.CosOutputStorage = obj;
        }

        if (params.S3OutputStorage) {
            let obj = new S3OutputStorage();
            obj.deserialize(params.S3OutputStorage)
            this.S3OutputStorage = obj;
        }

    }
}

/**
 * ModifyAIAnalysisTemplate request structure.
 * @class
 */
class ModifyAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Video content analysis template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video content analysis template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
         * @type {ClassificationConfigureInfoForUpdate || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
         * @type {TagConfigureInfoForUpdate || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
         * @type {CoverConfigureInfoForUpdate || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
         * @type {FrameTagConfigureInfoForUpdate || null}
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfoForUpdate();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfoForUpdate();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfoForUpdate();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfoForUpdate();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * Control parameter of a custom audit task
 * @class
 */
class UserDefineConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of custom figure audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineFaceReviewTemplateInfo || null}
         */
        this.FaceReviewInfo = null;

        /**
         * Control parameter of custom speech audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineAsrTextReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of custom text audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {UserDefineOcrTextReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfo();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Color enhancement configuration.
 * @class
 */
class ColorEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>weak</li>
<li>normal</li>
<li>strong</li>
Default value: weak.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The audio element information of a video editing/compositing task.
 * @class
 */
class ComposeAudioItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The media information of the element.
         * @type {ComposeSourceMedia || null}
         */
        this.SourceMedia = null;

        /**
         * The time of the element in the timeline. If this is not specified, the element will follow the previous element.
         * @type {ComposeTrackTime || null}
         */
        this.TrackTime = null;

        /**
         * The operations performed, such as muting.
         * @type {Array.<ComposeAudioOperation> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceMedia) {
            let obj = new ComposeSourceMedia();
            obj.deserialize(params.SourceMedia)
            this.SourceMedia = obj;
        }

        if (params.TrackTime) {
            let obj = new ComposeTrackTime();
            obj.deserialize(params.TrackTime)
            this.TrackTime = obj;
        }

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new ComposeAudioOperation();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

    }
}

/**
 * Input parameter type of an OCR-based porn information detection in text task during content audit
 * @class
 */
class AiReviewPornOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a porn information detection template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The information of a live scheme subtask.
 * @class
 */
class LiveScheduleTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of a live scheme subtask.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * The task status. Valid values:
<li>`PROCESSING`</li>
<li>`FINISH` </li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * If the value returned is not `0`, there was a source error. If `0` is returned, refer to the error codes of the corresponding task type.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * If there was a source error, this parameter is the error message. For other errors, refer to the error messages of the corresponding task type.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The URL of the live stream.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The task output.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<LiveActivityResult> || null}
         */
        this.LiveActivityResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Url = 'Url' in params ? params.Url : null;

        if (params.LiveActivityResultSet) {
            this.LiveActivityResultSet = new Array();
            for (let z in params.LiveActivityResultSet) {
                let obj = new LiveActivityResult();
                obj.deserialize(params.LiveActivityResultSet[z]);
                this.LiveActivityResultSet.push(obj);
            }
        }

    }
}

/**
 * Information of the time point screenshots in a VOD file
 * @class
 */
class MediaSnapshotByTimeOffsetItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Specification of a time point screenshot. For more information, please see [Parameter Template for Time Point Screencapturing](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E6.97.B6.E9.97.B4.E7.82.B9.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Information set of screenshots of the same specification. Each element represents a screenshot.
         * @type {Array.<MediaSnapshotByTimePicInfoItem> || null}
         */
        this.PicInfoSet = null;

        /**
         * Location of a time point screenshot file.
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.PicInfoSet) {
            this.PicInfoSet = new Array();
            for (let z in params.PicInfoSet) {
                let obj = new MediaSnapshotByTimePicInfoItem();
                obj.deserialize(params.PicInfoSet[z]);
                this.PicInfoSet.push(obj);
            }
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate request structure.
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Adaptive bitrate streaming format. Valid values:
<li>HLS,</li>
<li>MPEG-DASH.</li>
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Whether to prohibit transcoding from low bitrate to high bitrate. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoBitrate = null;

        /**
         * Whether to prohibit transcoding from low resolution to high resolution. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.DisableHigherVideoResolution = null;

        /**
         * Parameter information of input streams for transcoding to adaptive bitrate streaming. Up to 10 streams can be input.
Note: the frame rate of each stream must be consistent; otherwise, the frame rate of the first stream is used as the output frame rate.
         * @type {Array.<AdaptiveStreamTemplate> || null}
         */
        this.StreamInfos = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.DisableHigherVideoBitrate = 'DisableHigherVideoBitrate' in params ? params.DisableHigherVideoBitrate : null;
        this.DisableHigherVideoResolution = 'DisableHigherVideoResolution' in params ? params.DisableHigherVideoResolution : null;

        if (params.StreamInfos) {
            this.StreamInfos = new Array();
            for (let z in params.StreamInfos) {
                let obj = new AdaptiveStreamTemplate();
                obj.deserialize(params.StreamInfos[z]);
                this.StreamInfos.push(obj);
            }
        }
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * Result information of an animated image generating task
 * @class
 */
class MediaAnimatedGraphicsItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Storage location of a generated animated image file.
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

        /**
         * Path to a generated animated image file.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * ID of an animated image generating template. For more information, please see [Animated Image Generating Parameter Template](https://intl.cloud.tencent.com/document/product/266/33481?from_cn_redirect=1#.E8.BD.AC.E5.8A.A8.E5.9B.BE.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Animated image format, such as gif.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Height of an animated image in px.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Width of an animated image in px.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Bitrate of an animated image in bps.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Size of an animated image in bytes.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * MD5 value of an animated image.
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Start time offset of an animated image in the video in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of an animated image in the video in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * ModifyWordSample request structure.
 * @class
 */
class ModifyWordSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Length limit: 128 characters.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
7. All: equivalent to 1+2+3+4
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Tag operation information.
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * Result type of an animated image generating task
 * @class
 */
class MediaProcessTaskAnimatedGraphicResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for an animated image generating task.
         * @type {AnimatedGraphicTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of an animated image generating task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaAnimatedGraphicsItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AnimatedGraphicTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaAnimatedGraphicsItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result type of intelligent tagging task
 * @class
 */
class AiAnalysisTaskTagResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent tagging task.
         * @type {AiAnalysisTaskTagInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent tagging task.
         * @type {AiAnalysisTaskTagOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskTagInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskTagOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result information of intelligent tagging
 * @class
 */
class AiAnalysisTaskTagOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of intelligently generated video tags.
         * @type {Array.<MediaAiAnalysisTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * The output of an intelligent highlight generation task.
 * @class
 */
class AiAnalysisTaskHighlightOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * A list of the highlight segments generated.
         * @type {Array.<MediaAiAnalysisHighlightItem> || null}
         */
        this.HighlightSet = null;

        /**
         * The storage location of the highlight segments.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HighlightSet) {
            this.HighlightSet = new Array();
            for (let z in params.HighlightSet) {
                let obj = new MediaAiAnalysisHighlightItem();
                obj.deserialize(params.HighlightSet[z]);
                this.HighlightSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * ProcessMedia request structure.
 * @class
 */
class ProcessMediaRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The information of the file to process.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * The storage location of the media processing output file. If this parameter is left empty, the storage location in `InputInfo` will be inherited.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The directory to save the media processing output file, which must start and end with `/`, such as `/movie/201907/`.
If you do not specify this parameter, the file will be saved to the directory specified in `InputInfo`.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * The scheme ID.
Note 1: About `OutputStorage` and `OutputDir`
<li>If an output storage and directory are specified for a subtask of the scheme, those output settings will be applied.</li>
<li>If an output storage and directory are not specified for the subtasks of a scheme, the output parameters passed in the `ProcessMedia` API will be applied.</li>
Note 2: If `TaskNotifyConfig` is specified, the specified settings will be used instead of the default callback settings of the scheme.

Note 3: The trigger configured for a scheme is for automatically starting a scheme. It stops working when you manually call this API to start a scheme.
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * The media processing parameters to use.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Type parameter of a video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of a video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * The parameters of a quality control task.
         * @type {AiQualityControlTaskInput || null}
         */
        this.AiQualityControlTask = null;

        /**
         * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Task flow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last three days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The task type.
<li> `Online` (default): A task that is executed immediately.</li>
<li> `Offline`: A task that is executed when the system is idle (within three days by default).</li>
         * @type {string || null}
         */
        this.TaskType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.AiQualityControlTask) {
            let obj = new AiQualityControlTaskInput();
            obj.deserialize(params.AiQualityControlTask)
            this.AiQualityControlTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;

    }
}

/**
 * Full text recognition result.
 * @class
 */
class AiRecognitionTaskOcrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of a full text recognition task.
         * @type {AiRecognitionTaskOcrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of a full text recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskOcrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskOcrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The video element information of a video editing/compositing task.
 * @class
 */
class ComposeVideoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The media information of the element.
         * @type {ComposeSourceMedia || null}
         */
        this.SourceMedia = null;

        /**
         * The time of the element in the timeline. If this is not specified, the element will follow the previous element.
         * @type {ComposeTrackTime || null}
         */
        this.TrackTime = null;

        /**
         * The horizontal distance of the element's center from the canvas origin. Two formats are supported:
<li>If the value ends with %, it specifies the distance as a percentage of the canvas width. For example, `10%` means that the distance is 10% of the canvas width. </li>
u200c<li>If the value ends with px, it specifies the distance in pixels. For example, `100px` means that the distance is 100 pixels. </li>
Default value: `50%`.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical distance of the element's center from the canvas origin. Two formats are supported:
u200c<li>If the value ends with %, it specifies the distance as a percentage of the canvas height. For example, `10%` means that the distance is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the distance in pixels. For example, `100px` means that the distance is 100 pixels. </li>
Default value: `50%`.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * The width of the video segment. Two formats are supported:
u200c<li>If the value ends with %, it specifies the width as a percentage of the canvas width. For example, `10%` means that the video width is 10% of the canvas width. </li>
u200c<li>If the value ends with px, it specifies the width in pixels. For example, `100px` means that the video width is 100 pixels. </li>
If one or both parameters are empty or set to `0`:
<li>If both `Width` and `Height` are empty, the original width and height of the element will be kept. </li>
<li>If `Width` is empty and `Height` is not, the width will be auto scaled. </li>
<li>If `Width` is not empty and `Height` is, the height will be auto scaled. </li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * The height of the element. Two formats are supported:
u200c<li>If the value ends with %, it specifies the height as a percentage of the canvas height. For example, `10%` means that the height is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the height in pixels. For example, `100px` means that the height is 100 pixels. </li>
If one or both parameters are empty or set to `0`:
<li>If both `Width` and `Height` are empty, the original width and height of the element will be kept. </li>
<li>If `Width` is empty and `Height` is not, the width will be auto scaled. </li>
<li>If `Width` is not empty and `Height` is, the height will be auto scaled. </li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * The image operations, such as image rotation.
         * @type {Array.<ComposeImageOperation> || null}
         */
        this.ImageOperations = null;

        /**
         * The audio operations, such as muting.
         * @type {Array.<ComposeAudioOperation> || null}
         */
        this.AudioOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceMedia) {
            let obj = new ComposeSourceMedia();
            obj.deserialize(params.SourceMedia)
            this.SourceMedia = obj;
        }

        if (params.TrackTime) {
            let obj = new ComposeTrackTime();
            obj.deserialize(params.TrackTime)
            this.TrackTime = obj;
        }
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ComposeImageOperation();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

        if (params.AudioOperations) {
            this.AudioOperations = new Array();
            for (let z in params.AudioOperations) {
                let obj = new ComposeAudioOperation();
                obj.deserialize(params.AudioOperations[z]);
                this.AudioOperations.push(obj);
            }
        }

    }
}

/**
 * Result type of a time point screencapturing task
 * @class
 */
class MediaProcessTaskSnapshotByTimeOffsetResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for a time point screencapturing task.
         * @type {SnapshotByTimeOffsetTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of a time point screencapturing task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaSnapshotByTimeOffsetItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SnapshotByTimeOffsetTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSnapshotByTimeOffsetItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The translation input.
 * @class
 */
class AiRecognitionTaskTransTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The translation template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeSchedules response structure.
 * @class
 */
class DescribeSchedulesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The total number of records that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The information of the schemes.
         * @type {Array.<SchedulesInfo> || null}
         */
        this.ScheduleInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ScheduleInfoSet) {
            this.ScheduleInfoSet = new Array();
            for (let z in params.ScheduleInfoSet) {
                let obj = new SchedulesInfo();
                obj.deserialize(params.ScheduleInfoSet[z]);
                this.ScheduleInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Overall enhancement configuration.
 * @class
 */
class ImageQualityEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>weak</li>
<li>normal</li>
<li>strong</li>
Default value: weak.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AI-based sample management - keyword output information.
 * @class
 */
class AiSampleWord extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Keyword tag.
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * Keyword use case.
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * Creation time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Input for full speech recognition.
 * @class
 */
class AiRecognitionTaskAsrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full speech recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Output of speech keyword recognition.
 * @class
 */
class AiRecognitionTaskAsrWordsResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword recognition result set.
         * @type {Array.<AiRecognitionTaskAsrWordsResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskAsrWordsResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * AI-based OCR-based live streaming keyword recognition result
 * @class
 */
class LiveStreamOcrWordsRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * Start PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoords = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoords = 'AreaCoords' in params ? params.AreaCoords : null;

    }
}

/**
 * Information of a live stream processing error
 * @class
 */
class LiveStreamProcessErrorInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Error code:
<li>0: No error;</li>
<li>If this parameter is not 0, an error has occurred. Please see the error message (`Message`).</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * ModifyAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class ModifyAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of a transcoding task
 * @class
 */
class MediaProcessTaskTranscodeResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for a transcoding task.
         * @type {TranscodeTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of a transcoding task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaTranscodeItem || null}
         */
        this.Output = null;

        /**
         * Transcoding progress. Value range: 0-100
Note: This field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Progress = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new TranscodeTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaTranscodeItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.Progress = 'Progress' in params ? params.Progress : null;

    }
}

/**
 * Input parameter type of a time point screencapturing task
 * @class
 */
class SnapshotByTimeOffsetTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of screenshot time points in the format of `s` or `%`:
<li>If the string ends in `s`, it means that the time point is in seconds; for example, `3.5s` means that the time point is the 3.5th second;</li>
<li>If the string ends in `%`, it means that the time point is the specified percentage of the video duration; for example, `10%` means that the time point is 10% of the video duration.</li>
         * @type {Array.<string> || null}
         */
        this.ExtTimeOffsetSet = null;

        /**
         * List of time points of screenshots in <font color=red>seconds</font>.
         * @type {Array.<number> || null}
         */
        this.TimeOffsetSet = null;

        /**
         * List of up to 10 image or text watermarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * Target bucket of a generated time point screenshot file. If this parameter is left empty, the `OutputStorage` value of the upper folder will be inherited.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Output path to a generated time point screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_snapshotByTimeOffset_{definition}_{number}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * Rule of the `{number}` variable in the time point screenshot output path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExtTimeOffsetSet = 'ExtTimeOffsetSet' in params ? params.ExtTimeOffsetSet : null;
        this.TimeOffsetSet = 'TimeOffsetSet' in params ? params.TimeOffsetSet : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * Input parameter type of an image sprite generating task
 * @class
 */
class ImageSpriteTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Target bucket of a generated image sprite. If this parameter is left empty, the `OutputStorage` value of the upper folder will be inherited.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Output path to a generated image sprite file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}_{number}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * Output path to the WebVTT file after an image sprite is generated, which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_imageSprite_{definition}.{format}`.
         * @type {string || null}
         */
        this.WebVttObjectName = null;

        /**
         * Rule of the `{number}` variable in the image sprite output path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.WebVttObjectName = 'WebVttObjectName' in params ? params.WebVttObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * DeleteContentReviewTemplate response structure.
 * @class
 */
class DeleteContentReviewTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Image watermarking template
 * @class
 */
class ImageWatermarkTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark image address.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height. For example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in pixels. For example, `100px` means that `Height` is 100 pixels.</li>
`0px` means that `Height` will be proportionally scaled according to the video width.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

    }
}

/**
 * Speech keyword recognition control parameter.
 * @class
 */
class AsrWordsConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a speech keyword recognition task. Valid values:
<li>ON: Enables a speech keyword recognition task;</li>
<li>OFF: Disables a speech keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * AI-based ASR-based live streaming keyword recognition result
 * @class
 */
class LiveStreamAsrWordsRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * Start PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * AI-based sample management - figure information.
 * @class
 */
class AiSamplePerson extends  AbstractModel {
    constructor(){
        super();

        /**
         * Figure ID.
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Name of a figure.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Figure description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Face information.
         * @type {Array.<AiSampleFaceInfo> || null}
         */
        this.FaceInfoSet = null;

        /**
         * Figure tag.
         * @type {Array.<string> || null}
         */
        this.TagSet = null;

        /**
         * Use case.
         * @type {Array.<string> || null}
         */
        this.UsageSet = null;

        /**
         * Creation time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.FaceInfoSet) {
            this.FaceInfoSet = new Array();
            for (let z in params.FaceInfoSet) {
                let obj = new AiSampleFaceInfo();
                obj.deserialize(params.FaceInfoSet[z]);
                this.FaceInfoSet.push(obj);
            }
        }
        this.TagSet = 'TagSet' in params ? params.TagSet : null;
        this.UsageSet = 'UsageSet' in params ? params.UsageSet : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * The AES-128 encryption details.
 * @class
 */
class SimpleAesDrm extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URI of decryption key.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Uri = null;

        /**
         * The encryption key (a 32-byte string).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Key = null;

        /**
         * The initialization vector for encryption (a 32-byte string).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vector = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Uri = 'Uri' in params ? params.Uri : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Vector = 'Vector' in params ? params.Vector : null;

    }
}

/**
 * DescribeWorkflows response structure.
 * @class
 */
class DescribeWorkflowsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Workflow information array.
         * @type {Array.<WorkflowInfo> || null}
         */
        this.WorkflowInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WorkflowInfoSet) {
            this.WorkflowInfoSet = new Array();
            for (let z in params.WorkflowInfoSet) {
                let obj = new WorkflowInfo();
                obj.deserialize(params.WorkflowInfoSet[z]);
                this.WorkflowInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Speech keyword recognition control parameter.
 * @class
 */
class AsrWordsConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a speech keyword recognition task. Valid values:
<li>ON: Enables a speech keyword recognition task;</li>
<li>OFF: Disables a speech keyword recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Keyword filter tag, which specifies the keyword tag that needs to be returned. If this parameter is left empty, all results will be returned.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;

    }
}

/**
 * DeleteImageSpriteTemplate response structure.
 * @class
 */
class DeleteImageSpriteTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeContentReviewTemplates response structure.
 * @class
 */
class DescribeContentReviewTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of content audit template details.
         * @type {Array.<ContentReviewTemplateItem> || null}
         */
        this.ContentReviewTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ContentReviewTemplateSet) {
            this.ContentReviewTemplateSet = new Array();
            for (let z in params.ContentReviewTemplateSet) {
                let obj = new ContentReviewTemplateItem();
                obj.deserialize(params.ContentReviewTemplateSet[z]);
                this.ContentReviewTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * TESHD parameter configuration.
 * @class
 */
class TEHDConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * TESHD type. Valid values:
<li>TEHD-100: TESHD-100.</li>
If this parameter is left empty, TESHD will not be enabled.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Maximum bitrate, which is valid when `Type` is `TESHD`.
If this parameter is left empty or 0 is entered, there will be no upper limit for bitrate.
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * Details of an animated image generating template.
 * @class
 */
class AnimatedGraphicsTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of an animated image generating template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of an animated image generating template.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: Enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: Disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Frame rate.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Image quality.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * Input rule. If an uploaded video hits the rule, the workflow will be triggered.
 * @class
 */
class WorkflowTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * The trigger type. Valid values:
<li>`CosFileUpload`: Tencent Cloud COS trigger.</li>
<li>`AwsS3FileUpload`: AWS S3 trigger. Currently, this type is only supported for transcoding tasks and schemes (not supported for workflows).</li>


         * @type {string || null}
         */
        this.Type = null;

        /**
         * This parameter is required and valid when `Type` is `CosFileUpload`, indicating the COS trigger rule.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {CosFileUploadTrigger || null}
         */
        this.CosFileUploadTrigger = null;

        /**
         * The AWS S3 trigger. This parameter is valid and required if `Type` is `AwsS3FileUpload`.

Note: Currently, the key for the AWS S3 bucket, the trigger SQS queue, and the callback SQS queue must be the same.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AwsS3FileUploadTrigger || null}
         */
        this.AwsS3FileUploadTrigger = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.CosFileUploadTrigger) {
            let obj = new CosFileUploadTrigger();
            obj.deserialize(params.CosFileUploadTrigger)
            this.CosFileUploadTrigger = obj;
        }

        if (params.AwsS3FileUploadTrigger) {
            let obj = new AwsS3FileUploadTrigger();
            obj.deserialize(params.AwsS3FileUploadTrigger)
            this.AwsS3FileUploadTrigger = obj;
        }

    }
}

/**
 * Live stream AI recognition results
 * @class
 */
class LiveStreamAiRecognitionResultInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Content recognition result list.
         * @type {Array.<LiveStreamAiRecognitionResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new LiveStreamAiRecognitionResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * The result of detecting sensitive information in live streaming videos.
 * @class
 */
class LiveStreamAiReviewImagePoliticalResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * The confidence score for the detected sensitive segments.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for porn information detection of a suspected segment. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The labels for the detected sensitive information. Valid values:
<li>politician</li>
<li>violation_photo (banned icons)</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * The name of a sensitive person or banned icon.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The pixel coordinates of the detected sensitive people or banned icons. The format is [x1, y1, x2, y2], which indicates the coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * URL of a suspected image (which will not be permanently stored
and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * The parameters for detecting sensitive information based on OCR.
 * @class
 */
class TerrorismOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on OCR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Control parameter of a custom speech audit task
 * @class
 */
class UserDefineAsrTextReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom speech audit task. Valid values:
<li>ON: Enables a custom speech audit task;</li>
<li>OFF: Disables a custom speech audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom speech filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom speech keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * ModifyImageSpriteTemplate response structure.
 * @class
 */
class ModifyImageSpriteTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateWatermarkTemplate request structure.
 * @class
 */
class CreateWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermarking type. Valid values:
<li>image: Image watermark;</li>
<li>text: Text watermark;</li>
<li>svg: SVG watermark.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Watermarking template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Origin position. Valid values:
<li>TopLeft: The origin of coordinates is in the top-left corner of the video, and the origin of the watermark is in the top-left corner of the image or text;</li>
<li>TopRight: The origin of coordinates is in the top-right corner of the video, and the origin of the watermark is in the top-right corner of the image or text;</li>
<li>BottomLeft: The origin of coordinates is in the bottom-left corner of the video, and the origin of the watermark is in the bottom-left corner of the image or text;</li>
<li>BottomRight: The origin of coordinates is in the bottom-right corner of the video, and the origin of the watermark is in the bottom-right corner of the image or text.</li>
Default value: TopLeft.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the watermark will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the watermark will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical position of the origin of the watermark relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the watermark will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the watermark will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Image watermarking template. This field is required and valid only when `Type` is `image`.
         * @type {ImageWatermarkInput || null}
         */
        this.ImageTemplate = null;

        /**
         * Text watermarking template. This field is required and valid only when `Type` is `text`.
         * @type {TextWatermarkTemplateInput || null}
         */
        this.TextTemplate = null;

        /**
         * SVG watermarking template. This field is required and valid only when `Type` is `svg`.
         * @type {SvgWatermarkInput || null}
         */
        this.SvgTemplate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;

        if (params.ImageTemplate) {
            let obj = new ImageWatermarkInput();
            obj.deserialize(params.ImageTemplate)
            this.ImageTemplate = obj;
        }

        if (params.TextTemplate) {
            let obj = new TextWatermarkTemplateInput();
            obj.deserialize(params.TextTemplate)
            this.TextTemplate = obj;
        }

        if (params.SvgTemplate) {
            let obj = new SvgWatermarkInput();
            obj.deserialize(params.SvgTemplate)
            this.SvgTemplate = obj;
        }

    }
}

/**
 * The result of a content analysis task of a scheme.
 * @class
 */
class ScheduleAnalysisTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task has failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. 0 indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the content analysis task.
         * @type {AiAnalysisTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of the content analysis task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiAnalysisResult> || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

    }
}

/**
 * The element information of a video editing/compositing task.
 * @class
 */
class ComposeMediaItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The element type. Valid values:
<li>`Video` </li>
<li>`Audio` </li>
<li>`Image` </li>
<li>`Transition` </li>
<li>`Subtitle` </li>
<li>`Empty` </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The information of the video element, which is valid if `Type` is `Video`.
         * @type {ComposeVideoItem || null}
         */
        this.Video = null;

        /**
         * The information of the audio element, which is valid if `Type` is `Audio`.
         * @type {ComposeAudioItem || null}
         */
        this.Audio = null;

        /**
         * The information of the image element, which is valid if `Type` is `Image`.
         * @type {ComposeImageItem || null}
         */
        this.Image = null;

        /**
         * The information of the transition element, which is valid if `Type` is `Transition`.
         * @type {ComposeTransitionItem || null}
         */
        this.Transition = null;

        /**
         * The information of the subtitle element, which is valid if `Type` is `Subtitle`.
         * @type {ComposeSubtitleItem || null}
         */
        this.Subtitle = null;

        /**
         * The information of the empty element, which is valid if `Type` is `Empty`. An empty element is used as a placeholder in the timeline.
         * @type {ComposeEmptyItem || null}
         */
        this.Empty = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Video) {
            let obj = new ComposeVideoItem();
            obj.deserialize(params.Video)
            this.Video = obj;
        }

        if (params.Audio) {
            let obj = new ComposeAudioItem();
            obj.deserialize(params.Audio)
            this.Audio = obj;
        }

        if (params.Image) {
            let obj = new ComposeImageItem();
            obj.deserialize(params.Image)
            this.Image = obj;
        }

        if (params.Transition) {
            let obj = new ComposeTransitionItem();
            obj.deserialize(params.Transition)
            this.Transition = obj;
        }

        if (params.Subtitle) {
            let obj = new ComposeSubtitleItem();
            obj.deserialize(params.Subtitle)
            this.Subtitle = obj;
        }

        if (params.Empty) {
            let obj = new ComposeEmptyItem();
            obj.deserialize(params.Empty)
            this.Empty = obj;
        }

    }
}

/**
 * The result of a quality control task.
 * @class
 */
class ScheduleQualityControlTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: `PROCESSING`, `SUCCESS`, `FAIL`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value indicates the task has failed. For details, see [Error Codes](https://www.tencentcloud.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. `0` indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the quality control task.
         * @type {AiQualityControlTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of the quality control task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {QualityControlData || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiQualityControlTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new QualityControlData();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The parameters for detecting sensitive information.
 * @class
 */
class TerrorismConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameters for detecting sensitive information in images.
         * @type {TerrorismImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on OCR.
         * @type {TerrorismOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The output of a live scheme subtask.
 * @class
 */
class LiveActivityResItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The output of a live recording task.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {LiveScheduleLiveRecordTaskResult || null}
         */
        this.LiveRecordTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.LiveRecordTask) {
            let obj = new LiveScheduleLiveRecordTaskResult();
            obj.deserialize(params.LiveRecordTask)
            this.LiveRecordTask = obj;
        }

    }
}

/**
 * EnableSchedule response structure.
 * @class
 */
class EnableScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class DeleteAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Type of an animated image generating task.
 * @class
 */
class AnimatedGraphicTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Animated image generating template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Start time of an animated image in a video in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time of an animated image in a video in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Target bucket of a generated animated image file. If this parameter is left empty, the `OutputStorage` value of the upper folder will be inherited.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Output path to a generated animated image file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_animatedGraphic_{definition}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

    }
}

/**
 * The mosaic effect parameters to use in a media processing task.
 * @class
 */
class MosaicInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Origin position, which currently can only be:
<li>TopLeft: the origin of coordinates is in the top-left corner of the video, and the origin of the blur is in the top-left corner of the image or text.</li>
Default value: TopLeft.
         * @type {string || null}
         */
        this.CoordinateOrigin = null;

        /**
         * The horizontal position of the origin of the blur relative to the origin of coordinates of the video. % and px formats are supported:
<li>If the string ends in %, the `XPos` of the blur will be the specified percentage of the video width; for example, `10%` means that `XPos` is 10% of the video width;</li>
<li>If the string ends in px, the `XPos` of the blur will be the specified px; for example, `100px` means that `XPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * Vertical position of the origin of blur relative to the origin of coordinates of video. % and px formats are supported:
<li>If the string ends in %, the `YPos` of the blur will be the specified percentage of the video height; for example, `10%` means that `YPos` is 10% of the video height;</li>
<li>If the string ends in px, the `YPos` of the blur will be the specified px; for example, `100px` means that `YPos` is 100 px.</li>
Default value: 0 px.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * Blur width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the blur will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the blur will be in px; for example, `100px` means that `Width` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Blur height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the blur will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the blur will be in px; for example, `100px` means that `Height` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Start time offset of blur in seconds. If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame.
<li>If this parameter is left empty or 0 is entered, the blur will appear upon the first video frame;</li>
<li>If this value is greater than 0 (e.g., n), the blur will appear at second n after the first video frame;</li>
<li>If this value is smaller than 0 (e.g., -n), the blur will appear at second n before the last video frame.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of blur in seconds.
<li>If this parameter is left empty or 0 is entered, the blur will exist till the last video frame;</li>
<li>If this value is greater than 0 (e.g., n), the blur will exist till second n;</li>
<li>If this value is smaller than 0 (e.g., -n), the blur will exist till second n before the last video frame.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CoordinateOrigin = 'CoordinateOrigin' in params ? params.CoordinateOrigin : null;
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * AI-based intelligent analysis template details
 * @class
 */
class AIAnalysisTemplateItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of intelligent analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Intelligent analysis template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Intelligent analysis template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

        /**
         * Creation time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of template in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * The template type. Valid values:
* Preset
* Custom
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Opening and closing credits parameters
 * @class
 */
class HeadTailParameter extends  AbstractModel {
    constructor(){
        super();

        /**
         * The opening segments.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<MediaInputInfo> || null}
         */
        this.HeadSet = null;

        /**
         * The closing segments.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<MediaInputInfo> || null}
         */
        this.TailSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.HeadSet) {
            this.HeadSet = new Array();
            for (let z in params.HeadSet) {
                let obj = new MediaInputInfo();
                obj.deserialize(params.HeadSet[z]);
                this.HeadSet.push(obj);
            }
        }

        if (params.TailSet) {
            this.TailSet = new Array();
            for (let z in params.TailSet) {
                let obj = new MediaInputInfo();
                obj.deserialize(params.TailSet[z]);
                this.TailSet.push(obj);
            }
        }

    }
}

/**
 * Input parameter of image watermark template
 * @class
 */
class RawImageWatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input content of watermark image. JPEG and PNG images are supported.
         * @type {MediaInputInfo || null}
         */
        this.ImageContent = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width; for example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in px; for example, `100px` means that `Width` is 100 px.</li>
Default value: 10%.
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height; for example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in px; for example, `100px` means that `Height` is 100 px.</li>
Default value: 0 px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>`once`: no longer appears after watermark playback ends.</li>
<li>`repeat_last_frame`: stays on the last frame after watermark playback ends.</li>
<li>`repeat` (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImageContent) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.ImageContent)
            this.ImageContent = obj;
        }
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

    }
}

/**
 * DescribeImageSpriteTemplates request structure.
 * @class
 */
class DescribeImageSpriteTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of image sprite generating templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * AI-based sample management - tag operation.
 * @class
 */
class AiSampleTagOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Operation type. Valid values: add, delete, reset.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Tag. Length limit: 128 characters.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * CreateAIRecognitionTemplate response structure.
 * @class
 */
class CreateAIRecognitionTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTranscodeTemplate request structure.
 * @class
 */
class DeleteTranscodeTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The information about the sensitive content detected.
 * @class
 */
class AiReviewTerrorismTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for the detection of sensitive information. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive information detected. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The labels for the detected sensitive content. Valid values:
<li>guns</li>
<li>crowd</li>
<li>police</li>
<li>bloody</li>
<li>banners (sensitive flags)</li>
<li>militant</li>
<li>explosion</li>
<li>terrorists</li>
<li>scenario (sensitive scenes) </li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * The video segments that contain sensitive information.
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of prohibited information detection task
 * @class
 */
class ProhibitedConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of prohibited information detection in speech.
         * @type {ProhibitedAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of prohibited information detection in text.
         * @type {ProhibitedOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.AsrReviewInfo) {
            let obj = new ProhibitedAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new ProhibitedOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The information about the sensitive content detected based on OCR.
 * @class
 */
class AiReviewTerrorismOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for the OCR-based detection of sensitive information. Value range: 1-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive information detected based on OCR. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The video segments that contain sensitive information detected based on OCR.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Intelligent analysis results
 * @class
 */
class AiAnalysisResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Classification: intelligent categorization</li>
<li>Cover: intelligent cover generating</li>
<li>Tag: intelligent tagging</li>
<li>FrameTag: intelligent frame-specific tagging</li>
<li>Highlight: intelligent highlight generating</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query result of intelligent categorization task in video content analysis, which is valid if task type is `Classification`.
         * @type {AiAnalysisTaskClassificationResult || null}
         */
        this.ClassificationTask = null;

        /**
         * Query result of intelligent cover generating task in video content analysis, which is valid if task type is `Cover`.
         * @type {AiAnalysisTaskCoverResult || null}
         */
        this.CoverTask = null;

        /**
         * Query result of intelligent tagging task in video content analysis, which is valid if task type is `Tag`.
         * @type {AiAnalysisTaskTagResult || null}
         */
        this.TagTask = null;

        /**
         * Query result of intelligent frame-specific tagging task in video content analysis, which is valid if task type is `FrameTag`.
         * @type {AiAnalysisTaskFrameTagResult || null}
         */
        this.FrameTagTask = null;

        /**
         * The result of a highlight generation task. This parameter is valid if `Type` is `Highlight`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiAnalysisTaskHighlightResult || null}
         */
        this.HighlightTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ClassificationTask) {
            let obj = new AiAnalysisTaskClassificationResult();
            obj.deserialize(params.ClassificationTask)
            this.ClassificationTask = obj;
        }

        if (params.CoverTask) {
            let obj = new AiAnalysisTaskCoverResult();
            obj.deserialize(params.CoverTask)
            this.CoverTask = obj;
        }

        if (params.TagTask) {
            let obj = new AiAnalysisTaskTagResult();
            obj.deserialize(params.TagTask)
            this.TagTask = obj;
        }

        if (params.FrameTagTask) {
            let obj = new AiAnalysisTaskFrameTagResult();
            obj.deserialize(params.FrameTagTask)
            this.FrameTagTask = obj;
        }

        if (params.HighlightTask) {
            let obj = new AiAnalysisTaskHighlightResult();
            obj.deserialize(params.HighlightTask)
            this.HighlightTask = obj;
        }

    }
}

/**
 * DescribeAIAnalysisTemplates request structure.
 * @class
 */
class DescribeAIAnalysisTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of video content analysis templates. Array length limit: 10.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The filter for querying templates. If this parameter is left empty, both preset and custom templates are returned. Valid values:
* Preset
* Custom
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Text keyword recognition result.
 * @class
 */
class AiRecognitionTaskOcrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Text keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * List of segments that contain a text keyword.
         * @type {Array.<AiRecognitionTaskOcrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskOcrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DeleteSampleSnapshotTemplate response structure.
 * @class
 */
class DeleteSampleSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input type of intelligent tagging task
 * @class
 */
class AiAnalysisTaskTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video tagging template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * ResetWorkflow request structure.
 * @class
 */
class ResetWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

        /**
         * Workflow name of up to 128 characters, which must be unique for the same user.
         * @type {string || null}
         */
        this.WorkflowName = null;

        /**
         * Triggering rule bound to a workflow. If an uploaded video hits the rule for the object, the workflow will be triggered.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * Output configuration of a video processing output file. If this parameter is left empty, the storage location in `Trigger` will be inherited.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Target directory of a video processing output file, such as `/movie/201907/`. If this parameter is left empty, the file will be outputted to the same directory where the source file is located, i.e.; `{inputDir}`.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * Parameter of a video processing task.
         * @type {MediaProcessTaskInput || null}
         */
        this.MediaProcessTask = null;

        /**
         * Type parameter of a video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Video content analysis task parameter.
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * Type parameter of a video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * Workflow priority. The higher the value, the higher the priority. Value range: [-10, 10]. If this parameter is left empty, 0 will be used.
         * @type {number || null}
         */
        this.TaskPriority = null;

        /**
         * Event notification information of a task. If this parameter is left empty, no event notifications will be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.WorkflowName = 'WorkflowName' in params ? params.WorkflowName : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.MediaProcessTask) {
            let obj = new MediaProcessTaskInput();
            obj.deserialize(params.MediaProcessTask)
            this.MediaProcessTask = obj;
        }

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }
        this.TaskPriority = 'TaskPriority' in params ? params.TaskPriority : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

    }
}

/**
 * The result of sensitive information detection.
 * @class
 */
class AiReviewTaskTerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input parameter for sensitive information detection.
         * @type {AiReviewTerrorismTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of sensitive information detection.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTerrorismTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewTerrorismTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewTerrorismTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Result of porn information detection in speech in AI-based live stream content audit
 * @class
 */
class LiveStreamAiReviewVoicePornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Score of a suspected porn segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for porn information detection of a suspected segment. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of the detected porn information in video. Valid values:
<li>sexual_moan: Sexual moans.</li>
         * @type {string || null}
         */
        this.Label = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

    }
}

/**
 * Suspected segment identified during ASR-based text audit during content audit
 * @class
 */
class MediaContentReviewAsrTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of a suspected segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for suspected segment audit. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of suspected keywords.
         * @type {Array.<string> || null}
         */
        this.KeywordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.KeywordSet = 'KeywordSet' in params ? params.KeywordSet : null;

    }
}

/**
 * The information about the sensitive segments detected.
 * @class
 */
class MediaContentReviewPoliticalSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * The confidence score for the detected sensitive segments.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive segments. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The name of a sensitive person or banned icon.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The labels for the detected sensitive segments. The relationship between the values of this parameter and those of the `LabelSet` parameter in [PoliticalImgReviewTemplateInfo](https://intl.cloud.tencent.com/document/api/862/37615?from_cn_redirect=1#PoliticalImgReviewTemplateInfo) is as follows:
violation_photo:
<li>violation_photo (banned icons)</li>
politician:
<li>nation_politician (state leader)</li>
<li>province_politician (provincial officials)</li>
<li>bureau_politician (bureau-level officials)</li>
<li>county_politician (county-level officials)</li>
<li>rural_politician (township-level officials)</li>
<li>sensitive_politician (sensitive people)</li>
<li>foreign_politician (state leaders of other countries)</li>
entertainment:
<li>sensitive_entertainment (sensitive people in the entertainment industry</li>
sport:
<li>sensitive_sport (sensitive sports celebrities)</li>
entrepreneur:
<li>sensitive_entrepreneur</li>
scholar:
<li>sensitive_scholar</li>
celebrity:
<li>sensitive_celebrity</li>
<li>historical_celebrity (sensitive historical figures)</li>
military:
<li>sensitive_military (sensitive people in military)</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * URL of a suspected image (which will not be permanently stored
 and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * The pixel coordinates of the detected sensitive people or banned icons. The format is [x1, y1, x2, y2], which indicates the coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * DeletePersonSample response structure.
 * @class
 */
class DeletePersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyContentReviewTemplate request structure.
 * @class
 */
class ModifyContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique ID of the content moderation template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The name of the content moderation template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter for porn information
         * @type {PornConfigureInfoForUpdate || null}
         */
        this.PornConfigure = null;

        /**
         * Control parameter for terrorism information
         * @type {TerrorismConfigureInfoForUpdate || null}
         */
        this.TerrorismConfigure = null;

        /**
         * Control parameter for politically sensitive information
         * @type {PoliticalConfigureInfoForUpdate || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
Note: this parameter is not supported yet.
         * @type {ProhibitedConfigureInfoForUpdate || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Custom content moderation parameters.
         * @type {UserDefineConfigureInfoForUpdate || null}
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfoForUpdate();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfoForUpdate();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfoForUpdate();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfoForUpdate();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfoForUpdate();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * Input parameter of an image watermarking template
 * @class
 */
class ImageWatermarkInputForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * String generated by [Base64-encoding](https://tools.ietf.org/html/rfc4648) a watermark image. JPEG and PNG images are supported.
         * @type {string || null}
         */
        this.ImageContent = null;

        /**
         * Watermark width. % and px formats are supported:
<li>If the string ends in %, the `Width` of the watermark will be the specified percentage of the video width. For example, `10%` means that `Width` is 10% of the video width;</li>
<li>If the string ends in px, the `Width` of the watermark will be in pixels. For example, `100px` means that `Width` is 100 pixels. Value range: [8, 4096].</li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * Watermark height. % and px formats are supported:
<li>If the string ends in %, the `Height` of the watermark will be the specified percentage of the video height. For example, `10%` means that `Height` is 10% of the video height;</li>
<li>If the string ends in px, the `Height` of the watermark will be in pixels. For example, `100px` means that `Height` is 100 pixels. Value range: 0 or [8, 4096].</li>
Default value: 0px, which means that `Height` will be proportionally scaled according to the aspect ratio of the original watermark image.
         * @type {string || null}
         */
        this.Height = null;

        /**
         * Repeat type of an animated watermark. Valid values:
<li>once: no longer appears after watermark playback ends.</li>
<li>repeat_last_frame: stays on the last frame after watermark playback ends.</li>
<li>repeat (default): repeats the playback until the video ends.</li>
         * @type {string || null}
         */
        this.RepeatType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ImageContent = 'ImageContent' in params ? params.ImageContent : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.RepeatType = 'RepeatType' in params ? params.RepeatType : null;

    }
}

/**
 * Task type of intelligent content audit
 * @class
 */
class AiContentReviewTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content audit template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteSchedule request structure.
 * @class
 */
class DeleteScheduleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

    }
}

/**
 * CreateAdaptiveDynamicStreamingTemplate response structure.
 * @class
 */
class CreateAdaptiveDynamicStreamingTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an adaptive bitrate streaming template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteSampleSnapshotTemplate request structure.
 * @class
 */
class DeleteSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI video intelligent analysis input parameter types
 * @class
 */
class AiAnalysisTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content analysis template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * An extended parameter, whose value is a stringfied JSON.
Note: This parameter is for customers with special requirements. It needs to be customized offline.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ExtendedParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ExtendedParameter = 'ExtendedParameter' in params ? params.ExtendedParameter : null;

    }
}

/**
 * Details of an image sprite generating template
 * @class
 */
class ImageSpriteTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of an image sprite generating template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subimage width of an image sprite.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Subimage height of an image sprite.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampling type.
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: Stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: Fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The image format.
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * Full text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrFullTextSegmentTextItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Confidence of a recognition segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of a recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

        /**
         * Recognized text.
         * @type {string || null}
         */
        this.Text = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;
        this.Text = 'Text' in params ? params.Text : null;

    }
}

/**
 * The information of a checked segment in quality control.
 * @class
 */
class QualityControlItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score. Value range: 0-100.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The start timestamp (second) of the segment.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * The end timestamp (second) of the segment.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * The coordinates (px) of the top left and bottom right corner.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * ASR-based full live stream recognition
 * @class
 */
class LiveStreamAsrFullTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Recognized text.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Start PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * OCR-detected porn information in text
 * @class
 */
class AiReviewPornOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of the OCR-detected porn information in text from 0 to 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for the OCR-detected porn information in text. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the OCR-detected porn information in text.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateSampleSnapshotTemplate response structure.
 * @class
 */
class CreateSampleSnapshotTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The input of an intelligent highlight generation task.
 * @class
 */
class AiAnalysisTaskHighlightInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of the intelligent highlight generation template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Control parameter of prohibited information detection in speech task
 * @class
 */
class ProhibitedAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in speech task. Valid values:
<li>ON: enables prohibited information detection in speech task;</li>
<li>OFF: disables prohibited information detection in speech task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The input parameters for ASR-based detection of politically sensitive information.
 * @class
 */
class AiReviewPoliticalAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Result information of intelligent tagging
 * @class
 */
class MediaAiAnalysisTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag name.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * Confidence of tag between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * Details of a transcoding template
 * @class
 */
class TranscodeTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a transcoding template.
         * @type {string || null}
         */
        this.Definition = null;

        /**
         * Container format. Valid values: mp4, flv, hls, mp3, flac, ogg.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Name of a transcoding template.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Template type. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Whether to remove video data. Valid values:
<li>0: Retain;</li>
<li>1: Remove.</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

        /**
         * Whether to remove audio data. Valid values:
<li>0: Retain;</li>
<li>1: Remove.</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Video stream configuration parameter. This field is valid only when `RemoveVideo` is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {VideoTemplateInfo || null}
         */
        this.VideoTemplate = null;

        /**
         * Audio stream configuration parameter. This field is valid only when `RemoveAudio` is 0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AudioTemplateInfo || null}
         */
        this.AudioTemplate = null;

        /**
         * TESHD transcoding parameter. To enable it, please contact your Tencent Cloud sales rep.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TEHDConfig || null}
         */
        this.TEHDConfig = null;

        /**
         * Container format filter. Valid values:
<li>Video: Video container format that can contain both video stream and audio stream;</li>
<li>PureAudio: Audio container format that can contain only audio stream.</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Audio/Video enhancement configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {EnhanceConfig || null}
         */
        this.EnhanceConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;

        if (params.VideoTemplate) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.VideoTemplate)
            this.VideoTemplate = obj;
        }

        if (params.AudioTemplate) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.AudioTemplate)
            this.AudioTemplate = obj;
        }

        if (params.TEHDConfig) {
            let obj = new TEHDConfig();
            obj.deserialize(params.TEHDConfig)
            this.TEHDConfig = obj;
        }
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

        if (params.EnhanceConfig) {
            let obj = new EnhanceConfig();
            obj.deserialize(params.EnhanceConfig)
            this.EnhanceConfig = obj;
        }

    }
}

/**
 * Control parameter of a porn information detection in text task
 * @class
 */
class PornOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in text task. Valid values:
<li>ON: Enables a porn information detection in text task;</li>
<li>OFF: Disables a porn information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The result of ASR-based detection of politically sensitive information.
 * @class
 */
class AiReviewTaskPoliticalAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input parameter for ASR-based detection of politically sensitive information.
         * @type {AiReviewPoliticalAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of ASR-based detection of politically sensitive information.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewPoliticalAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The subtitle settings.
 * @class
 */
class SubtitleTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The URL of the subtitles to add to the video.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * The subtitle track to add to the video. If both `Path` and `StreamIndex` are specified, `Path` will be used. You need to specify at least one of the two parameters.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.StreamIndex = null;

        /**
         * The font. Valid values:
<li>`hei.ttf`: Heiti.</li>
<li>`song.ttf`: Songti.</li>
<li>`simkai.ttf`: Kaiti.</li>
<li>`arial.ttf`: Arial.</li>
The default is `hei.ttf`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FontType = null;

        /**
         * The font size (pixels). If this is not specified, the font size in the subtitle file will be used.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FontSize = null;

        /**
         * The font color in 0xRRGGBB format. Default value: 0xFFFFFF (white).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FontColor = null;

        /**
         * The text transparency. Value range: 0-1.
<li>`0`: Fully transparent.</li>
<li>`1`: Fully opaque.</li>
Default value: 1.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FontAlpha = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.StreamIndex = 'StreamIndex' in params ? params.StreamIndex : null;
        this.FontType = 'FontType' in params ? params.FontType : null;
        this.FontSize = 'FontSize' in params ? params.FontSize : null;
        this.FontColor = 'FontColor' in params ? params.FontColor : null;
        this.FontAlpha = 'FontAlpha' in params ? params.FontAlpha : null;

    }
}

/**
 * Information of a live stream processing task
 * @class
 */
class LiveStreamProcessTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * The media processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: Processing;</li>
<li>FINISH: Completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code. 0: success; other values: failure.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Live stream URL.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * Input parameter type of ASR-based prohibited information detection in speech task in content audit
 * @class
 */
class AiReviewProhibitedAsrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prohibited information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The information about the detected pornographic/sensitive segments.
 * @class
 */
class MediaContentReviewSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Score of a suspected porn segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Tag of porn information detection result of a suspected segment.
         * @type {string || null}
         */
        this.Label = null;

        /**
         * Suggestion for porn information detection of a suspected segment. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * URL of a suspected image (which will not be permanently stored
 and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * The parameters for detecting sensitive information based on OCR.
 * @class
 */
class TerrorismOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on OCR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Result type of a porn information detection task during content audit
 * @class
 */
class AiReviewTaskPornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for a porn information detection task during content audit.
         * @type {AiReviewPornTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of a porn information detection task during content audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ASR-detected prohibited information in speech
 * @class
 */
class AiReviewProhibitedAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of ASR-detected prohibited information in speech between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for ASR-detected prohibited information in speech. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * List of video segments that contain the ASR-detected prohibited information in speech.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * AI-based live streaming face recognition result
 * @class
 */
class LiveStreamFaceRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of figure.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Figure name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Figure library type, indicating to which figure library the recognized figure belongs:
<li>Default: default figure library</li><li>UserDefine: custom figure library</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Start PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * DescribeSampleSnapshotTemplates request structure.
 * @class
 */
class DescribeSampleSnapshotTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of sampled screencapturing templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Template type filter. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Control parameter of intelligent cover generating task
 * @class
 */
class CoverConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent cover generating task. Valid values:
<li>ON: enables intelligent cover generating task;</li>
<li>OFF: disables intelligent cover generating task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DisableWorkflow response structure.
 * @class
 */
class DisableWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskClassificationResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of intelligent categorization task.
         * @type {AiAnalysisTaskClassificationInput || null}
         */
        this.Input = null;

        /**
         * Output of intelligent categorization task.
         * @type {AiAnalysisTaskClassificationOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiAnalysisTaskClassificationInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiAnalysisTaskClassificationOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The parameters for detecting sensitive information in images.
 * @class
 */
class PoliticalImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information in images. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The filter labels for sensitive information detection in images, which specify the types of sensitive information to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>violation_photo (banned icons)</li>
<li>politician</li>
<li>entertainment (people in the entertainment industry)</li>
<li>sport (people in the sports industry)</li>
<li>entrepreneur</li>
<li>scholar</li>
<li>celebrity</li>
<li>military (people in military)</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Control parameter of a custom text audit task
 * @class
 */
class UserDefineOcrTextReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom text audit task. Valid values:
<li>ON: Enables a custom text audit task;</li>
<li>OFF: Disables a custom text audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom text filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for custom text keywords.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Adaptive bitrate streaming parameter template
 * @class
 */
class AdaptiveStreamTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video parameter information.
         * @type {VideoTemplateInfo || null}
         */
        this.Video = null;

        /**
         * Audio parameter information.
         * @type {AudioTemplateInfo || null}
         */
        this.Audio = null;

        /**
         * Whether to remove audio stream. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.RemoveAudio = null;

        /**
         * Whether to remove video stream. Valid values:
<li>0: no,</li>
<li>1: yes.</li>
         * @type {number || null}
         */
        this.RemoveVideo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Video) {
            let obj = new VideoTemplateInfo();
            obj.deserialize(params.Video)
            this.Video = obj;
        }

        if (params.Audio) {
            let obj = new AudioTemplateInfo();
            obj.deserialize(params.Audio)
            this.Audio = obj;
        }
        this.RemoveAudio = 'RemoveAudio' in params ? params.RemoveAudio : null;
        this.RemoveVideo = 'RemoveVideo' in params ? params.RemoveVideo : null;

    }
}

/**
 * Input parameter type of a transcoding task
 * @class
 */
class TranscodeTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a video transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Custom video transcoding parameter, which is valid if `Definition` is 0.
This parameter is used in highly customized scenarios. We recommend you use `Definition` to specify the transcoding parameter preferably.
         * @type {RawTranscodeParameter || null}
         */
        this.RawParameter = null;

        /**
         * Video transcoding custom parameter, which is valid when `Definition` is not 0.
When any parameters in this structure are entered, they will be used to override corresponding parameters in templates.
This parameter is used in highly customized scenarios. We recommend you only use `Definition` to specify the transcoding parameter.
Note: this field may return `null`, indicating that no valid value was found.
         * @type {OverrideTranscodeParameter || null}
         */
        this.OverrideParameter = null;

        /**
         * List of up to 10 image or text watermarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * List of blurs. Up to 10 ones can be supported.
         * @type {Array.<MosaicInput> || null}
         */
        this.MosaicSet = null;

        /**
         * Start time offset of a transcoded video, in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will start at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will start at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will start at the nth second before the end of the original video.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a transcoded video, in seconds.
<li>If this parameter is left empty or set to 0, the transcoded video will end at the same time as the original video.</li>
<li>If this parameter is set to a positive number (n for example), the transcoded video will end at the nth second of the original video.</li>
<li>If this parameter is set to a negative number (-n for example), the transcoded video will end at the nth second before the end of the original video.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Target bucket of an output file. If this parameter is left empty, the `OutputStorage` value of the upper folder will be inherited.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Path to a primary output file, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * Path to an output file part (the path to ts during transcoding to HLS), which can only be a relative path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_transcode_{definition}_{number}.{format}`.
         * @type {string || null}
         */
        this.SegmentObjectName = null;

        /**
         * Rule of the `{number}` variable in the output path after transcoding.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

        /**
         * Opening and closing credits parameters
Note: this field may return `null`, indicating that no valid value was found.
         * @type {HeadTailParameter || null}
         */
        this.HeadTailParameter = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.RawParameter) {
            let obj = new RawTranscodeParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }

        if (params.OverrideParameter) {
            let obj = new OverrideTranscodeParameter();
            obj.deserialize(params.OverrideParameter)
            this.OverrideParameter = obj;
        }

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.MosaicSet) {
            this.MosaicSet = new Array();
            for (let z in params.MosaicSet) {
                let obj = new MosaicInput();
                obj.deserialize(params.MosaicSet[z]);
                this.MosaicSet.push(obj);
            }
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

        if (params.HeadTailParameter) {
            let obj = new HeadTailParameter();
            obj.deserialize(params.HeadTailParameter)
            this.HeadTailParameter = obj;
        }

    }
}

/**
 * ModifyAIRecognitionTemplate request structure.
 * @class
 */
class ModifyAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a video content recognition template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a video content recognition template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of a video content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Face recognition control parameter.
         * @type {FaceConfigureInfoForUpdate || null}
         */
        this.FaceConfigure = null;

        /**
         * Full text recognition control parameter.
         * @type {OcrFullTextConfigureInfoForUpdate || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Text keyword recognition control parameter.
         * @type {OcrWordsConfigureInfoForUpdate || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Full speech recognition control parameter.
         * @type {AsrFullTextConfigureInfoForUpdate || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Speech keyword recognition control parameter.
         * @type {AsrWordsConfigureInfoForUpdate || null}
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfoForUpdate();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfoForUpdate();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfoForUpdate();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfoForUpdate();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

    }
}

/**
 * ParseNotification response structure.
 * @class
 */
class ParseNotificationResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The event type. Valid values:
<li>WorkflowTask</li>
<li>EditMediaTask</li>
<li>ScheduleTask (scheme)</li>
         * @type {string || null}
         */
        this.EventType = null;

        /**
         * The information of a video processing task. Information will be returned only if `EventType` is `WorkflowTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WorkflowTask || null}
         */
        this.WorkflowTaskEvent = null;

        /**
         * The information of a video editing task. Information will be returned only if `EventType` is `EditMediaTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {EditMediaTask || null}
         */
        this.EditMediaTaskEvent = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The information of a scheme. Information will be returned only if `EventType` is `ScheduleTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleTask || null}
         */
        this.ScheduleTaskEvent = null;

        /**
         * - The expiration time (Unix timestamp) of the notification's signature.
- By default, notifications sent by MPS expire after 10 minutes. If the expiration time specified has elapsed, a notification will be considered invalid. This can prevent replay attacks.
- The format of this parameter is a decimal Unix timestamp, i.e., the number of seconds that have elapsed since 00:00 (UTC/GMT time) on January 1, 1970.

         * @type {number || null}
         */
        this.Timestamp = null;

        /**
         * The notification signature. Sign = MD5 (Timestamp + NotifyKey) MPS concatenates `Timestamp` and `NotifyKey` in `TaskNotifyConfig` and calculates a signature using the MD5 algorithm. This signature is included in the notification sent to your backend server. If the signature in the notification matches your own calculation result, it indicates that the notification is from MPS.
         * @type {string || null}
         */
        this.Sign = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.EventType = 'EventType' in params ? params.EventType : null;

        if (params.WorkflowTaskEvent) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTaskEvent)
            this.WorkflowTaskEvent = obj;
        }

        if (params.EditMediaTaskEvent) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTaskEvent)
            this.EditMediaTaskEvent = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;

        if (params.ScheduleTaskEvent) {
            let obj = new ScheduleTask();
            obj.deserialize(params.ScheduleTaskEvent)
            this.ScheduleTaskEvent = obj;
        }
        this.Timestamp = 'Timestamp' in params ? params.Timestamp : null;
        this.Sign = 'Sign' in params ? params.Sign : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The image operations of a video editing/compositing task.
 * @class
 */
class ComposeImageOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type. Valid values:
u200c<li>`Rotate`: Image rotation. </li>
<li>`Flip`: Image flipping. </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * This is valid if `Type` is `Rotate`. The angle of rotation around the image center. Value range: 0–360.
         * @type {number || null}
         */
        this.RotateAngle = null;

        /**
         * This is valid if `Type` is `Flip`. How to flip the image. Valid values:xa0
u200c<li>`Horizental`: Flip horizontally. </li>
<li>`Vertical`: Flip vertically. </li>
         * @type {string || null}
         */
        this.FlipType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.RotateAngle = 'RotateAngle' in params ? params.RotateAngle : null;
        this.FlipType = 'FlipType' in params ? params.FlipType : null;

    }
}

/**
 * The execution result of a scheme.
 * @class
 */
class ActivityResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type of the scheme’s subtask.
<li>Transcode: Transcoding</li>
<li>SampleSnapshot: Sampled screenshot</li>
<li>AnimatedGraphics: Animated image generating</li>
<li>SnapshotByTimeOffset: Time point screenshot</li>
<li>ImageSprites: Image sprite generating</li>
<li>AdaptiveDynamicStreaming: Adaptive bitrate streaming</li>
<li>AiContentReview: Content moderation</li>
<li>AIRecognition: Content recognition</li>
<li>AIAnalysis: Content analysis</li>
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * The execution results of the subtasks of the scheme.
         * @type {ActivityResItem || null}
         */
        this.ActivityResItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;

        if (params.ActivityResItem) {
            let obj = new ActivityResItem();
            obj.deserialize(params.ActivityResItem)
            this.ActivityResItem = obj;
        }

    }
}

/**
 * ResetWorkflow response structure.
 * @class
 */
class ResetWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAIAnalysisTemplate response structure.
 * @class
 */
class CreateAIAnalysisTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of video content analysis template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result type of a sampled screencapturing task
 * @class
 */
class MediaProcessTaskSampleSnapshotResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for a sampled screencapturing task.
         * @type {SampleSnapshotTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of a sampled screencapturing task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaSampleSnapshotItem || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new SampleSnapshotTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new MediaSampleSnapshotItem();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Control parameter of a custom audit task.
 * @class
 */
class UserDefineConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of custom figure audit.
         * @type {UserDefineFaceReviewTemplateInfoForUpdate || null}
         */
        this.FaceReviewInfo = null;

        /**
         * Control parameter of custom speech audit.
         * @type {UserDefineAsrTextReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of custom text audit.
         * @type {UserDefineOcrTextReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.FaceReviewInfo) {
            let obj = new UserDefineFaceReviewTemplateInfoForUpdate();
            obj.deserialize(params.FaceReviewInfo)
            this.FaceReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new UserDefineAsrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new UserDefineOcrTextReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The AWS S3 storage information of an output file.
 * @class
 */
class S3OutputStorage extends  AbstractModel {
    constructor(){
        super();

        /**
         * The AWS S3 bucket.
         * @type {string || null}
         */
        this.S3Bucket = null;

        /**
         * The region of the AWS S3 bucket.
         * @type {string || null}
         */
        this.S3Region = null;

        /**
         * The key ID required to upload files to the AWS S3 object.
         * @type {string || null}
         */
        this.S3SecretId = null;

        /**
         * The key required to upload files to the AWS S3 object.
         * @type {string || null}
         */
        this.S3SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.S3Bucket = 'S3Bucket' in params ? params.S3Bucket : null;
        this.S3Region = 'S3Region' in params ? params.S3Region : null;
        this.S3SecretId = 'S3SecretId' in params ? params.S3SecretId : null;
        this.S3SecretKey = 'S3SecretKey' in params ? params.S3SecretKey : null;

    }
}

/**
 * Input rule bound to COS.
 * @class
 */
class CosFileUploadTrigger extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of the COS bucket bound to a workflow, such as `TopRankVideo-125xxx88`.
         * @type {string || null}
         */
        this.Bucket = null;

        /**
         * Region of the COS bucket bound to a workflow, such as `ap-chongiqng`.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Input path directory bound to a workflow, such as `/movie/201907/`. If this parameter is left empty, the `/` root directory will be used.
         * @type {string || null}
         */
        this.Dir = null;

        /**
         * Format list of files that can trigger a workflow, such as ["mp4", "flv", "mov"]. If this parameter is left empty, files in all formats can trigger the workflow.
         * @type {Array.<string> || null}
         */
        this.Formats = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bucket = 'Bucket' in params ? params.Bucket : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Dir = 'Dir' in params ? params.Dir : null;
        this.Formats = 'Formats' in params ? params.Formats : null;

    }
}

/**
 * The information about the sensitive content detected based on ASR.
 * @class
 */
class AiReviewPoliticalAsrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for the ASR-based detection of sensitive information. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive information detected based on ASR. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The video segments that contain sensitive information detected based on ASR.
         * @type {Array.<MediaContentReviewAsrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewAsrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * TESHD parameter configuration.
 * @class
 */
class TEHDConfigForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The TSC type. Valid values:
<li>`TEHD-100`: TSC-100 (video TSC). </li>
<li>`TEHD-200`: TSC-200 (audio TSC). </li>
If this parameter is left blank, no modification will be made.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The maximum video bitrate. If this parameter is not specified, no modifications will be made.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.MaxVideoBitrate = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.MaxVideoBitrate = 'MaxVideoBitrate' in params ? params.MaxVideoBitrate : null;

    }
}

/**
 * ModifyPersonSample request structure.
 * @class
 */
class ModifyPersonSampleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image ID
         * @type {string || null}
         */
        this.PersonId = null;

        /**
         * Name. Length limit: 128 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description. Length limit: 1,024 characters.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Image usage. Valid values:
1. Recognition: used for content recognition; equivalent to `Recognition.Face`
2. Review: used for inappropriate information recognition; equivalent to `Review.Face`
3. All: used for content recognition and inappropriate information recognition; equivalent to 1+2
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Information of operations on facial features
         * @type {AiSampleFaceOperation || null}
         */
        this.FaceOperationInfo = null;

        /**
         * Tag operation information.
         * @type {AiSampleTagOperation || null}
         */
        this.TagOperationInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PersonId = 'PersonId' in params ? params.PersonId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Usages = 'Usages' in params ? params.Usages : null;

        if (params.FaceOperationInfo) {
            let obj = new AiSampleFaceOperation();
            obj.deserialize(params.FaceOperationInfo)
            this.FaceOperationInfo = obj;
        }

        if (params.TagOperationInfo) {
            let obj = new AiSampleTagOperation();
            obj.deserialize(params.TagOperationInfo)
            this.TagOperationInfo = obj;
        }

    }
}

/**
 * Audio stream configuration parameter
 * @class
 */
class AudioTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Audio stream codec.
When the outer `Container` parameter is `mp3`, the valid value is:
<li>libmp3lame.</li>
When the outer `Container` parameter is `ogg` or `flac`, the valid value is:
<li>flac.</li>
When the outer `Container` parameter is `m4a`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame;</li>
<li>ac3.</li>
When the outer `Container` parameter is `mp4` or `flv`, the valid values include:
<li>libfdk_aac: more suitable for mp4;</li>
<li>libmp3lame: more suitable for flv.</li>
When the outer `Container` parameter is `hls`, the valid values include:
<li>libfdk_aac;</li>
<li>libmp3lame.</li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Audio stream bitrate in Kbps. Value range: 0 and [26, 256].
If the value is 0, the bitrate of the audio stream will be the same as that of the original audio.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Audio stream sample rate. Valid values:
<li>32,000</li>
<li>44,100</li>
<li>48,000</li>
In Hz.
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audio channel system. Valid values:
<li>1: Mono</li>
<li>2: Dual</li>
<li>6: Stereo</li>
When the media is packaged in audio format (FLAC, OGG, MP3, M4A), the sound channel cannot be set to stereo.
Default value: 2
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * Control parameter of a full speech recognition task.
 * @class
 */
class AsrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a full speech recognition task. Valid values:
<li>ON: Enables an intelligent full speech recognition task;</li>
<li>OFF: Disables an intelligent full speech recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Format of the generated subtitles file. If this parameter is left empty or an empty string is entered, no subtitles files will be generated. Valid value:
<li>vtt: Generates a WebVTT subtitles file.</li>
         * @type {string || null}
         */
        this.SubtitleFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.SubtitleFormat = 'SubtitleFormat' in params ? params.SubtitleFormat : null;

    }
}

/**
 * Artifact removal (smoothing) configuration.
 * @class
 */
class ArtifactRepairConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>weak</li>
<li>strong</li>
Default value: weak.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateAIRecognitionTemplate request structure.
 * @class
 */
class CreateAIRecognitionTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a video content recognition template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Description of a video content recognition template. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Face recognition control parameter.
         * @type {FaceConfigureInfo || null}
         */
        this.FaceConfigure = null;

        /**
         * Full text recognition control parameter.
         * @type {OcrFullTextConfigureInfo || null}
         */
        this.OcrFullTextConfigure = null;

        /**
         * Text keyword recognition control parameter.
         * @type {OcrWordsConfigureInfo || null}
         */
        this.OcrWordsConfigure = null;

        /**
         * Full speech recognition control parameter.
         * @type {AsrFullTextConfigureInfo || null}
         */
        this.AsrFullTextConfigure = null;

        /**
         * Speech keyword recognition control parameter.
         * @type {AsrWordsConfigureInfo || null}
         */
        this.AsrWordsConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.FaceConfigure) {
            let obj = new FaceConfigureInfo();
            obj.deserialize(params.FaceConfigure)
            this.FaceConfigure = obj;
        }

        if (params.OcrFullTextConfigure) {
            let obj = new OcrFullTextConfigureInfo();
            obj.deserialize(params.OcrFullTextConfigure)
            this.OcrFullTextConfigure = obj;
        }

        if (params.OcrWordsConfigure) {
            let obj = new OcrWordsConfigureInfo();
            obj.deserialize(params.OcrWordsConfigure)
            this.OcrWordsConfigure = obj;
        }

        if (params.AsrFullTextConfigure) {
            let obj = new AsrFullTextConfigureInfo();
            obj.deserialize(params.AsrFullTextConfigure)
            this.AsrFullTextConfigure = obj;
        }

        if (params.AsrWordsConfigure) {
            let obj = new AsrWordsConfigureInfo();
            obj.deserialize(params.AsrWordsConfigure)
            this.AsrWordsConfigure = obj;
        }

    }
}

/**
 * DescribeTaskDetail request structure.
 * @class
 */
class DescribeTaskDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;

    }
}

/**
 * The canvas information of a video editing/compositing task.
 * @class
 */
class ComposeCanvas extends  AbstractModel {
    constructor(){
        super();

        /**
         * The RGB value of the background color. The format is #RRGGBB, such as `#F0F0F0`. 
Default value: `#000000` (black).
         * @type {string || null}
         */
        this.Color = null;

        /**
         * The canvas width (px), which is the width of the output video. Value range: 0–3840.  
The default value is `0`, which means that the canvas is as wide as the first video.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * The canvas height (px), which is the height of the output video. Value range: 0–3840.  
The default value is `0`, which means that the canvas is as high as the first video.
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
        this.Color = 'Color' in params ? params.Color : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

    }
}

/**
 * Porn information detection result
 * @class
 */
class AiReviewPornTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Score of the detected porn information in video from 0 to 100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for the detected porn information. Valid values:
<li>pass.</li>
<li>review.</li>
<li>block.</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of the detected porn information in video. Valid values:
<li>porn: Porn.</li>
<li>sexy: Sexiness.</li>
<li>vulgar: Vulgarity.</li>
<li>intimacy: Intimacy.</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * List of video segments that contain the detected porn information.
         * @type {Array.<MediaContentReviewSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * CreateWorkflow response structure.
 * @class
 */
class CreateWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Full speech recognition result.
 * @class
 */
class AiRecognitionTaskAsrFullTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of a full speech recognition task.
         * @type {AiRecognitionTaskAsrFullTextResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of a full speech recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrFullTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrFullTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrFullTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * ModifyAIRecognitionTemplate response structure.
 * @class
 */
class ModifyAIRecognitionTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The parameters for detecting sensitive information in images.
 * @class
 */
class PoliticalImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information in images. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The filter labels for sensitive information detection in images, which specify the types of sensitive information to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>violation_photo (banned icons)</li>
<li>politician</li>
<li>entertainment (people in the entertainment industry)</li>
<li>sport (people in the sports industry)</li>
<li>entrepreneur</li>
<li>scholar</li>
<li>celebrity</li>
<li>military (people in military)</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 97 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 95 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The parameters for detecting sensitive information.
 * @class
 */
class PoliticalConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameters for detecting sensitive information in images.
         * @type {PoliticalImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on ASR.
         * @type {PoliticalAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on OCR.
         * @type {PoliticalOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * ModifyAnimatedGraphicsTemplate request structure.
 * @class
 */
class ModifyAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of an animated image generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format. Valid values: gif, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Video frame rate in Hz. Value range: [1, 30].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Image quality. Value range: [1, 100]. Default value: 75.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * Text recognition segment.
 * @class
 */
class AiRecognitionTaskOcrWordsSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a recognition segment in seconds.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * Confidence of a recognition segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of a recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * Query result type of a task
 * @class
 */
class MediaProcessTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Transcode: Transcoding</li>
<li>AnimatedGraphics: Animated image generating</li>
<li>SnapshotByTimeOffset: Time point screencapturing</li>
<li>SampleSnapshot: Sampled screencapturing</li>
<li>ImageSprites: Image sprite generating</li>
<li>CoverBySnapshot: Screencapturing for cover image</li>
<li>AdaptiveDynamicStreaming: Adaptive bitrate streaming</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Query result of a transcoding task, which is valid when task type is `Transcode`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskTranscodeResult || null}
         */
        this.TranscodeTask = null;

        /**
         * Query result of an animated image generating task, which is valid when task type is `AnimatedGraphics`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAnimatedGraphicResult || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * Query result of a time point screencapturing task, which is valid when task type is `SnapshotByTimeOffset`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSnapshotByTimeOffsetResult || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * Query result of a sampled screencapturing task, which is valid when task type is `SampleSnapshot`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * Query result of an image sprite generating task, which is valid when task type is `ImageSprite`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskImageSpriteResult || null}
         */
        this.ImageSpriteTask = null;

        /**
         * Query result of an adaptive bitrate streaming task, which is valid if the task type is `AdaptiveDynamicStreaming`.
Note: this field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAdaptiveDynamicStreamingResult || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.TranscodeTask) {
            let obj = new MediaProcessTaskTranscodeResult();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new MediaProcessTaskAnimatedGraphicResult();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new MediaProcessTaskSnapshotByTimeOffsetResult();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new MediaProcessTaskImageSpriteResult();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

    }
}

/**
 * DeleteWordSamples response structure.
 * @class
 */
class DeleteWordSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The live stream translation result.
 * @class
 */
class LiveStreamTransTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The text transcript.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The PTS (seconds) of the start of a segment.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * The PTS (seconds) of the end of a segment.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * The confidence score for a segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The translation.
         * @type {string || null}
         */
        this.Trans = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Trans = 'Trans' in params ? params.Trans : null;

    }
}

/**
 * The watermark parameters to use in a media processing task.
 * @class
 */
class WatermarkInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of a watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Custom watermark parameter, which is valid if `Definition` is 0.
This parameter is used in highly customized scenarios. We recommend you use `Definition` to specify the watermark parameter preferably.
Custom watermark parameter is not available for screenshot.
         * @type {RawWatermarkParameter || null}
         */
        this.RawParameter = null;

        /**
         * Text content of up to 100 characters. This field is required only when the watermark type is text.
Text watermark is not available for screenshot.
         * @type {string || null}
         */
        this.TextContent = null;

        /**
         * SVG content of up to 2,000,000 characters. This field is required only when the watermark type is `SVG`.
SVG watermark is not available for screenshot.
         * @type {string || null}
         */
        this.SvgContent = null;

        /**
         * Start time offset of a watermark in seconds. If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame.
<li>If this parameter is left empty or 0 is entered, the watermark will appear upon the first video frame;</li>
<li>If this value is greater than 0 (e.g., n), the watermark will appear at second n after the first video frame;</li>
<li>If this value is smaller than 0 (e.g., -n), the watermark will appear at second n before the last video frame.</li>
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of a watermark in seconds.
<li>If this parameter is left empty or 0 is entered, the watermark will exist till the last video frame;</li>
<li>If this value is greater than 0 (e.g., n), the watermark will exist till second n;</li>
<li>If this value is smaller than 0 (e.g., -n), the watermark will exist till second n before the last video frame.</li>
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.RawParameter) {
            let obj = new RawWatermarkParameter();
            obj.deserialize(params.RawParameter)
            this.RawParameter = obj;
        }
        this.TextContent = 'TextContent' in params ? params.TextContent : null;
        this.SvgContent = 'SvgContent' in params ? params.SvgContent : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * EnableWorkflow response structure.
 * @class
 */
class EnableWorkflowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * A subtask of a scheme.
 * @class
 */
class Activity extends  AbstractModel {
    constructor(){
        super();

        /**
         * The subtask type.
<li>`input`: The start.</li>
<li>`output`: The end.</li>
<li>`action-trans`: Transcoding.</li>
<li>`action-samplesnapshot`: Sampled screencapturing.</li>
<li>`action-AIAnalysis`: Content analysis.</li>
<li>`action-AIRecognition`: Content recognition.</li>
<li>`action-aiReview`: Content moderation.</li>
<li>`action-animated-graphics`: Animated screenshot generation.</li>
<li>`action-image-sprite`: Image sprite generation.</li>
<li>`action-snapshotByTimeOffset`: Time point screencapturing.</li>
<li>`action-adaptive-substream`: Adaptive bitrate streaming.</li>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * The indexes of the subsequent actions.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<number> || null}
         */
        this.ReardriveIndex = null;

        /**
         * The parameters of a subtask.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ActivityPara || null}
         */
        this.ActivityPara = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;
        this.ReardriveIndex = 'ReardriveIndex' in params ? params.ReardriveIndex : null;

        if (params.ActivityPara) {
            let obj = new ActivityPara();
            obj.deserialize(params.ActivityPara)
            this.ActivityPara = obj;
        }

    }
}

/**
 * AI-based sample management - keyword input information.
 * @class
 */
class AiSampleWordInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword. Length limit: 20 characters.
         * @type {string || null}
         */
        this.Keyword = null;

        /**
         * Keyword tag
<li>Array length limit: 20 tags;</li>
<li>Tag length limit: 128 characters.</li>
         * @type {Array.<string> || null}
         */
        this.Tags = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keyword = 'Keyword' in params ? params.Keyword : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

    }
}

/**
 * Adaptive bitrate streaming information
 * @class
 */
class AdaptiveDynamicStreamingInfoItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitrate streaming specification.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Container format. Valid values: HLS, MPEG-DASH.
         * @type {string || null}
         */
        this.Package = null;

        /**
         * Playback address.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Storage location of adaptive bitrate streaming files.
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Package = 'Package' in params ? params.Package : null;
        this.Path = 'Path' in params ? params.Path : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * The track information of a video editing/compositing task.
 * @class
 */
class ComposeMediaTrack extends  AbstractModel {
    constructor(){
        super();

        /**
         * The track type. Valid values:<ul><li>`Video`: Video track. A video track can consist of the following elements:</li><ul><li>Video</li><li>Image</li><li>Transition</li><li>Empty</li></ul><li>`Audio`: Audio track. An audio track can consist of the following elements:</li><ul><li>Audio</li><li>Transition</li><li>Empty</li></ul><li>`Title`: Text track. A text track can consist of the following elements: </li><ul><li>Subtitle</li></ul>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The elements of a track.
         * @type {Array.<ComposeMediaItem> || null}
         */
        this.Items = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ComposeMediaItem();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }

    }
}

/**
 * Control parameter of prohibited information detection in text task
 * @class
 */
class ProhibitedOcrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in text task. Valid values:
<li>ON: enables prohibited information detection in text task;</li>
<li>OFF: disables prohibited information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * OCR-based full live stream recognition
 * @class
 */
class LiveStreamOcrFullTextRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech text.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * Start PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of recognized segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Confidence of recognized segment. Value range: 0–100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Zone coordinates of recognition result. The array contains four elements: [x1,y1,x2,y2], i.e., the horizontal and vertical coordinates of the top-left and bottom-right corners.
         * @type {Array.<number> || null}
         */
        this.AreaCoordSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Text = 'Text' in params ? params.Text : null;
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.AreaCoordSet = 'AreaCoordSet' in params ? params.AreaCoordSet : null;

    }
}

/**
 * The result of a content moderation task of a scheme.
 * @class
 */
class ScheduleReviewTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task has failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. 0 indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the content moderation task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of the content moderation task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<AiContentReviewResult> || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            this.Output = new Array();
            for (let z in params.Output) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.Output[z]);
                this.Output.push(obj);
            }
        }

    }
}

/**
 * ModifyTranscodeTemplate response structure.
 * @class
 */
class ModifyTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Metadata of a VOD media file
 * @class
 */
class MediaMetaData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Size of an uploaded media file in bytes (which is the sum of size of m3u8 and ts files if the video is in HLS format).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Container, such as m4a and mp4.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * Sum of the average bitrate of a video stream and that of an audio stream in bps.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Maximum value of the height of a video stream in px.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Maximum value of the width of a video stream in px.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video duration in seconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Selected angle during video recording in degrees.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Rotate = null;

        /**
         * Video stream information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

        /**
         * Audio stream information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * Video duration in seconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.VideoDuration = null;

        /**
         * Audio duration in seconds.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.AudioDuration = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Size = 'Size' in params ? params.Size : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Rotate = 'Rotate' in params ? params.Rotate : null;

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }
        this.VideoDuration = 'VideoDuration' in params ? params.VideoDuration : null;
        this.AudioDuration = 'AudioDuration' in params ? params.AudioDuration : null;

    }
}

/**
 * The style information of a video editing/compositing task.
 * @class
 */
class ComposeStyles extends  AbstractModel {
    constructor(){
        super();

        /**
         * The style ID, which identifies an element style.
Note: The style ID can be up to 32 characters long and can contain letters, digits, and special characters -_
         * @type {string || null}
         */
        this.Id = null;

        /**
         * The type. Valid values:
<li>`Subtitle`: The subtitle style. </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The subtitle style details. This parameter is valid if `Type` is `Subtitle`.
         * @type {ComposeSubtitleStyle || null}
         */
        this.Subtitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Subtitle) {
            let obj = new ComposeSubtitleStyle();
            obj.deserialize(params.Subtitle)
            this.Subtitle = obj;
        }

    }
}

/**
 * Video stream configuration parameter
 * @class
 */
class VideoTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The video codec. Valid values:
<li>libx264: H.264</li>
<li>libx265: H.265</li>
<li>av1: AOMedia Video 1</li>
Note: You must specify a resolution (not higher than 640 x 480) if the H.265 codec is used.
Note: You can only use the AOMedia Video 1 codec for MP4 files.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Video frame rate in Hz. Value range: [0, 100].
If the value is 0, the frame rate will be the same as that of the source video.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Bitrate of a video stream in Kbps. Value range: 0 and [128, 35,000].
If the value is 0, the bitrate of the video will be the same as that of the source video.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Resolution adaption. Valid values:
<li>open: Enabled. When resolution adaption is enabled, `Width` indicates the long side of a video, while `Height` indicates the short side.</li>
<li>close: Disabled. When resolution adaption is disabled, `Width` indicates the width of a video, while `Height` indicates the height.</li>
Note: When resolution adaption is enabled, `Width` cannot be smaller than `Height`.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Maximum value of the width (or long side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Frame interval between I keyframes. Value range: 0 and [1,100000]. If this parameter is 0, the system will automatically set the GOP length.
         * @type {number || null}
         */
        this.Gop = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * The control factor of video constant bitrate. Value range: [0, 51]. This parameter will be disabled if you enter `0`.
It is not recommended to specify this parameter if there are no special requirements.
         * @type {number || null}
         */
        this.Vcrf = null;

        /**
         * Whether to enable adaptive encoding. Valid values:
<li>0: Disable</li>
<li>1: Enable</li>
Default value: 0. If this parameter is set to `1`, multiple streams with different resolutions and bitrates will be generated automatically. The highest resolution, bitrate, and quality of the streams are determined by the values of `width` and `height`, `Bitrate`, and `Vcrf` in `VideoTemplate` respectively. If these parameters are not set in `VideoTemplate`, the highest resolution generated will be the same as that of the source video, and the highest video quality will be close to VMAF 95. To use this parameter or learn about the billing details of adaptive encoding, please contact your sales rep.
         * @type {number || null}
         */
        this.ContentAdaptStream = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Gop = 'Gop' in params ? params.Gop : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Vcrf = 'Vcrf' in params ? params.Vcrf : null;
        this.ContentAdaptStream = 'ContentAdaptStream' in params ? params.ContentAdaptStream : null;

    }
}

/**
 * CreateContentReviewTemplate request structure.
 * @class
 */
class CreateContentReviewTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The name of the content moderation template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * The template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter for porn information
         * @type {PornConfigureInfo || null}
         */
        this.PornConfigure = null;

        /**
         * Control parameter for terrorism information
         * @type {TerrorismConfigureInfo || null}
         */
        this.TerrorismConfigure = null;

        /**
         * Control parameter for politically sensitive information
         * @type {PoliticalConfigureInfo || null}
         */
        this.PoliticalConfigure = null;

        /**
         * Control parameter of prohibited information detection. Prohibited information includes:
<li>Abusive;</li>
<li>Drug-related.</li>
Note: this parameter is not supported yet.
         * @type {ProhibitedConfigureInfo || null}
         */
        this.ProhibitedConfigure = null;

        /**
         * Custom content moderation parameters.
         * @type {UserDefineConfigureInfo || null}
         */
        this.UserDefineConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.PornConfigure) {
            let obj = new PornConfigureInfo();
            obj.deserialize(params.PornConfigure)
            this.PornConfigure = obj;
        }

        if (params.TerrorismConfigure) {
            let obj = new TerrorismConfigureInfo();
            obj.deserialize(params.TerrorismConfigure)
            this.TerrorismConfigure = obj;
        }

        if (params.PoliticalConfigure) {
            let obj = new PoliticalConfigureInfo();
            obj.deserialize(params.PoliticalConfigure)
            this.PoliticalConfigure = obj;
        }

        if (params.ProhibitedConfigure) {
            let obj = new ProhibitedConfigureInfo();
            obj.deserialize(params.ProhibitedConfigure)
            this.ProhibitedConfigure = obj;
        }

        if (params.UserDefineConfigure) {
            let obj = new UserDefineConfigureInfo();
            obj.deserialize(params.UserDefineConfigure)
            this.UserDefineConfigure = obj;
        }

    }
}

/**
 * DescribeContentReviewTemplates request structure.
 * @class
 */
class DescribeContentReviewTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the content moderation templates to query. Array length limit: 50.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The filter for querying templates. If this parameter is left empty, both preset and custom templates are returned. Valid values:
* Preset
* Custom
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Input parameter type of adaptive bitrate streaming
 * @class
 */
class AdaptiveDynamicStreamingTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Adaptive bitrate streaming template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of up to 10 image or text watermarks.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The relative or absolute output path of the manifest file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * The relative output path of the substream file after being transcoded to adaptive bitrate streaming. If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}.{format}`.
         * @type {string || null}
         */
        this.SubStreamObjectName = null;

        /**
         * The relative output path of the segment file after being transcoded to adaptive bitrate streaming (in HLS format only). If this parameter is left empty, a relative path in the following format will be used by default: `{inputName}_adaptiveDynamicStreaming_{definition}_{subStreamNumber}_{segmentNumber}.{format}`.
         * @type {string || null}
         */
        this.SegmentObjectName = null;

        /**
         * 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {Array.<AddOnSubtitle> || null}
         */
        this.AddOnSubtitles = null;

        /**
         * 
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {DrmInfo || null}
         */
        this.DrmInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;
        this.SubStreamObjectName = 'SubStreamObjectName' in params ? params.SubStreamObjectName : null;
        this.SegmentObjectName = 'SegmentObjectName' in params ? params.SegmentObjectName : null;

        if (params.AddOnSubtitles) {
            this.AddOnSubtitles = new Array();
            for (let z in params.AddOnSubtitles) {
                let obj = new AddOnSubtitle();
                obj.deserialize(params.AddOnSubtitles[z]);
                this.AddOnSubtitles.push(obj);
            }
        }

        if (params.DrmInfo) {
            let obj = new DrmInfo();
            obj.deserialize(params.DrmInfo)
            this.DrmInfo = obj;
        }

    }
}

/**
 * DescribeImageSpriteTemplates response structure.
 * @class
 */
class DescribeImageSpriteTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of image sprite generating template details.
         * @type {Array.<ImageSpriteTemplate> || null}
         */
        this.ImageSpriteTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.ImageSpriteTemplateSet) {
            this.ImageSpriteTemplateSet = new Array();
            for (let z in params.ImageSpriteTemplateSet) {
                let obj = new ImageSpriteTemplate();
                obj.deserialize(params.ImageSpriteTemplateSet[z]);
                this.ImageSpriteTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Event notification configuration of a task.
 * @class
 */
class TaskNotifyConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The notification type. Valid values:
<li>`CMQ`: This value is no longer used. Please use `TDMQ-CMQ` instead.</li>
<li>`TDMQ-CMQ`: Message queue</li>
<li>`URL`: If `NotifyType` is set to `URL`, HTTP callbacks are sent to the URL specified by `NotifyUrl`. HTTP and JSON are used for the callbacks. The packet contains the response parameters of the `ParseNotification` API.</li>
<li>`SCF`: This notification type is not recommended. You need to configure it in the SCF console.</li>
<li>`AWS-SQS`: AWS queue. This type is only supported for AWS tasks, and the queue must be in the same region as the AWS bucket.</li>
<font color="red">Note: If you do not pass this parameter or pass in an empty string, `CMQ` will be used. To use a different notification type, specify this parameter accordingly.</font>
         * @type {string || null}
         */
        this.NotifyType = null;

        /**
         * Workflow notification method. Valid values: Finish, Change. If this parameter is left empty, `Finish` will be used.
         * @type {string || null}
         */
        this.NotifyMode = null;

        /**
         * HTTP callback URL, required if `NotifyType` is set to `URL`
         * @type {string || null}
         */
        this.NotifyUrl = null;

        /**
         * The CMQ or TDMQ-CMQ model. Valid values: Queue, Topic.
         * @type {string || null}
         */
        this.CmqModel = null;

        /**
         * The CMQ or TDMQ-CMQ region, such as `sh` (Shanghai) or `bj` (Beijing).
         * @type {string || null}
         */
        this.CmqRegion = null;

        /**
         * The CMQ or TDMQ-CMQ topic to receive notifications. This parameter is valid when `CmqModel` is `Topic`.
         * @type {string || null}
         */
        this.TopicName = null;

        /**
         * The CMQ or TDMQ-CMQ queue to receive notifications. This parameter is valid when `CmqModel` is `Queue`.
         * @type {string || null}
         */
        this.QueueName = null;

        /**
         * The AWS SQS queue. This parameter is required if `NotifyType` is `AWS-SQS`.

Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AwsSQS || null}
         */
        this.AwsSQS = null;

        /**
         * The key used to generate the callback signature.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NotifyKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NotifyType = 'NotifyType' in params ? params.NotifyType : null;
        this.NotifyMode = 'NotifyMode' in params ? params.NotifyMode : null;
        this.NotifyUrl = 'NotifyUrl' in params ? params.NotifyUrl : null;
        this.CmqModel = 'CmqModel' in params ? params.CmqModel : null;
        this.CmqRegion = 'CmqRegion' in params ? params.CmqRegion : null;
        this.TopicName = 'TopicName' in params ? params.TopicName : null;
        this.QueueName = 'QueueName' in params ? params.QueueName : null;

        if (params.AwsSQS) {
            let obj = new AwsSQS();
            obj.deserialize(params.AwsSQS)
            this.AwsSQS = obj;
        }
        this.NotifyKey = 'NotifyKey' in params ? params.NotifyKey : null;

    }
}

/**
 * Face enhancement configuration.
 * @class
 */
class FaceEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Value range: 0.0-1.0
Default value: 0.0.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

    }
}

/**
 * Result of porn information detection in image in AI-based live stream content audit
 * @class
 */
class LiveStreamAiReviewImagePornResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * Score of a suspected porn segment.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * Suggestion for porn information detection of a suspected segment. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * Tag of the detected porn information in video. Valid values:
<li>porn: Porn.</li>
<li>sexy: Sexiness.</li>
<li>vulgar: Vulgarity.</li>
<li>intimacy: Intimacy.</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * URL of a suspected image (which will not be permanently stored
and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * Input type of intelligent frame-specific tagging task
 * @class
 */
class AiAnalysisTaskFrameTagInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent frame-specific video tagging template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * List of frame-specific tag segments
 * @class
 */
class MediaAiAnalysisFrameTagSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time offset of frame-specific tag.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * End time offset of frame-specific tag.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * List of tags in time period.
         * @type {Array.<MediaAiAnalysisFrameTagItem> || null}
         */
        this.TagSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

        if (params.TagSet) {
            this.TagSet = new Array();
            for (let z in params.TagSet) {
                let obj = new MediaAiAnalysisFrameTagItem();
                obj.deserialize(params.TagSet[z]);
                this.TagSet.push(obj);
            }
        }

    }
}

/**
 * Speech keyword recognition result.
 * @class
 */
class AiRecognitionTaskAsrWordsResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword.
         * @type {string || null}
         */
        this.Word = null;

        /**
         * List of time segments that contain the speech keyword.
         * @type {Array.<AiRecognitionTaskAsrWordsSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Word = 'Word' in params ? params.Word : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskAsrWordsSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskDetail response structure.
 * @class
 */
class DescribeTaskDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task type. Valid values:
<li>WorkflowTask</li>
<li>EditMediaTask</li>
<li>LiveStreamProcessTask</li>
<li>ScheduleTask (scheme)</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Task status. Valid values:
<li>WAITING: Waiting;</li>
<li>PROCESSING: Processing;</li>
<li>FINISH: Completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Creation time of a task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * End time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * Video editing task information. This field has a value only when `TaskType` is `EditMediaTask`.
         * @type {EditMediaTask || null}
         */
        this.EditMediaTask = null;

        /**
         * Information of a video processing task. This field has a value only when `TaskType` is `WorkflowTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WorkflowTask || null}
         */
        this.WorkflowTask = null;

        /**
         * Information of a live stream processing task. This field has a value only when `TaskType` is `LiveStreamProcessTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {LiveStreamProcessTask || null}
         */
        this.LiveStreamProcessTask = null;

        /**
         * Event notification information of a task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Task flow priority. Value range: [-10, 10].
         * @type {number || null}
         */
        this.TasksPriority = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * Extended information field, used in specific scenarios.
         * @type {string || null}
         */
        this.ExtInfo = null;

        /**
         * The information of a scheme. This parameter is valid only if `TaskType` is `ScheduleTask`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleTask || null}
         */
        this.ScheduleTask = null;

        /**
         * The information of a live scheme. This parameter is valid only if `TaskType` is `LiveScheduleTask`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {LiveScheduleTask || null}
         */
        this.LiveScheduleTask = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

        if (params.EditMediaTask) {
            let obj = new EditMediaTask();
            obj.deserialize(params.EditMediaTask)
            this.EditMediaTask = obj;
        }

        if (params.WorkflowTask) {
            let obj = new WorkflowTask();
            obj.deserialize(params.WorkflowTask)
            this.WorkflowTask = obj;
        }

        if (params.LiveStreamProcessTask) {
            let obj = new LiveStreamProcessTask();
            obj.deserialize(params.LiveStreamProcessTask)
            this.LiveStreamProcessTask = obj;
        }

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.TasksPriority = 'TasksPriority' in params ? params.TasksPriority : null;
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.ExtInfo = 'ExtInfo' in params ? params.ExtInfo : null;

        if (params.ScheduleTask) {
            let obj = new ScheduleTask();
            obj.deserialize(params.ScheduleTask)
            this.ScheduleTask = obj;
        }

        if (params.LiveScheduleTask) {
            let obj = new LiveScheduleTask();
            obj.deserialize(params.LiveScheduleTask)
            this.LiveScheduleTask = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * AI-based live stream recognition result
 * @class
 */
class LiveStreamAiRecognitionResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result type. Valid values:
<li>FaceRecognition: Face recognition</li>
<li>AsrWordsRecognition: Speech keyword recognition</li>
<li>OcrWordsRecognition: Text keyword recognition</li>
<li>AsrFullTextRecognition: Full speech recognition</li>
<li>OcrFullTextRecognition: Full text recognition</li>
<li>TransTextRecognition: Speech translation</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Face recognition result, which is valid when `Type` is
`FaceRecognition`.
         * @type {Array.<LiveStreamFaceRecognitionResult> || null}
         */
        this.FaceRecognitionResultSet = null;

        /**
         * Speech keyword recognition result, which is valid when `Type` is
`AsrWordsRecognition`.
         * @type {Array.<LiveStreamAsrWordsRecognitionResult> || null}
         */
        this.AsrWordsRecognitionResultSet = null;

        /**
         * Text keyword recognition result, which is valid when `Type` is
`OcrWordsRecognition`.
         * @type {Array.<LiveStreamOcrWordsRecognitionResult> || null}
         */
        this.OcrWordsRecognitionResultSet = null;

        /**
         * Full speech recognition result, which is valid when `Type` is
`AsrFullTextRecognition`.
         * @type {Array.<LiveStreamAsrFullTextRecognitionResult> || null}
         */
        this.AsrFullTextRecognitionResultSet = null;

        /**
         * Full text recognition result, which is valid when `Type` is
`OcrFullTextRecognition`.
         * @type {Array.<LiveStreamOcrFullTextRecognitionResult> || null}
         */
        this.OcrFullTextRecognitionResultSet = null;

        /**
         * The translation result. This parameter is valid only if `Type` is `TransTextRecognition`.
         * @type {Array.<LiveStreamTransTextRecognitionResult> || null}
         */
        this.TransTextRecognitionResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceRecognitionResultSet) {
            this.FaceRecognitionResultSet = new Array();
            for (let z in params.FaceRecognitionResultSet) {
                let obj = new LiveStreamFaceRecognitionResult();
                obj.deserialize(params.FaceRecognitionResultSet[z]);
                this.FaceRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrWordsRecognitionResultSet) {
            this.AsrWordsRecognitionResultSet = new Array();
            for (let z in params.AsrWordsRecognitionResultSet) {
                let obj = new LiveStreamAsrWordsRecognitionResult();
                obj.deserialize(params.AsrWordsRecognitionResultSet[z]);
                this.AsrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrWordsRecognitionResultSet) {
            this.OcrWordsRecognitionResultSet = new Array();
            for (let z in params.OcrWordsRecognitionResultSet) {
                let obj = new LiveStreamOcrWordsRecognitionResult();
                obj.deserialize(params.OcrWordsRecognitionResultSet[z]);
                this.OcrWordsRecognitionResultSet.push(obj);
            }
        }

        if (params.AsrFullTextRecognitionResultSet) {
            this.AsrFullTextRecognitionResultSet = new Array();
            for (let z in params.AsrFullTextRecognitionResultSet) {
                let obj = new LiveStreamAsrFullTextRecognitionResult();
                obj.deserialize(params.AsrFullTextRecognitionResultSet[z]);
                this.AsrFullTextRecognitionResultSet.push(obj);
            }
        }

        if (params.OcrFullTextRecognitionResultSet) {
            this.OcrFullTextRecognitionResultSet = new Array();
            for (let z in params.OcrFullTextRecognitionResultSet) {
                let obj = new LiveStreamOcrFullTextRecognitionResult();
                obj.deserialize(params.OcrFullTextRecognitionResultSet[z]);
                this.OcrFullTextRecognitionResultSet.push(obj);
            }
        }

        if (params.TransTextRecognitionResultSet) {
            this.TransTextRecognitionResultSet = new Array();
            for (let z in params.TransTextRecognitionResultSet) {
                let obj = new LiveStreamTransTextRecognitionResult();
                obj.deserialize(params.TransTextRecognitionResultSet[z]);
                this.TransTextRecognitionResultSet.push(obj);
            }
        }

    }
}

/**
 * DeleteImageSpriteTemplate request structure.
 * @class
 */
class DeleteImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * Input type of intelligent categorization task
 * @class
 */
class AiAnalysisTaskCoverInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent video cover generating template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * AI-based sample management - face information failing to be processed.
 * @class
 */
class AiSampleFailFaceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Corresponds to incorrect image subscripts in the `FaceContents` input parameter, starting from 0.
         * @type {number || null}
         */
        this.Index = null;

        /**
         * Error code. Valid values:
<li>0: Succeeded;</li>
<li>Other values: Failed.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error description.
         * @type {string || null}
         */
        this.Message = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Index = 'Index' in params ? params.Index : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

    }
}

/**
 * Control parameter of a custom figure audit task.
 * @class
 */
class UserDefineFaceReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a custom figure audit task. Valid values:
<li>ON: Enables a custom figure audit task;</li>
<li>OFF: Disables a custom figure audit task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Custom figure filter tag. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. To use the tag filtering feature, you need to add the corresponding tag when adding materials for the custom figure library.
There can be up to 10 tags, each with a length limit of 16 characters.
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Detail enhancement configuration.
 * @class
 */
class SharpEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Value range: 0.0-1.0
Default value: 0.0
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Intensity = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Intensity = 'Intensity' in params ? params.Intensity : null;

    }
}

/**
 * Control parameter of a full text recognition task
 * @class
 */
class OcrFullTextConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a full text recognition task. Valid values:
<li>ON: Enables an intelligent full text recognition task;</li>
<li>OFF: Disables an intelligent full text recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * Input for full text recognition.
 * @class
 */
class AiRecognitionTaskOcrFullTextResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Full text recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeTasks response structure.
 * @class
 */
class DescribeTasksResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task overview list.
         * @type {Array.<TaskSimpleInfo> || null}
         */
        this.TaskSet = null;

        /**
         * Scrolling identifier. If a request does not return all the data entries, this field indicates the ID of the next entry. If this field is an empty string, there is no more data.
         * @type {string || null}
         */
        this.ScrollToken = null;

        /**
         * The total number of records that meet the conditions.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.TaskSet) {
            this.TaskSet = new Array();
            for (let z in params.TaskSet) {
                let obj = new TaskSimpleInfo();
                obj.deserialize(params.TaskSet[z]);
                this.TaskSet.push(obj);
            }
        }
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Face recognition input.
 * @class
 */
class AiRecognitionTaskFaceResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Face recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The volume equalization configuration.
 * @class
 */
class VolumeBalanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>`ON`</li>
<li>`OFF` </li>
Default value: `ON`.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The type. Valid values:
<li>`loudNorm`: Loudness normalization.</li>
<li>`gainControl`: Volume leveling.</li>
Default value: `loudNorm`.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The sensitive information detected.
 * @class
 */
class AiReviewPoliticalTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for the detection of sensitive information. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive information detected. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The labels for the detected sensitive content. The relationship between the values of this parameter and those of the `LabelSet` parameter in [PoliticalImgReviewTemplateInfo](https://intl.cloud.tencent.com/document/api/862/37615?from_cn_redirect=1#AiReviewPoliticalTaskOutput) is as follows:
violation_photo:
<li>violation_photo (banned icons)</li>
Other values (politician/entertainment/sport/entrepreneur/scholar/celebrity/military):
<li>politician</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * The video segments that contain sensitive information.
         * @type {Array.<MediaContentReviewPoliticalSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewPoliticalSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * The result of sensitive information detection.
 * @class
 */
class AiReviewTaskPoliticalResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input parameter for sensitive information detection.
         * @type {AiReviewPoliticalTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of sensitive information detection.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewPoliticalTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPoliticalTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPoliticalTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * The translation result.
 * @class
 */
class AiRecognitionTaskTransTextResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The translated segments.
         * @type {Array.<AiRecognitionTaskTransTextSegmentItem> || null}
         */
        this.SegmentSet = null;

        /**
         * The subtitle URL.
         * @type {string || null}
         */
        this.SubtitlePath = null;

        /**
         * The subtitle storage location.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskTransTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.SubtitlePath = 'SubtitlePath' in params ? params.SubtitlePath : null;

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }

    }
}

/**
 * ModifySnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class ModifySnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of a time point screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Image width in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Image height in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * The image format. Valid values: jpg, png, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Result of AI-based live stream audit
 * @class
 */
class LiveStreamAiReviewResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The type of moderation result. Valid values:
<li>ImagePorn</li>
<li>ImageTerrorism</li>
<li>ImagePolitical</li>
<li>VoicePorn</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Result of porn information detection in image, which is valid when `Type` is `ImagePorn`.
         * @type {Array.<LiveStreamAiReviewImagePornResult> || null}
         */
        this.ImagePornResultSet = null;

        /**
         * The result of detecting sensitive information in images, which is valid if `Type` is `ImageTerrorism`.
         * @type {Array.<LiveStreamAiReviewImageTerrorismResult> || null}
         */
        this.ImageTerrorismResultSet = null;

        /**
         * The result of detecting sensitive information in images, which is valid if `Type` is `ImagePolitical`.
         * @type {Array.<LiveStreamAiReviewImagePoliticalResult> || null}
         */
        this.ImagePoliticalResultSet = null;

        /**
         * The result for moderation of pornographic content in audio. This parameter is valid if `Type` is `VoicePorn`.
         * @type {Array.<LiveStreamAiReviewVoicePornResult> || null}
         */
        this.VoicePornResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.ImagePornResultSet) {
            this.ImagePornResultSet = new Array();
            for (let z in params.ImagePornResultSet) {
                let obj = new LiveStreamAiReviewImagePornResult();
                obj.deserialize(params.ImagePornResultSet[z]);
                this.ImagePornResultSet.push(obj);
            }
        }

        if (params.ImageTerrorismResultSet) {
            this.ImageTerrorismResultSet = new Array();
            for (let z in params.ImageTerrorismResultSet) {
                let obj = new LiveStreamAiReviewImageTerrorismResult();
                obj.deserialize(params.ImageTerrorismResultSet[z]);
                this.ImageTerrorismResultSet.push(obj);
            }
        }

        if (params.ImagePoliticalResultSet) {
            this.ImagePoliticalResultSet = new Array();
            for (let z in params.ImagePoliticalResultSet) {
                let obj = new LiveStreamAiReviewImagePoliticalResult();
                obj.deserialize(params.ImagePoliticalResultSet[z]);
                this.ImagePoliticalResultSet.push(obj);
            }
        }

        if (params.VoicePornResultSet) {
            this.VoicePornResultSet = new Array();
            for (let z in params.VoicePornResultSet) {
                let obj = new LiveStreamAiReviewVoicePornResult();
                obj.deserialize(params.VoicePornResultSet[z]);
                this.VoicePornResultSet.push(obj);
            }
        }

    }
}

/**
 * Task overview information
 * @class
 */
class TaskSimpleInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task type. Valid values:
<li> WorkflowTask: Workflow processing task;</li>
<li> LiveProcessTask: Live stream processing task.</li>
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Creation time of a task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Start time of task execution in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). If the task has not been started yet, this field will be `0000-00-00T00:00:00Z`.
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * End time of a task in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F). If the task has not been completed yet, this field will be `0000-00-00T00:00:00Z`.
         * @type {string || null}
         */
        this.FinishTime = null;

        /**
         * The subtask type.
         * @type {Array.<string> || null}
         */
        this.SubTaskTypes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;
        this.SubTaskTypes = 'SubTaskTypes' in params ? params.SubTaskTypes : null;

    }
}

/**
 * DescribeSnapshotByTimeOffsetTemplates response structure.
 * @class
 */
class DescribeSnapshotByTimeOffsetTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of time point screencapturing template details.
         * @type {Array.<SnapshotByTimeOffsetTemplate> || null}
         */
        this.SnapshotByTimeOffsetTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SnapshotByTimeOffsetTemplateSet) {
            this.SnapshotByTimeOffsetTemplateSet = new Array();
            for (let z in params.SnapshotByTimeOffsetTemplateSet) {
                let obj = new SnapshotByTimeOffsetTemplate();
                obj.deserialize(params.SnapshotByTimeOffsetTemplateSet[z]);
                this.SnapshotByTimeOffsetTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Information of the video stream in a VOD file
 * @class
 */
class MediaVideoStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bitrate of a video stream in bps.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Height of a video stream in px.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Width of a video stream in px.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Video stream codec, such as h264.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Frame rate in Hz.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Color primaries
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ColorPrimaries = null;

        /**
         * Color space
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ColorSpace = null;

        /**
         * Color transfer
Note: this field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.ColorTransfer = null;

        /**
         * HDR type
Note: This field may return `null`, indicating that no valid value was found.
         * @type {string || null}
         */
        this.HdrType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.ColorPrimaries = 'ColorPrimaries' in params ? params.ColorPrimaries : null;
        this.ColorSpace = 'ColorSpace' in params ? params.ColorSpace : null;
        this.ColorTransfer = 'ColorTransfer' in params ? params.ColorTransfer : null;
        this.HdrType = 'HdrType' in params ? params.HdrType : null;

    }
}

/**
 * Details of a time point screencapturing template.
 * @class
 */
class SnapshotByTimeOffsetTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a time point screencapturing template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: Enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: Disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: Stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: Fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: Fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: Fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate response structure.
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of prohibited information detection in text task
 * @class
 */
class ProhibitedOcrReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of prohibited information detection in text task. Valid values:
<li>ON: enables prohibited information detection in text task;</li>
<li>OFF: disables prohibited information detection in text task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0–100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeTasks request structure.
 * @class
 */
class DescribeTasksRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Filter: Task status. Valid values: WAITING (waiting), PROCESSING (processing), FINISH (completed).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Scrolling identifier which is used for pulling in batches. If a single request cannot pull all the data entries, the API will return `ScrollToken`, and if the next request carries it, the next pull will start from the next entry.
         * @type {string || null}
         */
        this.ScrollToken = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.ScrollToken = 'ScrollToken' in params ? params.ScrollToken : null;

    }
}

/**
 * Control parameter of a face recognition task
 * @class
 */
class FaceConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a face recognition task. Valid values:
<li>ON: Enables an intelligent face recognition task;</li>
<li>OFF: Disables an intelligent face recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Face recognition filter score. If this score is reached or exceeded, a recognition result will be returned. Value range: 0-100.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * The default face filter labels, which specify the types of faces to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>entertainment (people in the entertainment industry)</li>
<li>sport (sports celebrities)</li>
<li>politician</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * Custom face tags for filter, which specify the face recognition results to return. If this parameter is not specified or left empty, the recognition results for all custom face tags are returned.
Up to 100 tags are allowed, each containing no more than 16 characters.
         * @type {Array.<string> || null}
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * Figure library. Valid values:
<li>Default: Default figure library;</li>
<li>UserDefine: Custom figure library.</li>
<li>All: Both default and custom figure libraries will be used.</li>
         * @type {string || null}
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * CreateTranscodeTemplate response structure.
 * @class
 */
class CreateTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a transcoding template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Input for speech keyword recognition.
 * @class
 */
class AiRecognitionTaskAsrWordsResultInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Speech keyword recognition template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * CreateAIAnalysisTemplate request structure.
 * @class
 */
class CreateAIAnalysisTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video content analysis template name. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Video content analysis template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Control parameter of intelligent categorization task.
         * @type {ClassificationConfigureInfo || null}
         */
        this.ClassificationConfigure = null;

        /**
         * Control parameter of intelligent tagging task.
         * @type {TagConfigureInfo || null}
         */
        this.TagConfigure = null;

        /**
         * Control parameter of intelligent cover generating task.
         * @type {CoverConfigureInfo || null}
         */
        this.CoverConfigure = null;

        /**
         * Control parameter of intelligent frame-specific tagging task.
         * @type {FrameTagConfigureInfo || null}
         */
        this.FrameTagConfigure = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

        if (params.ClassificationConfigure) {
            let obj = new ClassificationConfigureInfo();
            obj.deserialize(params.ClassificationConfigure)
            this.ClassificationConfigure = obj;
        }

        if (params.TagConfigure) {
            let obj = new TagConfigureInfo();
            obj.deserialize(params.TagConfigure)
            this.TagConfigure = obj;
        }

        if (params.CoverConfigure) {
            let obj = new CoverConfigureInfo();
            obj.deserialize(params.CoverConfigure)
            this.CoverConfigure = obj;
        }

        if (params.FrameTagConfigure) {
            let obj = new FrameTagConfigureInfo();
            obj.deserialize(params.FrameTagConfigure)
            this.FrameTagConfigure = obj;
        }

    }
}

/**
 * The input parameter for the detection of sensitive information.
 * @class
 */
class AiReviewTerrorismTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeWorkflows request structure.
 * @class
 */
class DescribeWorkflowsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID filter. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.WorkflowIds = null;

        /**
         * Workflow status. Valid values:
<li>Enabled: Enabled,</li>
<li>Disabled: Disabled.</li>
If this parameter is left empty, the workflow status will not be distinguished.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowIds = 'WorkflowIds' in params ? params.WorkflowIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * DescribeSchedules request structure.
 * @class
 */
class DescribeSchedulesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The IDs of the schemes to query. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.ScheduleIds = null;

        /**
         * The trigger type. Valid values:
<li>`CosFileUpload`: The scheme is triggered when a file is uploaded to Tencent Cloud Object Storage (COS).</li>
<li>`AwsS3FileUpload`: The scheme is triggered when a file is uploaded to AWS S3.</li>
If you do not specify this parameter or leave it empty, all schemes will be returned regardless of the trigger type.
         * @type {string || null}
         */
        this.TriggerType = null;

        /**
         * The scheme status. Valid values:
<li>`Enabled`</li>
<li>`Disabled`</li>
If you do not specify this parameter, all schemes will be returned regardless of the status.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The pagination offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The maximum number of records to return. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleIds = 'ScheduleIds' in params ? params.ScheduleIds : null;
        this.TriggerType = 'TriggerType' in params ? params.TriggerType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * Information of the audio stream in a VOD file
 * @class
 */
class MediaAudioStreamItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Bitrate of an audio stream in bps.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Sample rate of an audio stream in Hz.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SamplingRate = null;

        /**
         * Audio stream codec, such as aac.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * Number of sound channels, e.g., 2
Note: this field may return `null`, indicating that no valid value was found.
         * @type {number || null}
         */
        this.Channel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.SamplingRate = 'SamplingRate' in params ? params.SamplingRate : null;
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.Channel = 'Channel' in params ? params.Channel : null;

    }
}

/**
 * The result of detecting sensitive information in live streaming videos.
 * @class
 */
class LiveStreamAiReviewImageTerrorismResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.StartPtsTime = null;

        /**
         * End PTS time of a suspected segment in seconds.
         * @type {number || null}
         */
        this.EndPtsTime = null;

        /**
         * The confidence score for the detected sensitive segments.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive segments. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The labels for the detected sensitive content. Valid values:
<li>guns</li>
<li>crowd</li>
<li>police</li>
<li>bloody</li>
<li>banners (sensitive flags)</li>
<li>militant</li>
<li>explosion</li>
<li>terrorists</li>
         * @type {string || null}
         */
        this.Label = null;

        /**
         * URL of a suspected image (which will not be permanently stored
and will be deleted after `PicUrlExpireTime`).
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Expiration time of a suspected image URL in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.PicUrlExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartPtsTime = 'StartPtsTime' in params ? params.StartPtsTime : null;
        this.EndPtsTime = 'EndPtsTime' in params ? params.EndPtsTime : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;
        this.Label = 'Label' in params ? params.Label : null;
        this.Url = 'Url' in params ? params.Url : null;
        this.PicUrlExpireTime = 'PicUrlExpireTime' in params ? params.PicUrlExpireTime : null;

    }
}

/**
 * ProcessLiveStream request structure.
 * @class
 */
class ProcessLiveStreamRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Live stream URL, which must be a live stream file address. RTMP, HLS, and FLV are supported.
         * @type {string || null}
         */
        this.Url = null;

        /**
         * Event notification information of a task, which is used to specify the live stream processing result.
         * @type {LiveStreamTaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * Target bucket of a live stream processing output file. This parameter is required if a file will be output.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Target directory of a live stream processing output file, such as `/movie/201909/`. If this parameter is left empty, the `/` directory will be used.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * Type parameter of a video content audit task.
         * @type {AiContentReviewTaskInput || null}
         */
        this.AiContentReviewTask = null;

        /**
         * Type parameter of video content recognition task.
         * @type {AiRecognitionTaskInput || null}
         */
        this.AiRecognitionTask = null;

        /**
         * 
         * @type {AiAnalysisTaskInput || null}
         */
        this.AiAnalysisTask = null;

        /**
         * 
         * @type {AiQualityControlTaskInput || null}
         */
        this.AiQualityControlTask = null;

        /**
         * The ID used for deduplication. If there was a request with the same ID in the last seven days, the current request will return an error. The ID can contain up to 50 characters. If this parameter is left empty or an empty string is entered, no deduplication will be performed.
         * @type {string || null}
         */
        this.SessionId = null;

        /**
         * The source context which is used to pass through the user request information. The task flow status change callback will return the value of this field. It can contain up to 1,000 characters.
         * @type {string || null}
         */
        this.SessionContext = null;

        /**
         * The live scheme ID.
Note 1:
<li>If an output storage (`OutputStorage`) and directory (`OutputDir`) are specified for a subtask of the scheme, those output settings will be applied. </li>
u200c<li>If an output storage (`OutputStorage`) and directory (`OutputDir`) are not specified for a subtask of the scheme, the output parameters specified for `ProcessLiveStream` (if any) will be applied. </li>
Note 2: If `TaskNotifyConfig` is specified when `ProcessLiveStream` is called, the specified settings will be applied instead of the default callback settings of the scheme.
         * @type {number || null}
         */
        this.ScheduleId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Url = 'Url' in params ? params.Url : null;

        if (params.TaskNotifyConfig) {
            let obj = new LiveStreamTaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.AiContentReviewTask) {
            let obj = new AiContentReviewTaskInput();
            obj.deserialize(params.AiContentReviewTask)
            this.AiContentReviewTask = obj;
        }

        if (params.AiRecognitionTask) {
            let obj = new AiRecognitionTaskInput();
            obj.deserialize(params.AiRecognitionTask)
            this.AiRecognitionTask = obj;
        }

        if (params.AiAnalysisTask) {
            let obj = new AiAnalysisTaskInput();
            obj.deserialize(params.AiAnalysisTask)
            this.AiAnalysisTask = obj;
        }

        if (params.AiQualityControlTask) {
            let obj = new AiQualityControlTaskInput();
            obj.deserialize(params.AiQualityControlTask)
            this.AiQualityControlTask = obj;
        }
        this.SessionId = 'SessionId' in params ? params.SessionId : null;
        this.SessionContext = 'SessionContext' in params ? params.SessionContext : null;
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;

    }
}

/**
 * ModifyImageSpriteTemplate request structure.
 * @class
 */
class ModifyImageSpriteTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Name of an image sprite generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Subimage width of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Subimage height of an image sprite in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Sampling type. Valid values:
<li>Percent: By percent.</li>
<li>Time: By time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Subimage row count of an image sprite.
         * @type {number || null}
         */
        this.RowCount = null;

        /**
         * Subimage column count of an image sprite.
         * @type {number || null}
         */
        this.ColumnCount = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * The image format. Valid values: jpg, png, webp.
         * @type {string || null}
         */
        this.Format = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.RowCount = 'RowCount' in params ? params.RowCount : null;
        this.ColumnCount = 'ColumnCount' in params ? params.ColumnCount : null;
        this.FillType = 'FillType' in params ? params.FillType : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Format = 'Format' in params ? params.Format : null;

    }
}

/**
 * Input parameter type of OCR-based prohibited information detection in text task in content audit
 * @class
 */
class AiReviewProhibitedOcrTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Prohibited information detection template ID.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteWatermarkTemplate request structure.
 * @class
 */
class DeleteWatermarkTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * The subtitle element information of a video editing/compositing task.
 * @class
 */
class ComposeSubtitleItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The subtitle style ID, which corresponds to the `Id` field of `ComposeStyles`.
         * @type {string || null}
         */
        this.StyleId = null;

        /**
         * The subtitle text.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The time of the element in the timeline. If this is not specified, the element will follow the previous element.	
         * @type {ComposeTrackTime || null}
         */
        this.TrackTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StyleId = 'StyleId' in params ? params.StyleId : null;
        this.Text = 'Text' in params ? params.Text : null;

        if (params.TrackTime) {
            let obj = new ComposeTrackTime();
            obj.deserialize(params.TrackTime)
            this.TrackTime = obj;
        }

    }
}

/**
 * DescribeWordSamples request structure.
 * @class
 */
class DescribeWordSamplesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Keyword filter. Array length limit: 100 words.
         * @type {Array.<string> || null}
         */
        this.Keywords = null;

        /**
         * <b>Keyword usage. Valid values:</b>
1. Recognition.Ocr: OCR-based content recognition
2. Recognition.Asr: ASR-based content recognition
3. Review.Ocr: OCR-based inappropriate information recognition
4. Review.Asr: ASR-based inappropriate information recognition
<b>Valid values can also be:</b>
5. Recognition: ASR- and OCR-based content recognition; equivalent to 1+2
6. Review: ASR- and OCR-based inappropriate information recognition; equivalent to 3+4
You can select multiple elements, which are connected by OR logic. If a usage contains any element in this parameter, the keyword sample will be used.
         * @type {Array.<string> || null}
         */
        this.Usages = null;

        /**
         * Tag filter. Array length limit: 20 words.
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 100. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keywords = 'Keywords' in params ? params.Keywords : null;
        this.Usages = 'Usages' in params ? params.Usages : null;
        this.Tags = 'Tags' in params ? params.Tags : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;

    }
}

/**
 * The information of the subtitles to add.
 * @class
 */
class AddOnSubtitle extends  AbstractModel {
    constructor(){
        super();

        /**
         * The mode. Valid values:
<li>`subtitle-stream`: Add a subtitle track.</li>
<li>`close-caption-708`: Embed CEA-708 subtitles in SEI frames.</li>
<li>`close-caption-608`: Embed CEA-608 subtitles in SEI frames.</li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The subtitle file.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {MediaInputInfo || null}
         */
        this.Subtitle = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.Subtitle) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.Subtitle)
            this.Subtitle = obj;
        }

    }
}

/**
 * The information of an AWS SQS queue.
 * @class
 */
class AwsSQS extends  AbstractModel {
    constructor(){
        super();

        /**
         * The region of the SQS queue.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SQSRegion = null;

        /**
         * The name of the SQS queue.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.SQSQueueName = null;

        /**
         * The key ID required to read from/write to the SQS queue.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.S3SecretId = null;

        /**
         * The key required to read from/write to the SQS queue.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.S3SecretKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SQSRegion = 'SQSRegion' in params ? params.SQSRegion : null;
        this.SQSQueueName = 'SQSQueueName' in params ? params.SQSQueueName : null;
        this.S3SecretId = 'S3SecretId' in params ? params.S3SecretId : null;
        this.S3SecretKey = 'S3SecretKey' in params ? params.S3SecretKey : null;

    }
}

/**
 * Control parameter of a porn information detection task.
 * @class
 */
class PornConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of porn information detection in image.
         * @type {PornImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of porn information detection in speech.
         * @type {PornAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of porn information detection in text.
         * @type {PornOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The quality check output.
 * @class
 */
class QualityControlData extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether there is an audio track. `true` indicates that there isn't.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.NoAudio = null;

        /**
         * Whether there is a video track. `true` indicates that there isn't.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {boolean || null}
         */
        this.NoVideo = null;

        /**
         * The no-reference video quality score. Value range: 0-100.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.QualityEvaluationScore = null;

        /**
         * The issues detected by quality control.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<QualityControlResult> || null}
         */
        this.QualityControlResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NoAudio = 'NoAudio' in params ? params.NoAudio : null;
        this.NoVideo = 'NoVideo' in params ? params.NoVideo : null;
        this.QualityEvaluationScore = 'QualityEvaluationScore' in params ? params.QualityEvaluationScore : null;

        if (params.QualityControlResultSet) {
            this.QualityControlResultSet = new Array();
            for (let z in params.QualityControlResultSet) {
                let obj = new QualityControlResult();
                obj.deserialize(params.QualityControlResultSet[z]);
                this.QualityControlResultSet.push(obj);
            }
        }

    }
}

/**
 * CreateWatermarkTemplate response structure.
 * @class
 */
class CreateWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a watermarking template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Watermark image address. This field is valid only when `Type` is `image`.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The DRM encryption details.
 * @class
 */
class DrmInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The encryption type.
<li>`simpleaes`: AES-128 encryption.</li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The AES-128 encryption details.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {SimpleAesDrm || null}
         */
        this.SimpleAesDrm = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.SimpleAesDrm) {
            let obj = new SimpleAesDrm();
            obj.deserialize(params.SimpleAesDrm)
            this.SimpleAesDrm = obj;
        }

    }
}

/**
 * DescribeSampleSnapshotTemplates response structure.
 * @class
 */
class DescribeSampleSnapshotTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of sampled screencapturing template details.
         * @type {Array.<SampleSnapshotTemplate> || null}
         */
        this.SampleSnapshotTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.SampleSnapshotTemplateSet) {
            this.SampleSnapshotTemplateSet = new Array();
            for (let z in params.SampleSnapshotTemplateSet) {
                let obj = new SampleSnapshotTemplate();
                obj.deserialize(params.SampleSnapshotTemplateSet[z]);
                this.SampleSnapshotTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * The image element information of a video editing/compositing task.
 * @class
 */
class ComposeImageItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The media information of the element.
         * @type {ComposeSourceMedia || null}
         */
        this.SourceMedia = null;

        /**
         * The time of the element in the timeline. If this is not specified, the element will follow the previous element.
         * @type {ComposeTrackTime || null}
         */
        this.TrackTime = null;

        /**
         * The horizontal distance of the element's center from the canvas origin. Two formats are supported:
<li>If the value ends with %, it specifies the distance as a percentage of the canvas width. For example, `10%` means that the distance is 10% of the canvas width. </li>
u200c<li>If the value ends with px, it specifies the distance in pixels. For example, `100px` means that the distance is 100 pixels. </li>
Default value: `50%`.
         * @type {string || null}
         */
        this.XPos = null;

        /**
         * The vertical distance of the element's center from the canvas origin. Two formats are supported:
u200c<li>If the value ends with %, it specifies the distance as a percentage of the canvas height. For example, `10%` means that the distance is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the distance in pixels. For example, `100px` means that the distance is 100 pixels. </li>
Default value: `50%`.
         * @type {string || null}
         */
        this.YPos = null;

        /**
         * The width of the video segment. Two formats are supported:
u200c<li>If the value ends with %, it specifies the width as a percentage of the canvas width. For example, `10%` means that the video width is 10% of the canvas width. </li>
u200c<li>If the value ends with px, it specifies the width in pixels. For example, `100px` means that the video width is 100 pixels. </li>
If one or both parameters are empty or set to `0`:
<li>If both `Width` and `Height` are empty, the original width and height of the element will be kept. </li>
<li>If `Width` is empty and `Height` is not, the width will be auto scaled. </li>
<li>If `Width` is not empty and `Height` is, the height will be auto scaled. </li>
         * @type {string || null}
         */
        this.Width = null;

        /**
         * The height of the element. Two formats are supported:
u200c<li>If the value ends with %, it specifies the height as a percentage of the canvas height. For example, `10%` means that the height is 10% of the canvas height. </li>
u200c<li>If the value ends with px, it specifies the height in pixels. For example, `100px` means that the height is 100 pixels. </li>
If one or both parameters are empty or set to `0`:
<li>If both `Width` and `Height` are empty, the original width and height of the video will be kept. </li>
<li>If `Width` is empty and `Height` is not, the width will be auto scaled. </li>
<li>If `Width` is not empty and `Height` is, the height will be auto scaled. </li>
         * @type {string || null}
         */
        this.Height = null;

        /**
         * The image operations, such as image rotation.
         * @type {Array.<ComposeImageOperation> || null}
         */
        this.ImageOperations = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SourceMedia) {
            let obj = new ComposeSourceMedia();
            obj.deserialize(params.SourceMedia)
            this.SourceMedia = obj;
        }

        if (params.TrackTime) {
            let obj = new ComposeTrackTime();
            obj.deserialize(params.TrackTime)
            this.TrackTime = obj;
        }
        this.XPos = 'XPos' in params ? params.XPos : null;
        this.YPos = 'YPos' in params ? params.YPos : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;

        if (params.ImageOperations) {
            this.ImageOperations = new Array();
            for (let z in params.ImageOperations) {
                let obj = new ComposeImageOperation();
                obj.deserialize(params.ImageOperations[z]);
                this.ImageOperations.push(obj);
            }
        }

    }
}

/**
 * DescribeMediaMetaData response structure.
 * @class
 */
class DescribeMediaMetaDataResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Media metadata.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Content audit result
 * @class
 */
class AiContentReviewResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task type. Valid values:
<li>Porn (in images)</li>
<li>Terrorism (in images)</li>
<li>Political (in images)</li>
<li>Porn.Asr</li>
<li>Porn.Ocr</li>
<li>Political.Asr</li>
<li>Political.Ocr</li>
<li>Terrorism.Ocr</li>
<li>Prohibited.Asr</li>
<li>Prohibited.Ocr</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Sample rate, which indicates the number of video frames captured per second for audit
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * Audited video duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Query result of an intelligent porn information detection in image task in video content audit, which is valid when task type is `Porn`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornResult || null}
         */
        this.PornTask = null;

        /**
         * The result of detecting terrorism content in images, which is valid when the task type is `Terrorism`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTaskTerrorismResult || null}
         */
        this.TerrorismTask = null;

        /**
         * The result of detecting politically sensitive information in images, which is valid when the task type is `Political`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalResult || null}
         */
        this.PoliticalTask = null;

        /**
         * Query result of an ASR-based porn information detection in text task in video content audit, which is valid when task type is `Porn.Asr`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornAsrResult || null}
         */
        this.PornAsrTask = null;

        /**
         * Query result of an OCR-based porn information detection in text task in video content audit, which is valid when task type is `Porn.Ocr`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPornOcrResult || null}
         */
        this.PornOcrTask = null;

        /**
         * The result of detecting politically sensitive information based on ASR, which is valid when the task type is `Political.Asr`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalAsrResult || null}
         */
        this.PoliticalAsrTask = null;

        /**
         * The result of detecting politically sensitive information based on OCR, which is valid when the task type is `Political.Ocr`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTaskPoliticalOcrResult || null}
         */
        this.PoliticalOcrTask = null;

        /**
         * The result of detecting terrorism content based on OCR, which is valid when task type is `Terrorism.Ocr`.
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {AiReviewTaskTerrorismOcrResult || null}
         */
        this.TerrorismOcrTask = null;

        /**
         * Query result of ASR-based prohibited information detection in speech task in video content audit, which is valid if task type is `Prohibited.Asr`.
         * @type {AiReviewTaskProhibitedAsrResult || null}
         */
        this.ProhibitedAsrTask = null;

        /**
         * Query result of OCR-based prohibited information detection in text task in video content audit, which is valid if task type is `Prohibited.Ocr`.
         * @type {AiReviewTaskProhibitedOcrResult || null}
         */
        this.ProhibitedOcrTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.Duration = 'Duration' in params ? params.Duration : null;

        if (params.PornTask) {
            let obj = new AiReviewTaskPornResult();
            obj.deserialize(params.PornTask)
            this.PornTask = obj;
        }

        if (params.TerrorismTask) {
            let obj = new AiReviewTaskTerrorismResult();
            obj.deserialize(params.TerrorismTask)
            this.TerrorismTask = obj;
        }

        if (params.PoliticalTask) {
            let obj = new AiReviewTaskPoliticalResult();
            obj.deserialize(params.PoliticalTask)
            this.PoliticalTask = obj;
        }

        if (params.PornAsrTask) {
            let obj = new AiReviewTaskPornAsrResult();
            obj.deserialize(params.PornAsrTask)
            this.PornAsrTask = obj;
        }

        if (params.PornOcrTask) {
            let obj = new AiReviewTaskPornOcrResult();
            obj.deserialize(params.PornOcrTask)
            this.PornOcrTask = obj;
        }

        if (params.PoliticalAsrTask) {
            let obj = new AiReviewTaskPoliticalAsrResult();
            obj.deserialize(params.PoliticalAsrTask)
            this.PoliticalAsrTask = obj;
        }

        if (params.PoliticalOcrTask) {
            let obj = new AiReviewTaskPoliticalOcrResult();
            obj.deserialize(params.PoliticalOcrTask)
            this.PoliticalOcrTask = obj;
        }

        if (params.TerrorismOcrTask) {
            let obj = new AiReviewTaskTerrorismOcrResult();
            obj.deserialize(params.TerrorismOcrTask)
            this.TerrorismOcrTask = obj;
        }

        if (params.ProhibitedAsrTask) {
            let obj = new AiReviewTaskProhibitedAsrResult();
            obj.deserialize(params.ProhibitedAsrTask)
            this.ProhibitedAsrTask = obj;
        }

        if (params.ProhibitedOcrTask) {
            let obj = new AiReviewTaskProhibitedOcrResult();
            obj.deserialize(params.ProhibitedOcrTask)
            this.ProhibitedOcrTask = obj;
        }

    }
}

/**
 * The output of a live scheme subtask.
 * @class
 */
class LiveActivityResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task type.
<li>`LiveRecord`: Live recording. </li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ActivityType = null;

        /**
         * The task output.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {LiveActivityResItem || null}
         */
        this.LiveActivityResItem = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ActivityType = 'ActivityType' in params ? params.ActivityType : null;

        if (params.LiveActivityResItem) {
            let obj = new LiveActivityResItem();
            obj.deserialize(params.LiveActivityResItem)
            this.LiveActivityResItem = obj;
        }

    }
}

/**
 * The parameters for detecting sensitive information in images.
 * @class
 */
class TerrorismImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information in images. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The filter labels for sensitive information detection in images, which specify the types of sensitive information to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>guns</li>
<li>crowd</li>
<li>bloody</li>
<li>police</li>
<li>banners (sensitive flags)</li>
<li>militant</li>
<li>explosion</li>
<li>terrorists</li>
<li>scenario (sensitive scenes) </li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 80 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * DescribeTranscodeTemplates request structure.
 * @class
 */
class DescribeTranscodeTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of transcoding templates. Array length limit: 100.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Template type filter. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Container format filter. Valid values:
<li>Video: Video container format that can contain both video stream and audio stream;</li>
<li>PureAudio: Audio container format that can contain only audio stream.</li>
         * @type {string || null}
         */
        this.ContainerType = null;

        /**
         * TESHD filter, which is used to filter common transcoding or ultra-fast HD transcoding templates. Valid values:
<li>Common: Common transcoding template;</li>
<li>TEHD: TESHD template.</li>
         * @type {string || null}
         */
        this.TEHDType = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The template type (replacing `TEHDType`). Valid values:
<li>Common: Common transcoding template</li>
<li>TEHD: TESHD template</li>
<li>Enhance: Audio/Video enhancement template.</li>
This parameter is left empty by default, which indicates to return all types of templates.
         * @type {string || null}
         */
        this.TranscodeType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.ContainerType = 'ContainerType' in params ? params.ContainerType : null;
        this.TEHDType = 'TEHDType' in params ? params.TEHDType : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.TranscodeType = 'TranscodeType' in params ? params.TranscodeType : null;

    }
}

/**
 * The details of a scheme.
 * @class
 */
class SchedulesInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The scheme ID.
         * @type {number || null}
         */
        this.ScheduleId = null;

        /**
         * The scheme name.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ScheduleName = null;

        /**
         * The scheme type. Valid values:
 <li>`Preset`</li>
<li>`Custom` </li>
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

        /**
         * The scheme status. Valid values:
`Enabled`
`Disabled`
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The trigger of the scheme.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {WorkflowTrigger || null}
         */
        this.Trigger = null;

        /**
         * The subtasks of the scheme.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Activity> || null}
         */
        this.Activities = null;

        /**
         * The bucket to save the output file.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * The directory to save the output file.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.OutputDir = null;

        /**
         * The notification configuration.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskNotifyConfig || null}
         */
        this.TaskNotifyConfig = null;

        /**
         * The creation time in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The last updated time in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.UpdateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ScheduleId = 'ScheduleId' in params ? params.ScheduleId : null;
        this.ScheduleName = 'ScheduleName' in params ? params.ScheduleName : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Status = 'Status' in params ? params.Status : null;

        if (params.Trigger) {
            let obj = new WorkflowTrigger();
            obj.deserialize(params.Trigger)
            this.Trigger = obj;
        }

        if (params.Activities) {
            this.Activities = new Array();
            for (let z in params.Activities) {
                let obj = new Activity();
                obj.deserialize(params.Activities[z]);
                this.Activities.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputDir = 'OutputDir' in params ? params.OutputDir : null;

        if (params.TaskNotifyConfig) {
            let obj = new TaskNotifyConfig();
            obj.deserialize(params.TaskNotifyConfig)
            this.TaskNotifyConfig = obj;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DisableWorkflow request structure.
 * @class
 */
class DisableWorkflowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Workflow ID.
         * @type {number || null}
         */
        this.WorkflowId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.WorkflowId = 'WorkflowId' in params ? params.WorkflowId : null;

    }
}

/**
 * The parameters for detecting sensitive information.
 * @class
 */
class PoliticalConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameters for detecting sensitive information in images.
         * @type {PoliticalImgReviewTemplateInfoForUpdate || null}
         */
        this.ImgReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on ASR.
         * @type {PoliticalAsrReviewTemplateInfoForUpdate || null}
         */
        this.AsrReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on OCR.
         * @type {PoliticalOcrReviewTemplateInfoForUpdate || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PoliticalImgReviewTemplateInfoForUpdate();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PoliticalAsrReviewTemplateInfoForUpdate();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PoliticalOcrReviewTemplateInfoForUpdate();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * DescribeWatermarkTemplates response structure.
 * @class
 */
class DescribeWatermarkTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of watermarking template details.
         * @type {Array.<WatermarkTemplate> || null}
         */
        this.WatermarkTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.WatermarkTemplateSet) {
            this.WatermarkTemplateSet = new Array();
            for (let z in params.WatermarkTemplateSet) {
                let obj = new WatermarkTemplate();
                obj.deserialize(params.WatermarkTemplateSet[z]);
                this.WatermarkTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate request structure.
 * @class
 */
class CreateAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video frame rate in Hz. Value range: [1, 30].
         * @type {number || null}
         */
        this.Fps = null;

        /**
         * Maximum value of the width (or long side) of an animated image in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a video stream in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Animated image format. Valid values: gif; webp. Default value: gif.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Image quality. Value range: [1, 100]. Default value: 75.
         * @type {number || null}
         */
        this.Quality = null;

        /**
         * Name of an animated image generating template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Fps = 'Fps' in params ? params.Fps : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Quality = 'Quality' in params ? params.Quality : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;

    }
}

/**
 * Control parameter of intelligent frame-specific tagging task
 * @class
 */
class FrameTagConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent frame-specific tagging task. Valid values:
<li>ON: enables intelligent frame-specific tagging task;</li>
<li>OFF: disables intelligent frame-specific tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * ExecuteFunction request structure.
 * @class
 */
class ExecuteFunctionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of called backend API.
         * @type {string || null}
         */
        this.FunctionName = null;

        /**
         * API parameter. Parameter format will depend on the actual function definition.
         * @type {string || null}
         */
        this.FunctionArg = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FunctionName = 'FunctionName' in params ? params.FunctionName : null;
        this.FunctionArg = 'FunctionArg' in params ? params.FunctionArg : null;

    }
}

/**
 * ModifyPersonSample response structure.
 * @class
 */
class ModifyPersonSampleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image information
         * @type {AiSamplePerson || null}
         */
        this.Person = null;

        /**
         * Information of images that failed the verification by facial feature positioning.
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<AiSampleFailFaceInfo> || null}
         */
        this.FailFaceInfoSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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

        if (params.Person) {
            let obj = new AiSamplePerson();
            obj.deserialize(params.Person)
            this.Person = obj;
        }

        if (params.FailFaceInfoSet) {
            this.FailFaceInfoSet = new Array();
            for (let z in params.FailFaceInfoSet) {
                let obj = new AiSampleFailFaceInfo();
                obj.deserialize(params.FailFaceInfoSet[z]);
                this.FailFaceInfoSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteTranscodeTemplate response structure.
 * @class
 */
class DeleteTranscodeTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Transcoding information
 * @class
 */
class MediaTranscodeItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target bucket of an output file.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Path to an output video file.
         * @type {string || null}
         */
        this.Path = null;

        /**
         * Transcoding specification ID. For more information, please see [Transcoding Parameter Template](https://intl.cloud.tencent.com/document/product/266/33478?from_cn_redirect=1#.E8.BD.AC.E7.A0.81.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Sum of the average bitrate of a video stream and that of an audio stream in bps.
         * @type {number || null}
         */
        this.Bitrate = null;

        /**
         * Maximum value of the height of a video stream in px.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Maximum value of the width of a video stream in px.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Total size of a media file in bytes (which is the sum of size of m3u8 and ts files if the video is in HLS format).
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Video duration in seconds.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Container, such as m4a and mp4.
         * @type {string || null}
         */
        this.Container = null;

        /**
         * MD5 value of a video.
         * @type {string || null}
         */
        this.Md5 = null;

        /**
         * Audio stream information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaAudioStreamItem> || null}
         */
        this.AudioStreamSet = null;

        /**
         * Video stream information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<MediaVideoStreamItem> || null}
         */
        this.VideoStreamSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Bitrate = 'Bitrate' in params ? params.Bitrate : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Container = 'Container' in params ? params.Container : null;
        this.Md5 = 'Md5' in params ? params.Md5 : null;

        if (params.AudioStreamSet) {
            this.AudioStreamSet = new Array();
            for (let z in params.AudioStreamSet) {
                let obj = new MediaAudioStreamItem();
                obj.deserialize(params.AudioStreamSet[z]);
                this.AudioStreamSet.push(obj);
            }
        }

        if (params.VideoStreamSet) {
            this.VideoStreamSet = new Array();
            for (let z in params.VideoStreamSet) {
                let obj = new MediaVideoStreamItem();
                obj.deserialize(params.VideoStreamSet[z]);
                this.VideoStreamSet.push(obj);
            }
        }

    }
}

/**
 * Information of a sampled screenshot
 * @class
 */
class MediaSampleSnapshotItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screenshot specification ID. For more information, please see [Sampled Screencapturing Parameter Template](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E9.87.87.E6.A0.B7.E6.88.AA.E5.9B.BE.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Sample type. Valid values:
<li>Percent: Samples at the specified percentage interval.</li>
<li>Time: Samples at the specified time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval
<li>If `SampleType` is `Percent`, this value means taking a screenshot at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, this value means taking a screenshot at an interval of the specified time (in seconds). The first screenshot is always the first video frame.</li>
         * @type {number || null}
         */
        this.Interval = null;

        /**
         * Storage location of a generated screenshot file.
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

        /**
         * List of paths to generated screenshots.
         * @type {Array.<string> || null}
         */
        this.ImagePathSet = null;

        /**
         * List of watermarking template IDs if the screenshots are watermarked.
         * @type {Array.<number> || null}
         */
        this.WaterMarkDefinition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.Interval = 'Interval' in params ? params.Interval : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WaterMarkDefinition = 'WaterMarkDefinition' in params ? params.WaterMarkDefinition : null;

    }
}

/**
 * DescribePersonSamples response structure.
 * @class
 */
class DescribePersonSamplesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Image information
         * @type {Array.<AiSamplePerson> || null}
         */
        this.PersonSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.PersonSet) {
            this.PersonSet = new Array();
            for (let z in params.PersonSet) {
                let obj = new AiSamplePerson();
                obj.deserialize(params.PersonSet[z]);
                this.PersonSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifySchedule response structure.
 * @class
 */
class ModifyScheduleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Control parameter of a porn information detection task
 * @class
 */
class PornConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Control parameter of porn information detection in image.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PornImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * Control parameter of porn information detection in speech.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PornAsrReviewTemplateInfo || null}
         */
        this.AsrReviewInfo = null;

        /**
         * Control parameter of porn information detection in text.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {PornOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new PornImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.AsrReviewInfo) {
            let obj = new PornAsrReviewTemplateInfo();
            obj.deserialize(params.AsrReviewInfo)
            this.AsrReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new PornOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * Image noise removal configuration.
 * @class
 */
class VideoDenoiseConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>weak</li>
<li>strong</li>
Default value: weak.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeAIAnalysisTemplates response structure.
 * @class
 */
class DescribeAIAnalysisTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of video content analysis template details.
         * @type {Array.<AIAnalysisTemplateItem> || null}
         */
        this.AIAnalysisTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AIAnalysisTemplateSet) {
            this.AIAnalysisTemplateSet = new Array();
            for (let z in params.AIAnalysisTemplateSet) {
                let obj = new AIAnalysisTemplateItem();
                obj.deserialize(params.AIAnalysisTemplateSet[z]);
                this.AIAnalysisTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateSnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class CreateSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Name of a time point screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Image width in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Image height in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * The image format. Valid values: jpg (default), png, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * ParseLiveStreamProcessNotification request structure.
 * @class
 */
class ParseLiveStreamProcessNotificationRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Live stream event notification obtained from CMQ.
         * @type {string || null}
         */
        this.Content = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Content = 'Content' in params ? params.Content : null;

    }
}

/**
 * Speech keyword recognition result.
 * @class
 */
class AiRecognitionTaskAsrWordsResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input information of a speech keyword recognition task.
         * @type {AiRecognitionTaskAsrWordsResultInput || null}
         */
        this.Input = null;

        /**
         * Output information of a speech keyword recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrWordsResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskAsrWordsResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskAsrWordsResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * CreateSampleSnapshotTemplate request structure.
 * @class
 */
class CreateSampleSnapshotTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screencapturing type. Valid values:
<li>Percent: By percent.</li>
<li>Time: By time interval.</li>
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
<li>If `SampleType` is `Percent`, sampling will be performed at an interval of the specified percentage.</li>
<li>If `SampleType` is `Time`, sampling will be performed at the specified time interval in seconds.</li>
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Name of a sampled screencapturing template. Length limit: 64 characters.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Image width in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Image height in px. Value range: [128, 4,096].
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * The image format. Valid values: jpg (default), png, webp.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Template description. Length limit: 256 characters.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * The information of the media processing task.
 * @class
 */
class WorkflowTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * The media processing task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task flow status. Valid values:
<li>PROCESSING: Processing;</li>
<li>FINISH: Completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * If the value returned is not 0, there was a source error. If 0 is returned, refer to the error codes of the corresponding task type.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Except those for source errors, error messages vary with task type.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The information of the file processed.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * Metadata of a source video.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaMetaData || null}
         */
        this.MetaData = null;

        /**
         * The execution status and result of the media processing task.
         * @type {Array.<MediaProcessTaskResult> || null}
         */
        this.MediaProcessResultSet = null;

        /**
         * Execution status and result of a video content audit task.
         * @type {Array.<AiContentReviewResult> || null}
         */
        this.AiContentReviewResultSet = null;

        /**
         * Execution status and result of video content analysis task.
         * @type {Array.<AiAnalysisResult> || null}
         */
        this.AiAnalysisResultSet = null;

        /**
         * Execution status and result of a video content recognition task.
         * @type {Array.<AiRecognitionResult> || null}
         */
        this.AiRecognitionResultSet = null;

        /**
         * The execution status and result of a quality control task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleQualityControlTaskResult || null}
         */
        this.AiQualityControlTaskResult = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

        if (params.MetaData) {
            let obj = new MediaMetaData();
            obj.deserialize(params.MetaData)
            this.MetaData = obj;
        }

        if (params.MediaProcessResultSet) {
            this.MediaProcessResultSet = new Array();
            for (let z in params.MediaProcessResultSet) {
                let obj = new MediaProcessTaskResult();
                obj.deserialize(params.MediaProcessResultSet[z]);
                this.MediaProcessResultSet.push(obj);
            }
        }

        if (params.AiContentReviewResultSet) {
            this.AiContentReviewResultSet = new Array();
            for (let z in params.AiContentReviewResultSet) {
                let obj = new AiContentReviewResult();
                obj.deserialize(params.AiContentReviewResultSet[z]);
                this.AiContentReviewResultSet.push(obj);
            }
        }

        if (params.AiAnalysisResultSet) {
            this.AiAnalysisResultSet = new Array();
            for (let z in params.AiAnalysisResultSet) {
                let obj = new AiAnalysisResult();
                obj.deserialize(params.AiAnalysisResultSet[z]);
                this.AiAnalysisResultSet.push(obj);
            }
        }

        if (params.AiRecognitionResultSet) {
            this.AiRecognitionResultSet = new Array();
            for (let z in params.AiRecognitionResultSet) {
                let obj = new AiRecognitionResult();
                obj.deserialize(params.AiRecognitionResultSet[z]);
                this.AiRecognitionResultSet.push(obj);
            }
        }

        if (params.AiQualityControlTaskResult) {
            let obj = new ScheduleQualityControlTaskResult();
            obj.deserialize(params.AiQualityControlTaskResult)
            this.AiQualityControlTaskResult = obj;
        }

    }
}

/**
 * Result type of an ASR-based porn information detection in text task during content audit
 * @class
 */
class AiReviewTaskPornAsrResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value returned indicates the task failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * Error code. 0 indicates the task is successful; otherwise it is failed. This parameter is no longer recommended. Consider using the new error code parameter ErrCodeExt.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input for an ASR-based porn information detection in text task during content audit.
         * @type {AiReviewPornAsrTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of an ASR-based porn information detection in text task during content audit.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiReviewPornAsrTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiReviewPornAsrTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiReviewPornAsrTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * VOD video file editing information
 * @class
 */
class EditMediaFileInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Video input information.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

        /**
         * The start offset (seconds) for video clipping. This parameter is valid for video clipping tasks.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * The end offset (seconds) for video clipping. This parameter is valid for video clipping tasks.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * The ID of the material associated with an element. This parameter is required for video compositing tasks.

Note: The ID can be up to 32 characters long and can contain letters, digits, and special characters -_
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Id = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * The audio stream information of a video editing/compositing task.
 * @class
 */
class ComposeAudioStream extends  AbstractModel {
    constructor(){
        super();

        /**
         * The codec of the audio stream. Valid values:
<li>`AAC`: AAC (default), which is used for the MP4 container. </li>
<li>`MP3`: MP3 codec, which is used for the MP3 container. </li>
         * @type {string || null}
         */
        this.Codec = null;

        /**
         * The sample rate (Hz) of the audio stream.
<li>16000 (default)</li>
<li>32000</li>
<li>44100</li>
<li>48000</li>
         * @type {number || null}
         */
        this.SampleRate = null;

        /**
         * The number of sound channels. Valid values:
u200c<li>`1`: Mono. </li>
<li>`2`: Dual (default). </li>
         * @type {number || null}
         */
        this.AudioChannel = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Codec = 'Codec' in params ? params.Codec : null;
        this.SampleRate = 'SampleRate' in params ? params.SampleRate : null;
        this.AudioChannel = 'AudioChannel' in params ? params.AudioChannel : null;

    }
}

/**
 * Control parameter of a face recognition task
 * @class
 */
class FaceConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a face recognition task. Valid values:
<li>ON: Enables an intelligent face recognition task;</li>
<li>OFF: Disables an intelligent face recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Face recognition filter score. If this score is reached or exceeded, a recognition result will be returned. Value range: 0-100. Default value: 95.
         * @type {number || null}
         */
        this.Score = null;

        /**
         * The default face filter labels, which specify the types of faces to return. If this parameter is left empty, the detection results for all labels are returned. Valid values:
<li>entertainment (people in the entertainment industry)</li>
<li>sport (sports celebrities)</li>
<li>politician</li>
         * @type {Array.<string> || null}
         */
        this.DefaultLibraryLabelSet = null;

        /**
         * Custom face tags for filter, which specify the face recognition results to return. If this parameter is not specified or left empty, the recognition results for all custom face tags are returned.
Up to 100 tags are allowed, each containing no more than 16 characters.
         * @type {Array.<string> || null}
         */
        this.UserDefineLibraryLabelSet = null;

        /**
         * Figure library. Valid values:
<li>Default: Default figure library;</li>
<li>UserDefine: Custom figure library.</li>
<li>All: Both default and custom figure libraries will be used.</li>
Default value: All (both default and custom figure libraries will be used.)
         * @type {string || null}
         */
        this.FaceLibrary = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Score = 'Score' in params ? params.Score : null;
        this.DefaultLibraryLabelSet = 'DefaultLibraryLabelSet' in params ? params.DefaultLibraryLabelSet : null;
        this.UserDefineLibraryLabelSet = 'UserDefineLibraryLabelSet' in params ? params.UserDefineLibraryLabelSet : null;
        this.FaceLibrary = 'FaceLibrary' in params ? params.FaceLibrary : null;

    }
}

/**
 * Output of intelligent face recognition.
 * @class
 */
class AiRecognitionTaskFaceResultOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Intelligent face recognition result set.
         * @type {Array.<AiRecognitionTaskFaceResultItem> || null}
         */
        this.ResultSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ResultSet) {
            this.ResultSet = new Array();
            for (let z in params.ResultSet) {
                let obj = new AiRecognitionTaskFaceResultItem();
                obj.deserialize(params.ResultSet[z]);
                this.ResultSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of a porn information detection in image task.
 * @class
 */
class PornImgReviewTemplateInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in image task. Valid values:
<li>ON: Enables a porn information detection in image task;</li>
<li>OFF: Disables a porn information detection in image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for porn information detection in image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>porn: Porn;</li>
<li>vulgar: Vulgarity;</li>
<li>intimacy: Intimacy;</li>
<li>sexy: Sexiness.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * Video editing task information
 * @class
 */
class EditMediaTask extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID.
         * @type {string || null}
         */
        this.TaskId = null;

        /**
         * Task status. Valid values:
<li>PROCESSING: processing;</li>
<li>FINISH: completed.</li>
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Error code
<li>0: success;</li>
<li>Other values: failure.</li>
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * Error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Input of video editing task.
         * @type {EditMediaTaskInput || null}
         */
        this.Input = null;

        /**
         * Output of video editing task.
         * @type {EditMediaTaskOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new EditMediaTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new EditMediaTaskOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Control parameter of a porn information detection in image task
 * @class
 */
class PornImgReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a porn information detection in image task. Valid values:
<li>ON: Enables a porn information detection in image task;</li>
<li>OFF: Disables a porn information detection in image task.</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Filter tag for porn information detection in image. If an audit result contains the selected tag, it will be returned; if the filter tag is empty, all audit results will be returned. Valid values:
<li>porn: Porn;</li>
<li>vulgar: Vulgarity;</li>
<li>intimacy: Intimacy;</li>
<li>sexy: Sexiness.</li>
         * @type {Array.<string> || null}
         */
        this.LabelSet = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 90 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 0 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.LabelSet = 'LabelSet' in params ? params.LabelSet : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * The information about the sensitive content detected based on OCR.
 * @class
 */
class AiReviewPoliticalOcrTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for the OCR-based detection of sensitive information. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The suggestion for handling the sensitive information detected based on OCR. Valid values:
<li>pass</li>
<li>review</li>
<li>block</li>
         * @type {string || null}
         */
        this.Suggestion = null;

        /**
         * The video segments that contain sensitive information detected based on OCR.
         * @type {Array.<MediaContentReviewOcrTextSegmentItem> || null}
         */
        this.SegmentSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.Suggestion = 'Suggestion' in params ? params.Suggestion : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new MediaContentReviewOcrTextSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }

    }
}

/**
 * Control parameter of a full text recognition task
 * @class
 */
class OcrFullTextConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of a full text recognition task. Valid values:
<li>ON: Enables an intelligent full text recognition task;</li>
<li>OFF: Disables an intelligent full text recognition task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * DescribeTranscodeTemplates response structure.
 * @class
 */
class DescribeTranscodeTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of transcoding template details.
         * @type {Array.<TranscodeTemplate> || null}
         */
        this.TranscodeTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.TranscodeTemplateSet) {
            this.TranscodeTemplateSet = new Array();
            for (let z in params.TranscodeTemplateSet) {
                let obj = new TranscodeTemplate();
                obj.deserialize(params.TranscodeTemplateSet[z]);
                this.TranscodeTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteAnimatedGraphicsTemplate request structure.
 * @class
 */
class DeleteAnimatedGraphicsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DeleteSnapshotByTimeOffsetTemplate request structure.
 * @class
 */
class DeleteSnapshotByTimeOffsetTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a time point screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

    }
}

/**
 * DescribeAnimatedGraphicsTemplates response structure.
 * @class
 */
class DescribeAnimatedGraphicsTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of eligible entries.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of animated image generating template details.
         * @type {Array.<AnimatedGraphicsTemplate> || null}
         */
        this.AnimatedGraphicsTemplateSet = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;

        if (params.AnimatedGraphicsTemplateSet) {
            this.AnimatedGraphicsTemplateSet = new Array();
            for (let z in params.AnimatedGraphicsTemplateSet) {
                let obj = new AnimatedGraphicsTemplate();
                obj.deserialize(params.AnimatedGraphicsTemplateSet[z]);
                this.AnimatedGraphicsTemplateSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Result information of intelligent frame-specific tagging
 * @class
 */
class MediaAiAnalysisFrameTagItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Frame-specific tag name.
         * @type {string || null}
         */
        this.Tag = null;

        /**
         * 
         * @type {Array.<string> || null}
         */
        this.CategorySet = null;

        /**
         * Confidence of intelligently generated frame-specific tag between 0 and 100.
         * @type {number || null}
         */
        this.Confidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Tag = 'Tag' in params ? params.Tag : null;
        this.CategorySet = 'CategorySet' in params ? params.CategorySet : null;
        this.Confidence = 'Confidence' in params ? params.Confidence : null;

    }
}

/**
 * The execution results of the subtasks of a scheme.
 * @class
 */
class ActivityResItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The result of a transcoding task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskTranscodeResult || null}
         */
        this.TranscodeTask = null;

        /**
         * The result of an animated image generating task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAnimatedGraphicResult || null}
         */
        this.AnimatedGraphicTask = null;

        /**
         * The result of a time point screenshot task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SnapshotByTimeOffsetTask = null;

        /**
         * The result of a sampled screenshot task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskSampleSnapshotResult || null}
         */
        this.SampleSnapshotTask = null;

        /**
         * The result of an image sprite task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskImageSpriteResult || null}
         */
        this.ImageSpriteTask = null;

        /**
         * The result of an adaptive bitrate streaming task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {MediaProcessTaskAdaptiveDynamicStreamingResult || null}
         */
        this.AdaptiveDynamicStreamingTask = null;

        /**
         * The result of a content recognition task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleRecognitionTaskResult || null}
         */
        this.RecognitionTask = null;

        /**
         * The result of a content moderation task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleReviewTaskResult || null}
         */
        this.ReviewTask = null;

        /**
         * The result of a content analysis task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {ScheduleAnalysisTaskResult || null}
         */
        this.AnalysisTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.TranscodeTask) {
            let obj = new MediaProcessTaskTranscodeResult();
            obj.deserialize(params.TranscodeTask)
            this.TranscodeTask = obj;
        }

        if (params.AnimatedGraphicTask) {
            let obj = new MediaProcessTaskAnimatedGraphicResult();
            obj.deserialize(params.AnimatedGraphicTask)
            this.AnimatedGraphicTask = obj;
        }

        if (params.SnapshotByTimeOffsetTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SnapshotByTimeOffsetTask)
            this.SnapshotByTimeOffsetTask = obj;
        }

        if (params.SampleSnapshotTask) {
            let obj = new MediaProcessTaskSampleSnapshotResult();
            obj.deserialize(params.SampleSnapshotTask)
            this.SampleSnapshotTask = obj;
        }

        if (params.ImageSpriteTask) {
            let obj = new MediaProcessTaskImageSpriteResult();
            obj.deserialize(params.ImageSpriteTask)
            this.ImageSpriteTask = obj;
        }

        if (params.AdaptiveDynamicStreamingTask) {
            let obj = new MediaProcessTaskAdaptiveDynamicStreamingResult();
            obj.deserialize(params.AdaptiveDynamicStreamingTask)
            this.AdaptiveDynamicStreamingTask = obj;
        }

        if (params.RecognitionTask) {
            let obj = new ScheduleRecognitionTaskResult();
            obj.deserialize(params.RecognitionTask)
            this.RecognitionTask = obj;
        }

        if (params.ReviewTask) {
            let obj = new ScheduleReviewTaskResult();
            obj.deserialize(params.ReviewTask)
            this.ReviewTask = obj;
        }

        if (params.AnalysisTask) {
            let obj = new ScheduleAnalysisTaskResult();
            obj.deserialize(params.AnalysisTask)
            this.AnalysisTask = obj;
        }

    }
}

/**
 * Input parameter type of a sampled screencapturing task.
 * @class
 */
class SampleSnapshotTaskInput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sampled screencapturing template ID.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * List of up to 10 image or text watermarks.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<WatermarkInput> || null}
         */
        this.WatermarkSet = null;

        /**
         * Target bucket of a sampled screenshot. If this parameter is left empty, the `OutputStorage` value of the upper folder will be inherited.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Output path to a generated sampled screenshot, which can be a relative path or an absolute path. If this parameter is left empty, the following relative path will be used by default: `{inputName}_sampleSnapshot_{definition}_{number}.{format}`.
         * @type {string || null}
         */
        this.OutputObjectPath = null;

        /**
         * Rule of the `{number}` variable in the sampled screenshot output path.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {NumberFormat || null}
         */
        this.ObjectNumberFormat = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;

        if (params.WatermarkSet) {
            this.WatermarkSet = new Array();
            for (let z in params.WatermarkSet) {
                let obj = new WatermarkInput();
                obj.deserialize(params.WatermarkSet[z]);
                this.WatermarkSet.push(obj);
            }
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.OutputObjectPath = 'OutputObjectPath' in params ? params.OutputObjectPath : null;

        if (params.ObjectNumberFormat) {
            let obj = new NumberFormat();
            obj.deserialize(params.ObjectNumberFormat)
            this.ObjectNumberFormat = obj;
        }

    }
}

/**
 * The parameters for detecting sensitive information.
 * @class
 */
class TerrorismConfigureInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * The parameters for detecting sensitive information in images.
         * @type {TerrorismImgReviewTemplateInfo || null}
         */
        this.ImgReviewInfo = null;

        /**
         * The parameters for detecting sensitive information based on OCR.
         * @type {TerrorismOcrReviewTemplateInfo || null}
         */
        this.OcrReviewInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ImgReviewInfo) {
            let obj = new TerrorismImgReviewTemplateInfo();
            obj.deserialize(params.ImgReviewInfo)
            this.ImgReviewInfo = obj;
        }

        if (params.OcrReviewInfo) {
            let obj = new TerrorismOcrReviewTemplateInfo();
            obj.deserialize(params.OcrReviewInfo)
            this.OcrReviewInfo = obj;
        }

    }
}

/**
 * The parameters for detecting sensitive information based on ASR.
 * @class
 */
class PoliticalAsrReviewTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to detect sensitive information based on ASR. Valid values:
<li>ON</li>
<li>OFF</li>
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * Threshold score for violation. If this score is reached or exceeded during intelligent audit, it will be deemed that a suspected violation has occurred. If this parameter is left empty, 100 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.BlockConfidence = null;

        /**
         * Threshold score for human audit. If this score is reached or exceeded during intelligent audit, human audit will be considered necessary. If this parameter is left empty, 75 will be used by default. Value range: 0-100.
         * @type {number || null}
         */
        this.ReviewConfidence = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.BlockConfidence = 'BlockConfidence' in params ? params.BlockConfidence : null;
        this.ReviewConfidence = 'ReviewConfidence' in params ? params.ReviewConfidence : null;

    }
}

/**
 * CreateAnimatedGraphicsTemplate response structure.
 * @class
 */
class CreateAnimatedGraphicsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an animated image generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of a sampled screencapturing template
 * @class
 */
class SampleSnapshotTemplate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a sampled screencapturing template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Template type. Valid values:
<li>Preset: Preset template;</li>
<li>Custom: Custom template.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a sampled screencapturing template.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Template description.
         * @type {string || null}
         */
        this.Comment = null;

        /**
         * Maximum value of the width (or long side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Maximum value of the height (or short side) of a screenshot in px. Value range: 0 and [128, 4,096].
<li>If both `Width` and `Height` are 0, the resolution will be the same as that of the source video;</li>
<li>If `Width` is 0, but `Height` is not 0, `Width` will be proportionally scaled;</li>
<li>If `Width` is not 0, but `Height` is 0, `Height` will be proportionally scaled;</li>
<li>If both `Width` and `Height` are not 0, the custom resolution will be used.</li>
Default value: 0.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Resolution adaption. Valid values:
<li>open: Enabled. In this case, `Width` represents the long side of a video, while `Height` the short side;</li>
<li>close: Disabled. In this case, `Width` represents the width of a video, while `Height` the height.</li>
Default value: open.
         * @type {string || null}
         */
        this.ResolutionAdaptive = null;

        /**
         * Image format.
         * @type {string || null}
         */
        this.Format = null;

        /**
         * Sampled screencapturing type.
         * @type {string || null}
         */
        this.SampleType = null;

        /**
         * Sampling interval.
         * @type {number || null}
         */
        this.SampleInterval = null;

        /**
         * Creation time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Last modified time of a template in [ISO date format](https://intl.cloud.tencent.com/document/product/266/11732?from_cn_redirect=1#iso-.E6.97.A5.E6.9C.9F.E6.A0.BC.E5.BC.8F).
         * @type {string || null}
         */
        this.UpdateTime = null;

        /**
         * Fill type. "Fill" refers to the way of processing a screenshot when its aspect ratio is different from that of the source video. The following fill types are supported:
<li> stretch: Stretch. The screenshot will be stretched frame by frame to match the aspect ratio of the source video, which may make the screenshot "shorter" or "longer";</li>
<li>black: Fill with black. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with black color blocks.</li>
<li>white: Fill with white. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with white color blocks.</li>
<li>gauss: Fill with Gaussian blur. This option retains the aspect ratio of the source video for the screenshot and fills the unmatched area with Gaussian blur.</li>
Default value: black.
         * @type {string || null}
         */
        this.FillType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Comment = 'Comment' in params ? params.Comment : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.ResolutionAdaptive = 'ResolutionAdaptive' in params ? params.ResolutionAdaptive : null;
        this.Format = 'Format' in params ? params.Format : null;
        this.SampleType = 'SampleType' in params ? params.SampleType : null;
        this.SampleInterval = 'SampleInterval' in params ? params.SampleInterval : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;
        this.FillType = 'FillType' in params ? params.FillType : null;

    }
}

/**
 * Image sprite information
 * @class
 */
class MediaImageSpriteItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image sprite specification. For more information, please see [Image Sprite Parameter Template](https://intl.cloud.tencent.com/document/product/266/33480?from_cn_redirect=1#.E9.9B.AA.E7.A2.A7.E5.9B.BE.E6.A8.A1.E6.9D.BF).
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * Subimage height of an image sprite.
         * @type {number || null}
         */
        this.Height = null;

        /**
         * Subimage width of an image sprite.
         * @type {number || null}
         */
        this.Width = null;

        /**
         * Total number of subimages in each image sprite.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Path to each image sprite.
         * @type {Array.<string> || null}
         */
        this.ImagePathSet = null;

        /**
         * Path to a WebVtt file for the position-time relationship among subimages in an image sprite. The WebVtt file indicates the corresponding time points of each subimage and their coordinates in the image sprite, which is typically used by the player for implementing preview.
         * @type {string || null}
         */
        this.WebVttPath = null;

        /**
         * Storage location of an image sprite file.
         * @type {TaskOutputStorage || null}
         */
        this.Storage = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.Height = 'Height' in params ? params.Height : null;
        this.Width = 'Width' in params ? params.Width : null;
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.ImagePathSet = 'ImagePathSet' in params ? params.ImagePathSet : null;
        this.WebVttPath = 'WebVttPath' in params ? params.WebVttPath : null;

        if (params.Storage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.Storage)
            this.Storage = obj;
        }

    }
}

/**
 * The audio enhancement configuration.
 * @class
 */
class AudioEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * The audio noise reduction configuration.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AudioDenoiseConfig || null}
         */
        this.Denoise = null;

        /**
         * The audio separation configuration.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AudioSeparateConfig || null}
         */
        this.Separate = null;

        /**
         * The volume equalization configuration.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {VolumeBalanceConfig || null}
         */
        this.VolumeBalance = null;

        /**
         * The audio improvement configuration.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {AudioBeautifyConfig || null}
         */
        this.Beautify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.Denoise) {
            let obj = new AudioDenoiseConfig();
            obj.deserialize(params.Denoise)
            this.Denoise = obj;
        }

        if (params.Separate) {
            let obj = new AudioSeparateConfig();
            obj.deserialize(params.Separate)
            this.Separate = obj;
        }

        if (params.VolumeBalance) {
            let obj = new VolumeBalanceConfig();
            obj.deserialize(params.VolumeBalance)
            this.VolumeBalance = obj;
        }

        if (params.Beautify) {
            let obj = new AudioBeautifyConfig();
            obj.deserialize(params.Beautify)
            this.Beautify = obj;
        }

    }
}

/**
 * Face recognition result
 * @class
 */
class AiRecognitionTaskFaceResultItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of a figure.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Figure library type, indicating to which figure library the recognized figure belongs:
<li>Default: Default figure library;</li>
<li>UserDefine: Custom figure library.</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Name of a figure.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Result set of segments that contain a figure.
         * @type {Array.<AiRecognitionTaskFaceSegmentItem> || null}
         */
        this.SegmentSet = null;

        /**
         * The person’s gender.
<li>Male</li>
<li>Female</li>
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Gender = null;

        /**
         * The person’s birth date.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Birthday = null;

        /**
         * The person’s job or job title.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Profession = null;

        /**
         * The college the person graduated from.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.SchoolOfGraduation = null;

        /**
         * The person’s profile.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Abstract = null;

        /**
         * The person’s place of birth.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PlaceOfBirth = null;

        /**
         * Whether the person is a politician or artist.
<li>Politician</li>
<li>Artist</li>
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PersonType = null;

        /**
         * Sensitivity
<li>Normal</li>
<li>Sensitive</li>
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * The screenshot URL.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Url = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.SegmentSet) {
            this.SegmentSet = new Array();
            for (let z in params.SegmentSet) {
                let obj = new AiRecognitionTaskFaceSegmentItem();
                obj.deserialize(params.SegmentSet[z]);
                this.SegmentSet.push(obj);
            }
        }
        this.Gender = 'Gender' in params ? params.Gender : null;
        this.Birthday = 'Birthday' in params ? params.Birthday : null;
        this.Profession = 'Profession' in params ? params.Profession : null;
        this.SchoolOfGraduation = 'SchoolOfGraduation' in params ? params.SchoolOfGraduation : null;
        this.Abstract = 'Abstract' in params ? params.Abstract : null;
        this.PlaceOfBirth = 'PlaceOfBirth' in params ? params.PlaceOfBirth : null;
        this.PersonType = 'PersonType' in params ? params.PersonType : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Url = 'Url' in params ? params.Url : null;

    }
}

/**
 * The result of a live scheme's live recording task.
 * @class
 */
class LiveScheduleLiveRecordTaskResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: `PROCESSING`, `SUCCESS`, `FAIL`.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value indicates the task has failed. For details, see [Error Codes](https://www.tencentcloud.com/document/product/1041/40249).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. `0` indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of a live recording task.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {LiveRecordTaskInput || null}
         */
        this.Input = null;

        /**
         * The output of a live recording task.
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {LiveRecordResult || null}
         */
        this.Output = null;

        /**
         * The time when the task was started, in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.BeginProcessTime = null;

        /**
         * The time when the task was completed, in [ISO date format](https://intl.cloud.tencent.com/document/product/862/37710?from_cn_redirect=1#52).
Note: This field may return·null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.FinishTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new LiveRecordTaskInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new LiveRecordResult();
            obj.deserialize(params.Output)
            this.Output = obj;
        }
        this.BeginProcessTime = 'BeginProcessTime' in params ? params.BeginProcessTime : null;
        this.FinishTime = 'FinishTime' in params ? params.FinishTime : null;

    }
}

/**
 * The audio operations of a video editing/compositing task.
 * @class
 */
class ComposeAudioOperation extends  AbstractModel {
    constructor(){
        super();

        /**
         * The operation type. Valid values:
<li>`Volume`: Volume adjustment. </li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         *  The volume level. This parameter is valid if `Type` is `Volume`. Value range: 0–5. 
<li>If the parameter value is `0`, the video will be muted. </li>
<li>If the parameter value is smaller than 1, the volume will be reduced. </li>
<li>If the parameter value is `1`, the original volume will be kept. </li>
<li>If the parameter value is greater than 1, the volume will be increased. </li>
         * @type {number || null}
         */
        this.Volume = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Volume = 'Volume' in params ? params.Volume : null;

    }
}

/**
 * The translation result.
 * @class
 */
class AiRecognitionTaskTransTextResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task status. Valid values: PROCESSING, SUCCESS, FAIL.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * The error code. An empty string indicates the task is successful; any other value indicates the task has failed. For details, see [Error Codes](https://intl.cloud.tencent.com/document/product/1041/40249).
         * @type {string || null}
         */
        this.ErrCodeExt = null;

        /**
         * The error code. `0` indicates the task is successful; other values indicate the task has failed. This parameter is not recommended. Please use `ErrCodeExt` instead.
         * @type {number || null}
         */
        this.ErrCode = null;

        /**
         * The error message.
         * @type {string || null}
         */
        this.Message = null;

        /**
         * The input of the translation task.
         * @type {AiRecognitionTaskTransTextResultInput || null}
         */
        this.Input = null;

        /**
         * The output of the translation task.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskTransTextResultOutput || null}
         */
        this.Output = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ErrCodeExt = 'ErrCodeExt' in params ? params.ErrCodeExt : null;
        this.ErrCode = 'ErrCode' in params ? params.ErrCode : null;
        this.Message = 'Message' in params ? params.Message : null;

        if (params.Input) {
            let obj = new AiRecognitionTaskTransTextResultInput();
            obj.deserialize(params.Input)
            this.Input = obj;
        }

        if (params.Output) {
            let obj = new AiRecognitionTaskTransTextResultOutput();
            obj.deserialize(params.Output)
            this.Output = obj;
        }

    }
}

/**
 * Output of video editing task
 * @class
 */
class EditMediaTaskOutput extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target storage of edited file.
         * @type {TaskOutputStorage || null}
         */
        this.OutputStorage = null;

        /**
         * Path of edited video file.
         * @type {string || null}
         */
        this.Path = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.OutputStorage) {
            let obj = new TaskOutputStorage();
            obj.deserialize(params.OutputStorage)
            this.OutputStorage = obj;
        }
        this.Path = 'Path' in params ? params.Path : null;

    }
}

/**
 * The information of a highlight segment.
 * @class
 */
class HighlightSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The start time offset of the segment.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * The end time offset of the segment.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;

    }
}

/**
 * DeleteWatermarkTemplate response structure.
 * @class
 */
class DeleteWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Low-light enhancement configuration.
 * @class
 */
class LowLightEnhanceConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether to enable the feature. Valid values:
<li>ON</li>
<li>OFF</li>
Default value: ON.
         * @type {string || null}
         */
        this.Switch = null;

        /**
         * The strength. Valid values:
<li>normal</li>
Default value: normal.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * DescribeMediaMetaData request structure.
 * @class
 */
class DescribeMediaMetaDataRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Input information of file for metadata getting.
         * @type {MediaInputInfo || null}
         */
        this.InputInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InputInfo) {
            let obj = new MediaInputInfo();
            obj.deserialize(params.InputInfo)
            this.InputInfo = obj;
        }

    }
}

/**
 * Control parameter of intelligent frame-specific tagging task
 * @class
 */
class FrameTagConfigureInfoForUpdate extends  AbstractModel {
    constructor(){
        super();

        /**
         * Switch of intelligent frame-specific tagging task. Valid values:
<li>ON: enables intelligent frame-specific tagging task;</li>
<li>OFF: disables intelligent frame-specific tagging task.</li>
         * @type {string || null}
         */
        this.Switch = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Switch = 'Switch' in params ? params.Switch : null;

    }
}

/**
 * CreateImageSpriteTemplate response structure.
 * @class
 */
class CreateImageSpriteTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID of an image sprite generating template.
         * @type {number || null}
         */
        this.Definition = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.Definition = 'Definition' in params ? params.Definition : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeAIRecognitionTemplates request structure.
 * @class
 */
class DescribeAIRecognitionTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Unique ID filter of video content recognition templates. Array length limit: 10.
         * @type {Array.<number> || null}
         */
        this.Definitions = null;

        /**
         * Paging offset. Default value: 0.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of returned entries. Default value: 10. Maximum value: 50.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The filter for querying templates. If this parameter is left empty, both preset and custom templates are returned. Valid values:
* Preset
* Custom
         * @type {string || null}
         */
        this.Type = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Definitions = 'Definitions' in params ? params.Definitions : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * The translated segments.
 * @class
 */
class AiRecognitionTaskTransTextSegmentItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * The confidence score for a segment. Value range: 0-100.
         * @type {number || null}
         */
        this.Confidence = null;

        /**
         * The start time offset (seconds) of a segment.
         * @type {number || null}
         */
        this.StartTimeOffset = null;

        /**
         * The end time offset (seconds) of a segment.
         * @type {number || null}
         */
        this.EndTimeOffset = null;

        /**
         * The text transcript.
         * @type {string || null}
         */
        this.Text = null;

        /**
         * The translation.
         * @type {string || null}
         */
        this.Trans = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Confidence = 'Confidence' in params ? params.Confidence : null;
        this.StartTimeOffset = 'StartTimeOffset' in params ? params.StartTimeOffset : null;
        this.EndTimeOffset = 'EndTimeOffset' in params ? params.EndTimeOffset : null;
        this.Text = 'Text' in params ? params.Text : null;
        this.Trans = 'Trans' in params ? params.Trans : null;

    }
}

/**
 * ModifyWatermarkTemplate response structure.
 * @class
 */
class ModifyWatermarkTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Image watermark address. This field is valid only when `ImageTemplate.ImageContent` is non-empty.
         * @type {string || null}
         */
        this.ImageUrl = null;

        /**
         * The unique request ID, which is returned for each request. RequestId is required for locating a problem.
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
        this.ImageUrl = 'ImageUrl' in params ? params.ImageUrl : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Intelligent recognition result.
 * @class
 */
class AiRecognitionResult extends  AbstractModel {
    constructor(){
        super();

        /**
         * The task type. Valid values:
<li>FaceRecognition: Face recognition</li>
<li>AsrWordsRecognition: Speech keyword recognition</li>
<li>OcrWordsRecognition: Text keyword recognition</li>
<li>AsrFullTextRecognition: Full speech recognition</li>
<li>OcrFullTextRecognition: Full text recognition</li>
<li>TransTextRecognition: Speech translation</li>
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Face recognition result, which is valid when `Type` is 
 `FaceRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskFaceResult || null}
         */
        this.FaceTask = null;

        /**
         * Speech keyword recognition result, which is valid when `Type` is
 `AsrWordsRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrWordsResult || null}
         */
        this.AsrWordsTask = null;

        /**
         * Full speech recognition result, which is valid when `Type` is
 `AsrFullTextRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskAsrFullTextResult || null}
         */
        this.AsrFullTextTask = null;

        /**
         * Text keyword recognition result, which is valid when `Type` is
 `OcrWordsRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrWordsResult || null}
         */
        this.OcrWordsTask = null;

        /**
         * Full text recognition result, which is valid when `Type` is
 `OcrFullTextRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskOcrFullTextResult || null}
         */
        this.OcrFullTextTask = null;

        /**
         * The translation result. This parameter is valid only if `Type` is
 `TransTextRecognition`.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {AiRecognitionTaskTransTextResult || null}
         */
        this.TransTextTask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;

        if (params.FaceTask) {
            let obj = new AiRecognitionTaskFaceResult();
            obj.deserialize(params.FaceTask)
            this.FaceTask = obj;
        }

        if (params.AsrWordsTask) {
            let obj = new AiRecognitionTaskAsrWordsResult();
            obj.deserialize(params.AsrWordsTask)
            this.AsrWordsTask = obj;
        }

        if (params.AsrFullTextTask) {
            let obj = new AiRecognitionTaskAsrFullTextResult();
            obj.deserialize(params.AsrFullTextTask)
            this.AsrFullTextTask = obj;
        }

        if (params.OcrWordsTask) {
            let obj = new AiRecognitionTaskOcrWordsResult();
            obj.deserialize(params.OcrWordsTask)
            this.OcrWordsTask = obj;
        }

        if (params.OcrFullTextTask) {
            let obj = new AiRecognitionTaskOcrFullTextResult();
            obj.deserialize(params.OcrFullTextTask)
            this.OcrFullTextTask = obj;
        }

        if (params.TransTextTask) {
            let obj = new AiRecognitionTaskTransTextResult();
            obj.deserialize(params.TransTextTask)
            this.TransTextTask = obj;
        }

    }
}

module.exports = {
    ModifySnapshotByTimeOffsetTemplateResponse: ModifySnapshotByTimeOffsetTemplateResponse,
    ModifySampleSnapshotTemplateResponse: ModifySampleSnapshotTemplateResponse,
    ModifyWatermarkTemplateRequest: ModifyWatermarkTemplateRequest,
    AiRecognitionTaskAsrFullTextSegmentItem: AiRecognitionTaskAsrFullTextSegmentItem,
    UserDefineOcrTextReviewTemplateInfoForUpdate: UserDefineOcrTextReviewTemplateInfoForUpdate,
    FrameRateConfig: FrameRateConfig,
    OverrideTranscodeParameter: OverrideTranscodeParameter,
    AiAnalysisTaskClassificationInput: AiAnalysisTaskClassificationInput,
    SvgWatermarkInput: SvgWatermarkInput,
    WorkflowInfo: WorkflowInfo,
    CreateTranscodeTemplateRequest: CreateTranscodeTemplateRequest,
    ProcessLiveStreamResponse: ProcessLiveStreamResponse,
    MediaAiAnalysisHighlightItem: MediaAiAnalysisHighlightItem,
    DescribeAnimatedGraphicsTemplatesRequest: DescribeAnimatedGraphicsTemplatesRequest,
    AiReviewTaskProhibitedAsrResult: AiReviewTaskProhibitedAsrResult,
    AdaptiveDynamicStreamingTemplate: AdaptiveDynamicStreamingTemplate,
    DeleteAnimatedGraphicsTemplateResponse: DeleteAnimatedGraphicsTemplateResponse,
    AiReviewTaskProhibitedOcrResult: AiReviewTaskProhibitedOcrResult,
    AiRecognitionTaskAsrFullTextResultOutput: AiRecognitionTaskAsrFullTextResultOutput,
    AiReviewProhibitedOcrTaskOutput: AiReviewProhibitedOcrTaskOutput,
    DeleteScheduleResponse: DeleteScheduleResponse,
    ManageTaskResponse: ManageTaskResponse,
    DeleteWorkflowRequest: DeleteWorkflowRequest,
    AwsS3FileUploadTrigger: AwsS3FileUploadTrigger,
    AiAnalysisTaskCoverOutput: AiAnalysisTaskCoverOutput,
    NumberFormat: NumberFormat,
    ModifySampleSnapshotTemplateRequest: ModifySampleSnapshotTemplateRequest,
    AiReviewPoliticalOcrTaskInput: AiReviewPoliticalOcrTaskInput,
    EnhanceConfig: EnhanceConfig,
    MediaInputInfo: MediaInputInfo,
    CreateWorkflowRequest: CreateWorkflowRequest,
    OcrWordsConfigureInfo: OcrWordsConfigureInfo,
    RawWatermarkParameter: RawWatermarkParameter,
    AiReviewTaskPoliticalOcrResult: AiReviewTaskPoliticalOcrResult,
    ManageTaskRequest: ManageTaskRequest,
    PoliticalOcrReviewTemplateInfo: PoliticalOcrReviewTemplateInfo,
    CreateImageSpriteTemplateRequest: CreateImageSpriteTemplateRequest,
    MediaSnapshotByTimePicInfoItem: MediaSnapshotByTimePicInfoItem,
    UserDefineFaceReviewTemplateInfo: UserDefineFaceReviewTemplateInfo,
    ContentReviewTemplateItem: ContentReviewTemplateItem,
    DeleteAIRecognitionTemplateResponse: DeleteAIRecognitionTemplateResponse,
    VideoEnhanceConfig: VideoEnhanceConfig,
    DeleteContentReviewTemplateRequest: DeleteContentReviewTemplateRequest,
    AiReviewPoliticalTaskInput: AiReviewPoliticalTaskInput,
    ModifyScheduleRequest: ModifyScheduleRequest,
    DescribePersonSamplesRequest: DescribePersonSamplesRequest,
    ClassificationConfigureInfo: ClassificationConfigureInfo,
    MediaAiAnalysisClassificationItem: MediaAiAnalysisClassificationItem,
    ModifyWordSampleResponse: ModifyWordSampleResponse,
    AudioTemplateInfoForUpdate: AudioTemplateInfoForUpdate,
    SuperResolutionConfig: SuperResolutionConfig,
    DeletePersonSampleRequest: DeletePersonSampleRequest,
    AiRecognitionTaskAsrWordsSegmentItem: AiRecognitionTaskAsrWordsSegmentItem,
    ParseLiveStreamProcessNotificationResponse: ParseLiveStreamProcessNotificationResponse,
    AiRecognitionTaskInput: AiRecognitionTaskInput,
    ComposeMediaConfig: ComposeMediaConfig,
    ExecuteFunctionResponse: ExecuteFunctionResponse,
    CoverConfigureInfo: CoverConfigureInfo,
    AIRecognitionTemplateItem: AIRecognitionTemplateItem,
    AiReviewPornAsrTaskInput: AiReviewPornAsrTaskInput,
    AiRecognitionTaskFaceResult: AiRecognitionTaskFaceResult,
    CreateAdaptiveDynamicStreamingTemplateRequest: CreateAdaptiveDynamicStreamingTemplateRequest,
    TerrorismImgReviewTemplateInfoForUpdate: TerrorismImgReviewTemplateInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultOutput: AiRecognitionTaskOcrFullTextResultOutput,
    AiAnalysisTaskHighlightResult: AiAnalysisTaskHighlightResult,
    DeleteAIAnalysisTemplateResponse: DeleteAIAnalysisTemplateResponse,
    TextWatermarkTemplateInputForUpdate: TextWatermarkTemplateInputForUpdate,
    AiReviewTerrorismOcrTaskInput: AiReviewTerrorismOcrTaskInput,
    AiRecognitionTaskOcrWordsResultInput: AiRecognitionTaskOcrWordsResultInput,
    DeleteWorkflowResponse: DeleteWorkflowResponse,
    QualityControlResult: QualityControlResult,
    AiReviewPornTaskInput: AiReviewPornTaskInput,
    HdrConfig: HdrConfig,
    ScheduleTask: ScheduleTask,
    CreatePersonSampleRequest: CreatePersonSampleRequest,
    MediaAiAnalysisCoverItem: MediaAiAnalysisCoverItem,
    CosInputInfo: CosInputInfo,
    CreateScheduleResponse: CreateScheduleResponse,
    TagConfigureInfo: TagConfigureInfo,
    AiRecognitionTaskOcrWordsResultOutput: AiRecognitionTaskOcrWordsResultOutput,
    AiSampleFaceInfo: AiSampleFaceInfo,
    AudioSeparateConfig: AudioSeparateConfig,
    DeleteAIRecognitionTemplateRequest: DeleteAIRecognitionTemplateRequest,
    AiAnalysisTaskCoverResult: AiAnalysisTaskCoverResult,
    AudioBeautifyConfig: AudioBeautifyConfig,
    EnableWorkflowRequest: EnableWorkflowRequest,
    AiAnalysisTaskClassificationOutput: AiAnalysisTaskClassificationOutput,
    ModifyTranscodeTemplateRequest: ModifyTranscodeTemplateRequest,
    EditMediaTaskInput: EditMediaTaskInput,
    ComposeTransitionOperation: ComposeTransitionOperation,
    UserDefineAsrTextReviewTemplateInfo: UserDefineAsrTextReviewTemplateInfo,
    ComposeTrackTime: ComposeTrackTime,
    AiAnalysisTaskFrameTagOutput: AiAnalysisTaskFrameTagOutput,
    MediaProcessTaskAdaptiveDynamicStreamingResult: MediaProcessTaskAdaptiveDynamicStreamingResult,
    OcrWordsConfigureInfoForUpdate: OcrWordsConfigureInfoForUpdate,
    WatermarkTemplate: WatermarkTemplate,
    ActivityPara: ActivityPara,
    TextWatermarkTemplateInput: TextWatermarkTemplateInput,
    ModifyAIAnalysisTemplateResponse: ModifyAIAnalysisTemplateResponse,
    DescribeWordSamplesResponse: DescribeWordSamplesResponse,
    DescribeAIRecognitionTemplatesResponse: DescribeAIRecognitionTemplatesResponse,
    ScratchRepairConfig: ScratchRepairConfig,
    LiveStreamAiReviewResultInfo: LiveStreamAiReviewResultInfo,
    EditMediaResponse: EditMediaResponse,
    PoliticalOcrReviewTemplateInfoForUpdate: PoliticalOcrReviewTemplateInfoForUpdate,
    AudioDenoiseConfig: AudioDenoiseConfig,
    PornAsrReviewTemplateInfoForUpdate: PornAsrReviewTemplateInfoForUpdate,
    DescribeSnapshotByTimeOffsetTemplatesRequest: DescribeSnapshotByTimeOffsetTemplatesRequest,
    ScheduleRecognitionTaskResult: ScheduleRecognitionTaskResult,
    ComposeTargetInfo: ComposeTargetInfo,
    MediaProcessTaskInput: MediaProcessTaskInput,
    DisableScheduleRequest: DisableScheduleRequest,
    CosOutputStorage: CosOutputStorage,
    AiRecognitionTaskFaceSegmentItem: AiRecognitionTaskFaceSegmentItem,
    ProcessMediaResponse: ProcessMediaResponse,
    CreateWordSamplesResponse: CreateWordSamplesResponse,
    ClassificationConfigureInfoForUpdate: ClassificationConfigureInfoForUpdate,
    CreateScheduleRequest: CreateScheduleRequest,
    ParseNotificationRequest: ParseNotificationRequest,
    LiveRecordTaskInput: LiveRecordTaskInput,
    CreateWordSamplesRequest: CreateWordSamplesRequest,
    PoliticalAsrReviewTemplateInfoForUpdate: PoliticalAsrReviewTemplateInfoForUpdate,
    AiSampleFaceOperation: AiSampleFaceOperation,
    SvgWatermarkInputForUpdate: SvgWatermarkInputForUpdate,
    AiReviewTaskTerrorismOcrResult: AiReviewTaskTerrorismOcrResult,
    AiRecognitionTaskOcrWordsResult: AiRecognitionTaskOcrWordsResult,
    PornAsrReviewTemplateInfo: PornAsrReviewTemplateInfo,
    ComposeVideoStream: ComposeVideoStream,
    ProhibitedAsrReviewTemplateInfoForUpdate: ProhibitedAsrReviewTemplateInfoForUpdate,
    DisableScheduleResponse: DisableScheduleResponse,
    ModifyAnimatedGraphicsTemplateResponse: ModifyAnimatedGraphicsTemplateResponse,
    AiAnalysisTaskFrameTagResult: AiAnalysisTaskFrameTagResult,
    DeleteAdaptiveDynamicStreamingTemplateRequest: DeleteAdaptiveDynamicStreamingTemplateRequest,
    AiRecognitionTaskOcrFullTextSegmentItem: AiRecognitionTaskOcrFullTextSegmentItem,
    EditMediaOutputConfig: EditMediaOutputConfig,
    AiQualityControlTaskInput: AiQualityControlTaskInput,
    AiReviewPornAsrTaskOutput: AiReviewPornAsrTaskOutput,
    ComposeTransitionItem: ComposeTransitionItem,
    DeleteAIAnalysisTemplateRequest: DeleteAIAnalysisTemplateRequest,
    EditMediaRequest: EditMediaRequest,
    S3InputInfo: S3InputInfo,
    MediaProcessTaskImageSpriteResult: MediaProcessTaskImageSpriteResult,
    DescribeAdaptiveDynamicStreamingTemplatesResponse: DescribeAdaptiveDynamicStreamingTemplatesResponse,
    MediaContentReviewOcrTextSegmentItem: MediaContentReviewOcrTextSegmentItem,
    UrlInputInfo: UrlInputInfo,
    DescribeAdaptiveDynamicStreamingTemplatesRequest: DescribeAdaptiveDynamicStreamingTemplatesRequest,
    ImageWatermarkInput: ImageWatermarkInput,
    LiveRecordResult: LiveRecordResult,
    AsrFullTextConfigureInfoForUpdate: AsrFullTextConfigureInfoForUpdate,
    LiveRecordFile: LiveRecordFile,
    ComposeSourceMedia: ComposeSourceMedia,
    CreatePersonSampleResponse: CreatePersonSampleResponse,
    CreateContentReviewTemplateResponse: CreateContentReviewTemplateResponse,
    ProhibitedConfigureInfoForUpdate: ProhibitedConfigureInfoForUpdate,
    ComposeEmptyItem: ComposeEmptyItem,
    TagConfigureInfoForUpdate: TagConfigureInfoForUpdate,
    DeleteWordSamplesRequest: DeleteWordSamplesRequest,
    EnableScheduleRequest: EnableScheduleRequest,
    RawTranscodeParameter: RawTranscodeParameter,
    LiveStreamTaskNotifyConfig: LiveStreamTaskNotifyConfig,
    VideoTemplateInfo: VideoTemplateInfo,
    ComposeSubtitleStyle: ComposeSubtitleStyle,
    PornOcrReviewTemplateInfoForUpdate: PornOcrReviewTemplateInfoForUpdate,
    AiReviewTaskPornOcrResult: AiReviewTaskPornOcrResult,
    ModifyContentReviewTemplateResponse: ModifyContentReviewTemplateResponse,
    DescribeWatermarkTemplatesRequest: DescribeWatermarkTemplatesRequest,
    TaskOutputStorage: TaskOutputStorage,
    ModifyAIAnalysisTemplateRequest: ModifyAIAnalysisTemplateRequest,
    UserDefineConfigureInfo: UserDefineConfigureInfo,
    ColorEnhanceConfig: ColorEnhanceConfig,
    ComposeAudioItem: ComposeAudioItem,
    AiReviewPornOcrTaskInput: AiReviewPornOcrTaskInput,
    LiveScheduleTask: LiveScheduleTask,
    MediaSnapshotByTimeOffsetItem: MediaSnapshotByTimeOffsetItem,
    ModifyAdaptiveDynamicStreamingTemplateRequest: ModifyAdaptiveDynamicStreamingTemplateRequest,
    MediaAnimatedGraphicsItem: MediaAnimatedGraphicsItem,
    ModifyWordSampleRequest: ModifyWordSampleRequest,
    MediaProcessTaskAnimatedGraphicResult: MediaProcessTaskAnimatedGraphicResult,
    AiAnalysisTaskTagResult: AiAnalysisTaskTagResult,
    AiAnalysisTaskTagOutput: AiAnalysisTaskTagOutput,
    AiAnalysisTaskHighlightOutput: AiAnalysisTaskHighlightOutput,
    ProcessMediaRequest: ProcessMediaRequest,
    AiRecognitionTaskOcrFullTextResult: AiRecognitionTaskOcrFullTextResult,
    ComposeVideoItem: ComposeVideoItem,
    MediaProcessTaskSnapshotByTimeOffsetResult: MediaProcessTaskSnapshotByTimeOffsetResult,
    AiRecognitionTaskTransTextResultInput: AiRecognitionTaskTransTextResultInput,
    DescribeSchedulesResponse: DescribeSchedulesResponse,
    ImageQualityEnhanceConfig: ImageQualityEnhanceConfig,
    AiSampleWord: AiSampleWord,
    AiRecognitionTaskAsrFullTextResultInput: AiRecognitionTaskAsrFullTextResultInput,
    AiRecognitionTaskAsrWordsResultOutput: AiRecognitionTaskAsrWordsResultOutput,
    LiveStreamOcrWordsRecognitionResult: LiveStreamOcrWordsRecognitionResult,
    LiveStreamProcessErrorInfo: LiveStreamProcessErrorInfo,
    ModifyAdaptiveDynamicStreamingTemplateResponse: ModifyAdaptiveDynamicStreamingTemplateResponse,
    MediaProcessTaskTranscodeResult: MediaProcessTaskTranscodeResult,
    SnapshotByTimeOffsetTaskInput: SnapshotByTimeOffsetTaskInput,
    ImageSpriteTaskInput: ImageSpriteTaskInput,
    DeleteContentReviewTemplateResponse: DeleteContentReviewTemplateResponse,
    ImageWatermarkTemplate: ImageWatermarkTemplate,
    AsrWordsConfigureInfo: AsrWordsConfigureInfo,
    LiveStreamAsrWordsRecognitionResult: LiveStreamAsrWordsRecognitionResult,
    AiSamplePerson: AiSamplePerson,
    SimpleAesDrm: SimpleAesDrm,
    DescribeWorkflowsResponse: DescribeWorkflowsResponse,
    AsrWordsConfigureInfoForUpdate: AsrWordsConfigureInfoForUpdate,
    DeleteImageSpriteTemplateResponse: DeleteImageSpriteTemplateResponse,
    DescribeContentReviewTemplatesResponse: DescribeContentReviewTemplatesResponse,
    TEHDConfig: TEHDConfig,
    AnimatedGraphicsTemplate: AnimatedGraphicsTemplate,
    WorkflowTrigger: WorkflowTrigger,
    LiveStreamAiRecognitionResultInfo: LiveStreamAiRecognitionResultInfo,
    LiveStreamAiReviewImagePoliticalResult: LiveStreamAiReviewImagePoliticalResult,
    TerrorismOcrReviewTemplateInfoForUpdate: TerrorismOcrReviewTemplateInfoForUpdate,
    UserDefineAsrTextReviewTemplateInfoForUpdate: UserDefineAsrTextReviewTemplateInfoForUpdate,
    ModifyImageSpriteTemplateResponse: ModifyImageSpriteTemplateResponse,
    CreateWatermarkTemplateRequest: CreateWatermarkTemplateRequest,
    ScheduleAnalysisTaskResult: ScheduleAnalysisTaskResult,
    ComposeMediaItem: ComposeMediaItem,
    ScheduleQualityControlTaskResult: ScheduleQualityControlTaskResult,
    TerrorismConfigureInfoForUpdate: TerrorismConfigureInfoForUpdate,
    LiveActivityResItem: LiveActivityResItem,
    EnableScheduleResponse: EnableScheduleResponse,
    DeleteAdaptiveDynamicStreamingTemplateResponse: DeleteAdaptiveDynamicStreamingTemplateResponse,
    AnimatedGraphicTaskInput: AnimatedGraphicTaskInput,
    MosaicInput: MosaicInput,
    AIAnalysisTemplateItem: AIAnalysisTemplateItem,
    HeadTailParameter: HeadTailParameter,
    RawImageWatermarkInput: RawImageWatermarkInput,
    DescribeImageSpriteTemplatesRequest: DescribeImageSpriteTemplatesRequest,
    AiSampleTagOperation: AiSampleTagOperation,
    CreateAIRecognitionTemplateResponse: CreateAIRecognitionTemplateResponse,
    DeleteTranscodeTemplateRequest: DeleteTranscodeTemplateRequest,
    AiReviewTerrorismTaskOutput: AiReviewTerrorismTaskOutput,
    ProhibitedConfigureInfo: ProhibitedConfigureInfo,
    AiReviewTerrorismOcrTaskOutput: AiReviewTerrorismOcrTaskOutput,
    AiAnalysisResult: AiAnalysisResult,
    DescribeAIAnalysisTemplatesRequest: DescribeAIAnalysisTemplatesRequest,
    AiRecognitionTaskOcrWordsResultItem: AiRecognitionTaskOcrWordsResultItem,
    DeleteSampleSnapshotTemplateResponse: DeleteSampleSnapshotTemplateResponse,
    AiAnalysisTaskTagInput: AiAnalysisTaskTagInput,
    ResetWorkflowRequest: ResetWorkflowRequest,
    AiReviewTaskTerrorismResult: AiReviewTaskTerrorismResult,
    LiveStreamAiReviewVoicePornResult: LiveStreamAiReviewVoicePornResult,
    MediaContentReviewAsrTextSegmentItem: MediaContentReviewAsrTextSegmentItem,
    MediaContentReviewPoliticalSegmentItem: MediaContentReviewPoliticalSegmentItem,
    DeletePersonSampleResponse: DeletePersonSampleResponse,
    CreateSnapshotByTimeOffsetTemplateResponse: CreateSnapshotByTimeOffsetTemplateResponse,
    ModifyContentReviewTemplateRequest: ModifyContentReviewTemplateRequest,
    ImageWatermarkInputForUpdate: ImageWatermarkInputForUpdate,
    AiContentReviewTaskInput: AiContentReviewTaskInput,
    DeleteScheduleRequest: DeleteScheduleRequest,
    CreateAdaptiveDynamicStreamingTemplateResponse: CreateAdaptiveDynamicStreamingTemplateResponse,
    DeleteSampleSnapshotTemplateRequest: DeleteSampleSnapshotTemplateRequest,
    AiAnalysisTaskInput: AiAnalysisTaskInput,
    ImageSpriteTemplate: ImageSpriteTemplate,
    AiRecognitionTaskOcrFullTextSegmentTextItem: AiRecognitionTaskOcrFullTextSegmentTextItem,
    QualityControlItem: QualityControlItem,
    LiveStreamAsrFullTextRecognitionResult: LiveStreamAsrFullTextRecognitionResult,
    AiReviewPornOcrTaskOutput: AiReviewPornOcrTaskOutput,
    CreateSampleSnapshotTemplateResponse: CreateSampleSnapshotTemplateResponse,
    AiAnalysisTaskHighlightInput: AiAnalysisTaskHighlightInput,
    ProhibitedAsrReviewTemplateInfo: ProhibitedAsrReviewTemplateInfo,
    AiReviewPoliticalAsrTaskInput: AiReviewPoliticalAsrTaskInput,
    MediaAiAnalysisTagItem: MediaAiAnalysisTagItem,
    TranscodeTemplate: TranscodeTemplate,
    PornOcrReviewTemplateInfo: PornOcrReviewTemplateInfo,
    AiReviewTaskPoliticalAsrResult: AiReviewTaskPoliticalAsrResult,
    SubtitleTemplate: SubtitleTemplate,
    LiveStreamProcessTask: LiveStreamProcessTask,
    AiReviewProhibitedAsrTaskInput: AiReviewProhibitedAsrTaskInput,
    MediaContentReviewSegmentItem: MediaContentReviewSegmentItem,
    TerrorismOcrReviewTemplateInfo: TerrorismOcrReviewTemplateInfo,
    AiReviewTaskPornResult: AiReviewTaskPornResult,
    AiReviewProhibitedAsrTaskOutput: AiReviewProhibitedAsrTaskOutput,
    LiveStreamFaceRecognitionResult: LiveStreamFaceRecognitionResult,
    DescribeSampleSnapshotTemplatesRequest: DescribeSampleSnapshotTemplatesRequest,
    CoverConfigureInfoForUpdate: CoverConfigureInfoForUpdate,
    DisableWorkflowResponse: DisableWorkflowResponse,
    AiAnalysisTaskClassificationResult: AiAnalysisTaskClassificationResult,
    PoliticalImgReviewTemplateInfoForUpdate: PoliticalImgReviewTemplateInfoForUpdate,
    UserDefineOcrTextReviewTemplateInfo: UserDefineOcrTextReviewTemplateInfo,
    AdaptiveStreamTemplate: AdaptiveStreamTemplate,
    TranscodeTaskInput: TranscodeTaskInput,
    ModifyAIRecognitionTemplateRequest: ModifyAIRecognitionTemplateRequest,
    ParseNotificationResponse: ParseNotificationResponse,
    ComposeImageOperation: ComposeImageOperation,
    ActivityResult: ActivityResult,
    ResetWorkflowResponse: ResetWorkflowResponse,
    CreateAIAnalysisTemplateResponse: CreateAIAnalysisTemplateResponse,
    MediaProcessTaskSampleSnapshotResult: MediaProcessTaskSampleSnapshotResult,
    UserDefineConfigureInfoForUpdate: UserDefineConfigureInfoForUpdate,
    S3OutputStorage: S3OutputStorage,
    CosFileUploadTrigger: CosFileUploadTrigger,
    AiReviewPoliticalAsrTaskOutput: AiReviewPoliticalAsrTaskOutput,
    TEHDConfigForUpdate: TEHDConfigForUpdate,
    ModifyPersonSampleRequest: ModifyPersonSampleRequest,
    AudioTemplateInfo: AudioTemplateInfo,
    AsrFullTextConfigureInfo: AsrFullTextConfigureInfo,
    ArtifactRepairConfig: ArtifactRepairConfig,
    CreateAIRecognitionTemplateRequest: CreateAIRecognitionTemplateRequest,
    DescribeTaskDetailRequest: DescribeTaskDetailRequest,
    ComposeCanvas: ComposeCanvas,
    AiReviewPornTaskOutput: AiReviewPornTaskOutput,
    CreateWorkflowResponse: CreateWorkflowResponse,
    AiRecognitionTaskAsrFullTextResult: AiRecognitionTaskAsrFullTextResult,
    ModifyAIRecognitionTemplateResponse: ModifyAIRecognitionTemplateResponse,
    PoliticalImgReviewTemplateInfo: PoliticalImgReviewTemplateInfo,
    PoliticalConfigureInfo: PoliticalConfigureInfo,
    ModifyAnimatedGraphicsTemplateRequest: ModifyAnimatedGraphicsTemplateRequest,
    AiRecognitionTaskOcrWordsSegmentItem: AiRecognitionTaskOcrWordsSegmentItem,
    MediaProcessTaskResult: MediaProcessTaskResult,
    DeleteWordSamplesResponse: DeleteWordSamplesResponse,
    LiveStreamTransTextRecognitionResult: LiveStreamTransTextRecognitionResult,
    WatermarkInput: WatermarkInput,
    EnableWorkflowResponse: EnableWorkflowResponse,
    Activity: Activity,
    AiSampleWordInfo: AiSampleWordInfo,
    AdaptiveDynamicStreamingInfoItem: AdaptiveDynamicStreamingInfoItem,
    ComposeMediaTrack: ComposeMediaTrack,
    ProhibitedOcrReviewTemplateInfo: ProhibitedOcrReviewTemplateInfo,
    LiveStreamOcrFullTextRecognitionResult: LiveStreamOcrFullTextRecognitionResult,
    ScheduleReviewTaskResult: ScheduleReviewTaskResult,
    ModifyTranscodeTemplateResponse: ModifyTranscodeTemplateResponse,
    MediaMetaData: MediaMetaData,
    ComposeStyles: ComposeStyles,
    VideoTemplateInfoForUpdate: VideoTemplateInfoForUpdate,
    CreateContentReviewTemplateRequest: CreateContentReviewTemplateRequest,
    DescribeContentReviewTemplatesRequest: DescribeContentReviewTemplatesRequest,
    AdaptiveDynamicStreamingTaskInput: AdaptiveDynamicStreamingTaskInput,
    DescribeImageSpriteTemplatesResponse: DescribeImageSpriteTemplatesResponse,
    TaskNotifyConfig: TaskNotifyConfig,
    FaceEnhanceConfig: FaceEnhanceConfig,
    LiveStreamAiReviewImagePornResult: LiveStreamAiReviewImagePornResult,
    AiAnalysisTaskFrameTagInput: AiAnalysisTaskFrameTagInput,
    MediaAiAnalysisFrameTagSegmentItem: MediaAiAnalysisFrameTagSegmentItem,
    AiRecognitionTaskAsrWordsResultItem: AiRecognitionTaskAsrWordsResultItem,
    DescribeTaskDetailResponse: DescribeTaskDetailResponse,
    LiveStreamAiRecognitionResultItem: LiveStreamAiRecognitionResultItem,
    DeleteImageSpriteTemplateRequest: DeleteImageSpriteTemplateRequest,
    AiAnalysisTaskCoverInput: AiAnalysisTaskCoverInput,
    AiSampleFailFaceInfo: AiSampleFailFaceInfo,
    UserDefineFaceReviewTemplateInfoForUpdate: UserDefineFaceReviewTemplateInfoForUpdate,
    SharpEnhanceConfig: SharpEnhanceConfig,
    OcrFullTextConfigureInfoForUpdate: OcrFullTextConfigureInfoForUpdate,
    AiRecognitionTaskOcrFullTextResultInput: AiRecognitionTaskOcrFullTextResultInput,
    DescribeTasksResponse: DescribeTasksResponse,
    AiRecognitionTaskFaceResultInput: AiRecognitionTaskFaceResultInput,
    VolumeBalanceConfig: VolumeBalanceConfig,
    AiReviewPoliticalTaskOutput: AiReviewPoliticalTaskOutput,
    AiReviewTaskPoliticalResult: AiReviewTaskPoliticalResult,
    AiRecognitionTaskTransTextResultOutput: AiRecognitionTaskTransTextResultOutput,
    ModifySnapshotByTimeOffsetTemplateRequest: ModifySnapshotByTimeOffsetTemplateRequest,
    LiveStreamAiReviewResultItem: LiveStreamAiReviewResultItem,
    TaskSimpleInfo: TaskSimpleInfo,
    DescribeSnapshotByTimeOffsetTemplatesResponse: DescribeSnapshotByTimeOffsetTemplatesResponse,
    MediaVideoStreamItem: MediaVideoStreamItem,
    SnapshotByTimeOffsetTemplate: SnapshotByTimeOffsetTemplate,
    DeleteSnapshotByTimeOffsetTemplateResponse: DeleteSnapshotByTimeOffsetTemplateResponse,
    ProhibitedOcrReviewTemplateInfoForUpdate: ProhibitedOcrReviewTemplateInfoForUpdate,
    DescribeTasksRequest: DescribeTasksRequest,
    FaceConfigureInfoForUpdate: FaceConfigureInfoForUpdate,
    CreateTranscodeTemplateResponse: CreateTranscodeTemplateResponse,
    AiRecognitionTaskAsrWordsResultInput: AiRecognitionTaskAsrWordsResultInput,
    CreateAIAnalysisTemplateRequest: CreateAIAnalysisTemplateRequest,
    AiReviewTerrorismTaskInput: AiReviewTerrorismTaskInput,
    DescribeWorkflowsRequest: DescribeWorkflowsRequest,
    DescribeSchedulesRequest: DescribeSchedulesRequest,
    MediaAudioStreamItem: MediaAudioStreamItem,
    LiveStreamAiReviewImageTerrorismResult: LiveStreamAiReviewImageTerrorismResult,
    ProcessLiveStreamRequest: ProcessLiveStreamRequest,
    ModifyImageSpriteTemplateRequest: ModifyImageSpriteTemplateRequest,
    AiReviewProhibitedOcrTaskInput: AiReviewProhibitedOcrTaskInput,
    DeleteWatermarkTemplateRequest: DeleteWatermarkTemplateRequest,
    ComposeSubtitleItem: ComposeSubtitleItem,
    DescribeWordSamplesRequest: DescribeWordSamplesRequest,
    AddOnSubtitle: AddOnSubtitle,
    AwsSQS: AwsSQS,
    PornConfigureInfoForUpdate: PornConfigureInfoForUpdate,
    QualityControlData: QualityControlData,
    CreateWatermarkTemplateResponse: CreateWatermarkTemplateResponse,
    DrmInfo: DrmInfo,
    DescribeSampleSnapshotTemplatesResponse: DescribeSampleSnapshotTemplatesResponse,
    ComposeImageItem: ComposeImageItem,
    DescribeMediaMetaDataResponse: DescribeMediaMetaDataResponse,
    AiContentReviewResult: AiContentReviewResult,
    LiveActivityResult: LiveActivityResult,
    TerrorismImgReviewTemplateInfo: TerrorismImgReviewTemplateInfo,
    DescribeTranscodeTemplatesRequest: DescribeTranscodeTemplatesRequest,
    SchedulesInfo: SchedulesInfo,
    DisableWorkflowRequest: DisableWorkflowRequest,
    PoliticalConfigureInfoForUpdate: PoliticalConfigureInfoForUpdate,
    DescribeWatermarkTemplatesResponse: DescribeWatermarkTemplatesResponse,
    CreateAnimatedGraphicsTemplateRequest: CreateAnimatedGraphicsTemplateRequest,
    FrameTagConfigureInfo: FrameTagConfigureInfo,
    ExecuteFunctionRequest: ExecuteFunctionRequest,
    ModifyPersonSampleResponse: ModifyPersonSampleResponse,
    DeleteTranscodeTemplateResponse: DeleteTranscodeTemplateResponse,
    MediaTranscodeItem: MediaTranscodeItem,
    MediaSampleSnapshotItem: MediaSampleSnapshotItem,
    DescribePersonSamplesResponse: DescribePersonSamplesResponse,
    ModifyScheduleResponse: ModifyScheduleResponse,
    PornConfigureInfo: PornConfigureInfo,
    VideoDenoiseConfig: VideoDenoiseConfig,
    DescribeAIAnalysisTemplatesResponse: DescribeAIAnalysisTemplatesResponse,
    CreateSnapshotByTimeOffsetTemplateRequest: CreateSnapshotByTimeOffsetTemplateRequest,
    ParseLiveStreamProcessNotificationRequest: ParseLiveStreamProcessNotificationRequest,
    AiRecognitionTaskAsrWordsResult: AiRecognitionTaskAsrWordsResult,
    CreateSampleSnapshotTemplateRequest: CreateSampleSnapshotTemplateRequest,
    WorkflowTask: WorkflowTask,
    AiReviewTaskPornAsrResult: AiReviewTaskPornAsrResult,
    EditMediaFileInfo: EditMediaFileInfo,
    ComposeAudioStream: ComposeAudioStream,
    FaceConfigureInfo: FaceConfigureInfo,
    AiRecognitionTaskFaceResultOutput: AiRecognitionTaskFaceResultOutput,
    PornImgReviewTemplateInfoForUpdate: PornImgReviewTemplateInfoForUpdate,
    EditMediaTask: EditMediaTask,
    PornImgReviewTemplateInfo: PornImgReviewTemplateInfo,
    AiReviewPoliticalOcrTaskOutput: AiReviewPoliticalOcrTaskOutput,
    OcrFullTextConfigureInfo: OcrFullTextConfigureInfo,
    DescribeTranscodeTemplatesResponse: DescribeTranscodeTemplatesResponse,
    DeleteAnimatedGraphicsTemplateRequest: DeleteAnimatedGraphicsTemplateRequest,
    DeleteSnapshotByTimeOffsetTemplateRequest: DeleteSnapshotByTimeOffsetTemplateRequest,
    DescribeAnimatedGraphicsTemplatesResponse: DescribeAnimatedGraphicsTemplatesResponse,
    MediaAiAnalysisFrameTagItem: MediaAiAnalysisFrameTagItem,
    ActivityResItem: ActivityResItem,
    SampleSnapshotTaskInput: SampleSnapshotTaskInput,
    TerrorismConfigureInfo: TerrorismConfigureInfo,
    PoliticalAsrReviewTemplateInfo: PoliticalAsrReviewTemplateInfo,
    CreateAnimatedGraphicsTemplateResponse: CreateAnimatedGraphicsTemplateResponse,
    SampleSnapshotTemplate: SampleSnapshotTemplate,
    MediaImageSpriteItem: MediaImageSpriteItem,
    AudioEnhanceConfig: AudioEnhanceConfig,
    AiRecognitionTaskFaceResultItem: AiRecognitionTaskFaceResultItem,
    LiveScheduleLiveRecordTaskResult: LiveScheduleLiveRecordTaskResult,
    ComposeAudioOperation: ComposeAudioOperation,
    AiRecognitionTaskTransTextResult: AiRecognitionTaskTransTextResult,
    EditMediaTaskOutput: EditMediaTaskOutput,
    HighlightSegmentItem: HighlightSegmentItem,
    DeleteWatermarkTemplateResponse: DeleteWatermarkTemplateResponse,
    LowLightEnhanceConfig: LowLightEnhanceConfig,
    DescribeMediaMetaDataRequest: DescribeMediaMetaDataRequest,
    FrameTagConfigureInfoForUpdate: FrameTagConfigureInfoForUpdate,
    CreateImageSpriteTemplateResponse: CreateImageSpriteTemplateResponse,
    DescribeAIRecognitionTemplatesRequest: DescribeAIRecognitionTemplatesRequest,
    AiRecognitionTaskTransTextSegmentItem: AiRecognitionTaskTransTextSegmentItem,
    ModifyWatermarkTemplateResponse: ModifyWatermarkTemplateResponse,
    AiRecognitionResult: AiRecognitionResult,

}
