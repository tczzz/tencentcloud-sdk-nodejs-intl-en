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
 * CreateDefaultAlarmThreshold request structure.
 * @class
 */
class CreateDefaultAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default alarm threshold configuration
         * @type {DefaultAlarmThreshold || null}
         */
        this.DefaultAlarmConfig = null;

        /**
         * Product category. Valid values:
`bgp`: Anti-DDoS Pro
`bgpip`: Anti-DDoS Advanced
]
         * @type {string || null}
         */
        this.InstanceType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.DefaultAlarmConfig) {
            let obj = new DefaultAlarmThreshold();
            obj.deserialize(params.DefaultAlarmConfig)
            this.DefaultAlarmConfig = obj;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;

    }
}

/**
 * DescribeListBGPIPInstances response structure.
 * @class
 */
class DescribeListBGPIPInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of Anti-DDoS Advanced instances
         * @type {Array.<BGPIPInstance> || null}
         */
        this.InstanceList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new BGPIPInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeBlackWhiteIpList response structure.
 * @class
 */
class DescribeBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP blocklist
         * @type {Array.<string> || null}
         */
        this.BlackIpList = null;

        /**
         * IP allowlist
         * @type {Array.<string> || null}
         */
        this.WhiteIpList = null;

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
        this.BlackIpList = 'BlackIpList' in params ? params.BlackIpList : null;
        this.WhiteIpList = 'WhiteIpList' in params ? params.WhiteIpList : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Forwarding type
 * @class
 */
class ProxyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of forwarding listening ports. Value range: 1–65535.
         * @type {Array.<number> || null}
         */
        this.ProxyPorts = null;

        /**
         * Forwarding protocol:
`http`: HTTP protocol
`https`: HTTPS protocol
]
         * @type {string || null}
         */
        this.ProxyType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProxyPorts = 'ProxyPorts' in params ? params.ProxyPorts : null;
        this.ProxyType = 'ProxyType' in params ? params.ProxyType : null;

    }
}

/**
 * CreateBoundIP request structure.
 * @class
 */
class CreateBoundIPRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS service type. `bgp`: Anti-DDoS Pro (Single IP); `bgp-multip`: Anti-DDoS Pro (Multi-IP)
         * @type {string || null}
         */
        this.Business = null;

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Id = null;

        /**
         * Array of IPs to bind to the Anti-DDoS instance. For Anti-DDoS Pro Single IP instance, the array contains only one IP. If there are no IPs to bind, it is empty; however, either `BoundDevList` or `UnBoundDevList` must not be empty.
         * @type {Array.<BoundIpInfo> || null}
         */
        this.BoundDevList = null;

        /**
         * Array of IPs to unbind from the Anti-DDoS instance. For Anti-DDoS Pro Single IP instance, the array contains only one IP; if there are no IPs to unbind, it is empty; however, either `BoundDevList` or `UnBoundDevList` must not be empty.
         * @type {Array.<BoundIpInfo> || null}
         */
        this.UnBoundDevList = null;

        /**
         * Disused
         * @type {string || null}
         */
        this.CopyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Business = 'Business' in params ? params.Business : null;
        this.Id = 'Id' in params ? params.Id : null;

        if (params.BoundDevList) {
            this.BoundDevList = new Array();
            for (let z in params.BoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.BoundDevList[z]);
                this.BoundDevList.push(obj);
            }
        }

        if (params.UnBoundDevList) {
            this.UnBoundDevList = new Array();
            for (let z in params.UnBoundDevList) {
                let obj = new BoundIpInfo();
                obj.deserialize(params.UnBoundDevList[z]);
                this.UnBoundDevList.push(obj);
            }
        }
        this.CopyPolicy = 'CopyPolicy' in params ? params.CopyPolicy : null;

    }
}

/**
 * DescribeListSchedulingDomain request structure.
 * @class
 */
class DescribeListSchedulingDomainRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Scheduling domain name filter
         * @type {string || null}
         */
        this.FilterDomain = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterDomain = 'FilterDomain' in params ? params.FilterDomain : null;

    }
}

/**
 * CreateWaterPrintConfig request structure.
 * @class
 */
class CreateWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Watermark configuration
         * @type {WaterPrintConfig || null}
         */
        this.WaterPrintConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.WaterPrintConfig) {
            let obj = new WaterPrintConfig();
            obj.deserialize(params.WaterPrintConfig)
            this.WaterPrintConfig = obj;
        }

    }
}

/**
 * Anti-DDoS region blocking configuration
 * @class
 */
class DDoSGeoIPBlockConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region type. Valid values:
oversea: outside the Chinese mainland
`china`: the Chinese mainland
`customized`: custom region
]
         * @type {string || null}
         */
        this.RegionType = null;

        /**
         * Blocking action. Valid values:
`drop`: the request is blocked.
`trans`: the request is allowed.
]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Configuration ID, which is generated after a configuration is added. This field is only required to modify or delete a configuration.
         * @type {string || null}
         */
        this.Id = null;

        /**
         * When `RegionType = customized`, AreaList is required and contains up to 128 areas.
         * @type {Array.<number> || null}
         */
        this.AreaList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionType = 'RegionType' in params ? params.RegionType : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.Id = 'Id' in params ? params.Id : null;
        this.AreaList = 'AreaList' in params ? params.AreaList : null;

    }
}

/**
 * CreateBlackWhiteIpList response structure.
 * @class
 */
class CreateBlackWhiteIpListResponse extends  AbstractModel {
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
 * Single IP alarm threshold configuration
 * @class
 */
class IPAlarmThresholdRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm threshold type. Valid values:
`1`: alarm threshold for inbound traffic
`2`: alarm threshold for cleansing attack traffic
]
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Alarm threshold (Mbps). The value should be greater than or equal to 0. Note that the alarm threshold configuration will be removed if you pass the parameter for input and set it to 0.
         * @type {number || null}
         */
        this.AlarmThreshold = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * ModifyDDoSGeoIPBlockConfig request structure.
 * @class
 */
class ModifyDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region blocking configuration. The configuration ID cannot be empty when you set this parameter.
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * DescribeL7RulesBySSLCertId response structure.
 * @class
 */
class DescribeL7RulesBySSLCertIdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Certificate rule set
         * @type {Array.<CertIdInsL7Rules> || null}
         */
        this.CertSet = null;

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

        if (params.CertSet) {
            this.CertSet = new Array();
            for (let z in params.CertSet) {
                let obj = new CertIdInsL7Rules();
                obj.deserialize(params.CertSet[z]);
                this.CertSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListDDoSSpeedLimitConfig request structure.
 * @class
 */
class DescribeListDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * Instance IP information
 * @class
 */
class InstanceRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance IP
         * @type {Array.<string> || null}
         */
        this.EipList = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipList = 'EipList' in params ? params.EipList : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeListProtocolBlockConfig response structure.
 * @class
 */
class DescribeListProtocolBlockConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Protocol blocking configuration
         * @type {Array.<ProtocolBlockRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ProtocolBlockRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListBGPInstances request structure.
 * @class
 */
class DescribeListBGPInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * Anti-DDoS instance ID filter. For example, `bgp-00000001`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * Region filter. For example, `ap-guangzhou`.
         * @type {string || null}
         */
        this.FilterRegion = null;

        /**
         * Name filter
         * @type {string || null}
         */
        this.FilterName = null;

        /**
         * Line filter. Valid values: 1: BGP; 2: Non-BGP.
         * @type {number || null}
         */
        this.FilterLine = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterRegion = 'FilterRegion' in params ? params.FilterRegion : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;
        this.FilterLine = 'FilterLine' in params ? params.FilterLine : null;

    }
}

/**
 * DeleteDDoSSpeedLimitConfig request structure.
 * @class
 */
class DeleteDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Access rate limit configuration. The configuration ID cannot be empty when you set this parameter.
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * CreatePacketFilterConfig response structure.
 * @class
 */
class CreatePacketFilterConfigResponse extends  AbstractModel {
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
 * CreateL7RuleCerts request structure.
 * @class
 */
class CreateL7RuleCertsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * SSL certificate ID
         * @type {string || null}
         */
        this.CertId = null;

        /**
         * List of Layer-7 domain name forwarding rules
         * @type {Array.<InsL7Rules> || null}
         */
        this.L7Rules = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

        if (params.L7Rules) {
            this.L7Rules = new Array();
            for (let z in params.L7Rules) {
                let obj = new InsL7Rules();
                obj.deserialize(params.L7Rules[z]);
                this.L7Rules.push(obj);
            }
        }

    }
}

/**
 * DescribeListSchedulingDomain response structure.
 * @class
 */
class DescribeListSchedulingDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of scheduling domain names
         * @type {Array.<SchedulingDomainInfo> || null}
         */
        this.DomainList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.DomainList) {
            this.DomainList = new Array();
            for (let z in params.DomainList) {
                let obj = new SchedulingDomainInfo();
                obj.deserialize(params.DomainList[z]);
                this.DomainList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateIPAlarmThresholdConfig request structure.
 * @class
 */
class CreateIPAlarmThresholdConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of IP alarm threshold configurations
         * @type {Array.<IPAlarmThresholdRelation> || null}
         */
        this.IpAlarmThresholdConfigList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.IpAlarmThresholdConfigList) {
            this.IpAlarmThresholdConfigList = new Array();
            for (let z in params.IpAlarmThresholdConfigList) {
                let obj = new IPAlarmThresholdRelation();
                obj.deserialize(params.IpAlarmThresholdConfigList[z]);
                this.IpAlarmThresholdConfigList.push(obj);
            }
        }

    }
}

/**
 * DescribeDefaultAlarmThreshold response structure.
 * @class
 */
class DescribeDefaultAlarmThresholdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Default alarm threshold configuration
         * @type {Array.<DefaultAlarmThreshold> || null}
         */
        this.DefaultAlarmConfigList = null;

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

        if (params.DefaultAlarmConfigList) {
            this.DefaultAlarmConfigList = new Array();
            for (let z in params.DefaultAlarmConfigList) {
                let obj = new DefaultAlarmThreshold();
                obj.deserialize(params.DefaultAlarmConfigList[z]);
                this.DefaultAlarmConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSAI request structure.
 * @class
 */
class CreateDDoSAIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of Anti-DDoS instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIdList = null;

        /**
         * AI protection switch. Valid values:
`on`: enabled
`off`: disabled
]
         * @type {string || null}
         */
        this.DDoSAI = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIdList = 'InstanceIdList' in params ? params.InstanceIdList : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

    }
}

/**
 * DescribeListProtectThresholdConfig request structure.
 * @class
 */
class DescribeListProtectThresholdConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * Domain name filter for querying CC protection thresholds of domain names and protocols
         * @type {string || null}
         */
        this.FilterDomain = null;

        /**
         * Protocol filter for querying CC protection thresholds of domain names and protocols
         * @type {string || null}
         */
        this.FilterProtocol = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterDomain = 'FilterDomain' in params ? params.FilterDomain : null;
        this.FilterProtocol = 'FilterProtocol' in params ? params.FilterProtocol : null;

    }
}

/**
 * CreateWaterPrintConfig response structure.
 * @class
 */
class CreateWaterPrintConfigResponse extends  AbstractModel {
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
 * DescribeListBGPIPInstances request structure.
 * @class
 */
class DescribeListBGPIPInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

        /**
         * Anti-DDoS instance ID filter. For example, you can filter the Anti-DDoS Advanced instance ID by `bgpip-00000001`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * Anti-DDoS Advanced line filter. Valid values:
`1`: BGP line
`2`: China Telecom
`3`: China Unicom
`4`: China Mobile
`99`: third-party line
]
         * @type {number || null}
         */
        this.FilterLine = null;

        /**
         * Region filter. For example, `ap-guangzhou`.
         * @type {string || null}
         */
        this.FilterRegion = null;

        /**
         * Name filter
         * @type {string || null}
         */
        this.FilterName = null;

        /**
         * Whether to obtain only Anti-DDoS EIP instances. `1`: Yes; `0`: No.
         * @type {number || null}
         */
        this.FilterEipType = null;

        /**
         * Anti-DDoS Advanced instance binding status filter. Valid values: `BINDING`, `BIND`, `UNBINDING`, `UNBIND`. This filter is only valid when `FilterEipType = 1`.
         * @type {Array.<string> || null}
         */
        this.FilterEipEipAddressStatus = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterLine = 'FilterLine' in params ? params.FilterLine : null;
        this.FilterRegion = 'FilterRegion' in params ? params.FilterRegion : null;
        this.FilterName = 'FilterName' in params ? params.FilterName : null;
        this.FilterEipType = 'FilterEipType' in params ? params.FilterEipType : null;
        this.FilterEipEipAddressStatus = 'FilterEipEipAddressStatus' in params ? params.FilterEipEipAddressStatus : null;

    }
}

/**
 * Non-BGP package details
 * @class
 */
class StaticPackRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base protection bandwidth
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * Application bandwidth
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.NormalBandwidth = null;

        /**
         * Forwarding rules
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ForwardRulesLimit = null;

        /**
         * Auto-renewal flag
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Expiration time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CurDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.NormalBandwidth = 'NormalBandwidth' in params ? params.NormalBandwidth : null;
        this.ForwardRulesLimit = 'ForwardRulesLimit' in params ? params.ForwardRulesLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;

    }
}

/**
 * DescribeL7RulesBySSLCertId request structure.
 * @class
 */
class DescribeL7RulesBySSLCertIdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name status. Valid values: `bindable`, `binded`, `opened`, `closed`, `all` (all states).
         * @type {string || null}
         */
        this.Status = null;

        /**
         * List of certificate IDs
         * @type {Array.<string> || null}
         */
        this.CertIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CertIds = 'CertIds' in params ? params.CertIds : null;

    }
}

/**
 * DescribeListPacketFilterConfig response structure.
 * @class
 */
class DescribeListPacketFilterConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * Feature filtering configuration
         * @type {Array.<PacketFilterRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new PacketFilterRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteBlackWhiteIpList response structure.
 * @class
 */
class DeleteBlackWhiteIpListResponse extends  AbstractModel {
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
 * CreateSchedulingDomain request structure.
 * @class
 */
class CreateSchedulingDomainRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * IP bound to the Anti-DDoS Pro instance
 * @class
 */
class BoundIpInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Category of product that can be bound. Valid values: `public` (CVM and CLB), `bm` (BM), `eni` (ENI), `vpngw` (VPN gateway), `natgw` (NAT gateway), `waf` (WAF), `fpc` (financial products), `gaap` (GAAP), and `other` (hosted IP).
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Anti-DDoS instance ID of the IP. This field is required if the instance ID is bound to a new IP. For example, this field InstanceId will be `eni-*` if the instance ID is bound to an ENI IP; `none` if there is no instance ID to bind to a hosted IP.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sub-product category. Valid values: `cvm` (CVM), `lb` (Load balancer), `eni` (ENI), `vpngw` (VPN gateway), `natgw` (NAT gateway), `waf` (WAF), `fpc` (financial products), `gaap` (GAAP), `eip` (BM EIP) and `other` (hosted IP).
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * ISP. Valid values: `0` (China Telecom), `1` (China Unicom), `2` (China Mobile),`5` (BGP).
         * @type {number || null}
         */
        this.IspCode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.IspCode = 'IspCode' in params ? params.IspCode : null;

    }
}

/**
 * DisassociateDDoSEipAddress response structure.
 * @class
 */
class DisassociateDDoSEipAddressResponse extends  AbstractModel {
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
 * Anti-DDoS Advanced instance details
 * @class
 */
class BGPIPInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance details
         * @type {InstanceRelation || null}
         */
        this.InstanceDetail = null;

        /**
         * Anti-DDoS instance specifications
         * @type {BGPIPInstanceSpecification || null}
         */
        this.SpecificationLimit = null;

        /**
         * Anti-DDoS instance usage statistics
         * @type {BGPIPInstanceUsages || null}
         */
        this.Usage = null;

        /**
         * Region of the Anti-DDoS instance
         * @type {RegionInfo || null}
         */
        this.Region = null;

        /**
         * Status of the Anti-DDoS instance. Valid values:
`idle`: running
`attacking`: under attacks
`blocking`: blocked
`creating`: creating
`deblocking`: unblocking
`isolate`: reprocessed and isolated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Purchase time
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Expired At
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Name of the Anti-DDoS instance
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Package details of the Anti-DDoS instance.
Note: This field is `null` for an Anti-DDoS instance without using a package.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {PackInfo || null}
         */
        this.PackInfo = null;

        /**
         * Non-BGP package details of the Anti-DDoS instance.
Note: This field is `null` for an Anti-DDoS instance without using a non-BGP package.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {StaticPackRelation || null}
         */
        this.StaticPackRelation = null;

        /**
         * Used to differentiate Anti-DDoS Advanced lines outside the Chinese mainland
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Used to differentiate clusters
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.Tgw = null;

        /**
         * EIP states: `CREATING`, `BINDING`, `BIND`, `UNBINDING`, `UNBIND`, `OFFLINING`, and `BIND_ENI`. The EIP must be bound to an Anti-DDoS Advanced instance.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EipAddressStatus = null;

        /**
         * Whether it is an Anti-DDoS EIP instance. `1`: Yes; `0`: No.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.EipFlag = null;

        /**
         * EIP package details of the Anti-DDoS Advanced instance.
Note: This field is `null` for an Anti-DDoS Advanced instance without using an EIP package.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {EipAddressPackRelation || null}
         */
        this.EipAddressPackRelation = null;

        /**
         * Details of the Anti-DDoS Advanced instance bound to the EIP.
Note: This field is `null` if the EIP is not bound to an Anti-DDoS Advanced instance.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {EipAddressRelation || null}
         */
        this.EipAddressInfo = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceDetail) {
            let obj = new InstanceRelation();
            obj.deserialize(params.InstanceDetail)
            this.InstanceDetail = obj;
        }

        if (params.SpecificationLimit) {
            let obj = new BGPIPInstanceSpecification();
            obj.deserialize(params.SpecificationLimit)
            this.SpecificationLimit = obj;
        }

        if (params.Usage) {
            let obj = new BGPIPInstanceUsages();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }

        if (params.Region) {
            let obj = new RegionInfo();
            obj.deserialize(params.Region)
            this.Region = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PackInfo) {
            let obj = new PackInfo();
            obj.deserialize(params.PackInfo)
            this.PackInfo = obj;
        }

        if (params.StaticPackRelation) {
            let obj = new StaticPackRelation();
            obj.deserialize(params.StaticPackRelation)
            this.StaticPackRelation = obj;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Tgw = 'Tgw' in params ? params.Tgw : null;
        this.EipAddressStatus = 'EipAddressStatus' in params ? params.EipAddressStatus : null;
        this.EipFlag = 'EipFlag' in params ? params.EipFlag : null;

        if (params.EipAddressPackRelation) {
            let obj = new EipAddressPackRelation();
            obj.deserialize(params.EipAddressPackRelation)
            this.EipAddressPackRelation = obj;
        }

        if (params.EipAddressInfo) {
            let obj = new EipAddressRelation();
            obj.deserialize(params.EipAddressInfo)
            this.EipAddressInfo = obj;
        }

    }
}

/**
 * DeleteBlackWhiteIpList request structure.
 * @class
 */
class DeleteBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of IPs
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * IP type. Valid values: `black` (blocklisted IP), `white`(allowlisted IP).
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * Real server details
 * @class
 */
class SourceServer extends  AbstractModel {
    constructor(){
        super();

        /**
         * Types of the real server address, such as IP or domain name.
         * @type {string || null}
         */
        this.RealServer = null;

        /**
         * Types of the real server address:
`1`: domain name
`2`: IP
]
         * @type {number || null}
         */
        this.RsType = null;

        /**
         * Forward weight of the real server. Value range: 1–100.
         * @type {number || null}
         */
        this.Weight = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RealServer = 'RealServer' in params ? params.RealServer : null;
        this.RsType = 'RsType' in params ? params.RsType : null;
        this.Weight = 'Weight' in params ? params.Weight : null;

    }
}

/**
 * ModifyDomainUsrName response structure.
 * @class
 */
class ModifyDomainUsrNameResponse extends  AbstractModel {
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
 * DisassociateDDoSEipAddress request structure.
 * @class
 */
class DisassociateDDoSEipAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID (only Anti-DDoS Advanced). For example, `bgpip-0000011x`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * EIP of the Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Eip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;

    }
}

/**
 * IP blocklist/allowlist
 * @class
 */
class BlackWhiteIpRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * IP type. Valid values: `black` (blocklisted IP), `white`(allowlisted IP).
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

        /**
         * IP mask. `0` indicates a 32-bit IP.
         * @type {number || null}
         */
        this.Mask = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Type = 'Type' in params ? params.Type : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }
        this.Mask = 'Mask' in params ? params.Mask : null;

    }
}

/**
 * DeleteWaterPrintKey response structure.
 * @class
 */
class DeleteWaterPrintKeyResponse extends  AbstractModel {
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
 * Details of the Anycast package
 * @class
 */
class EipAddressPackRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of package IPs
         * @type {number || null}
         */
        this.IpCount = null;

        /**
         * Auto-renewal flag
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Current expiration time
         * @type {string || null}
         */
        this.CurDeadline = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.IpCount = 'IpCount' in params ? params.IpCount : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.CurDeadline = 'CurDeadline' in params ? params.CurDeadline : null;

    }
}

/**
 * Protocol blocking information
 * @class
 */
class ProtocolBlockRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol blocking configuration
         * @type {ProtocolBlockConfig || null}
         */
        this.ProtocolBlockConfig = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.ProtocolBlockConfig) {
            let obj = new ProtocolBlockConfig();
            obj.deserialize(params.ProtocolBlockConfig)
            this.ProtocolBlockConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListPacketFilterConfig request structure.
 * @class
 */
class DescribeListPacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * Anti-DDoS Advanced instance usage statistics
 * @class
 */
class BGPIPInstanceUsages extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of used port rules
         * @type {number || null}
         */
        this.PortRulesUsage = null;

        /**
         * Number of used domain name rules
         * @type {number || null}
         */
        this.DomainRulesUsage = null;

        /**
         * Number of attack times in the last 7 days
         * @type {number || null}
         */
        this.Last7DayAttackCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PortRulesUsage = 'PortRulesUsage' in params ? params.PortRulesUsage : null;
        this.DomainRulesUsage = 'DomainRulesUsage' in params ? params.DomainRulesUsage : null;
        this.Last7DayAttackCount = 'Last7DayAttackCount' in params ? params.Last7DayAttackCount : null;

    }
}

/**
 * ModifyPacketFilterConfig response structure.
 * @class
 */
class ModifyPacketFilterConfigResponse extends  AbstractModel {
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
 * DescribeListDDoSGeoIPBlockConfig request structure.
 * @class
 */
class DescribeListDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * Layer-7 forwarding rule
 * @class
 */
class Layer7Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * List of forwarding types
         * @type {Array.<ProxyTypeInfo> || null}
         */
        this.ProxyTypeList = null;

        /**
         * List of real servers
         * @type {Array.<SourceServer> || null}
         */
        this.RealServers = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.ProxyTypeList) {
            this.ProxyTypeList = new Array();
            for (let z in params.ProxyTypeList) {
                let obj = new ProxyTypeInfo();
                obj.deserialize(params.ProxyTypeList[z]);
                this.ProxyTypeList.push(obj);
            }
        }

        if (params.RealServers) {
            this.RealServers = new Array();
            for (let z in params.RealServers) {
                let obj = new SourceServer();
                obj.deserialize(params.RealServers[z]);
                this.RealServers.push(obj);
            }
        }

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }

    }
}

/**
 * CreateDDoSSpeedLimitConfig request structure.
 * @class
 */
class CreateDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Access rate limit configuration. The configuration ID should be cleared when you set this parameter.
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * CreateDDoSGeoIPBlockConfig request structure.
 * @class
 */
class CreateDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region blocking configuration. The configuration ID should be cleared when you set this parameter.
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * CreateProtocolBlockConfig request structure.
 * @class
 */
class CreateProtocolBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Protocol blocking configuration
         * @type {ProtocolBlockConfig || null}
         */
        this.ProtocolBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.ProtocolBlockConfig) {
            let obj = new ProtocolBlockConfig();
            obj.deserialize(params.ProtocolBlockConfig)
            this.ProtocolBlockConfig = obj;
        }

    }
}

/**
 * DeleteWaterPrintKey request structure.
 * @class
 */
class DeleteWaterPrintKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Watermark key ID
         * @type {string || null}
         */
        this.KeyId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;

    }
}

/**
 * AssociateDDoSEipAddress response structure.
 * @class
 */
class AssociateDDoSEipAddressResponse extends  AbstractModel {
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
 * DDoS access rate limit configuration details
 * @class
 */
class DDoSSpeedLimitConfigRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS access rate limit configuration
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.SpeedLimitConfig = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.SpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.SpeedLimitConfig)
            this.SpeedLimitConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * Package information
 * @class
 */
class PackInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Package type. Valid values:
`staticpack`: non-BGP package
`insurance`: guarantee package
]
         * @type {string || null}
         */
        this.PackType = null;

        /**
         * Package ID
         * @type {string || null}
         */
        this.PackId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.PackType = 'PackType' in params ? params.PackType : null;
        this.PackId = 'PackId' in params ? params.PackId : null;

    }
}

/**
 * ModifyPacketFilterConfig request structure.
 * @class
 */
class ModifyPacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Feature filtering configuration
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

/**
 * DescribeBlackWhiteIpList request structure.
 * @class
 */
class DescribeBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ModifyDomainUsrName request structure.
 * @class
 */
class ModifyDomainUsrNameRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * User CNAME
         * @type {string || null}
         */
        this.DomainName = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.DomainUserName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DomainName = 'DomainName' in params ? params.DomainName : null;
        this.DomainUserName = 'DomainUserName' in params ? params.DomainUserName : null;

    }
}

/**
 * CreateDDoSSpeedLimitConfig response structure.
 * @class
 */
class CreateDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * DeletePacketFilterConfig request structure.
 * @class
 */
class DeletePacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Feature filtering configuration
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

/**
 * DescribeListDDoSGeoIPBlockConfig response structure.
 * @class
 */
class DescribeListDDoSGeoIPBlockConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of Anti-DDoS region blocking configurations
         * @type {Array.<DDoSGeoIPBlockConfigRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSGeoIPBlockConfigRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Watermark configuration
 * @class
 */
class WaterPrintConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark offset. Value range: [0, 100).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Start status. Valid values:
`0`: manual start
`1`: instant start
]
         * @type {number || null}
         */
        this.OpenStatus = null;

        /**
         * List of forwarding listeners configured
         * @type {Array.<ForwardListener> || null}
         */
        this.Listeners = null;

        /**
         * A list of watermark keys is generated after a watermark is added successfully. Each watermark can have up to 2 keys. When there is only one valid key, it cannot be deleted.
         * @type {Array.<WaterPrintKey> || null}
         */
        this.Keys = null;

        /**
         * 
         * @type {string || null}
         */
        this.Verify = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.OpenStatus = 'OpenStatus' in params ? params.OpenStatus : null;

        if (params.Listeners) {
            this.Listeners = new Array();
            for (let z in params.Listeners) {
                let obj = new ForwardListener();
                obj.deserialize(params.Listeners[z]);
                this.Listeners.push(obj);
            }
        }

        if (params.Keys) {
            this.Keys = new Array();
            for (let z in params.Keys) {
                let obj = new WaterPrintKey();
                obj.deserialize(params.Keys[z]);
                this.Keys.push(obj);
            }
        }
        this.Verify = 'Verify' in params ? params.Verify : null;

    }
}

/**
 * Protocol blocking configuration
 * @class
 */
class ProtocolBlockConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * TCP blocking. Valid values: `0` (disabled), `1`(enabled).
         * @type {number || null}
         */
        this.DropTcp = null;

        /**
         * UDP blocking. Valid values: `0` (disabled), `1`(enabled).
         * @type {number || null}
         */
        this.DropUdp = null;

        /**
         * ICMP blocking. Valid values: `0` (disabled), `1`(enabled).
         * @type {number || null}
         */
        this.DropIcmp = null;

        /**
         * Other protocol blocking. Valid values: `0` (disabled), `1`(enabled).
         * @type {number || null}
         */
        this.DropOther = null;

        /**
         * Null connection protection. Valid values: `0` (disabled), `1` (enabled).
         * @type {number || null}
         */
        this.CheckExceptNullConnect = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DropTcp = 'DropTcp' in params ? params.DropTcp : null;
        this.DropUdp = 'DropUdp' in params ? params.DropUdp : null;
        this.DropIcmp = 'DropIcmp' in params ? params.DropIcmp : null;
        this.DropOther = 'DropOther' in params ? params.DropOther : null;
        this.CheckExceptNullConnect = 'CheckExceptNullConnect' in params ? params.CheckExceptNullConnect : null;

    }
}

/**
 * DescribeListListener request structure.
 * @class
 */
class DescribeListListenerRequest extends  AbstractModel {
    constructor(){
        super();

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

    }
}

/**
 * DeleteWaterPrintConfig response structure.
 * @class
 */
class DeleteWaterPrintConfigResponse extends  AbstractModel {
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
 * Layer-4 forwarding rule
 * @class
 */
class Layer4Rule extends  AbstractModel {
    constructor(){
        super();

        /**
         * Real server port. Value range: 1–65535.
         * @type {number || null}
         */
        this.BackendPort = null;

        /**
         * Forwarding port. Value range: 1–65535.
         * @type {number || null}
         */
        this.FrontendPort = null;

        /**
         * Forwarding rule. Valid values:
TCP
UDP
]
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * List of real servers
         * @type {Array.<SourceServer> || null}
         */
        this.RealServers = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BackendPort = 'BackendPort' in params ? params.BackendPort : null;
        this.FrontendPort = 'FrontendPort' in params ? params.FrontendPort : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;

        if (params.RealServers) {
            this.RealServers = new Array();
            for (let z in params.RealServers) {
                let obj = new SourceServer();
                obj.deserialize(params.RealServers[z]);
                this.RealServers.push(obj);
            }
        }

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }

    }
}

/**
 * DeletePacketFilterConfig response structure.
 * @class
 */
class DeletePacketFilterConfigResponse extends  AbstractModel {
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
 * CreateProtocolBlockConfig response structure.
 * @class
 */
class CreateProtocolBlockConfigResponse extends  AbstractModel {
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
 * Anti-DDoS Advanced instance specifications
 * @class
 */
class BGPIPInstanceSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base protection bandwidth (in Gbps)
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * CC protection bandwidth (in QPS)
         * @type {number || null}
         */
        this.ProtectCCQPS = null;

        /**
         * Normal application bandwidth (in Mbps)
         * @type {number || null}
         */
        this.NormalBandwidth = null;

        /**
         * Number of forwarding rules
         * @type {number || null}
         */
        this.ForwardRulesLimit = null;

        /**
         * Auto-renewal status. Valid values:
`0`: disabled
`1`: enabled
]
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Anti-DDoS Advanced line. Valid values:
`1`: BGP
`2`: China Telecom
`3`: China Unicom
`4`: China Mobile
`99`: third-party line
]
         * @type {number || null}
         */
        this.Line = null;

        /**
         * Elastic protection bandwidth (in Gbps)
         * @type {number || null}
         */
        this.ElasticBandwidth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.ProtectCCQPS = 'ProtectCCQPS' in params ? params.ProtectCCQPS : null;
        this.NormalBandwidth = 'NormalBandwidth' in params ? params.NormalBandwidth : null;
        this.ForwardRulesLimit = 'ForwardRulesLimit' in params ? params.ForwardRulesLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.Line = 'Line' in params ? params.Line : null;
        this.ElasticBandwidth = 'ElasticBandwidth' in params ? params.ElasticBandwidth : null;

    }
}

/**
 * CreateIPAlarmThresholdConfig response structure.
 * @class
 */
class CreateIPAlarmThresholdConfigResponse extends  AbstractModel {
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
 * DeleteWaterPrintConfig request structure.
 * @class
 */
class DeleteWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeListBlackWhiteIpList response structure.
 * @class
 */
class DescribeListBlackWhiteIpListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * IP blocklist/allowlist
         * @type {Array.<BlackWhiteIpRelation> || null}
         */
        this.IpList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.IpList) {
            this.IpList = new Array();
            for (let z in params.IpList) {
                let obj = new BlackWhiteIpRelation();
                obj.deserialize(params.IpList[z]);
                this.IpList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Anti-DDoS AI protection switch
 * @class
 */
class DDoSAIRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * AI protection switch. Valid values:
`on`: enabled
`off`: disabled
]
         * @type {string || null}
         */
        this.DDoSAI = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListDDoSSpeedLimitConfig response structure.
 * @class
 */
class DescribeListDDoSSpeedLimitConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of access rate limit configurations
         * @type {Array.<DDoSSpeedLimitConfigRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSSpeedLimitConfigRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateDDoSGeoIPBlockConfig response structure.
 * @class
 */
class CreateDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * CC protection thresholds of the domain name and protocol
 * @class
 */
class ListenerCcThreholdConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Protocol. Value: htttps
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Status. Valid values: `0` (disabled), `1` (enabled).
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC protection threshold
         * @type {number || null}
         */
        this.CCThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;

    }
}

/**
 * IP line information
 * @class
 */
class IPLineInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP line type. Valid values:
`bgp`: BGP IP
`ctcc`: CTCC IP
`cucc`: CUCC IP
`cmcc`: CMCC IP
`abroad`: IP outside the Chinese mainland
]
         * @type {string || null}
         */
        this.Type = null;

        /**
         * 
         * @type {string || null}
         */
        this.Eip = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Eip = 'Eip' in params ? params.Eip : null;

    }
}

/**
 * EIP association details
 * @class
 */
class EipAddressRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the Anti-DDoS instance bound to the EIP. For example, hk indicates Hong Kong.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EipAddressRegion = null;

        /**
         * ID of the bound resource. For example, an ID may be bound to an CVM instance.
Note: This is field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EipBoundRscIns = null;

        /**
         * ID of the bound ENI
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EipBoundRscEni = null;

        /**
         * Private IP of the bound resource
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.EipBoundRscVip = null;

        /**
         * Modification time
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ModifyTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.EipAddressRegion = 'EipAddressRegion' in params ? params.EipAddressRegion : null;
        this.EipBoundRscIns = 'EipBoundRscIns' in params ? params.EipBoundRscIns : null;
        this.EipBoundRscEni = 'EipBoundRscEni' in params ? params.EipBoundRscEni : null;
        this.EipBoundRscVip = 'EipBoundRscVip' in params ? params.EipBoundRscVip : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeListListener response structure.
 * @class
 */
class DescribeListListenerResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of layer-4 forwarding listeners
         * @type {Array.<Layer4Rule> || null}
         */
        this.Layer4Listeners = null;

        /**
         * List of layer-7 forwarding listeners
         * @type {Array.<Layer7Rule> || null}
         */
        this.Layer7Listeners = null;

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

        if (params.Layer4Listeners) {
            this.Layer4Listeners = new Array();
            for (let z in params.Layer4Listeners) {
                let obj = new Layer4Rule();
                obj.deserialize(params.Layer4Listeners[z]);
                this.Layer4Listeners.push(obj);
            }
        }

        if (params.Layer7Listeners) {
            this.Layer7Listeners = new Array();
            for (let z in params.Layer7Listeners) {
                let obj = new Layer7Rule();
                obj.deserialize(params.Layer7Listeners[z]);
                this.Layer7Listeners.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Protection threshold configuration information
 * @class
 */
class ProtectThresholdRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * DDoS protection level:
`low`: loose protection
`middle`: medium protection
`high`: strict protection
]
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * DDoS cleansing threshold (in Mbps)
         * @type {number || null}
         */
        this.DDoSThreshold = null;

        /**
         * DDoS AI protection switch:
`on`: enabled
`off`: disabled
]
         * @type {string || null}
         */
        this.DDoSAI = null;

        /**
         * CC cleansing switch
`0`: disabled
`1`: enabled
]
         * @type {number || null}
         */
        this.CCEnable = null;

        /**
         * CC cleansing threshold (in QPS)
         * @type {number || null}
         */
        this.CCThreshold = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

        /**
         * Domain name and protocol protection thresholds
         * @type {Array.<ListenerCcThreholdConfig> || null}
         */
        this.ListenerCcThresholdList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.DDoSThreshold = 'DDoSThreshold' in params ? params.DDoSThreshold : null;
        this.DDoSAI = 'DDoSAI' in params ? params.DDoSAI : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;
        this.CCThreshold = 'CCThreshold' in params ? params.CCThreshold : null;

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

        if (params.ListenerCcThresholdList) {
            this.ListenerCcThresholdList = new Array();
            for (let z in params.ListenerCcThresholdList) {
                let obj = new ListenerCcThreholdConfig();
                obj.deserialize(params.ListenerCcThresholdList[z]);
                this.ListenerCcThresholdList.push(obj);
            }
        }

    }
}

/**
 * CreateL7RuleCerts response structure.
 * @class
 */
class CreateL7RuleCertsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

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

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Anti-DDoS access rate limit configuration
 * @class
 */
class DDoSSpeedLimitConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rate limit mode. Valid values:
`1`: rate limit based on the real server IP
`2`: rate limit based on the destination port
]
         * @type {number || null}
         */
        this.Mode = null;

        /**
         * Rate limit value. This field contains at least one valid rate limit type. Note that only up to one value of each type is supported.
         * @type {Array.<SpeedValue> || null}
         */
        this.SpeedValues = null;

        /**
         * This field is replaced with a new field DstPortList.
         * @type {Array.<PortSegment> || null}
         */
        this.DstPortScopes = null;

        /**
         * 
         * @type {string || null}
         */
        this.Id = null;

        /**
         * IP protocol number. Valid values:
`ALL`: all protocols
`TCP`: TCP protocol
`UDP`: UDP protocol
`SMP`: SMP protocol
`1;2–100`: user-defined protocol with up to 8 ranges
]
Note: For custom protocol ranges, only protocol number is supported. Multiple ranges are separated by ";". If the value is `ALL`, any other protocol or protocol number should be excluded.
         * @type {string || null}
         */
        this.ProtocolList = null;

        /**
         * Port range list, which contains up to 8 ranges. Use ";" to separate multiple ports and "–" to indicate a range of ports, as described in the following formats: `0–65535`, `80;443;1000–2000`.
         * @type {string || null}
         */
        this.DstPortList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Mode = 'Mode' in params ? params.Mode : null;

        if (params.SpeedValues) {
            this.SpeedValues = new Array();
            for (let z in params.SpeedValues) {
                let obj = new SpeedValue();
                obj.deserialize(params.SpeedValues[z]);
                this.SpeedValues.push(obj);
            }
        }

        if (params.DstPortScopes) {
            this.DstPortScopes = new Array();
            for (let z in params.DstPortScopes) {
                let obj = new PortSegment();
                obj.deserialize(params.DstPortScopes[z]);
                this.DstPortScopes.push(obj);
            }
        }
        this.Id = 'Id' in params ? params.Id : null;
        this.ProtocolList = 'ProtocolList' in params ? params.ProtocolList : null;
        this.DstPortList = 'DstPortList' in params ? params.DstPortList : null;

    }
}

/**
 * DescribeListProtectThresholdConfig response structure.
 * @class
 */
class DescribeListProtectThresholdConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of protection threshold configurations
         * @type {Array.<ProtectThresholdRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new ProtectThresholdRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Set of rules configured for certificates
 * @class
 */
class CertIdInsL7Rules extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of rules configured for certificates
         * @type {Array.<InsL7Rules> || null}
         */
        this.L7Rules = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.CertId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.L7Rules) {
            this.L7Rules = new Array();
            for (let z in params.L7Rules) {
                let obj = new InsL7Rules();
                obj.deserialize(params.L7Rules[z]);
                this.L7Rules.push(obj);
            }
        }
        this.CertId = 'CertId' in params ? params.CertId : null;

    }
}

/**
 * CreateDefaultAlarmThreshold response structure.
 * @class
 */
class CreateDefaultAlarmThresholdResponse extends  AbstractModel {
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
 * DescribeListIPAlarmConfig response structure.
 * @class
 */
class DescribeListIPAlarmConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of IP alarm threshold configurations
         * @type {Array.<IPAlarmThresholdRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new IPAlarmThresholdRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Return code, only used to report success.
 * @class
 */
class SuccessCode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Description
         * @type {string || null}
         */
        this.Message = null;

        /**
         * Success/Error code
         * @type {string || null}
         */
        this.Code = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Message = 'Message' in params ? params.Message : null;
        this.Code = 'Code' in params ? params.Code : null;

    }
}

/**
 * DescribeListBGPInstances response structure.
 * @class
 */
class DescribeListBGPInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of Anti-DDoS Pro instances
         * @type {Array.<BGPInstance> || null}
         */
        this.InstanceList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.InstanceList) {
            this.InstanceList = new Array();
            for (let z in params.InstanceList) {
                let obj = new BGPInstance();
                obj.deserialize(params.InstanceList[z]);
                this.InstanceList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeListDDoSAI request structure.
 * @class
 */
class DescribeListDDoSAIRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * DescribeListIPAlarmConfig request structure.
 * @class
 */
class DescribeListIPAlarmConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * Alarm threshold type filter. Valid values:
`1`: alarm threshold for inbound traffic
`2`: alarm threshold for cleansing attack traffic
]
         * @type {number || null}
         */
        this.FilterAlarmType = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterAlarmType = 'FilterAlarmType' in params ? params.FilterAlarmType : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * Port range information
 * @class
 */
class PortSegment extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start port. Value range: 1–65535.
         * @type {number || null}
         */
        this.BeginPort = null;

        /**
         * End port. The value should be in the range 1–65535 and cannot be less than that of the start port.
         * @type {number || null}
         */
        this.EndPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.BeginPort = 'BeginPort' in params ? params.BeginPort : null;
        this.EndPort = 'EndPort' in params ? params.EndPort : null;

    }
}

/**
 * Feature filtering configuration
 * @class
 */
class PacketFilterConfig extends  AbstractModel {
    constructor(){
        super();

        /**
         * Protocol. Valid values: `tcp`, `udp`, `icmp`, `all`.
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Start source port. Value range: 0–65535.
         * @type {number || null}
         */
        this.SportStart = null;

        /**
         * End source port. Value range: 0–65535. The value also should be greater than or equal to that of the start source port.
         * @type {number || null}
         */
        this.SportEnd = null;

        /**
         * Start destination port
         * @type {number || null}
         */
        this.DportStart = null;

        /**
         * End destination port. Value range: 1–65535. The value also should be greater than or equal to that of the start source port.
         * @type {number || null}
         */
        this.DportEnd = null;

        /**
         * Minimum message length. Value range: 1–1500.
         * @type {number || null}
         */
        this.PktlenMin = null;

        /**
         * Maximum message length. Value range: 1–1500. The value also should be greater than or equal to that of the minimum message length.
         * @type {number || null}
         */
        this.PktlenMax = null;

        /**
         * Action. Valid values:
`drop`: discards the request.
`transmit`: allows the request.
`drop_black`: discards the request and adds the IP to blocklist.
`drop_rst`: blocks the request.
`drop_black_rst`: blocks the request and adds the IP to blocklist.
`forward`: continues protection.
]
         * @type {string || null}
         */
        this.Action = null;

        /**
         * Detection location:
`begin_l3`: IP header
`begin_l4`: TCP/UDP header
`begin_l5`: T load
`no_match`: no match
]
         * @type {string || null}
         */
        this.MatchBegin = null;

        /**
         * Detection type:
`sunday`: keyword
`pcre`: regular expression
]
         * @type {string || null}
         */
        this.MatchType = null;

        /**
         * Detection value. Should be in key string or regular expression.
For `sunday`, enter a string or a string in hexadecimal byte code representation starting with `\x`. For example, a string "123" corresponds to the hexadecimal byte code "\x313233".
For `pcre`, enter a regular expression.
]
         * @type {string || null}
         */
        this.Str = null;

        /**
         * Detection depth starting from the detection position. Value range: [0, 1500].
         * @type {number || null}
         */
        this.Depth = null;

        /**
         * Offset starting from the detection position. Value range: [0, Depth].
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Whether the detection value is included:
`0`: included
`1`: excluded
]
         * @type {number || null}
         */
        this.IsNot = null;

        /**
         * Relationship between the first and second detection conditions:
`and`: under both the first and second detection conditions
`none`: under only the first detection condition
]
         * @type {string || null}
         */
        this.MatchLogic = null;

        /**
         * The second detection position:
`begin_l5`: load
`no_match`: no match
]
         * @type {string || null}
         */
        this.MatchBegin2 = null;

        /**
         * The second detection type:
`sunday`: keyword
`pcre`: regular expression
]
         * @type {string || null}
         */
        this.MatchType2 = null;

        /**
         * The second detection value. Should be in key string or regular expression.
For `sunday`, enter a string or a string in hexadecimal byte code representation starting with `\x`. For example, a string "123" corresponds to the hexadecimal byte code "\x313233".
For `pcre`, enter a regular expression.
]
         * @type {string || null}
         */
        this.Str2 = null;

        /**
         * Detection depth starting from the second detection position. Value range: [0, 1500].
         * @type {number || null}
         */
        this.Depth2 = null;

        /**
         * Offset starting from the second detection position. Value range: [0, Depth2].
         * @type {number || null}
         */
        this.Offset2 = null;

        /**
         * Whether the second detection value is included:
`0`: included
`1`: excluded
]
         * @type {number || null}
         */
        this.IsNot2 = null;

        /**
         * A rule ID is generated after a feature filtering configuration is added successfully. Leave this field empty when adding a new feature filtering configuration.
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
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.SportStart = 'SportStart' in params ? params.SportStart : null;
        this.SportEnd = 'SportEnd' in params ? params.SportEnd : null;
        this.DportStart = 'DportStart' in params ? params.DportStart : null;
        this.DportEnd = 'DportEnd' in params ? params.DportEnd : null;
        this.PktlenMin = 'PktlenMin' in params ? params.PktlenMin : null;
        this.PktlenMax = 'PktlenMax' in params ? params.PktlenMax : null;
        this.Action = 'Action' in params ? params.Action : null;
        this.MatchBegin = 'MatchBegin' in params ? params.MatchBegin : null;
        this.MatchType = 'MatchType' in params ? params.MatchType : null;
        this.Str = 'Str' in params ? params.Str : null;
        this.Depth = 'Depth' in params ? params.Depth : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.IsNot = 'IsNot' in params ? params.IsNot : null;
        this.MatchLogic = 'MatchLogic' in params ? params.MatchLogic : null;
        this.MatchBegin2 = 'MatchBegin2' in params ? params.MatchBegin2 : null;
        this.MatchType2 = 'MatchType2' in params ? params.MatchType2 : null;
        this.Str2 = 'Str2' in params ? params.Str2 : null;
        this.Depth2 = 'Depth2' in params ? params.Depth2 : null;
        this.Offset2 = 'Offset2' in params ? params.Offset2 : null;
        this.IsNot2 = 'IsNot2' in params ? params.IsNot2 : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * Default alarm threshold configuration of an IP
 * @class
 */
class DefaultAlarmThreshold extends  AbstractModel {
    constructor(){
        super();

        /**
         * Alarm threshold type. Valid values:
`1`: alarm threshold for inbound traffic
`2`: alarm threshold for cleansing attack traffic
]
         * @type {number || null}
         */
        this.AlarmType = null;

        /**
         * Alarm threshold (Mbps). The value should be greater than or equal to 0. Note that the alarm threshold configuration will be removed if you pass the parameter for input and set it to 0.
         * @type {number || null}
         */
        this.AlarmThreshold = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AlarmType = 'AlarmType' in params ? params.AlarmType : null;
        this.AlarmThreshold = 'AlarmThreshold' in params ? params.AlarmThreshold : null;

    }
}

/**
 * Forwarding listener
 * @class
 */
class ForwardListener extends  AbstractModel {
    constructor(){
        super();

        /**
         * Forwarding listening port. Value range: 1–65535.
         * @type {number || null}
         */
        this.FrontendPort = null;

        /**
         * Forwarding protocol. Valid values:
`TCP`
`UDP`
]
         * @type {string || null}
         */
        this.ForwardProtocol = null;

        /**
         * 
         * @type {number || null}
         */
        this.FrontendPortEnd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FrontendPort = 'FrontendPort' in params ? params.FrontendPort : null;
        this.ForwardProtocol = 'ForwardProtocol' in params ? params.ForwardProtocol : null;
        this.FrontendPortEnd = 'FrontendPortEnd' in params ? params.FrontendPortEnd : null;

    }
}

/**
 * Anti-DDoS Pro instance specifications
 * @class
 */
class BGPInstanceSpecification extends  AbstractModel {
    constructor(){
        super();

        /**
         * Base protection bandwidth (in Gbps)
         * @type {number || null}
         */
        this.ProtectBandwidth = null;

        /**
         * Number of protection chances
         * @type {number || null}
         */
        this.ProtectCountLimit = null;

        /**
         * Number of protection IPs
         * @type {number || null}
         */
        this.ProtectIPNumberLimit = null;

        /**
         * Auto-renewal status. Valid values:
`0`: disabled
`1`: enabled
]
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectBandwidth = 'ProtectBandwidth' in params ? params.ProtectBandwidth : null;
        this.ProtectCountLimit = 'ProtectCountLimit' in params ? params.ProtectCountLimit : null;
        this.ProtectIPNumberLimit = 'ProtectIPNumberLimit' in params ? params.ProtectIPNumberLimit : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;

    }
}

/**
 * CreateWaterPrintKey request structure.
 * @class
 */
class CreateWaterPrintKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Watermark configuration details
 * @class
 */
class WaterPrintRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Watermark configuration
         * @type {WaterPrintConfig || null}
         */
        this.WaterPrintConfig = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.WaterPrintConfig) {
            let obj = new WaterPrintConfig();
            obj.deserialize(params.WaterPrintConfig)
            this.WaterPrintConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * Layer-7 instance rules
 * @class
 */
class InsL7Rules extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rule status. Valid values: `0` (the rule is working), `1` (the rule goes into effect), `2` (rule configuration failed), `3` (the rule is being deleted), `5` (rule deletion failed), `6` (waiting to add rules), `7` (waiting to delete rules), `8` (waiting to upload certificates), `9` (resources for the rule not found), `10` (waiting to modify rules), `11` (the rule is being modifying).
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * Protocol
         * @type {string || null}
         */
        this.Protocol = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InsId = null;

        /**
         * User App ID
         * @type {string || null}
         */
        this.AppId = null;

        /**
         * High-defense port
         * @type {string || null}
         */
        this.VirtualPort = null;

        /**
         * Certificate ID
         * @type {string || null}
         */
        this.SSLId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.Protocol = 'Protocol' in params ? params.Protocol : null;
        this.InsId = 'InsId' in params ? params.InsId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.VirtualPort = 'VirtualPort' in params ? params.VirtualPort : null;
        this.SSLId = 'SSLId' in params ? params.SSLId : null;

    }
}

/**
 * DescribeListDDoSAI response structure.
 * @class
 */
class DescribeListDDoSAIResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of AI protection switches
         * @type {Array.<DDoSAIRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new DDoSAIRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyDDoSSpeedLimitConfig request structure.
 * @class
 */
class ModifyDDoSSpeedLimitConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Access rate limit configuration. The configuration ID cannot be empty when you set this parameter.
         * @type {DDoSSpeedLimitConfig || null}
         */
        this.DDoSSpeedLimitConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSSpeedLimitConfig) {
            let obj = new DDoSSpeedLimitConfig();
            obj.deserialize(params.DDoSSpeedLimitConfig)
            this.DDoSSpeedLimitConfig = obj;
        }

    }
}

/**
 * AssociateDDoSEipAddress request structure.
 * @class
 */
class AssociateDDoSEipAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID (only Anti-DDoS Advanced). For example, `bgpip-0000011x`.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * EIP of the Anti-DDoS instance ID
         * @type {string || null}
         */
        this.Eip = null;

        /**
         * Instance ID to bind. For example, `ins-11112222`. It can be queried in the console or obtained from `InstanceId` returned by `DescribeInstances`.
         * @type {string || null}
         */
        this.CvmInstanceID = null;

        /**
         * Region of the CVM instance. For example, `ap-hongkong`.
         * @type {string || null}
         */
        this.CvmRegion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Eip = 'Eip' in params ? params.Eip : null;
        this.CvmInstanceID = 'CvmInstanceID' in params ? params.CvmInstanceID : null;
        this.CvmRegion = 'CvmRegion' in params ? params.CvmRegion : null;

    }
}

/**
 * CreateBlackWhiteIpList request structure.
 * @class
 */
class CreateBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of IPs
         * @type {Array.<string> || null}
         */
        this.IpList = null;

        /**
         * IP type. Valid values: `black` (blocklisted IP), `white`(allowlisted IP).
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.IpList = 'IpList' in params ? params.IpList : null;
        this.Type = 'Type' in params ? params.Type : null;

    }
}

/**
 * CreateBoundIP response structure.
 * @class
 */
class CreateBoundIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Success code
         * @type {SuccessCode || null}
         */
        this.Success = null;

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

        if (params.Success) {
            let obj = new SuccessCode();
            obj.deserialize(params.Success)
            this.Success = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Rate limit value types, such as pps and bps.
 * @class
 */
class SpeedValue extends  AbstractModel {
    constructor(){
        super();

        /**
         * Rate limit value types:
`1`: packets per second (pps)
`2`: bits per second (bps)
]
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Value
         * @type {number || null}
         */
        this.Value = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DeleteDDoSGeoIPBlockConfig request structure.
 * @class
 */
class DeleteDDoSGeoIPBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Region blocking configuration. The configuration ID cannot be empty when you set this parameter.
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.DDoSGeoIPBlockConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.DDoSGeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.DDoSGeoIPBlockConfig)
            this.DDoSGeoIPBlockConfig = obj;
        }

    }
}

/**
 * CreateSchedulingDomain response structure.
 * @class
 */
class CreateSchedulingDomainResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Created domain name
         * @type {string || null}
         */
        this.Domain = null;

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
        this.Domain = 'Domain' in params ? params.Domain : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Details of the cloud product used by the EIP
 * @class
 */
class EipProductInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * IP address
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Cloud product category. Valid values:
`public`: CVM
`bm`: BM
`eni`: ENI
`vpngw`: VPN gateway
 `natgw`: NAT gateway
`waf`: WAF
`fpc`: financial products
`gaap`: GAAP 
`other`: hosted IP
]
         * @type {string || null}
         */
        this.BizType = null;

        /**
         * Cloud sub-product category. Valid values: `cvm` (CVM), `lb` (Load balancer), `eni` (ENI), `vpngw` (VPN gateway), `natgw` (NAT gateway), `waf` (WAF), `fpc` (financial products), `gaap` (GAAP), `eip` (BM EIP) and `other` (hosted IP).
         * @type {string || null}
         */
        this.DeviceType = null;

        /**
         * Cloud instance ID of the IP. This field InstanceId will be `eni-*` if the instance ID is bound to an ENI IP; `none` if there is no instance ID to bind to a hosted IP.
         * @type {string || null}
         */
        this.InstanceId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.BizType = 'BizType' in params ? params.BizType : null;
        this.DeviceType = 'DeviceType' in params ? params.DeviceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateDDoSAI response structure.
 * @class
 */
class CreateDDoSAIResponse extends  AbstractModel {
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
 * Anti-DDoS region blocking configuration details
 * @class
 */
class DDoSGeoIPBlockConfigRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS region blocking configuration
         * @type {DDoSGeoIPBlockConfig || null}
         */
        this.GeoIPBlockConfig = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.GeoIPBlockConfig) {
            let obj = new DDoSGeoIPBlockConfig();
            obj.deserialize(params.GeoIPBlockConfig)
            this.GeoIPBlockConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * DescribeListProtocolBlockConfig request structure.
 * @class
 */
class DescribeListProtocolBlockConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * Region information.
 * @class
 */
class RegionInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region name, such as `ap-guangzhou`
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
        this.Region = 'Region' in params ? params.Region : null;

    }
}

/**
 * DescribeListWaterPrintConfig request structure.
 * @class
 */
class DescribeListWaterPrintConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when `Limit = 0`. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * ModifyDDoSGeoIPBlockConfig response structure.
 * @class
 */
class ModifyDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * Anti-DDoS Pro instance details
 * @class
 */
class BGPInstance extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance details
         * @type {InstanceRelation || null}
         */
        this.InstanceDetail = null;

        /**
         * Anti-DDoS instance specifications
         * @type {BGPInstanceSpecification || null}
         */
        this.SpecificationLimit = null;

        /**
         * Anti-DDoS instance usage statistics
         * @type {BGPInstanceUsages || null}
         */
        this.Usage = null;

        /**
         * Region of the Anti-DDoS instance
         * @type {RegionInfo || null}
         */
        this.Region = null;

        /**
         * Status of the Anti-DDoS instance. Valid values:
`idle`: running
`attacking`: under attacks
`blocking`: blocked
`creating`: creating
`deblocking`: unblocked
`isolate`: isolated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Purchase Time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Expiration time
         * @type {string || null}
         */
        this.ExpiredTime = null;

        /**
         * Name of the Anti-DDoS instance
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Package details of the Anti-DDoS instance.
Note: This field is `null` for an Anti-DDoS instance without using a package.
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {PackInfo || null}
         */
        this.PackInfo = null;

        /**
         * Details of the cloud product used by the EIP bound to the Anti-DDoS Pro instance
         * @type {Array.<EipProductInfo> || null}
         */
        this.EipProductInfos = null;

        /**
         * Binding status of the Anti-DDoS Pro instance
`idle`: the instance is bound.
 `bounding`: the instance is in binding.
`failed`: the binding failed.
]
         * @type {string || null}
         */
        this.BoundStatus = null;

        /**
         * Layer-4 protection level
         * @type {string || null}
         */
        this.DDoSLevel = null;

        /**
         * CC protection switch
         * @type {number || null}
         */
        this.CCEnable = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.InstanceDetail) {
            let obj = new InstanceRelation();
            obj.deserialize(params.InstanceDetail)
            this.InstanceDetail = obj;
        }

        if (params.SpecificationLimit) {
            let obj = new BGPInstanceSpecification();
            obj.deserialize(params.SpecificationLimit)
            this.SpecificationLimit = obj;
        }

        if (params.Usage) {
            let obj = new BGPInstanceUsages();
            obj.deserialize(params.Usage)
            this.Usage = obj;
        }

        if (params.Region) {
            let obj = new RegionInfo();
            obj.deserialize(params.Region)
            this.Region = obj;
        }
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ExpiredTime = 'ExpiredTime' in params ? params.ExpiredTime : null;
        this.Name = 'Name' in params ? params.Name : null;

        if (params.PackInfo) {
            let obj = new PackInfo();
            obj.deserialize(params.PackInfo)
            this.PackInfo = obj;
        }

        if (params.EipProductInfos) {
            this.EipProductInfos = new Array();
            for (let z in params.EipProductInfos) {
                let obj = new EipProductInfo();
                obj.deserialize(params.EipProductInfos[z]);
                this.EipProductInfos.push(obj);
            }
        }
        this.BoundStatus = 'BoundStatus' in params ? params.BoundStatus : null;
        this.DDoSLevel = 'DDoSLevel' in params ? params.DDoSLevel : null;
        this.CCEnable = 'CCEnable' in params ? params.CCEnable : null;

    }
}

/**
 * DescribeListWaterPrintConfig response structure.
 * @class
 */
class DescribeListWaterPrintConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of lists
         * @type {number || null}
         */
        this.Total = null;

        /**
         * List of watermark configurations
         * @type {Array.<WaterPrintRelation> || null}
         */
        this.ConfigList = null;

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
        this.Total = 'Total' in params ? params.Total : null;

        if (params.ConfigList) {
            this.ConfigList = new Array();
            for (let z in params.ConfigList) {
                let obj = new WaterPrintRelation();
                obj.deserialize(params.ConfigList[z]);
                this.ConfigList.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Anti-DDoS Pro instance usage statistics
 * @class
 */
class BGPInstanceUsages extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of used protection chances
         * @type {number || null}
         */
        this.ProtectCountUsage = null;

        /**
         * Number of protected IPs
         * @type {number || null}
         */
        this.ProtectIPNumberUsage = null;

        /**
         * Number of attack times in the last 7 days
         * @type {number || null}
         */
        this.Last7DayAttackCount = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProtectCountUsage = 'ProtectCountUsage' in params ? params.ProtectCountUsage : null;
        this.ProtectIPNumberUsage = 'ProtectIPNumberUsage' in params ? params.ProtectIPNumberUsage : null;
        this.Last7DayAttackCount = 'Last7DayAttackCount' in params ? params.Last7DayAttackCount : null;

    }
}

/**
 * DeleteDDoSSpeedLimitConfig response structure.
 * @class
 */
class DeleteDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * CreateWaterPrintKey response structure.
 * @class
 */
class CreateWaterPrintKeyResponse extends  AbstractModel {
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
 * DeleteDDoSGeoIPBlockConfig response structure.
 * @class
 */
class DeleteDDoSGeoIPBlockConfigResponse extends  AbstractModel {
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
 * DescribeListBlackWhiteIpList request structure.
 * @class
 */
class DescribeListBlackWhiteIpListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Starting offset of the page. Value: (number of pages – 1) * items per page.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Number of items per page. The default value is 20 when Limit = 0. The maximum value is 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Anti-DDoS instance ID filter. Anti-DDoS instance prefix wildcard search is supported. For example, you can filter Anti-DDoS Pro instances by `bgp-*`.
         * @type {string || null}
         */
        this.FilterInstanceId = null;

        /**
         * IP filter
         * @type {string || null}
         */
        this.FilterIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.FilterInstanceId = 'FilterInstanceId' in params ? params.FilterInstanceId : null;
        this.FilterIp = 'FilterIp' in params ? params.FilterIp : null;

    }
}

/**
 * ModifyDDoSSpeedLimitConfig response structure.
 * @class
 */
class ModifyDDoSSpeedLimitConfigResponse extends  AbstractModel {
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
 * Scheduling domain name details
 * @class
 */
class SchedulingDomainInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Scheduling domain name
         * @type {string || null}
         */
        this.Domain = null;

        /**
         * List of line IPs
         * @type {Array.<IPLineInfo> || null}
         */
        this.LineIPList = null;

        /**
         * Scheduling mode. Valid value: `priority` (priority scheduling).
         * @type {string || null}
         */
        this.Method = null;

        /**
         * TTL value recorded from the scheduling domain name resolution
         * @type {number || null}
         */
        this.TTL = null;

        /**
         * Running status. Valid values:
`0`: not running
`1`: running
`2`: abnormal
]
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreatedTime = null;

        /**
         * Last modification time
         * @type {string || null}
         */
        this.ModifyTime = null;

        /**
         * Domain name
Note: This field may return `null`, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UsrDomainName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Domain = 'Domain' in params ? params.Domain : null;

        if (params.LineIPList) {
            this.LineIPList = new Array();
            for (let z in params.LineIPList) {
                let obj = new IPLineInfo();
                obj.deserialize(params.LineIPList[z]);
                this.LineIPList.push(obj);
            }
        }
        this.Method = 'Method' in params ? params.Method : null;
        this.TTL = 'TTL' in params ? params.TTL : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.CreatedTime = 'CreatedTime' in params ? params.CreatedTime : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;
        this.UsrDomainName = 'UsrDomainName' in params ? params.UsrDomainName : null;

    }
}

/**
 * DescribeDefaultAlarmThreshold request structure.
 * @class
 */
class DescribeDefaultAlarmThresholdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product category. Valid values:
`bgp`: Anti-DDoS Pro
`bgpip`: Anti-DDoS Advanced
]
         * @type {string || null}
         */
        this.InstanceType = null;

        /**
         * Alarm threshold type filter. Valid values:
`1`: alarm threshold for inbound traffic
`2`: alarm threshold for cleansing attack traffic
]
         * @type {number || null}
         */
        this.FilterAlarmType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.FilterAlarmType = 'FilterAlarmType' in params ? params.FilterAlarmType : null;

    }
}

/**
 * Created watermark key
 * @class
 */
class WaterPrintKey extends  AbstractModel {
    constructor(){
        super();

        /**
         * Key version
         * @type {string || null}
         */
        this.KeyVersion = null;

        /**
         * Key content
         * @type {string || null}
         */
        this.KeyContent = null;

        /**
         * Key ID
         * @type {string || null}
         */
        this.KeyId = null;

        /**
         * Key status. Valid value: `1` (enabled).
         * @type {number || null}
         */
        this.KeyOpenStatus = null;

        /**
         * Key creation time
         * @type {string || null}
         */
        this.CreateTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.KeyVersion = 'KeyVersion' in params ? params.KeyVersion : null;
        this.KeyContent = 'KeyContent' in params ? params.KeyContent : null;
        this.KeyId = 'KeyId' in params ? params.KeyId : null;
        this.KeyOpenStatus = 'KeyOpenStatus' in params ? params.KeyOpenStatus : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;

    }
}

/**
 * Feature filtering information
 * @class
 */
class PacketFilterRelation extends  AbstractModel {
    constructor(){
        super();

        /**
         * Feature filtering configuration
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

        /**
         * Anti-DDoS instance configured
         * @type {Array.<InstanceRelation> || null}
         */
        this.InstanceDetailList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

        if (params.InstanceDetailList) {
            this.InstanceDetailList = new Array();
            for (let z in params.InstanceDetailList) {
                let obj = new InstanceRelation();
                obj.deserialize(params.InstanceDetailList[z]);
                this.InstanceDetailList.push(obj);
            }
        }

    }
}

/**
 * CreatePacketFilterConfig request structure.
 * @class
 */
class CreatePacketFilterConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Anti-DDoS instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Feature filtering rules
         * @type {PacketFilterConfig || null}
         */
        this.PacketFilterConfig = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.PacketFilterConfig) {
            let obj = new PacketFilterConfig();
            obj.deserialize(params.PacketFilterConfig)
            this.PacketFilterConfig = obj;
        }

    }
}

module.exports = {
    CreateDefaultAlarmThresholdRequest: CreateDefaultAlarmThresholdRequest,
    DescribeListBGPIPInstancesResponse: DescribeListBGPIPInstancesResponse,
    DescribeBlackWhiteIpListResponse: DescribeBlackWhiteIpListResponse,
    ProxyTypeInfo: ProxyTypeInfo,
    CreateBoundIPRequest: CreateBoundIPRequest,
    DescribeListSchedulingDomainRequest: DescribeListSchedulingDomainRequest,
    CreateWaterPrintConfigRequest: CreateWaterPrintConfigRequest,
    DDoSGeoIPBlockConfig: DDoSGeoIPBlockConfig,
    CreateBlackWhiteIpListResponse: CreateBlackWhiteIpListResponse,
    IPAlarmThresholdRelation: IPAlarmThresholdRelation,
    ModifyDDoSGeoIPBlockConfigRequest: ModifyDDoSGeoIPBlockConfigRequest,
    DescribeL7RulesBySSLCertIdResponse: DescribeL7RulesBySSLCertIdResponse,
    DescribeListDDoSSpeedLimitConfigRequest: DescribeListDDoSSpeedLimitConfigRequest,
    InstanceRelation: InstanceRelation,
    DescribeListProtocolBlockConfigResponse: DescribeListProtocolBlockConfigResponse,
    DescribeListBGPInstancesRequest: DescribeListBGPInstancesRequest,
    DeleteDDoSSpeedLimitConfigRequest: DeleteDDoSSpeedLimitConfigRequest,
    CreatePacketFilterConfigResponse: CreatePacketFilterConfigResponse,
    CreateL7RuleCertsRequest: CreateL7RuleCertsRequest,
    DescribeListSchedulingDomainResponse: DescribeListSchedulingDomainResponse,
    CreateIPAlarmThresholdConfigRequest: CreateIPAlarmThresholdConfigRequest,
    DescribeDefaultAlarmThresholdResponse: DescribeDefaultAlarmThresholdResponse,
    CreateDDoSAIRequest: CreateDDoSAIRequest,
    DescribeListProtectThresholdConfigRequest: DescribeListProtectThresholdConfigRequest,
    CreateWaterPrintConfigResponse: CreateWaterPrintConfigResponse,
    DescribeListBGPIPInstancesRequest: DescribeListBGPIPInstancesRequest,
    StaticPackRelation: StaticPackRelation,
    DescribeL7RulesBySSLCertIdRequest: DescribeL7RulesBySSLCertIdRequest,
    DescribeListPacketFilterConfigResponse: DescribeListPacketFilterConfigResponse,
    DeleteBlackWhiteIpListResponse: DeleteBlackWhiteIpListResponse,
    CreateSchedulingDomainRequest: CreateSchedulingDomainRequest,
    BoundIpInfo: BoundIpInfo,
    DisassociateDDoSEipAddressResponse: DisassociateDDoSEipAddressResponse,
    BGPIPInstance: BGPIPInstance,
    DeleteBlackWhiteIpListRequest: DeleteBlackWhiteIpListRequest,
    SourceServer: SourceServer,
    ModifyDomainUsrNameResponse: ModifyDomainUsrNameResponse,
    DisassociateDDoSEipAddressRequest: DisassociateDDoSEipAddressRequest,
    BlackWhiteIpRelation: BlackWhiteIpRelation,
    DeleteWaterPrintKeyResponse: DeleteWaterPrintKeyResponse,
    EipAddressPackRelation: EipAddressPackRelation,
    ProtocolBlockRelation: ProtocolBlockRelation,
    DescribeListPacketFilterConfigRequest: DescribeListPacketFilterConfigRequest,
    BGPIPInstanceUsages: BGPIPInstanceUsages,
    ModifyPacketFilterConfigResponse: ModifyPacketFilterConfigResponse,
    DescribeListDDoSGeoIPBlockConfigRequest: DescribeListDDoSGeoIPBlockConfigRequest,
    Layer7Rule: Layer7Rule,
    CreateDDoSSpeedLimitConfigRequest: CreateDDoSSpeedLimitConfigRequest,
    CreateDDoSGeoIPBlockConfigRequest: CreateDDoSGeoIPBlockConfigRequest,
    CreateProtocolBlockConfigRequest: CreateProtocolBlockConfigRequest,
    DeleteWaterPrintKeyRequest: DeleteWaterPrintKeyRequest,
    AssociateDDoSEipAddressResponse: AssociateDDoSEipAddressResponse,
    DDoSSpeedLimitConfigRelation: DDoSSpeedLimitConfigRelation,
    PackInfo: PackInfo,
    ModifyPacketFilterConfigRequest: ModifyPacketFilterConfigRequest,
    DescribeBlackWhiteIpListRequest: DescribeBlackWhiteIpListRequest,
    ModifyDomainUsrNameRequest: ModifyDomainUsrNameRequest,
    CreateDDoSSpeedLimitConfigResponse: CreateDDoSSpeedLimitConfigResponse,
    DeletePacketFilterConfigRequest: DeletePacketFilterConfigRequest,
    DescribeListDDoSGeoIPBlockConfigResponse: DescribeListDDoSGeoIPBlockConfigResponse,
    WaterPrintConfig: WaterPrintConfig,
    ProtocolBlockConfig: ProtocolBlockConfig,
    DescribeListListenerRequest: DescribeListListenerRequest,
    DeleteWaterPrintConfigResponse: DeleteWaterPrintConfigResponse,
    Layer4Rule: Layer4Rule,
    DeletePacketFilterConfigResponse: DeletePacketFilterConfigResponse,
    CreateProtocolBlockConfigResponse: CreateProtocolBlockConfigResponse,
    BGPIPInstanceSpecification: BGPIPInstanceSpecification,
    CreateIPAlarmThresholdConfigResponse: CreateIPAlarmThresholdConfigResponse,
    DeleteWaterPrintConfigRequest: DeleteWaterPrintConfigRequest,
    DescribeListBlackWhiteIpListResponse: DescribeListBlackWhiteIpListResponse,
    DDoSAIRelation: DDoSAIRelation,
    DescribeListDDoSSpeedLimitConfigResponse: DescribeListDDoSSpeedLimitConfigResponse,
    CreateDDoSGeoIPBlockConfigResponse: CreateDDoSGeoIPBlockConfigResponse,
    ListenerCcThreholdConfig: ListenerCcThreholdConfig,
    IPLineInfo: IPLineInfo,
    EipAddressRelation: EipAddressRelation,
    DescribeListListenerResponse: DescribeListListenerResponse,
    ProtectThresholdRelation: ProtectThresholdRelation,
    CreateL7RuleCertsResponse: CreateL7RuleCertsResponse,
    DDoSSpeedLimitConfig: DDoSSpeedLimitConfig,
    DescribeListProtectThresholdConfigResponse: DescribeListProtectThresholdConfigResponse,
    CertIdInsL7Rules: CertIdInsL7Rules,
    CreateDefaultAlarmThresholdResponse: CreateDefaultAlarmThresholdResponse,
    DescribeListIPAlarmConfigResponse: DescribeListIPAlarmConfigResponse,
    SuccessCode: SuccessCode,
    DescribeListBGPInstancesResponse: DescribeListBGPInstancesResponse,
    DescribeListDDoSAIRequest: DescribeListDDoSAIRequest,
    DescribeListIPAlarmConfigRequest: DescribeListIPAlarmConfigRequest,
    PortSegment: PortSegment,
    PacketFilterConfig: PacketFilterConfig,
    DefaultAlarmThreshold: DefaultAlarmThreshold,
    ForwardListener: ForwardListener,
    BGPInstanceSpecification: BGPInstanceSpecification,
    CreateWaterPrintKeyRequest: CreateWaterPrintKeyRequest,
    WaterPrintRelation: WaterPrintRelation,
    InsL7Rules: InsL7Rules,
    DescribeListDDoSAIResponse: DescribeListDDoSAIResponse,
    ModifyDDoSSpeedLimitConfigRequest: ModifyDDoSSpeedLimitConfigRequest,
    AssociateDDoSEipAddressRequest: AssociateDDoSEipAddressRequest,
    CreateBlackWhiteIpListRequest: CreateBlackWhiteIpListRequest,
    CreateBoundIPResponse: CreateBoundIPResponse,
    SpeedValue: SpeedValue,
    DeleteDDoSGeoIPBlockConfigRequest: DeleteDDoSGeoIPBlockConfigRequest,
    CreateSchedulingDomainResponse: CreateSchedulingDomainResponse,
    EipProductInfo: EipProductInfo,
    CreateDDoSAIResponse: CreateDDoSAIResponse,
    DDoSGeoIPBlockConfigRelation: DDoSGeoIPBlockConfigRelation,
    DescribeListProtocolBlockConfigRequest: DescribeListProtocolBlockConfigRequest,
    RegionInfo: RegionInfo,
    DescribeListWaterPrintConfigRequest: DescribeListWaterPrintConfigRequest,
    ModifyDDoSGeoIPBlockConfigResponse: ModifyDDoSGeoIPBlockConfigResponse,
    BGPInstance: BGPInstance,
    DescribeListWaterPrintConfigResponse: DescribeListWaterPrintConfigResponse,
    BGPInstanceUsages: BGPInstanceUsages,
    DeleteDDoSSpeedLimitConfigResponse: DeleteDDoSSpeedLimitConfigResponse,
    CreateWaterPrintKeyResponse: CreateWaterPrintKeyResponse,
    DeleteDDoSGeoIPBlockConfigResponse: DeleteDDoSGeoIPBlockConfigResponse,
    DescribeListBlackWhiteIpListRequest: DescribeListBlackWhiteIpListRequest,
    ModifyDDoSSpeedLimitConfigResponse: ModifyDDoSSpeedLimitConfigResponse,
    SchedulingDomainInfo: SchedulingDomainInfo,
    DescribeDefaultAlarmThresholdRequest: DescribeDefaultAlarmThresholdRequest,
    WaterPrintKey: WaterPrintKey,
    PacketFilterRelation: PacketFilterRelation,
    CreatePacketFilterConfigRequest: CreatePacketFilterConfigRequest,

}