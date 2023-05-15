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
const models = require("./models");
const AbstractClient = require('../../common/abstract_client')
const McuLayout = models.McuLayout;
const DescribeRelayUsageRequest = models.DescribeRelayUsageRequest;
const MixLayout = models.MixLayout;
const McuVideoParams = models.McuVideoParams;
const RemoveUserByStrRoomIdResponse = models.RemoveUserByStrRoomIdResponse;
const McuLayoutVolume = models.McuLayoutVolume;
const SetUserBlockedRequest = models.SetUserBlockedRequest;
const DescribeUserEventRequest = models.DescribeUserEventRequest;
const SetUserBlockedResponse = models.SetUserBlockedResponse;
const WaterMarkChar = models.WaterMarkChar;
const DescribeTrtcRoomUsageResponse = models.DescribeTrtcRoomUsageResponse;
const StopPublishCdnStreamResponse = models.StopPublishCdnStreamResponse;
const AbnormalEvent = models.AbnormalEvent;
const ScaleInfomation = models.ScaleInfomation;
const AgentParams = models.AgentParams;
const DescribeUserEventResponse = models.DescribeUserEventResponse;
const VideoEncode = models.VideoEncode;
const DescribeCallDetailInfoRequest = models.DescribeCallDetailInfoRequest;
const DescribeUserInfoRequest = models.DescribeUserInfoRequest;
const CloudStorage = models.CloudStorage;
const DescribeTrtcUsageResponse = models.DescribeTrtcUsageResponse;
const TimeValue = models.TimeValue;
const CreateCloudRecordingResponse = models.CreateCloudRecordingResponse;
const EventMessage = models.EventMessage;
const DescribeRoomInfoRequest = models.DescribeRoomInfoRequest;
const StorageParams = models.StorageParams;
const CloudVod = models.CloudVod;
const DescribeCallDetailInfoResponse = models.DescribeCallDetailInfoResponse;
const McuCustomCrop = models.McuCustomCrop;
const DescribeMixTranscodingUsageRequest = models.DescribeMixTranscodingUsageRequest;
const MixTranscodeParams = models.MixTranscodeParams;
const SubscribeStreamUserIds = models.SubscribeStreamUserIds;
const WaterMarkImage = models.WaterMarkImage;
const McuUserInfoParams = models.McuUserInfoParams;
const UserMediaStream = models.UserMediaStream;
const EventList = models.EventList;
const DescribeTrtcUsageRequest = models.DescribeTrtcUsageRequest;
const DescribeRoomInfoResponse = models.DescribeRoomInfoResponse;
const McuLayoutParams = models.McuLayoutParams;
const RecordParams = models.RecordParams;
const DescribeUserInfoResponse = models.DescribeUserInfoResponse;
const McuWaterMarkImage = models.McuWaterMarkImage;
const StartPublishCdnStreamResponse = models.StartPublishCdnStreamResponse;
const TrtcUsage = models.TrtcUsage;
const DescribeRelayUsageResponse = models.DescribeRelayUsageResponse;
const DescribeRecordingUsageResponse = models.DescribeRecordingUsageResponse;
const DescribeRecordingUsageRequest = models.DescribeRecordingUsageRequest;
const StorageFile = models.StorageFile;
const WaterMark = models.WaterMark;
const DescribeScaleInfoResponse = models.DescribeScaleInfoResponse;
const MixLayoutParams = models.MixLayoutParams;
const DescribeMixTranscodingUsageResponse = models.DescribeMixTranscodingUsageResponse;
const McuFeedBackRoomParams = models.McuFeedBackRoomParams;
const AudioEncode = models.AudioEncode;
const RemoveUserRequest = models.RemoveUserRequest;
const DismissRoomRequest = models.DismissRoomRequest;
const DescribeUnusualEventRequest = models.DescribeUnusualEventRequest;
const DescribeCloudRecordingRequest = models.DescribeCloudRecordingRequest;
const TencentVod = models.TencentVod;
const McuPassThrough = models.McuPassThrough;
const SetUserBlockedByStrRoomIdResponse = models.SetUserBlockedByStrRoomIdResponse;
const CreateCloudRecordingRequest = models.CreateCloudRecordingRequest;
const DeleteCloudRecordingResponse = models.DeleteCloudRecordingResponse;
const QualityData = models.QualityData;
const StopPublishCdnStreamRequest = models.StopPublishCdnStreamRequest;
const ModifyCloudRecordingRequest = models.ModifyCloudRecordingRequest;
const VideoParams = models.VideoParams;
const StartPublishCdnStreamRequest = models.StartPublishCdnStreamRequest;
const DismissRoomByStrRoomIdRequest = models.DismissRoomByStrRoomIdRequest;
const DeleteCloudRecordingRequest = models.DeleteCloudRecordingRequest;
const SetUserBlockedByStrRoomIdRequest = models.SetUserBlockedByStrRoomIdRequest;
const DescribeTrtcRoomUsageRequest = models.DescribeTrtcRoomUsageRequest;
const UserInformation = models.UserInformation;
const DescribeScaleInfoRequest = models.DescribeScaleInfoRequest;
const DismissRoomByStrRoomIdResponse = models.DismissRoomByStrRoomIdResponse;
const DescribeUnusualEventResponse = models.DescribeUnusualEventResponse;
const ModifyCloudRecordingResponse = models.ModifyCloudRecordingResponse;
const DescribeCloudRecordingResponse = models.DescribeCloudRecordingResponse;
const MixUserInfo = models.MixUserInfo;
const DismissRoomResponse = models.DismissRoomResponse;
const MaxVideoUser = models.MaxVideoUser;
const McuSeiParams = models.McuSeiParams;
const UpdatePublishCdnStreamResponse = models.UpdatePublishCdnStreamResponse;
const McuWaterMarkText = models.McuWaterMarkText;
const RemoveUserByStrRoomIdRequest = models.RemoveUserByStrRoomIdRequest;
const UpdatePublishCdnStreamRequest = models.UpdatePublishCdnStreamRequest;
const McuAudioParams = models.McuAudioParams;
const McuPublishCdnParam = models.McuPublishCdnParam;
const AudioParams = models.AudioParams;
const WaterMarkTimestamp = models.WaterMarkTimestamp;
const SingleSubscribeParams = models.SingleSubscribeParams;
const McuWaterMarkParams = models.McuWaterMarkParams;
const AbnormalExperience = models.AbnormalExperience;
const RoomState = models.RoomState;
const RemoveUserResponse = models.RemoveUserResponse;


/**
 * trtc client
 * @class
 */
class TrtcClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("trtc.tencentcloudapi.com", "2019-07-22", credential, region, profile);
    }
    
    /**
     * This API (the old `DescribeRoomInformation`) is used to query the rooms of an application (`SDKAppID`) in the last 14 days. Up to 100 records can be returned per call (10 are returned by default).
**Note**:
1. You can use this API to query historical data or for reconciliation purposes, but we do not recommend you use it for crucial business logic.
2. If you need to call this API, please upgrade the monitoring dashboard version to "Standard". For more details, please refer to: https://www.tencentcloud.com/document/product/647/54481.
     * @param {DescribeRoomInfoRequest} req
     * @param {function(string, DescribeRoomInfoResponse):void} cb
     * @public
     */
    DescribeRoomInfo(req, cb) {
        let resp = new DescribeRoomInfoResponse();
        this.request("DescribeRoomInfo", req, resp, cb);
    }

    /**
     * This API is used to query your TRTC audio/video duration.
- If the period queried is one day or shorter, the statistics returned are on a five-minute basis. If the period queried is longer than one day, the statistics returned are on a daily basis.
- The period queried per request cannot be longer than 31 days.
- If you query the statistics of the current day, the statistics returned may be inaccurate due to the delay in data collection.
- You can use this API to query your historical usage or to reconcile data, but we do not recommend you use it for crucial business logic.
- The rate limit of this API is five calls per second.
     * @param {DescribeTrtcUsageRequest} req
     * @param {function(string, DescribeTrtcUsageResponse):void} cb
     * @public
     */
    DescribeTrtcUsage(req, cb) {
        let resp = new DescribeTrtcUsageResponse();
        this.request("DescribeTrtcUsage", req, resp, cb);
    }

    /**
     * This API allows an anchor, room owner, admin to mute/unmute a user. It can be used on platforms including Android, iOS, Windows, macOS, web, and WeChat Mini Program. Use this API when the room ID is a string.
     * @param {SetUserBlockedByStrRoomIdRequest} req
     * @param {function(string, SetUserBlockedByStrRoomIdResponse):void} cb
     * @public
     */
    SetUserBlockedByStrRoomId(req, cb) {
        let resp = new SetUserBlockedByStrRoomIdResponse();
        this.request("SetUserBlockedByStrRoomId", req, resp, cb);
    }

    /**
     * This API is used to mix streams and relay the mixed stream to CDNs. You can use this API to do the following:
1. Publish (also known as "relay") the audio/video stream of one anchor to CDNs. For details, see example 2 (starting a task to relay the audio and video of a stream) and example 3 (starting a task to relay only the audio of a stream).
2. Mix the streams of multiple anchors in a room or in different rooms and publish the mixed stream to CDNs. You can use `AudioParams.SubscribeAudioList` to specify the users whose audios are mixed, and use `VideoParams.LayoutParams` to specify the layout of the anchors’ videos. For details, see example 1 (mixing streams and publishing the mixed stream to a CDN).
3. Mix multiple streams in a room according to a template and publish the mixed stream to CDNs. The TRTC backend will detect the change of anchors in the room and adjust the video layout automatically according to the stream mixing template. The following template types are supported:
     - Floating: The entire screen is covered by the video of the first user who enters the room, and the videos of other users are displayed as small windows in rows in the bottom-left corner in room entry sequence. The screen allows up to 4 rows of 4 small videos, which float over the large video. Up to 1 large and 15 small videos can be displayed.
     - Grid: The videos of all users split the screen evenly. The more the users, the smaller the video dimensions. Up to 16 videos are supported.
     - Screen sharing: This is designed for video conferencing and online education. The shared screen (or camera video of the anchor) is always displayed as the large video, which occupies the left half of the screen, and the videos of other users occupy the right half in up to two columns of up to eight small videos each. Up to 1 large video and 15 small videos can be displayed. If the upstream aspect ratio does not match the output, the large video on the left will be scaled and displayed in whole, while the small videos on the right will be cropped.
4. Publish audio/video streams to up to 10 CDNs at a time. You can use `PublishCdnParams.PublishCdnUrl` to specify the URLs of the CDNs to publish to. To publish to Tencent Cloud’s CDN, set `PublishCdnParams.IsTencentCdn` to 1.
5. Configure a server-side callback to have Tencent Cloud send relay status updates to your server in the form of HTTP/HTTPS POST requests. To use the callback for relay events, please contact Technical Support.
6. The API supports four regions: Guangzhou, Shanghai, Beijing, and Hong Kong. If you relay to regions outside the Chinese mainland, select Hong Kong.
 
Notes:
1. **Because On-Cloud MixTranscoding is a paid feature, calling this API will incur MixTranscoding fees. For details, see [Billing of MixTranscoding and Relay to CDN](https://intl.cloud.tencent.com/document/product/647/49446?from_cn_redirect=1).**
2. **Relaying to third-party CDNs will incur relaying fees. For details, see [Billing of MixTranscoding and Relay to CDN](https://intl.cloud.tencent.com/document/product/647/82155?from_cn_redirect=1).**

Others:
1. You need to first call `StartPublishCdnStream` to start a relay task and get the task ID before you can use the `UpdatePublishCdnStream` API to modify the task and `StopPublishCdnStream` to stop the task.
2. To ensure the stability of relaying, you cannot switch between relaying audio only, relaying audio and video, and relaying video only for the same task.
3. To ensure the stability of relaying, you cannot change the video codec, audio codec, audio sample rate, audio bitrate, or sound channels using the `UpdatePublishCdnStream` API. We recommend you pass in all the other parameters when calling `UpdatePublishCdnStream`. If you only want to enable/disable transcoding, make sure you pass in all the other parameters.
4. When you relay a single stream, specify both `AudioParams` and `VideoParams` to publish both audio and video, and specify only `AudioParams` to publish audio only. You cannot switch between the two modes during the relaying process. For `VideoParams`, set `Width`, `Height`, `Fps`, `Bitrate`, and `Gop` according to the actual settings used for publishing.
5. The `SequenceNumber` parameter is required when you call `UpdatePublishCdnStream` to change the relaying parameters. It ensures that multiple requests for the same relaying task are in the correct order. The value of `SequenceNumber` increases each time a new request is made for the same task. If `InternalError` is returned, try again using the same `SequenceNumber`. You don’t need to handle the `FailedOperation.OutdateRequest` error.
6. You can create a relay task before anchors enter a room, in which case you need to manually call `StopPublishCdnStream` to stop the task. If you don’t, after all the users whose streams are mixed leave the room, the TRTC backend will wait for the timeout period (`AgentParams.MaxIdleTime`) to elapse before stopping the relaying task.
     * @param {StartPublishCdnStreamRequest} req
     * @param {function(string, StartPublishCdnStreamResponse):void} cb
     * @public
     */
    StartPublishCdnStream(req, cb) {
        let resp = new StartPublishCdnStreamResponse();
        this.request("StartPublishCdnStream", req, resp, cb);
    }

    /**
     * This API (the old `DescribeCallDetail`) is used to query the user list and call quality data of a specified time range in the last 14 days. If `DataType` is not null, the data of up to six users during a period of up to one hour can be queried (the period can start and end on different days). If `DataType` is null, the data of up to 100 users can be returned per page (the value of `PageSize` cannot exceed 100). Six users are queried by default. The period queried cannot exceed four hours. This API is used to query call quality and is not recommended for billing purposes.
**Note**:
1. You can use this API to query historical data or for reconciliation purposes, but we do not recommend you use it for crucial business logic.
2. If you need to call this API, please upgrade the monitoring dashboard version to "Standard". For more details, please refer to: https://www.tencentcloud.com/document/product/647/54481.
     * @param {DescribeCallDetailInfoRequest} req
     * @param {function(string, DescribeCallDetailInfoResponse):void} cb
     * @public
     */
    DescribeCallDetailInfo(req, cb) {
        let resp = new DescribeCallDetailInfoResponse();
        this.request("DescribeCallDetailInfo", req, resp, cb);
    }

    /**
     * This API is used to disable or enable the audio and video of a user. It can be used by an anchor, room owner, or admin to block or unblock a user. It supports platforms including Android, iOS, Windows, macOS, web, and WeChat Mini Program. Use this API if the room ID is a number.
     * @param {SetUserBlockedRequest} req
     * @param {function(string, SetUserBlockedResponse):void} cb
     * @public
     */
    SetUserBlocked(req, cb) {
        let resp = new SetUserBlockedResponse();
        this.request("SetUserBlocked", req, resp, cb);
    }

    /**
     * This API is used to change the parameters of a relaying task.
Note: For details about how to use this API, see the `StartPublishCdnStream` document.
     * @param {UpdatePublishCdnStreamRequest} req
     * @param {function(string, UpdatePublishCdnStreamResponse):void} cb
     * @public
     */
    UpdatePublishCdnStream(req, cb) {
        let resp = new UpdatePublishCdnStreamResponse();
        this.request("UpdatePublishCdnStream", req, resp, cb);
    }

    /**
     * This API is used to remove a user from a room. It is applicable to scenarios where the anchor, room owner, or admin wants to kick out a user. It supports all platforms. For Android, iOS, Windows, and macOS, the TRTC SDK needs to be upgraded to v6.6 or above.
     * @param {RemoveUserRequest} req
     * @param {function(string, RemoveUserResponse):void} cb
     * @public
     */
    RemoveUser(req, cb) {
        let resp = new RemoveUserResponse();
        this.request("RemoveUser", req, resp, cb);
    }

    /**
     * This API is used to modify a recording task. It works only when a task is in progress. If the task has already ended when this API is called, an error will be returned. You need to specify all the parameters for each request instead of just the ones you want to modify.
     * @param {ModifyCloudRecordingRequest} req
     * @param {function(string, ModifyCloudRecordingResponse):void} cb
     * @public
     */
    ModifyCloudRecording(req, cb) {
        let resp = new ModifyCloudRecordingResponse();
        this.request("ModifyCloudRecording", req, resp, cb);
    }

    /**
     * This API (the old `DescribeDetailEvent`) is used to query the events of a call in the last 14 days, including user entry and exit, turning the camera on/off, etc.
**Note**:
1. You can use this API to query historical data or for reconciliation purposes, but we do not recommend you use it for crucial business logic.
2. If you need to call this API, please upgrade the monitoring dashboard version to "Standard". For more details, please refer to: https://www.tencentcloud.com/document/product/647/54481.
     * @param {DescribeUserEventRequest} req
     * @param {function(string, DescribeUserEventResponse):void} cb
     * @public
     */
    DescribeUserEvent(req, cb) {
        let resp = new DescribeUserEventResponse();
        this.request("DescribeUserEvent", req, resp, cb);
    }

    /**
     * API description:
This API is used to start an on-cloud recording task. It records the audio and video streams in a room and saves them to the specified cloud storage. You can use this API to record the streams in a room separately, or you can mix the streams first and then record the mixed stream.

You can use this API to perform the following operations:
* Specify the anchors whose streams you want or do not want to record by using the `RecordParams` parameter
* Specify the storage service you want to save recording files to by using the `StorageParams` parameter. Currently, you can save recording files to Tencent Cloud VOD or COS.
* Specify transcoding settings for mixed-stream recording, including video resolution, video bitrate, frame rate, and audio quality, by using `MixTranscodeParams`
* Specify the layout of different videos in mixed-stream recording mode or select an auto-arranged layout template

Key concepts:
* Single-stream recording: Record the audio and video of each subscribed user (`UserId`) in a room and save the recording files to the storage you specify.
Mixed-stream recording: Mix the audios and videos of subscribed users (`UserId`) in a room, record the mixed stream, and save the recording files to the storage you specify. After a recording task ends, you can go to the VOD console (https://console.tencentcloud.com/vod/media) or [COS console](https://console.cloud.tencent.com/cos/bucket) to view the recording files.
     * @param {CreateCloudRecordingRequest} req
     * @param {function(string, CreateCloudRecordingResponse):void} cb
     * @public
     */
    CreateCloudRecording(req, cb) {
        let resp = new CreateCloudRecordingResponse();
        this.request("CreateCloudRecording", req, resp, cb);
    }

    /**
     * This API (the old `DescribeHistoryScale`) is used to query the daily number of rooms and users of an application (`SDKAppID`) in the last 14 days. Data for the current day cannot be queried.
     * @param {DescribeScaleInfoRequest} req
     * @param {function(string, DescribeScaleInfoResponse):void} cb
     * @public
     */
    DescribeScaleInfo(req, cb) {
        let resp = new DescribeScaleInfoResponse();
        this.request("DescribeScaleInfo", req, resp, cb);
    }

    /**
     * This API is used to query your usage of TRTC’s relay to CDN service.
- If the period queried is one day or shorter, the statistics returned are on a five-minute basis. If the period queried is longer than one day, the statistics returned are on a daily basis.
- The period queried per request cannot be longer than 31 days.
- If you query the statistics of the current day, the statistics returned may be inaccurate due to the delay in data collection.
- You can use this API to query your historical usage or to reconcile data, but we do not recommend you use it for crucial business logic.
- The rate limit of this API is five calls per second.
     * @param {DescribeRelayUsageRequest} req
     * @param {function(string, DescribeRelayUsageResponse):void} cb
     * @public
     */
    DescribeRelayUsage(req, cb) {
        let resp = new DescribeRelayUsageResponse();
        this.request("DescribeRelayUsage", req, resp, cb);
    }

    /**
     * This API (the old `DescribeUserInformation`) is used to query the user list of a specified time range (up to four hours) in the last 14 days. The data of up to 100 users can be returned per page (six are returned by default).
**Note**:
1. You can use this API to query historical data or for reconciliation purposes, but we do not recommend you use it for crucial business logic.
2. If you need to call this API, please upgrade the monitoring dashboard version to "Standard". For more details, please refer to: https://www.tencentcloud.com/document/product/647/54481.
     * @param {DescribeUserInfoRequest} req
     * @param {function(string, DescribeUserInfoResponse):void} cb
     * @public
     */
    DescribeUserInfo(req, cb) {
        let resp = new DescribeUserInfoResponse();
        this.request("DescribeUserInfo", req, resp, cb);
    }

    /**
     * This API is used to query your TRTC recording usage.
- If the period queried is one day or shorter, the statistics returned are on a five-minute basis. If the period queried is longer than one day, the statistics returned are on a daily basis.
- The period queried per request cannot be longer than 31 days.
- If you query the statistics of the current day, the statistics returned may be inaccurate due to the delay in data collection.
- You can use this API to query your historical usage or to reconcile data, but we do not recommend you use it for crucial business logic.
- The rate limit of this API is five calls per second.
     * @param {DescribeRecordingUsageRequest} req
     * @param {function(string, DescribeRecordingUsageResponse):void} cb
     * @public
     */
    DescribeRecordingUsage(req, cb) {
        let resp = new DescribeRecordingUsageResponse();
        this.request("DescribeRecordingUsage", req, resp, cb);
    }

    /**
     * This API is used to remove a user from a room. It allows the anchor, room owner, or admin to kick out a user, and works on all platforms. For Android, iOS, Windows, and macOS, you need to update the TRTC SDK to version 6.6 or above.
     * @param {RemoveUserByStrRoomIdRequest} req
     * @param {function(string, RemoveUserByStrRoomIdResponse):void} cb
     * @public
     */
    RemoveUserByStrRoomId(req, cb) {
        let resp = new RemoveUserByStrRoomIdResponse();
        this.request("RemoveUserByStrRoomId", req, resp, cb);
    }

    /**
     * This API is used to query your usage of TRTC’s On-Cloud MixTranscoding service.
- If the period queried is one day or shorter, the statistics returned are on a five-minute basis. If the period queried is longer than one day, the statistics returned are on a daily basis.
- The period queried per request cannot be longer than 31 days.
- If you query the statistics of the current day, the statistics returned may be inaccurate due to the delay in data collection.
- You can use this API to query your historical usage or to reconcile data, but we do not recommend you use it for crucial business logic.
- The rate limit of this API is five calls per second.
     * @param {DescribeMixTranscodingUsageRequest} req
     * @param {function(string, DescribeMixTranscodingUsageResponse):void} cb
     * @public
     */
    DescribeMixTranscodingUsage(req, cb) {
        let resp = new DescribeMixTranscodingUsageResponse();
        this.request("DescribeMixTranscodingUsage", req, resp, cb);
    }

    /**
     * This API is used to remove all users from a room and dismiss the room. It supports all platforms. For Android, iOS, Windows, and macOS, the TRTC SDK needs to be upgraded to v6.6 or above.
     * @param {DismissRoomRequest} req
     * @param {function(string, DismissRoomResponse):void} cb
     * @public
     */
    DismissRoom(req, cb) {
        let resp = new DismissRoomResponse();
        this.request("DismissRoom", req, resp, cb);
    }

    /**
     * This API is used to query usage data grouped by room.
- The queried period cannot exceed 24 hours. If the period spans two different days, the data returned may not be accurate due to a delay in data collection. You can make multiple calls to query the usage on different days.
- You can use this API to query your historical usage or to reconcile data, but we do not recommend you use it for crucial business logic.
- The rate limit of this API is one call every 15 seconds.
     * @param {DescribeTrtcRoomUsageRequest} req
     * @param {function(string, DescribeTrtcRoomUsageResponse):void} cb
     * @public
     */
    DescribeTrtcRoomUsage(req, cb) {
        let resp = new DescribeTrtcRoomUsageResponse();
        this.request("DescribeTrtcRoomUsage", req, resp, cb);
    }

    /**
     * This API is used to remove all users from a room and close the room. It works on all platforms. For Android, iOS, Windows, and macOS, you need to update the TRTC SDK to version 6.6 or above.
     * @param {DismissRoomByStrRoomIdRequest} req
     * @param {function(string, DismissRoomByStrRoomIdResponse):void} cb
     * @public
     */
    DismissRoomByStrRoomId(req, cb) {
        let resp = new DismissRoomByStrRoomIdResponse();
        this.request("DismissRoomByStrRoomId", req, resp, cb);
    }

    /**
     * This API is used to query the status of a recording task after it starts. It works only when a task is in progress. If the task has already ended when this API is called, an error will be returned.
If a recording file is being uploaded to VOD, the response parameter `StorageFileList` will not contain the information of the recording file. Please listen for the recording file callback to get the information.
     * @param {DescribeCloudRecordingRequest} req
     * @param {function(string, DescribeCloudRecordingResponse):void} cb
     * @public
     */
    DescribeCloudRecording(req, cb) {
        let resp = new DescribeCloudRecordingResponse();
        this.request("DescribeCloudRecording", req, resp, cb);
    }

    /**
     * This API is used to stop a recording task. If a task is stopped successfully, but the uploading of recording files has not completed, the backend will continue to upload the files and will notify you via a callback when the upload is completed.
     * @param {DeleteCloudRecordingRequest} req
     * @param {function(string, DeleteCloudRecordingResponse):void} cb
     * @public
     */
    DeleteCloudRecording(req, cb) {
        let resp = new DeleteCloudRecordingResponse();
        this.request("DeleteCloudRecording", req, resp, cb);
    }

    /**
     * This API is used to stop a relaying task.
     * @param {StopPublishCdnStreamRequest} req
     * @param {function(string, StopPublishCdnStreamResponse):void} cb
     * @public
     */
    StopPublishCdnStream(req, cb) {
        let resp = new StopPublishCdnStreamResponse();
        this.request("StopPublishCdnStream", req, resp, cb);
    }

    /**
     * This API (the old `DescribeAbnormalEvent`) is used to query up to 20 random abnormal user experiences of an application (`SDKAppID`) in the last 14 days. The start and end time can be on two different days, but they cannot be more than one hour apart.
For details about the error events, see https://intl.cloud.tencent.com/document/product/647/44916?from_cn_redirect=1
**Note**:
1. You can use this API to query historical data or for reconciliation purposes, but we do not recommend you use it for crucial business logic.
2. If you need to call this API, please upgrade the monitoring dashboard version to "Standard". For more details, please refer to: https://www.tencentcloud.com/document/product/647/54481.
     * @param {DescribeUnusualEventRequest} req
     * @param {function(string, DescribeUnusualEventResponse):void} cb
     * @public
     */
    DescribeUnusualEvent(req, cb) {
        let resp = new DescribeUnusualEventResponse();
        this.request("DescribeUnusualEvent", req, resp, cb);
    }


}
module.exports = TrtcClient;
