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
const CreatePlanForZoneResponse = models.CreatePlanForZoneResponse;
const DownloadL7LogsRequest = models.DownloadL7LogsRequest;
const DescribeSpeedTestingQuotaResponse = models.DescribeSpeedTestingQuotaResponse;
const Compression = models.Compression;
const DeleteRulesRequest = models.DeleteRulesRequest;
const ExceptUserRuleCondition = models.ExceptUserRuleCondition;
const ModifyDefaultCertificateRequest = models.ModifyDefaultCertificateRequest;
const SingleDataRecord = models.SingleDataRecord;
const DescribeOriginGroupResponse = models.DescribeOriginGroupResponse;
const DescribeWebManagedRulesLogResponse = models.DescribeWebManagedRulesLogResponse;
const SecClientIp = models.SecClientIp;
const DescribeTopL7CacheDataRequest = models.DescribeTopL7CacheDataRequest;
const SingleTypeValue = models.SingleTypeValue;
const CreateCredentialResponse = models.CreateCredentialResponse;
const DeleteApplicationProxyResponse = models.DeleteApplicationProxyResponse;
const Https = models.Https;
const SecEntryValue = models.SecEntryValue;
const DescribeZonesRequest = models.DescribeZonesRequest;
const DiffIPWhitelist = models.DiffIPWhitelist;
const DescribeLogTopicTasksRequest = models.DescribeLogTopicTasksRequest;
const CreateCredentialRequest = models.CreateCredentialRequest;
const ModifyRuleRequest = models.ModifyRuleRequest;
const OriginRecord = models.OriginRecord;
const DescribePrefetchTasksResponse = models.DescribePrefetchTasksResponse;
const DescribeWebManagedRulesHitRuleDetailRequest = models.DescribeWebManagedRulesHitRuleDetailRequest;
const AdvancedFilter = models.AdvancedFilter;
const DeleteApplicationProxyRequest = models.DeleteApplicationProxyRequest;
const DescribeDDoSAttackDataResponse = models.DescribeDDoSAttackDataResponse;
const ModifySecurityWafGroupPolicyRequest = models.ModifySecurityWafGroupPolicyRequest;
const DescribeZoneSettingRequest = models.DescribeZoneSettingRequest;
const DescribeClientRuleListResponse = models.DescribeClientRuleListResponse;
const ModifySecurityPolicyRequest = models.ModifySecurityPolicyRequest;
const Waf = models.Waf;
const ModifyApplicationProxyRuleStatusResponse = models.ModifyApplicationProxyRuleStatusResponse;
const DescribeClientRuleListRequest = models.DescribeClientRuleListRequest;
const ModifyZoneSettingRequest = models.ModifyZoneSettingRequest;
const RuleRewriteActionParams = models.RuleRewriteActionParams;
const CreateApplicationProxyResponse = models.CreateApplicationProxyResponse;
const ModifyOriginGroupResponse = models.ModifyOriginGroupResponse;
const Task = models.Task;
const ExceptUserRuleScope = models.ExceptUserRuleScope;
const ModifyAliasDomainRequest = models.ModifyAliasDomainRequest;
const DescribeAvailablePlansRequest = models.DescribeAvailablePlansRequest;
const SpeedTestingInfo = models.SpeedTestingInfo;
const DistrictStatistics = models.DistrictStatistics;
const ReclaimZoneResponse = models.ReclaimZoneResponse;
const DescribeSingleL7AnalysisDataRequest = models.DescribeSingleL7AnalysisDataRequest;
const ModifySecurityPolicyResponse = models.ModifySecurityPolicyResponse;
const DescribeHostsSettingResponse = models.DescribeHostsSettingResponse;
const ModifyZoneStatusResponse = models.ModifyZoneStatusResponse;
const ModifyZoneResponse = models.ModifyZoneResponse;
const WafRule = models.WafRule;
const ModifyZoneRequest = models.ModifyZoneRequest;
const ModifyApplicationProxyStatusResponse = models.ModifyApplicationProxyStatusResponse;
const DeleteZoneResponse = models.DeleteZoneResponse;
const CreateRuleResponse = models.CreateRuleResponse;
const DescribeIdentificationsResponse = models.DescribeIdentificationsResponse;
const CreatePurgeTaskResponse = models.CreatePurgeTaskResponse;
const DeleteApplicationProxyRuleResponse = models.DeleteApplicationProxyRuleResponse;
const ReclaimAliasDomainRequest = models.ReclaimAliasDomainRequest;
const DescribeRulesResponse = models.DescribeRulesResponse;
const TimingDataRecord = models.TimingDataRecord;
const OriginProtectionInfo = models.OriginProtectionInfo;
const DescribeOriginProtectionResponse = models.DescribeOriginProtectionResponse;
const BindZoneToPlanResponse = models.BindZoneToPlanResponse;
const ExceptConfig = models.ExceptConfig;
const DeleteOriginGroupRequest = models.DeleteOriginGroupRequest;
const AliasDomain = models.AliasDomain;
const AclCondition = models.AclCondition;
const RateLimitConfig = models.RateLimitConfig;
const DescribeAliasDomainsRequest = models.DescribeAliasDomainsRequest;
const ModifyApplicationProxyStatusRequest = models.ModifyApplicationProxyStatusRequest;
const SkipCondition = models.SkipCondition;
const IpTableRule = models.IpTableRule;
const L7OfflineLog = models.L7OfflineLog;
const ModifyHostsCertificateRequest = models.ModifyHostsCertificateRequest;
const ApplicationProxyRule = models.ApplicationProxyRule;
const SmartRouting = models.SmartRouting;
const DescribeDnsDataResponse = models.DescribeDnsDataResponse;
const ModifyAliasDomainStatusRequest = models.ModifyAliasDomainStatusRequest;
const Zone = models.Zone;
const DescribeRulesSettingResponse = models.DescribeRulesSettingResponse;
const RuleExtraParameter = models.RuleExtraParameter;
const RulesSettingAction = models.RulesSettingAction;
const ClientIpHeader = models.ClientIpHeader;
const DescribeDDoSAttackTopDataRequest = models.DescribeDDoSAttackTopDataRequest;
const Quic = models.Quic;
const Ipv6 = models.Ipv6;
const DescribeRulesRequest = models.DescribeRulesRequest;
const ClsLogTopicInfo = models.ClsLogTopicInfo;
const DescribeSpeedTestingMetricDataRequest = models.DescribeSpeedTestingMetricDataRequest;
const TopDataRecord = models.TopDataRecord;
const AclConfig = models.AclConfig;
const ModifyZoneSettingResponse = models.ModifyZoneSettingResponse;
const DescribeZonesResponse = models.DescribeZonesResponse;
const SubRuleItem = models.SubRuleItem;
const UpdateOriginProtectionIPWhitelistRequest = models.UpdateOriginProtectionIPWhitelistRequest;
const Origin = models.Origin;
const WafConfig = models.WafConfig;
const DescribeSpeedTestingDetailsResponse = models.DescribeSpeedTestingDetailsResponse;
const TimingTypeValue = models.TimingTypeValue;
const DnsData = models.DnsData;
const ServerCertInfo = models.ServerCertInfo;
const CreateAliasDomainRequest = models.CreateAliasDomainRequest;
const CreateAliasDomainResponse = models.CreateAliasDomainResponse;
const DescribeOriginProtectionRequest = models.DescribeOriginProtectionRequest;
const ClientIpCountry = models.ClientIpCountry;
const CreatePrefetchTaskRequest = models.CreatePrefetchTaskRequest;
const DeleteApplicationProxyRuleRequest = models.DeleteApplicationProxyRuleRequest;
const DescribeApplicationProxiesResponse = models.DescribeApplicationProxiesResponse;
const DescribeTopL7AnalysisDataRequest = models.DescribeTopL7AnalysisDataRequest;
const FileAscriptionInfo = models.FileAscriptionInfo;
const ZoneSetting = models.ZoneSetting;
const ModifyRulePriorityResponse = models.ModifyRulePriorityResponse;
const DescribeTopL7CacheDataResponse = models.DescribeTopL7CacheDataResponse;
const DescribeOverviewL7DataRequest = models.DescribeOverviewL7DataRequest;
const SwitchConfig = models.SwitchConfig;
const IdentifyZoneResponse = models.IdentifyZoneResponse;
const WebSocket = models.WebSocket;
const DescribeWebProtectionTopDataRequest = models.DescribeWebProtectionTopDataRequest;
const SpeedTestingDetailData = models.SpeedTestingDetailData;
const VanityNameServers = models.VanityNameServers;
const RuleItem = models.RuleItem;
const ModifySecurityWafGroupPolicyResponse = models.ModifySecurityWafGroupPolicyResponse;
const DescribeWebManagedRulesDataRequest = models.DescribeWebManagedRulesDataRequest;
const RuleChoicePropertiesItem = models.RuleChoicePropertiesItem;
const DescribeWebManagedRulesDataResponse = models.DescribeWebManagedRulesDataResponse;
const SecurityConfig = models.SecurityConfig;
const CreateSpeedTestingRequest = models.CreateSpeedTestingRequest;
const MaxAge = models.MaxAge;
const ModifyAliasDomainStatusResponse = models.ModifyAliasDomainStatusResponse;
const RuleCodeActionParams = models.RuleCodeActionParams;
const ModifyRulePriorityRequest = models.ModifyRulePriorityRequest;
const DescribeTimingL7AnalysisDataRequest = models.DescribeTimingL7AnalysisDataRequest;
const CreatePrefetchTaskResponse = models.CreatePrefetchTaskResponse;
const NoCache = models.NoCache;
const DescribeDefaultCertificatesRequest = models.DescribeDefaultCertificatesRequest;
const DescribeAliasDomainsResponse = models.DescribeAliasDomainsResponse;
const DescribeWebProtectionHitRuleDetailRequest = models.DescribeWebProtectionHitRuleDetailRequest;
const IPWhitelist = models.IPWhitelist;
const DDoS = models.DDoS;
const CreateZoneRequest = models.CreateZoneRequest;
const PlanInfo = models.PlanInfo;
const DescribeTimingL7CacheDataRequest = models.DescribeTimingL7CacheDataRequest;
const SpeedTestingQuota = models.SpeedTestingQuota;
const ModifyRuleResponse = models.ModifyRuleResponse;
const CheckCertificateResponse = models.CheckCertificateResponse;
const AscriptionInfo = models.AscriptionInfo;
const DescribeLogSetsResponse = models.DescribeLogSetsResponse;
const DescribeWebProtectionDataRequest = models.DescribeWebProtectionDataRequest;
const CheckCertificateRequest = models.CheckCertificateRequest;
const DescribeAddableEntityListResponse = models.DescribeAddableEntityListResponse;
const CreateApplicationProxyRuleRequest = models.CreateApplicationProxyRuleRequest;
const Cache = models.Cache;
const ForceRedirect = models.ForceRedirect;
const ModifyApplicationProxyRequest = models.ModifyApplicationProxyRequest;
const CodeAction = models.CodeAction;
const CreateReplayTaskRequest = models.CreateReplayTaskRequest;
const DescribeWebProtectionHitRuleDetailResponse = models.DescribeWebProtectionHitRuleDetailResponse;
const Identification = models.Identification;
const DescribeDDoSAttackDataRequest = models.DescribeDDoSAttackDataRequest;
const CachePrefresh = models.CachePrefresh;
const DescribeWebProtectionClientIpListResponse = models.DescribeWebProtectionClientIpListResponse;
const DescribeTimingL7AnalysisDataResponse = models.DescribeTimingL7AnalysisDataResponse;
const TopDetailData = models.TopDetailData;
const DescribeApplicationProxiesRequest = models.DescribeApplicationProxiesRequest;
const DescribeContentQuotaRequest = models.DescribeContentQuotaRequest;
const BotPortraitRule = models.BotPortraitRule;
const RuleCondition = models.RuleCondition;
const RulesProperties = models.RulesProperties;
const DescribeOverviewL7DataResponse = models.DescribeOverviewL7DataResponse;
const Hsts = models.Hsts;
const RateLimitTemplate = models.RateLimitTemplate;
const ModifyHostsCertificateResponse = models.ModifyHostsCertificateResponse;
const CreateRuleRequest = models.CreateRuleRequest;
const ModifyZoneStatusRequest = models.ModifyZoneStatusRequest;
const TopEntry = models.TopEntry;
const RateLimitTemplateDetail = models.RateLimitTemplateDetail;
const ExceptUserRule = models.ExceptUserRule;
const CreateApplicationProxyRuleResponse = models.CreateApplicationProxyRuleResponse;
const RateLimitUserRule = models.RateLimitUserRule;
const SubRule = models.SubRule;
const DescribeLogSetsRequest = models.DescribeLogSetsRequest;
const CreatePlanForZoneRequest = models.CreatePlanForZoneRequest;
const ClientRule = models.ClientRule;
const TimingDataItem = models.TimingDataItem;
const SpeedTestingConfig = models.SpeedTestingConfig;
const CreateApplicationProxyRequest = models.CreateApplicationProxyRequest;
const SpeedTestingStatus = models.SpeedTestingStatus;
const DescribeSpeedTestingMetricDataResponse = models.DescribeSpeedTestingMetricDataResponse;
const CC = models.CC;
const IntelligenceRuleItem = models.IntelligenceRuleItem;
const IntelligenceRule = models.IntelligenceRule;
const PostMaxSize = models.PostMaxSize;
const Sv = models.Sv;
const Rule = models.Rule;
const Filter = models.Filter;
const DownloadL4LogsRequest = models.DownloadL4LogsRequest;
const DescribeTimingL4DataResponse = models.DescribeTimingL4DataResponse;
const CreateZoneResponse = models.CreateZoneResponse;
const Action = models.Action;
const SpeedTestingStatistics = models.SpeedTestingStatistics;
const DescribeSpeedTestingQuotaRequest = models.DescribeSpeedTestingQuotaRequest;
const ApplicationProxy = models.ApplicationProxy;
const ModifyApplicationProxyResponse = models.ModifyApplicationProxyResponse;
const CacheKey = models.CacheKey;
const ModifyOriginGroupRequest = models.ModifyOriginGroupRequest;
const WebLogs = models.WebLogs;
const DownloadL4LogsResponse = models.DownloadL4LogsResponse;
const DescribeTimingL7CacheDataResponse = models.DescribeTimingL7CacheDataResponse;
const DescribeAddableEntityListRequest = models.DescribeAddableEntityListRequest;
const IpTableConfig = models.IpTableConfig;
const DescribeSingleL7AnalysisDataResponse = models.DescribeSingleL7AnalysisDataResponse;
const DeleteOriginGroupResponse = models.DeleteOriginGroupResponse;
const Header = models.Header;
const RuleAndConditions = models.RuleAndConditions;
const DescribeSpeedTestingDetailsRequest = models.DescribeSpeedTestingDetailsRequest;
const DropPageConfig = models.DropPageConfig;
const SpeedTestingMetricData = models.SpeedTestingMetricData;
const UpdateOriginProtectionIPWhitelistResponse = models.UpdateOriginProtectionIPWhitelistResponse;
const SecEntry = models.SecEntry;
const DescribeIdentificationsRequest = models.DescribeIdentificationsRequest;
const DescribeDefaultCertificatesResponse = models.DescribeDefaultCertificatesResponse;
const PartialModule = models.PartialModule;
const CreateOriginGroupResponse = models.CreateOriginGroupResponse;
const ModifyApplicationProxyRuleStatusRequest = models.ModifyApplicationProxyRuleStatusRequest;
const AccelerateType = models.AccelerateType;
const NormalAction = models.NormalAction;
const BindZoneToPlanRequest = models.BindZoneToPlanRequest;
const ReclaimZoneRequest = models.ReclaimZoneRequest;
const FollowOrigin = models.FollowOrigin;
const DeleteZoneRequest = models.DeleteZoneRequest;
const SecurityType = models.SecurityType;
const BotManagedRule = models.BotManagedRule;
const ModifyDefaultCertificateResponse = models.ModifyDefaultCertificateResponse;
const DetailHost = models.DetailHost;
const DescribeTopL7AnalysisDataResponse = models.DescribeTopL7AnalysisDataResponse;
const ModifyApplicationProxyRuleResponse = models.ModifyApplicationProxyRuleResponse;
const DescribeZoneSettingResponse = models.DescribeZoneSettingResponse;
const AiRule = models.AiRule;
const L4OfflineLog = models.L4OfflineLog;
const DropPageDetail = models.DropPageDetail;
const DeleteRulesResponse = models.DeleteRulesResponse;
const QueryCondition = models.QueryCondition;
const DescribeWebProtectionDataResponse = models.DescribeWebProtectionDataResponse;
const CacheConfig = models.CacheConfig;
const ModifyApplicationProxyRuleRequest = models.ModifyApplicationProxyRuleRequest;
const FailReason = models.FailReason;
const DescribePrefetchTasksRequest = models.DescribePrefetchTasksRequest;
const DescribeRulesSettingRequest = models.DescribeRulesSettingRequest;
const ModifyAliasDomainResponse = models.ModifyAliasDomainResponse;
const LogSetInfo = models.LogSetInfo;
const RewriteAction = models.RewriteAction;
const OptimizeAction = models.OptimizeAction;
const DeleteAliasDomainRequest = models.DeleteAliasDomainRequest;
const DescribeContentQuotaResponse = models.DescribeContentQuotaResponse;
const DescribeDnsDataRequest = models.DescribeDnsDataRequest;
const RuleNormalActionParams = models.RuleNormalActionParams;
const Tag = models.Tag;
const CreatePurgeTaskRequest = models.CreatePurgeTaskRequest;
const Resource = models.Resource;
const PrivateParameter = models.PrivateParameter;
const DownloadL7LogsResponse = models.DownloadL7LogsResponse;
const AclUserRule = models.AclUserRule;
const Quota = models.Quota;
const CreateOriginGroupRequest = models.CreateOriginGroupRequest;
const DescribeTimingL4DataRequest = models.DescribeTimingL4DataRequest;
const DescribeHostsSettingRequest = models.DescribeHostsSettingRequest;
const TemplateConfig = models.TemplateConfig;
const DescribeWebManagedRulesLogRequest = models.DescribeWebManagedRulesLogRequest;
const WafGroup = models.WafGroup;
const DescribePurgeTasksResponse = models.DescribePurgeTasksResponse;
const DescribeAvailablePlansResponse = models.DescribeAvailablePlansResponse;
const DescribePurgeTasksRequest = models.DescribePurgeTasksRequest;
const OriginGroup = models.OriginGroup;
const DescribeWebProtectionTopDataResponse = models.DescribeWebProtectionTopDataResponse;
const VanityNameServersIps = models.VanityNameServersIps;
const DescribeWebManagedRulesHitRuleDetailResponse = models.DescribeWebManagedRulesHitRuleDetailResponse;
const DescribeWebProtectionClientIpListRequest = models.DescribeWebProtectionClientIpListRequest;
const IdentifyZoneRequest = models.IdentifyZoneRequest;
const RateLimitIntelligence = models.RateLimitIntelligence;
const CreateSpeedTestingResponse = models.CreateSpeedTestingResponse;
const QueryString = models.QueryString;
const DefaultServerCertInfo = models.DefaultServerCertInfo;
const SecHitRuleInfo = models.SecHitRuleInfo;
const DescribeOriginGroupRequest = models.DescribeOriginGroupRequest;
const Grpc = models.Grpc;
const UpstreamHttp2 = models.UpstreamHttp2;
const TopEntryValue = models.TopEntryValue;
const ReclaimAliasDomainResponse = models.ReclaimAliasDomainResponse;
const OfflineCache = models.OfflineCache;
const DescribeDDoSAttackTopDataResponse = models.DescribeDDoSAttackTopDataResponse;
const DeleteAliasDomainResponse = models.DeleteAliasDomainResponse;
const SecRuleRelatedInfo = models.SecRuleRelatedInfo;
const BotConfig = models.BotConfig;
const DescribeLogTopicTasksResponse = models.DescribeLogTopicTasksResponse;
const CreateReplayTaskResponse = models.CreateReplayTaskResponse;


/**
 * teo client
 * @class
 */
class TeoClient extends AbstractClient {

    constructor(credential, region, profile) {
        super("teo.tencentcloudapi.com", "2022-09-01", credential, region, profile);
    }
    
    /**
     * This API is used to modify an application proxy rule.
     * @param {ModifyApplicationProxyRuleRequest} req
     * @param {function(string, ModifyApplicationProxyRuleResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRule(req, cb) {
        let resp = new ModifyApplicationProxyRuleResponse();
        this.request("ModifyApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to delete an origin group.
     * @param {DeleteOriginGroupRequest} req
     * @param {function(string, DeleteOriginGroupResponse):void} cb
     * @public
     */
    DeleteOriginGroup(req, cb) {
        let resp = new DeleteOriginGroupResponse();
        this.request("DeleteOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to delete a site.
     * @param {DeleteZoneRequest} req
     * @param {function(string, DeleteZoneResponse):void} cb
     * @public
     */
    DeleteZone(req, cb) {
        let resp = new DeleteZoneResponse();
        this.request("DeleteZone", req, resp, cb);
    }

    /**
     * This API is used to create a cache purging task.
     * @param {CreatePurgeTaskRequest} req
     * @param {function(string, CreatePurgeTaskResponse):void} cb
     * @public
     */
    CreatePurgeTask(req, cb) {
        let resp = new CreatePurgeTaskResponse();
        this.request("CreatePurgeTask", req, resp, cb);
    }

    /**
     * This API is used to create an origin group.
     * @param {CreateOriginGroupRequest} req
     * @param {function(string, CreateOriginGroupResponse):void} cb
     * @public
     */
    CreateOriginGroup(req, cb) {
        let resp = new CreateOriginGroupResponse();
        this.request("CreateOriginGroup", req, resp, cb);
    }

    /**
     * Querying the cache purging history
     * @param {DescribePurgeTasksRequest} req
     * @param {function(string, DescribePurgeTasksResponse):void} cb
     * @public
     */
    DescribePurgeTasks(req, cb) {
        let resp = new DescribePurgeTasksResponse();
        this.request("DescribePurgeTasks", req, resp, cb);
    }

    /**
     * This API is used to modify the site configuration.
     * @param {ModifyZoneSettingRequest} req
     * @param {function(string, ModifyZoneSettingResponse):void} cb
     * @public
     */
    ModifyZoneSetting(req, cb) {
        let resp = new ModifyZoneSettingResponse();
        this.request("ModifyZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to query the time-series L7 cached data.
     * @param {DescribeTimingL7CacheDataRequest} req
     * @param {function(string, DescribeTimingL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTimingL7CacheData(req, cb) {
        let resp = new DescribeTimingL7CacheDataResponse();
        this.request("DescribeTimingL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to query the site’s load speed across regions.
     * @param {DescribeSpeedTestingDetailsRequest} req
     * @param {function(string, DescribeSpeedTestingDetailsResponse):void} cb
     * @public
     */
    DescribeSpeedTestingDetails(req, cb) {
        let resp = new DescribeSpeedTestingDetailsResponse();
        this.request("DescribeSpeedTestingDetails", req, resp, cb);
    }

    /**
     * This API is used to query the information of blocked clients.
     * @param {DescribeClientRuleListRequest} req
     * @param {function(string, DescribeClientRuleListResponse):void} cb
     * @public
     */
    DescribeClientRuleList(req, cb) {
        let resp = new DescribeClientRuleListResponse();
        this.request("DescribeClientRuleList", req, resp, cb);
    }

    /**
     * This API is used to create a rule in the rule engine.
     * @param {CreateRuleRequest} req
     * @param {function(string, CreateRuleResponse):void} cb
     * @public
     */
    CreateRule(req, cb) {
        let resp = new CreateRuleResponse();
        this.request("CreateRule", req, resp, cb);
    }

    /**
     * This API is used to purchase a plan for a new site.
     * @param {CreatePlanForZoneRequest} req
     * @param {function(string, CreatePlanForZoneResponse):void} cb
     * @public
     */
    CreatePlanForZone(req, cb) {
        let resp = new CreatePlanForZoneResponse();
        this.request("CreatePlanForZone", req, resp, cb);
    }

    /**
     * This API is used to query content management quotas.
     * @param {DescribeContentQuotaRequest} req
     * @param {function(string, DescribeContentQuotaResponse):void} cb
     * @public
     */
    DescribeContentQuota(req, cb) {
        let resp = new DescribeContentQuotaResponse();
        this.request("DescribeContentQuota", req, resp, cb);
    }

    /**
     * This API is used to download L4 logs.
     * @param {DownloadL4LogsRequest} req
     * @param {function(string, DownloadL4LogsResponse):void} cb
     * @public
     */
    DownloadL4Logs(req, cb) {
        let resp = new DownloadL4LogsResponse();
        this.request("DownloadL4Logs", req, resp, cb);
    }

    /**
     * This API is used to modify an application proxy.
     * @param {ModifyApplicationProxyRequest} req
     * @param {function(string, ModifyApplicationProxyResponse):void} cb
     * @public
     */
    ModifyApplicationProxy(req, cb) {
        let resp = new ModifyApplicationProxyResponse();
        this.request("ModifyApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to query the verification information of a site.
     * @param {DescribeIdentificationsRequest} req
     * @param {function(string, DescribeIdentificationsResponse):void} cb
     * @public
     */
    DescribeIdentifications(req, cb) {
        let resp = new DescribeIdentificationsResponse();
        this.request("DescribeIdentifications", req, resp, cb);
    }

    /**
     * This API is used to access a new site.
     * @param {CreateZoneRequest} req
     * @param {function(string, CreateZoneResponse):void} cb
     * @public
     */
    CreateZone(req, cb) {
        let resp = new CreateZoneResponse();
        this.request("CreateZone", req, resp, cb);
    }

    /**
     * This API is used to modify a site.
     * @param {ModifyZoneRequest} req
     * @param {function(string, ModifyZoneResponse):void} cb
     * @public
     */
    ModifyZone(req, cb) {
        let resp = new ModifyZoneResponse();
        this.request("ModifyZone", req, resp, cb);
    }

    /**
     * This API is used to query web attack logs.
     * @param {DescribeWebManagedRulesLogRequest} req
     * @param {function(string, DescribeWebManagedRulesLogResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesLog(req, cb) {
        let resp = new DescribeWebManagedRulesLogResponse();
        this.request("DescribeWebManagedRulesLog", req, resp, cb);
    }

    /**
     * This API is used to query detailed domain name configuration.
     * @param {DescribeHostsSettingRequest} req
     * @param {function(string, DescribeHostsSettingResponse):void} cb
     * @public
     */
    DescribeHostsSetting(req, cb) {
        let resp = new DescribeHostsSettingResponse();
        this.request("DescribeHostsSetting", req, resp, cb);
    }

    /**
     * This API is used to query the information of CC attackers.
     * @param {DescribeWebProtectionClientIpListRequest} req
     * @param {function(string, DescribeWebProtectionClientIpListResponse):void} cb
     * @public
     */
    DescribeWebProtectionClientIpList(req, cb) {
        let resp = new DescribeWebProtectionClientIpListResponse();
        this.request("DescribeWebProtectionClientIpList", req, resp, cb);
    }

    /**
     * This API is used to query plan options available for purchase.
     * @param {DescribeAvailablePlansRequest} req
     * @param {function(string, DescribeAvailablePlansResponse):void} cb
     * @public
     */
    DescribeAvailablePlans(req, cb) {
        let resp = new DescribeAvailablePlansResponse();
        this.request("DescribeAvailablePlans", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked CC protection data.
     * @param {DescribeWebProtectionTopDataRequest} req
     * @param {function(string, DescribeWebProtectionTopDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionTopData(req, cb) {
        let resp = new DescribeWebProtectionTopDataResponse();
        this.request("DescribeWebProtectionTopData", req, resp, cb);
    }

    /**
     * This API is used to modify a managed rule.
     * @param {ModifySecurityWafGroupPolicyRequest} req
     * @param {function(string, ModifySecurityWafGroupPolicyResponse):void} cb
     * @public
     */
    ModifySecurityWafGroupPolicy(req, cb) {
        let resp = new ModifySecurityWafGroupPolicyResponse();
        this.request("ModifySecurityWafGroupPolicy", req, resp, cb);
    }

    /**
     * This API is used to verify ownership of the site.
     * @param {IdentifyZoneRequest} req
     * @param {function(string, IdentifyZoneResponse):void} cb
     * @public
     */
    IdentifyZone(req, cb) {
        let resp = new IdentifyZoneResponse();
        this.request("IdentifyZone", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an alias domain name.
     * @param {ModifyAliasDomainStatusRequest} req
     * @param {function(string, ModifyAliasDomainStatusResponse):void} cb
     * @public
     */
    ModifyAliasDomainStatus(req, cb) {
        let resp = new ModifyAliasDomainStatusResponse();
        this.request("ModifyAliasDomainStatus", req, resp, cb);
    }

    /**
     * This API is used to query the origin protection configuration.
     * @param {DescribeOriginProtectionRequest} req
     * @param {function(string, DescribeOriginProtectionResponse):void} cb
     * @public
     */
    DescribeOriginProtection(req, cb) {
        let resp = new DescribeOriginProtectionResponse();
        this.request("DescribeOriginProtection", req, resp, cb);
    }

    /**
     * This API is used to query a list of default certificates.
     * @param {DescribeDefaultCertificatesRequest} req
     * @param {function(string, DescribeDefaultCertificatesResponse):void} cb
     * @public
     */
    DescribeDefaultCertificates(req, cb) {
        let resp = new DescribeDefaultCertificatesResponse();
        this.request("DescribeDefaultCertificates", req, resp, cb);
    }

    /**
     * This API is used to modify the certificate of a domain name.
     * @param {ModifyHostsCertificateRequest} req
     * @param {function(string, ModifyHostsCertificateResponse):void} cb
     * @public
     */
    ModifyHostsCertificate(req, cb) {
        let resp = new ModifyHostsCertificateResponse();
        this.request("ModifyHostsCertificate", req, resp, cb);
    }

    /**
     * This API is used to get DNS requests.
     * @param {DescribeDnsDataRequest} req
     * @param {function(string, DescribeDnsDataResponse):void} cb
     * @public
     */
    DescribeDnsData(req, cb) {
        let resp = new DescribeDnsDataResponse();
        this.request("DescribeDnsData", req, resp, cb);
    }

    /**
     * This API is used to query the site configuration.
     * @param {DescribeZoneSettingRequest} req
     * @param {function(string, DescribeZoneSettingResponse):void} cb
     * @public
     */
    DescribeZoneSetting(req, cb) {
        let resp = new DescribeZoneSettingResponse();
        this.request("DescribeZoneSetting", req, resp, cb);
    }

    /**
     * This API is used to return the list of the settings of the rule engine that can be used for request match and their detailed recommended configuration information.
     * @param {DescribeRulesSettingRequest} req
     * @param {function(string, DescribeRulesSettingResponse):void} cb
     * @public
     */
    DescribeRulesSetting(req, cb) {
        let resp = new DescribeRulesSettingResponse();
        this.request("DescribeRulesSetting", req, resp, cb);
    }

    /**
     * This API is used to get a list of shipping tasks.
     * @param {DescribeLogTopicTasksRequest} req
     * @param {function(string, DescribeLogTopicTasksResponse):void} cb
     * @public
     */
    DescribeLogTopicTasks(req, cb) {
        let resp = new DescribeLogTopicTasksResponse();
        this.request("DescribeLogTopicTasks", req, resp, cb);
    }

    /**
     * This API is used to modify an origin group.
     * @param {ModifyOriginGroupRequest} req
     * @param {function(string, ModifyOriginGroupResponse):void} cb
     * @public
     */
    ModifyOriginGroup(req, cb) {
        let resp = new ModifyOriginGroupResponse();
        this.request("ModifyOriginGroup", req, resp, cb);
    }

    /**
     * To reclaim a site and its associated alias domain names, specify the "ZoneId" field; to reclaim an alias domain name that is already added, specify the "ZoneName" filed.
     * @param {ReclaimAliasDomainRequest} req
     * @param {function(string, ReclaimAliasDomainResponse):void} cb
     * @public
     */
    ReclaimAliasDomain(req, cb) {
        let resp = new ReclaimAliasDomainResponse();
        this.request("ReclaimAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy rule.
     * @param {CreateApplicationProxyRuleRequest} req
     * @param {function(string, CreateApplicationProxyRuleResponse):void} cb
     * @public
     */
    CreateApplicationProxyRule(req, cb) {
        let resp = new CreateApplicationProxyRuleResponse();
        this.request("CreateApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to query the pre-warming task status.
     * @param {DescribePrefetchTasksRequest} req
     * @param {function(string, DescribePrefetchTasksResponse):void} cb
     * @public
     */
    DescribePrefetchTasks(req, cb) {
        let resp = new DescribePrefetchTasksResponse();
        this.request("DescribePrefetchTasks", req, resp, cb);
    }

    /**
     * This API is used to query the list of user sites.
     * @param {DescribeZonesRequest} req
     * @param {function(string, DescribeZonesResponse):void} cb
     * @public
     */
    DescribeZones(req, cb) {
        let resp = new DescribeZonesResponse();
        this.request("DescribeZones", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked DDoS attack data.
     * @param {DescribeDDoSAttackTopDataRequest} req
     * @param {function(string, DescribeDDoSAttackTopDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackTopData(req, cb) {
        let resp = new DescribeDDoSAttackTopDataResponse();
        this.request("DescribeDDoSAttackTopData", req, resp, cb);
    }

    /**
     * This API is used to reclaim a site from other users after its ownership is verified.
     * @param {ReclaimZoneRequest} req
     * @param {function(string, ReclaimZoneResponse):void} cb
     * @public
     */
    ReclaimZone(req, cb) {
        let resp = new ReclaimZoneResponse();
        this.request("ReclaimZone", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy.
     * @param {DeleteApplicationProxyRequest} req
     * @param {function(string, DeleteApplicationProxyResponse):void} cb
     * @public
     */
    DeleteApplicationProxy(req, cb) {
        let resp = new DeleteApplicationProxyResponse();
        this.request("DeleteApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to query the cached L7 top-ranked data.
     * @param {DescribeTopL7CacheDataRequest} req
     * @param {function(string, DescribeTopL7CacheDataResponse):void} cb
     * @public
     */
    DescribeTopL7CacheData(req, cb) {
        let resp = new DescribeTopL7CacheDataResponse();
        this.request("DescribeTopL7CacheData", req, resp, cb);
    }

    /**
     * This API is used to change the site status.
     * @param {ModifyZoneStatusRequest} req
     * @param {function(string, ModifyZoneStatusResponse):void} cb
     * @public
     */
    ModifyZoneStatus(req, cb) {
        let resp = new ModifyZoneStatusResponse();
        this.request("ModifyZoneStatus", req, resp, cb);
    }

    /**
     * This API is used to create an alias domain name.
     * @param {CreateAliasDomainRequest} req
     * @param {function(string, CreateAliasDomainResponse):void} cb
     * @public
     */
    CreateAliasDomain(req, cb) {
        let resp = new CreateAliasDomainResponse();
        this.request("CreateAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to query the details of a hit CC protection rule.
     * @param {DescribeWebProtectionHitRuleDetailRequest} req
     * @param {function(string, DescribeWebProtectionHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebProtectionHitRuleDetail(req, cb) {
        let resp = new DescribeWebProtectionHitRuleDetailResponse();
        this.request("DescribeWebProtectionHitRuleDetail", req, resp, cb);
    }

    /**
     * Creates a credential for COS origin-pull.
     * @param {CreateCredentialRequest} req
     * @param {function(string, CreateCredentialResponse):void} cb
     * @public
     */
    CreateCredential(req, cb) {
        let resp = new CreateCredentialResponse();
        this.request("CreateCredential", req, resp, cb);
    }

    /**
     * This API is used to download L7 logs.
     * @param {DownloadL7LogsRequest} req
     * @param {function(string, DownloadL7LogsResponse):void} cb
     * @public
     */
    DownloadL7Logs(req, cb) {
        let resp = new DownloadL7LogsResponse();
        this.request("DownloadL7Logs", req, resp, cb);
    }

    /**
     * This API is used to delete an application proxy rule.
     * @param {DeleteApplicationProxyRuleRequest} req
     * @param {function(string, DeleteApplicationProxyRuleResponse):void} cb
     * @public
     */
    DeleteApplicationProxyRule(req, cb) {
        let resp = new DeleteApplicationProxyRuleResponse();
        this.request("DeleteApplicationProxyRule", req, resp, cb);
    }

    /**
     * This API is used to batch delete rules from the rule engine.
     * @param {DeleteRulesRequest} req
     * @param {function(string, DeleteRulesResponse):void} cb
     * @public
     */
    DeleteRules(req, cb) {
        let resp = new DeleteRulesResponse();
        this.request("DeleteRules", req, resp, cb);
    }

    /**
     * This API is used to query the list of L4 traffic data recorded over time.
     * @param {DescribeTimingL4DataRequest} req
     * @param {function(string, DescribeTimingL4DataResponse):void} cb
     * @public
     */
    DescribeTimingL4Data(req, cb) {
        let resp = new DescribeTimingL4DataResponse();
        this.request("DescribeTimingL4Data", req, resp, cb);
    }

    /**
     * This API is used to modify a rule in the rule engine.
     * @param {ModifyRuleRequest} req
     * @param {function(string, ModifyRuleResponse):void} cb
     * @public
     */
    ModifyRule(req, cb) {
        let resp = new ModifyRuleResponse();
        this.request("ModifyRule", req, resp, cb);
    }

    /**
     * This API is used to query the top-ranked L7 traffic data.
     * @param {DescribeTopL7AnalysisDataRequest} req
     * @param {function(string, DescribeTopL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTopL7AnalysisData(req, cb) {
        let resp = new DescribeTopL7AnalysisDataResponse();
        this.request("DescribeTopL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to get a list of logsets.
     * @param {DescribeLogSetsRequest} req
     * @param {function(string, DescribeLogSetsResponse):void} cb
     * @public
     */
    DescribeLogSets(req, cb) {
        let resp = new DescribeLogSetsResponse();
        this.request("DescribeLogSets", req, resp, cb);
    }

    /**
     * This API is used to query the statistical calculation result of an L7 traffic metric. In common cases, only one value is returned for the query of statistical calculation results.
     * @param {DescribeSingleL7AnalysisDataRequest} req
     * @param {function(string, DescribeSingleL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeSingleL7AnalysisData(req, cb) {
        let resp = new DescribeSingleL7AnalysisDataResponse();
        this.request("DescribeSingleL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to query the time-series data of DDoS attacks.
     * @param {DescribeDDoSAttackDataRequest} req
     * @param {function(string, DescribeDDoSAttackDataResponse):void} cb
     * @public
     */
    DescribeDDoSAttackData(req, cb) {
        let resp = new DescribeDDoSAttackDataResponse();
        this.request("DescribeDDoSAttackData", req, resp, cb);
    }

    /**
     * This API is used to modify the web and bot security configurations.
     * @param {ModifySecurityPolicyRequest} req
     * @param {function(string, ModifySecurityPolicyResponse):void} cb
     * @public
     */
    ModifySecurityPolicy(req, cb) {
        let resp = new ModifySecurityPolicyResponse();
        this.request("ModifySecurityPolicy", req, resp, cb);
    }

    /**
     * This API is used to query the CC protection data recorded over time.
     * @param {DescribeWebProtectionDataRequest} req
     * @param {function(string, DescribeWebProtectionDataResponse):void} cb
     * @public
     */
    DescribeWebProtectionData(req, cb) {
        let resp = new DescribeWebProtectionDataResponse();
        this.request("DescribeWebProtectionData", req, resp, cb);
    }

    /**
     * This API is used to create a pre-warming task.
     * @param {CreatePrefetchTaskRequest} req
     * @param {function(string, CreatePrefetchTaskResponse):void} cb
     * @public
     */
    CreatePrefetchTask(req, cb) {
        let resp = new CreatePrefetchTaskResponse();
        this.request("CreatePrefetchTask", req, resp, cb);
    }

    /**
     * This API is used to delete an alias domain name.
     * @param {DeleteAliasDomainRequest} req
     * @param {function(string, DeleteAliasDomainResponse):void} cb
     * @public
     */
    DeleteAliasDomain(req, cb) {
        let resp = new DeleteAliasDomainResponse();
        this.request("DeleteAliasDomain", req, resp, cb);
    }

    /**
     * This example shows you how to modify the status of a default certificate.
     * @param {ModifyDefaultCertificateRequest} req
     * @param {function(string, ModifyDefaultCertificateResponse):void} cb
     * @public
     */
    ModifyDefaultCertificate(req, cb) {
        let resp = new ModifyDefaultCertificateResponse();
        this.request("ModifyDefaultCertificate", req, resp, cb);
    }

    /**
     * This API is used to query the L7 traffic summary statistics recorded over time.
     * @param {DescribeOverviewL7DataRequest} req
     * @param {function(string, DescribeOverviewL7DataResponse):void} cb
     * @public
     */
    DescribeOverviewL7Data(req, cb) {
        let resp = new DescribeOverviewL7DataResponse();
        this.request("DescribeOverviewL7Data", req, resp, cb);
    }

    /**
     * This API is used to query available shipping entities.
     * @param {DescribeAddableEntityListRequest} req
     * @param {function(string, DescribeAddableEntityListResponse):void} cb
     * @public
     */
    DescribeAddableEntityList(req, cb) {
        let resp = new DescribeAddableEntityListResponse();
        this.request("DescribeAddableEntityList", req, resp, cb);
    }

    /**
     * This API is used to modify the priority of a rule in the rule engine.
     * @param {ModifyRulePriorityRequest} req
     * @param {function(string, ModifyRulePriorityResponse):void} cb
     * @public
     */
    ModifyRulePriority(req, cb) {
        let resp = new ModifyRulePriorityResponse();
        this.request("ModifyRulePriority", req, resp, cb);
    }

    /**
     * This API is used to bind a site to a plan.
     * @param {BindZoneToPlanRequest} req
     * @param {function(string, BindZoneToPlanResponse):void} cb
     * @public
     */
    BindZoneToPlan(req, cb) {
        let resp = new BindZoneToPlanResponse();
        this.request("BindZoneToPlan", req, resp, cb);
    }

    /**
     * This API is used to verify a certificate.
     * @param {CheckCertificateRequest} req
     * @param {function(string, CheckCertificateResponse):void} cb
     * @public
     */
    CheckCertificate(req, cb) {
        let resp = new CheckCertificateResponse();
        this.request("CheckCertificate", req, resp, cb);
    }

    /**
     * This API is used to create a replay task for purging or pre-warming URLs.
     * @param {CreateReplayTaskRequest} req
     * @param {function(string, CreateReplayTaskResponse):void} cb
     * @public
     */
    CreateReplayTask(req, cb) {
        let resp = new CreateReplayTaskResponse();
        this.request("CreateReplayTask", req, resp, cb);
    }

    /**
     * This API is used to query the information of alias domain names.
     * @param {DescribeAliasDomainsRequest} req
     * @param {function(string, DescribeAliasDomainsResponse):void} cb
     * @public
     */
    DescribeAliasDomains(req, cb) {
        let resp = new DescribeAliasDomainsResponse();
        this.request("DescribeAliasDomains", req, resp, cb);
    }

    /**
     * This API is used to query the quota limit on site tests.
     * @param {DescribeSpeedTestingQuotaRequest} req
     * @param {function(string, DescribeSpeedTestingQuotaResponse):void} cb
     * @public
     */
    DescribeSpeedTestingQuota(req, cb) {
        let resp = new DescribeSpeedTestingQuotaResponse();
        this.request("DescribeSpeedTestingQuota", req, resp, cb);
    }

    /**
     * This API is used to create a site testing task for a specified domain name.
     * @param {CreateSpeedTestingRequest} req
     * @param {function(string, CreateSpeedTestingResponse):void} cb
     * @public
     */
    CreateSpeedTesting(req, cb) {
        let resp = new CreateSpeedTestingResponse();
        this.request("CreateSpeedTesting", req, resp, cb);
    }

    /**
     * This API is used to update the list of intermediate IPs.
     * @param {UpdateOriginProtectionIPWhitelistRequest} req
     * @param {function(string, UpdateOriginProtectionIPWhitelistResponse):void} cb
     * @public
     */
    UpdateOriginProtectionIPWhitelist(req, cb) {
        let resp = new UpdateOriginProtectionIPWhitelistResponse();
        this.request("UpdateOriginProtectionIPWhitelist", req, resp, cb);
    }

    /**
     * This API is used to query the details of a hit WAF security rule.
     * @param {DescribeWebManagedRulesHitRuleDetailRequest} req
     * @param {function(string, DescribeWebManagedRulesHitRuleDetailResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesHitRuleDetail(req, cb) {
        let resp = new DescribeWebManagedRulesHitRuleDetailResponse();
        this.request("DescribeWebManagedRulesHitRuleDetail", req, resp, cb);
    }

    /**
     * This API is used to query the rules in the rule engine.
     * @param {DescribeRulesRequest} req
     * @param {function(string, DescribeRulesResponse):void} cb
     * @public
     */
    DescribeRules(req, cb) {
        let resp = new DescribeRulesResponse();
        this.request("DescribeRules", req, resp, cb);
    }

    /**
     * This API is used to query the result of a site test.
     * @param {DescribeSpeedTestingMetricDataRequest} req
     * @param {function(string, DescribeSpeedTestingMetricDataResponse):void} cb
     * @public
     */
    DescribeSpeedTestingMetricData(req, cb) {
        let resp = new DescribeSpeedTestingMetricDataResponse();
        this.request("DescribeSpeedTestingMetricData", req, resp, cb);
    }

    /**
     * This API is used to create an application proxy.
     * @param {CreateApplicationProxyRequest} req
     * @param {function(string, CreateApplicationProxyResponse):void} cb
     * @public
     */
    CreateApplicationProxy(req, cb) {
        let resp = new CreateApplicationProxyResponse();
        this.request("CreateApplicationProxy", req, resp, cb);
    }

    /**
     * This API is used to obtain a list of origin groups.
     * @param {DescribeOriginGroupRequest} req
     * @param {function(string, DescribeOriginGroupResponse):void} cb
     * @public
     */
    DescribeOriginGroup(req, cb) {
        let resp = new DescribeOriginGroupResponse();
        this.request("DescribeOriginGroup", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy.
     * @param {ModifyApplicationProxyStatusRequest} req
     * @param {function(string, ModifyApplicationProxyStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyStatus(req, cb) {
        let resp = new ModifyApplicationProxyStatusResponse();
        this.request("ModifyApplicationProxyStatus", req, resp, cb);
    }

    /**
     * This API is used to query the WAF attack data recorded over time.
     * @param {DescribeWebManagedRulesDataRequest} req
     * @param {function(string, DescribeWebManagedRulesDataResponse):void} cb
     * @public
     */
    DescribeWebManagedRulesData(req, cb) {
        let resp = new DescribeWebManagedRulesDataResponse();
        this.request("DescribeWebManagedRulesData", req, resp, cb);
    }

    /**
     * This API is used to query the L7 data recorded over time.
     * @param {DescribeTimingL7AnalysisDataRequest} req
     * @param {function(string, DescribeTimingL7AnalysisDataResponse):void} cb
     * @public
     */
    DescribeTimingL7AnalysisData(req, cb) {
        let resp = new DescribeTimingL7AnalysisDataResponse();
        this.request("DescribeTimingL7AnalysisData", req, resp, cb);
    }

    /**
     * This API is used to modify an alias domain name.
     * @param {ModifyAliasDomainRequest} req
     * @param {function(string, ModifyAliasDomainResponse):void} cb
     * @public
     */
    ModifyAliasDomain(req, cb) {
        let resp = new ModifyAliasDomainResponse();
        this.request("ModifyAliasDomain", req, resp, cb);
    }

    /**
     * This API is used to modify the status of an application proxy rule.
     * @param {ModifyApplicationProxyRuleStatusRequest} req
     * @param {function(string, ModifyApplicationProxyRuleStatusResponse):void} cb
     * @public
     */
    ModifyApplicationProxyRuleStatus(req, cb) {
        let resp = new ModifyApplicationProxyRuleStatusResponse();
        this.request("ModifyApplicationProxyRuleStatus", req, resp, cb);
    }

    /**
     * This API is used to query the list of application proxies.
     * @param {DescribeApplicationProxiesRequest} req
     * @param {function(string, DescribeApplicationProxiesResponse):void} cb
     * @public
     */
    DescribeApplicationProxies(req, cb) {
        let resp = new DescribeApplicationProxiesResponse();
        this.request("DescribeApplicationProxies", req, resp, cb);
    }


}
module.exports = TeoClient;
