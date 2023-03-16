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
 * UpgradeSmallVersion request structure.
 * @class
 */
class UpgradeSmallVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The current redis version
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * Upgradeable redis version
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

        /**
         * `1` (upgrade immediately), `0` (upgrade during maintenance time)
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

    }
}

/**
 * ModifyInstanceParams response structure.
 * @class
 */
class ModifyInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Whether the parameter is modified successfully. <br><li>`True`: Yes<br><li>`False`: No<br>
         * @type {boolean || null}
         */
        this.Changed = null;

        /**
         * ID of the task
         * @type {number || null}
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
        this.Changed = 'Changed' in params ? params.Changed : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * EnableReplicaReadonly request structure.
 * @class
 */
class EnableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account routing policy. If `master` or `replication` is entered, it means to route to the master or replica node; if this parameter is left empty, it means to write into the master node and read from the replica node by default.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;

    }
}

/**
 * Array of instance backups
 * @class
 */
class RedisBackupSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Backup ID
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Backup type

- `1`: Manual backup initiated by the user.
- `0`: Automatic backup in the early morning initiated by the system.
         * @type {string || null}
         */
        this.BackupType = null;

        /**
         * Backup status 

- `1`: The backup is locked by another process.
- `2`: The backup is normal and not locked by any process.
- `-1`: The backup expired.
- `3`: The backup is being exported.
- `4`: The backup was exported successfully.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Backup remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Whether the backup is locked

- `0`: Not locked.
- `1`: Locked.
         * @type {number || null}
         */
        this.Locked = null;

        /**
         * Internal field, which can be ignored.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.BackupSize = null;

        /**
         * Internal field, which can be ignored.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.FullBackup = null;

        /**
         * Internal field, which can be ignored.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.InstanceType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * The region where the local backup resides.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Backup end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup file type
         * @type {string || null}
         */
        this.FileType = null;

        /**
         * Backup file expiration time
         * @type {string || null}
         */
        this.ExpireTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.BackupType = 'BackupType' in params ? params.BackupType : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Locked = 'Locked' in params ? params.Locked : null;
        this.BackupSize = 'BackupSize' in params ? params.BackupSize : null;
        this.FullBackup = 'FullBackup' in params ? params.FullBackup : null;
        this.InstanceType = 'InstanceType' in params ? params.InstanceType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.FileType = 'FileType' in params ? params.FileType : null;
        this.ExpireTime = 'ExpireTime' in params ? params.ExpireTime : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access command information
         * @type {Array.<SourceCommand> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceCommand();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig response structure.
 * @class
 */
class ModifyAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Automatic backup type: 1 (scheduled rollback)
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Automatic backup cycle. Valid values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Automatic backup time in the format of 00:00-01:00, 01:00-02:00... 23:00-00:00.
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Retention time of full backup files in days
         * @type {number || null}
         */
        this.BackupStorageDays = null;

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
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance request structure.
 * @class
 */
class RestoreInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be operated on, which can be obtained through the `InstanceId` field in the return value of the `DescribeInstances` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup ID, which can be obtained through the `backupId` field in the return value of the `GetRedisBackupList` API.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Instance password, which needs to be validated during instance restoration (this parameter is not required for password-free instances)
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * AllocateWanAddress request structure.
 * @class
 */
class AllocateWanAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
 * ApplyParamsTemplate request structure.
 * @class
 */
class ApplyParamsTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * ID of the parameter template to be applied
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * UpgradeInstanceVersion response structure.
 * @class
 */
class UpgradeInstanceVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CreateInstances request structure.
 * @class
 */
class CreateInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type. Valid values: `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture), `15` (Redis 6.0 Memory Edition in standard architecture), `16` (Redis 6.0 Memory Edition in cluster architecture)
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * Memory capacity in MB, which must be a multiple of 1,024. It is subject to the purchasable specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
If `TypeId` is the standard architecture, `MemSize` indicates the total memory capacity of the instance; if `TypeId` is the cluster architecture, `MemSize` indicates the memory capacity per shard.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of instances. The actual quantity purchasable at a time is subject to the specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Length of purchase in months, which is required when creating a monthly subscribed instance. Valid values: [1,2,3,4,5,6,7,8,9,10,11,12,24,36]. For pay-as-you-go instances, set the parameter to `1`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing mode. 0: pay-as-you-go
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * ID of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance password. If the input parameter `NoAuth` is `true` and a VPC is used, the `Password` is optional; otherwise, it is required.
If the instance `TypeId` is Redis 2.8, 4.0, or 5.0, the password cannot start with "/" and must contain 8–30 characters in at least two of the following character types: lowercase letters, uppercase letters, digits, and special symbols (()`~!@#$%^&*-+=_|{}[]:;<>,.?/).
If the instance `TypeId` is CKV 3.2, the password can contain 8–30 letters and digits.
         * @type {string || null}
         */
        this.Password = null;

        /**
         * VPC ID such as vpc-sad23jfdfk. If this parameter is not passed in, the classic network will be selected by default. Use the VPC list querying API to query.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * In the classic network, `subnetId` is invalid. In a VPC subnet, the value is the subnet ID, such as subnet-fdj24n34j2.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Project ID. The value is subject to the `projectId` returned by user account > user account querying APIs > project list.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Auto-renewal flag. 0: default status (manual renewal); 1: auto-renewal enabled; 2: auto-renewal disabled
         * @type {number || null}
         */
        this.AutoRenew = null;

        /**
         * Array of security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIdList = null;

        /**
         * User-defined port. If this parameter is left empty, 6379 will be used by default. Value range: [1024,65535].
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Number of shards in an instance. This parameter is required for Cluster Edition instances. Valid values: [3,5,8,12,16,24,32,64,96,128].
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas in the instance. Redis 2.8 Standard Edition and CKV Standard Edition support 1 replica. Standard/Cluster Edition 4.0 and 5.0 support 1–5 replicas.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Whether to support read-only replicas. Neither Redis 2.8 Standard Edition nor CKV Standard Edition supports read-only replicas. Read/write separation will be automatically enabled for an instance after it enables read-only replicas. Write requests will be directed to the master node and read requests will be distributed to replica nodes. To enable read-only replicas, we recommend you create two or more replicas.
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * Instance name, which can contain up to 60 letters, digits, underscores, or hyphens.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Whether to support the password-free feature. Valid values: true (password-free instance), false (password-enabled instance). Default value: false. Only instances in a VPC support the password-free access.
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * Node information of the instance. Currently, information about the node type (master or replica) and node AZ can be passed in. This parameter is not required for single-AZ deployed instances.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * Tag bound to the instance to be purchased
         * @type {Array.<ResourceTag> || null}
         */
        this.ResourceTags = null;

        /**
         * Name of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * ID of the parameter template applied to the created instance. If this parameter is left blank, the default parameter template will be applied.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * false: send a normal request and create an instance directly after the check is passed (default value); true: send a check request without creating an instance.
         * @type {boolean || null}
         */
        this.DryRun = null;

        /**
         * Valid values: `local` (local disk edition), `cloud` (cloud disk edition), `cdc` (dedicated cluster edition). Default value: `local` (local disk edition)
         * @type {string || null}
         */
        this.ProductVersion = null;

        /**
         * Dedicated cluster ID, which is required when `ProductVersion` is "cdc".
         * @type {string || null}
         */
        this.RedisClusterId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.SecurityGroupIdList = 'SecurityGroupIdList' in params ? params.SecurityGroupIdList : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

        if (params.ResourceTags) {
            this.ResourceTags = new Array();
            for (let z in params.ResourceTags) {
                let obj = new ResourceTag();
                obj.deserialize(params.ResourceTags[z]);
                this.ResourceTags.push(obj);
            }
        }
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.DryRun = 'DryRun' in params ? params.DryRun : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;
        this.RedisClusterId = 'RedisClusterId' in params ? params.RedisClusterId : null;

    }
}

/**
 * ModifyInstanceReadOnly response structure.
 * @class
 */
class ModifyInstanceReadOnlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeInstanceZoneInfo request structure.
 * @class
 */
class DescribeInstanceZoneInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID, such as crs-6ubhgouj
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
 * ModifyNetworkConfig response structure.
 * @class
 */
class ModifyNetworkConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution status. Ignore this parameter.
         * @type {boolean || null}
         */
        this.Status = null;

        /**
         * New subnet ID of the instance
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * New VPC ID of the instance
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * New private IPv4 address of the instance
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Task ID, which can be used to query the task execution status through the `DescribeTaskInfo` API.
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Command duration
 * @class
 */
class CommandTake extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Duration
         * @type {number || null}
         */
        this.Took = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Took = 'Took' in params ? params.Took : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key details
         * @type {Array.<BigKeyInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group inbound rule
 * @class
 */
class Inbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy. Valid values: ACCEPT, DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * All the addresses that the address group ID represents.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * Source IP or IP address range, such as 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Network protocol, such as UDP and TCP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Port.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * All the protocols and ports that the service group ID represents.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * All the addresses that the security group ID represents.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * AssociateSecurityGroups request structure.
 * @class
 */
class AssociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * ID of the security group to be associated in the format of sg-efil73jd.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * ID(s) of the instance(s) to be associated in the format of ins-lesecurk. You can specify multiple instances.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * DescribeTaskList response structure.
 * @class
 */
class DescribeTaskListResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of tasks
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Task details
         * @type {Array.<TaskInfoDetail> || null}
         */
        this.Tasks = null;

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

        if (params.Tasks) {
            this.Tasks = new Array();
            for (let z in params.Tasks) {
                let obj = new TaskInfoDetail();
                obj.deserialize(params.Tasks[z]);
                this.Tasks.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstance request structure.
 * @class
 */
class ModifyInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance modification type. rename: rename an instance; modifyProject: modify the project of an instance; modifyAutoRenew: modify the auto-renewal flag of an instance.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * New name of the instance
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Auto-renewal flag. 0: default status (manual renewal); 1: auto-renewal enabled; 2: auto-renewal disabled
         * @type {Array.<number> || null}
         */
        this.AutoRenews = null;

        /**
         * Disused
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Disused
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Disused
         * @type {number || null}
         */
        this.AutoRenew = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.AutoRenews = 'AutoRenews' in params ? params.AutoRenews : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;

    }
}

/**
 * KillMasterGroup response structure.
 * @class
 */
class KillMasterGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
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
 * RenewInstance response structure.
 * @class
 */
class RenewInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeSlowLog response structure.
 * @class
 */
class DescribeSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query details
         * @type {Array.<InstanceSlowlogDetail> || null}
         */
        this.InstanceSlowlogDetail = null;

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

        if (params.InstanceSlowlogDetail) {
            this.InstanceSlowlogDetail = new Array();
            for (let z in params.InstanceSlowlogDetail) {
                let obj = new InstanceSlowlogDetail();
                obj.deserialize(params.InstanceSlowlogDetail[z]);
                this.InstanceSlowlogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCommonDBInstances request structure.
 * @class
 */
class DescribeCommonDBInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of VPC IDs
         * @type {Array.<number> || null}
         */
        this.VpcIds = null;

        /**
         * List of subnet IDs
         * @type {Array.<number> || null}
         */
        this.SubnetIds = null;

        /**
         * List of billing modes. 0: monthly subscription; 1: pay-as-you-go
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * List of instance IDs
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * List of instance names
         * @type {Array.<string> || null}
         */
        this.InstanceNames = null;

        /**
         * List of instance status
         * @type {Array.<string> || null}
         */
        this.Status = null;

        /**
         * Sorting field
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Sorting order
         * @type {string || null}
         */
        this.OrderByType = null;

        /**
         * List of instance VIPs
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * List of VPC IDs
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * List of unique subnet IDs
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * Quantity limit. Recommended default value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset. Default value: 0
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.InstanceNames = 'InstanceNames' in params ? params.InstanceNames : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderByType = 'OrderByType' in params ? params.OrderByType : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeDBSecurityGroups response structure.
 * @class
 */
class DescribeDBSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group rules
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Private IP for which the security group takes effect
         * @type {string || null}
         */
        this.VIP = null;

        /**
         * Private port for which the security group takes effect
         * @type {string || null}
         */
        this.VPort = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.VIP = 'VIP' in params ? params.VIP : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * RestoreInstance response structure.
 * @class
 */
class RestoreInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID, which can be used to query the task execution status through the `DescribeTaskInfo` API.
         * @type {number || null}
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
 * Master or replica node information of the TencentDB for Redis instance.
 * @class
 */
class RedisNodeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node type. <ul><li>`0`: Master node.</li><li>`1`: Replica node.</li></ul>
         * @type {number || null}
         */
        this.NodeType = null;

        /**
         * Master or replica node ID. <ul><li>This parameter is optional when the [CreateInstances](https://intl.cloud.tencent.com/document/product/239/20026?from_cn_redirect=1) API is used to create a TencentDB for Redis instance, but it is required when the [UpgradeInstance](https://intl.cloud.tencent.com/document/product/239/20013?from_cn_redirect=1) API is used to adjust the configuration of an instance. </li><li>You can use the [DescribeInstances](https://intl.cloud.tencent.com/document/product/239/20018?from_cn_redirect=1) API to get the node ID of integer type. </li></ul>
         * @type {number || null}
         */
        this.NodeId = null;

        /**
         * ID of the AZ of the master or replica node
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Name of the AZ of the master or replica node
         * @type {string || null}
         */
        this.ZoneName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeType = 'NodeType' in params ? params.NodeType : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;

    }
}

/**
 * ModifyBackupDownloadRestriction response structure.
 * @class
 */
class ModifyBackupDownloadRestrictionResponse extends  AbstractModel {
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
 * DescribeBackupUrl request structure.
 * @class
 */
class DescribeBackupUrlRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup ID, which can be obtained through the `RedisBackupSet` parameter returned by the [DescribeInstanceBackups](https://intl.cloud.tencent.com/document/product/239/20011?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.BackupId = null;

        /**
         * Type of the network restriction for downloading backup files. If this parameter is not configured, the user-defined configuration will be used.

- `NoLimit`: Backup files can be downloaded over both public and private networks.
- `LimitOnlyIntranet`: Backup files can be downloaded only at private network addresses auto-assigned by Tencent Cloud.
- `Customize`: Backup files can be downloaded only in the customized VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backups can be downloaded at the custom `LimitIp` address.

- `In` (default value): Download is allowed for the custom IP.
- `NotIn`: Download is not allowed for the custom IP.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * VPC IP of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BackupId = 'BackupId' in params ? params.BackupId : null;
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * DeleteParamTemplate response structure.
 * @class
 */
class DeleteParamTemplateResponse extends  AbstractModel {
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
 * DescribeInstances response structure.
 * @class
 */
class DescribeInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance details
         * @type {Array.<InstanceSet> || null}
         */
        this.InstanceSet = null;

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

        if (params.InstanceSet) {
            this.InstanceSet = new Array();
            for (let z in params.InstanceSet) {
                let obj = new InstanceSet();
                obj.deserialize(params.InstanceSet[z]);
                this.InstanceSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceZoneInfo response structure.
 * @class
 */
class DescribeInstanceZoneInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance node groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * List of instance node groups
         * @type {Array.<ReplicaGroup> || null}
         */
        this.ReplicaGroups = null;

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

        if (params.ReplicaGroups) {
            this.ReplicaGroups = new Array();
            for (let z in params.ReplicaGroups) {
                let obj = new ReplicaGroup();
                obj.deserialize(params.ReplicaGroups[z]);
                this.ReplicaGroups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Sub-account information
 * @class
 */
class Account extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Account name (`root` for a root account)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Account description information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Read/write policy. r: read-only; w: write-only; rw: read/write
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Routing policy. master: master node; replication: secondary node
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Sub-account status. 1: account is being changed; 2: account is valid; -4: account has been deleted
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Proxy slow query details
 * @class
 */
class InstanceProxySlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Duration of the slow query in ms.
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client address
         * @type {string || null}
         */
        this.Client = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Execution time
         * @type {string || null}
         */
        this.ExecuteTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;

    }
}

/**
 * Security group inbound/outbound rules
 * @class
 */
class SecurityGroupsInboundAndOutbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Action to be executed
         * @type {string || null}
         */
        this.Action = null;

        /**
         * IP addresses
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Port number
         * @type {string || null}
         */
        this.Port = null;

        /**
         * Protocol type
         * @type {string || null}
         */
        this.Proto = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Action = 'Action' in params ? params.Action : null;
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Proto = 'Proto' in params ? params.Proto : null;

    }
}

/**
 * ResetPassword response structure.
 * @class
 */
class ResetPasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID (this parameter is the task ID when changing a password. If you are switching between password-free and password-enabled instance mode, you can leave this parameter alone)
         * @type {number || null}
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
 * ClearInstance request structure.
 * @class
 */
class ClearInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Redis instance password (this parameter is required for password-enabled instances but not for password-free instances)
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * UpgradeInstanceVersion request structure.
 * @class
 */
class UpgradeInstanceVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Target instance type after the change, which is the same as the `Type` of the [CreateInstances](https://intl.cloud.tencent.com/document/api/239/20026?from_cn_redirect=1) API.
         * @type {string || null}
         */
        this.TargetInstanceType = null;

        /**
         * Switch mode. Valid values: 1 (switch during the maintenance time), 2 (switch now).
         * @type {number || null}
         */
        this.SwitchOption = null;

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
        this.TargetInstanceType = 'TargetInstanceType' in params ? params.TargetInstanceType : null;
        this.SwitchOption = 'SwitchOption' in params ? params.SwitchOption : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Region information
 * @class
 */
class RegionConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
         * @type {string || null}
         */
        this.RegionId = null;

        /**
         * Region name
         * @type {string || null}
         */
        this.RegionName = null;

        /**
         * Region abbreviation
         * @type {string || null}
         */
        this.RegionShortName = null;

        /**
         * Name of the area where a region is located
         * @type {string || null}
         */
        this.Area = null;

        /**
         * AZ information
         * @type {Array.<ZoneCapacityConf> || null}
         */
        this.ZoneSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.RegionName = 'RegionName' in params ? params.RegionName : null;
        this.RegionShortName = 'RegionShortName' in params ? params.RegionShortName : null;
        this.Area = 'Area' in params ? params.Area : null;

        if (params.ZoneSet) {
            this.ZoneSet = new Array();
            for (let z in params.ZoneSet) {
                let obj = new ZoneCapacityConf();
                obj.deserialize(params.ZoneSet[z]);
                this.ZoneSet.push(obj);
            }
        }

    }
}

/**
 * Big key details
 * @class
 */
class BigKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database
         * @type {number || null}
         */
        this.DB = null;

        /**
         * Big key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Data timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DB = 'DB' in params ? params.DB : null;
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeParamTemplates request structure.
 * @class
 */
class DescribeParamTemplatesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of instance types. Valid values: `1` (Redis 2.8 Memory Edition in cluster architecture), `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture).
         * @type {Array.<number> || null}
         */
        this.ProductTypes = null;

        /**
         * Array of template names.
         * @type {Array.<string> || null}
         */
        this.TemplateNames = null;

        /**
         * Array of template IDs.
         * @type {Array.<string> || null}
         */
        this.TemplateIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProductTypes = 'ProductTypes' in params ? params.ProductTypes : null;
        this.TemplateNames = 'TemplateNames' in params ? params.TemplateNames : null;
        this.TemplateIds = 'TemplateIds' in params ? params.TemplateIds : null;

    }
}

/**
 * RenewInstance request structure.
 * @class
 */
class RenewInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Validity period in months
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The parameter used to determine whether to modify the billing mode. <ul><li>If you want to change the billing mode from pay-as-you-go to monthly subscription, specify this parameter as <b>prepaid</b>. </li><li>If the current instance is monthly subscribed, this parameter is not required. </li></ul>
         * @type {string || null}
         */
        this.ModifyPayMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Period = 'Period' in params ? params.Period : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ModifyPayMode = 'ModifyPayMode' in params ? params.ModifyPayMode : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones response structure.
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceParamRecords response structure.
 * @class
 */
class DescribeInstanceParamRecordsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of modifications.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Information of modifications.
         * @type {Array.<InstanceParamHistory> || null}
         */
        this.InstanceParamHistory = null;

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

        if (params.InstanceParamHistory) {
            this.InstanceParamHistory = new Array();
            for (let z in params.InstanceParamHistory) {
                let obj = new InstanceParamHistory();
                obj.deserialize(params.InstanceParamHistory[z]);
                this.InstanceParamHistory.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyAutoBackupConfig request structure.
 * @class
 */
class ModifyAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Automatic backup cycle. Valid values: `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`. This parameter currently cannot be modified.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Automatic backup time in the format of 00:00-01:00, 01:00-02:00... 23:00-00:00.
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Automatic backup type. `1`: Scheduled rollback.
         * @type {number || null}
         */
        this.AutoBackupType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;

    }
}

/**
 * Description of the instance parameter in Multi type
 * @class
 */
class InstanceMultiParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type: Multi
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether restart is required after a modification is made. Valid values: true, false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Parameter description
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Parameter status. 1: modifying; 2: modified
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * DescribeInstanceDealDetail request structure.
 * @class
 */
class DescribeInstanceDealDetailRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Array of order transaction IDs, i.e., the `DealId` output parameter of the [CreateInstances](https://intl.cloud.tencent.com/document/api/239/20026?from_cn_redirect=1) API.
         * @type {Array.<string> || null}
         */
        this.DealIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealIds = 'DealIds' in params ? params.DealIds : null;

    }
}

/**
 * Running information of Redis nodes
 * @class
 */
class RedisNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of keys on the node
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Distribution of node slots
         * @type {string || null}
         */
        this.Slot = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node status
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slot = 'Slot' in params ? params.Slot : null;
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DescribeProjectSecurityGroup request structure.
 * @class
 */
class DescribeProjectSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * 0: default project; -1: all projects; >0: specified project
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;

    }
}

/**
 * Details of the parameters in the parameter template
 * @class
 */
class ParameterDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Data type of the parameter
         * @type {string || null}
         */
        this.ParamType = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.Default = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Whether the database needs to be restarted for the modified parameter to take effect. Valid values: 0 (no); 1 (yes).
         * @type {number || null}
         */
        this.NeedReboot = null;

        /**
         * Maximum value of the parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Minimum value of the parameter
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Enumerated values of the parameter. It is null if the parameter is non-enumerated.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.ParamType = 'ParamType' in params ? params.ParamType : null;
        this.Default = 'Default' in params ? params.Default : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.NeedReboot = 'NeedReboot' in params ? params.NeedReboot : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;

    }
}

/**
 * DescribeInstanceShards response structure.
 * @class
 */
class DescribeInstanceShardsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Information list of instance shards
         * @type {Array.<InstanceClusterShard> || null}
         */
        this.InstanceShards = null;

        /**
         * Total number of instance shard nodes
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

        if (params.InstanceShards) {
            this.InstanceShards = new Array();
            for (let z in params.InstanceShards) {
                let obj = new InstanceClusterShard();
                obj.deserialize(params.InstanceShards[z]);
                this.InstanceShards.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPrepaidInstance request structure.
 * @class
 */
class DestroyPrepaidInstanceRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DisableReplicaReadonly request structure.
 * @class
 */
class DisableReplicaReadonlyRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Task details
 * @class
 */
class TaskInfoDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.TaskId = null;

        /**
         * Start time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Project ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Task progress
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Progress = null;

        /**
         * End time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Result = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Progress = 'Progress' in params ? params.Progress : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Result = 'Result' in params ? params.Result : null;

    }
}

/**
 * ModifyBackupDownloadRestriction request structure.
 * @class
 */
class ModifyBackupDownloadRestrictionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading backup files. Valid values:

- `NoLimit`: Backup files can be downloaded over both public and private networks.
- `LimitOnlyIntranet`: Backup files can be downloaded only at private network addresses auto-assigned by Tencent Cloud.
- `Customize`: Backup files can be downloaded only in the customized VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backups can be downloaded at the custom `LimitIp` address.

- `In`: Download is allowed for the custom IP.
- `NotIn`: Download is not allowed for the custom IP.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which is required if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * VPC IP of the custom backup file download address, which is required if `LimitType` is `Customize`.

         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;

    }
}

/**
 * DisableReplicaReadonly response structure.
 * @class
 */
class DisableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
 * CreateParamTemplate response structure.
 * @class
 */
class CreateParamTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance tag information
 * @class
 */
class InstanceTagInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * DescribeInstanceDTSInfo response structure.
 * @class
 */
class DescribeInstanceDTSInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * DTS task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobId = null;

        /**
         * DTS task name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.JobName = null;

        /**
         * Task status. Valid values: 1 (Creating), 3 (Checking), 4 (CheckPass), 5 (CheckNotPass), 7 (Running), 8 (ReadyComplete), 9 (Success), 10 (Failed), 11 (Stopping), 12 (Completing)
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Status description
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.StatusDesc = null;

        /**
         * Sync latency in bytes
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Disconnection time
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.CutDownTime = null;

        /**
         * Source instance information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.SrcInfo = null;

        /**
         * Target instance information
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {DescribeInstanceDTSInstanceInfo || null}
         */
        this.DstInfo = null;

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
        this.JobId = 'JobId' in params ? params.JobId : null;
        this.JobName = 'JobName' in params ? params.JobName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.StatusDesc = 'StatusDesc' in params ? params.StatusDesc : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.CutDownTime = 'CutDownTime' in params ? params.CutDownTime : null;

        if (params.SrcInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.SrcInfo)
            this.SrcInfo = obj;
        }

        if (params.DstInfo) {
            let obj = new DescribeInstanceDTSInstanceInfo();
            obj.deserialize(params.DstInfo)
            this.DstInfo = obj;
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ChangeMasterInstance response structure.
 * @class
 */
class ChangeMasterInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
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
 * DestroyPostpaidInstance response structure.
 * @class
 */
class DestroyPostpaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * SwitchInstanceVip request structure.
 * @class
 */
class SwitchInstanceVipRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source instance ID
         * @type {string || null}
         */
        this.SrcInstanceId = null;

        /**
         * Target instance ID
         * @type {string || null}
         */
        this.DstInstanceId = null;

        /**
         * The time that lapses in seconds since DTS is disconnected between the source instance and the target instance. If the DTS disconnection time period is greater than TimeDelay, the VIP will not be switched. We recommend you set an acceptable value based on the actual business conditions.
         * @type {number || null}
         */
        this.TimeDelay = null;

        /**
         * Whether to force the switch when DTS is disconnected. 1: yes; 0: no.
         * @type {number || null}
         */
        this.ForceSwitch = null;

        /**
         * now: switch now; syncComplete: switch after sync is completed
         * @type {string || null}
         */
        this.SwitchTime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.SrcInstanceId = 'SrcInstanceId' in params ? params.SrcInstanceId : null;
        this.DstInstanceId = 'DstInstanceId' in params ? params.DstInstanceId : null;
        this.TimeDelay = 'TimeDelay' in params ? params.TimeDelay : null;
        this.ForceSwitch = 'ForceSwitch' in params ? params.ForceSwitch : null;
        this.SwitchTime = 'SwitchTime' in params ? params.SwitchTime : null;

    }
}

/**
 * ChangeReplicaToMaster request structure.
 * @class
 */
class ChangeReplicaToMasterRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Replica group ID, which is required for multi-AZ instances.
         * @type {number || null}
         */
        this.GroupId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;

    }
}

/**
 * Proxy node information
 * @class
 */
class ProxyNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * AZ ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * ModifyInstance response structure.
 * @class
 */
class ModifyInstanceResponse extends  AbstractModel {
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
 * Instance information
 * @class
 */
class RedisCommonInstanceList extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Instance project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Instance region
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Instance AZ
         * @type {string || null}
         */
        this.Zone = null;

        /**
         * Instance network ID
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Instance status. 1: task running; 2: instance running; -2: instance isolated; -3: instance being eliminated; -4: instance eliminated
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Instance network IP
         * @type {Array.<string> || null}
         */
        this.Vips = null;

        /**
         * Instance network port
         * @type {number || null}
         */
        this.Vport = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * Billing mode. 0: pay-as-you-go; 1: monthly subscription
         * @type {number || null}
         */
        this.PayMode = null;

        /**
         * Network type. Valid values: 0 (classic network); 1 (VPC).
         * @type {number || null}
         */
        this.NetType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Region = 'Region' in params ? params.Region : null;
        this.Zone = 'Zone' in params ? params.Zone : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Vips = 'Vips' in params ? params.Vips : null;
        this.Vport = 'Vport' in params ? params.Vport : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.NetType = 'NetType' in params ? params.NetType : null;

    }
}

/**
 * Access source information
 * @class
 */
class SourceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Source IP
         * @type {string || null}
         */
        this.Ip = null;

        /**
         * Number of connections
         * @type {number || null}
         */
        this.Conn = null;

        /**
         * Command
         * @type {number || null}
         */
        this.Cmd = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ip = 'Ip' in params ? params.Ip : null;
        this.Conn = 'Conn' in params ? params.Conn : null;
        this.Cmd = 'Cmd' in params ? params.Cmd : null;

    }
}

/**
 * ModifyDBInstanceSecurityGroups response structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsResponse extends  AbstractModel {
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
 * ChangeMasterInstance request structure.
 * @class
 */
class ChangeMasterInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID
         * @type {string || null}
         */
        this.GroupId = null;

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
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceDTSInfo request structure.
 * @class
 */
class DescribeInstanceDTSInfoRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CreateParamTemplate request structure.
 * @class
 */
class CreateParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Instance type. Valid values: `1` (Redis 2.8 Memory Edition in cluster architecture), `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture). If `TempateId` is specified, this parameter can be left blank; otherwise, it is required.
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * ID of the source parameter template.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter list.
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * DescribeTendisSlowLog response structure.
 * @class
 */
class DescribeTendisSlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query details
         * @type {Array.<TendisSlowLogDetail> || null}
         */
        this.TendisSlowLogDetail = null;

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

        if (params.TendisSlowLogDetail) {
            this.TendisSlowLogDetail = new Array();
            for (let z in params.TendisSlowLogDetail) {
                let obj = new TendisSlowLogDetail();
                obj.deserialize(params.TendisSlowLogDetail[z]);
                this.TendisSlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductInfo response structure.
 * @class
 */
class DescribeProductInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Sale information of a region.
         * @type {Array.<RegionConf> || null}
         */
        this.RegionSet = null;

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

        if (params.RegionSet) {
            this.RegionSet = new Array();
            for (let z in params.RegionSet) {
                let obj = new RegionConf();
                obj.deserialize(params.RegionSet[z]);
                this.RegionSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceAccount request structure.
 * @class
 */
class ModifyInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sub-account name. If the root account is to be modified, enter `root`.
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * Sub-account password
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * Sub-account description information
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Routing policy. Valid values: master (master node); replication (replica node)
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Sub-account read/write policy. Valid values: r (read-only); w (write-only); rw (read/write).
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * true: make the root account password-free. This is applicable to root accounts only. Sub-accounts cannot be made password-free.
         * @type {boolean || null}
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyMaintenanceWindow request structure.
 * @class
 */
class ModifyMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maintenance start time, such as 17:00
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Maintenance end time, such as 19:00
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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;

    }
}

/**
 * DescribeParamTemplateInfo request structure.
 * @class
 */
class DescribeParamTemplateInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeBackupUrl response structure.
 * @class
 */
class DescribeBackupUrlResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Public network download address (valid for six hours). This field will be disused soon.
         * @type {Array.<string> || null}
         */
        this.DownloadUrl = null;

        /**
         * Private network download address (valid for six hours). This field will be disused soon.
         * @type {Array.<string> || null}
         */
        this.InnerDownloadUrl = null;

        /**
         * Filename. This field will be disused soon.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<string> || null}
         */
        this.Filenames = null;

        /**
         * List of backup file information.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<BackupDownloadInfo> || null}
         */
        this.BackupInfos = null;

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
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;
        this.Filenames = 'Filenames' in params ? params.Filenames : null;

        if (params.BackupInfos) {
            this.BackupInfos = new Array();
            for (let z in params.BackupInfos) {
                let obj = new BackupDownloadInfo();
                obj.deserialize(params.BackupInfos[z]);
                this.BackupInfos.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeDBSecurityGroups request structure.
 * @class
 */
class DescribeDBSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * InquiryPriceCreateInstance response structure.
 * @class
 */
class InquiryPriceCreateInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price. Unit: USD (accurate down to the cent)
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Price = null;

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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group information of the instance
 * @class
 */
class InstanceSecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Security group information
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }

    }
}

/**
 * VPC information of the custom backup file download address.
 * @class
 */
class BackupLimitVpcItem extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region of the VPC of the custom backup file download address.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * VPC list of the custom backup file download address.
         * @type {Array.<string> || null}
         */
        this.VpcList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.VpcList = 'VpcList' in params ? params.VpcList : null;

    }
}

/**
 * UpgradeProxyVersion response structure.
 * @class
 */
class UpgradeProxyVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ResetPassword request structure.
 * @class
 */
class ResetPasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Redis instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Password reset (this parameter can be left blank when switching to password-free instance mode and is required in other cases)
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Whether to switch to password-free instance mode. false: switch to password-enabled instance mode; true: switch to password-free instance mode. Default value: false.
         * @type {boolean || null}
         */
        this.NoAuth = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;

    }
}

/**
 * ModifyInstanceAccount response structure.
 * @class
 */
class ModifyInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * Delay distribution details
 * @class
 */
class DelayDistribution extends  AbstractModel {
    constructor(){
        super();

        /**
         * Delay distribution. The mapping between delay range and `Ladder` value is as follows:
[0ms,1ms]: 1;
[1ms,5ms]: 5;
[5ms,10ms]: 10;
[10ms,50ms]: 50;
[50ms,200ms]: 200;
[200ms,∞]: -1.
         * @type {number || null}
         */
        this.Ladder = null;

        /**
         * The number of commands whose delay falls within the current delay range
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Modification time
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Ladder = 'Ladder' in params ? params.Ladder : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeProjectSecurityGroups response structure.
 * @class
 */
class DescribeProjectSecurityGroupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group rules.
         * @type {Array.<SecurityGroup> || null}
         */
        this.Groups = null;

        /**
         * Total number of eligible security groups.
         * @type {number || null}
         */
        this.Total = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new SecurityGroup();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.Total = 'Total' in params ? params.Total : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist response structure.
 * @class
 */
class DescribeInstanceMonitorTookDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Latency distribution information
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceBackups response structure.
 * @class
 */
class DescribeInstanceBackupsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of backups.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Array of instance backups.
         * @type {Array.<RedisBackupSet> || null}
         */
        this.BackupSet = null;

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

        if (params.BackupSet) {
            this.BackupSet = new Array();
            for (let z in params.BackupSet) {
                let obj = new RedisBackupSet();
                obj.deserialize(params.BackupSet[z]);
                this.BackupSet.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Description of the instance parameter in Integer type
 * @class
 */
class InstanceIntegerParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type: Integer
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether restart is required after a modification is made. Valid values: true, false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Minimum value of the parameter
         * @type {string || null}
         */
        this.Min = null;

        /**
         * Maximum value of the parameter
         * @type {string || null}
         */
        this.Max = null;

        /**
         * Parameter status. 1: modifying; 2: modified
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Parameter unit
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Unit = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.Min = 'Min' in params ? params.Min : null;
        this.Max = 'Max' in params ? params.Max : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Unit = 'Unit' in params ? params.Unit : null;

    }
}

/**
 * UpgradeVersionToMultiAvailabilityZones request structure.
 * @class
 */
class UpgradeVersionToMultiAvailabilityZonesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to support “Reading Local Nodes Only” feature after upgrading to multi-AZ deployment.
ul><li>`true`: The “Read Local Nodes Only” feature is supported. During the upgrade, you need to upgrade the proxy version and Redis kernel minor version simultaneously, which will involve data migration and may take hours to complete. </li><li>`false`: The “Read Local Nodes Only” feature is not supported. Upgrading to multi-AZ deployment will involve metadata migration only without affecting the service, which generally take less than three minutes to complete.</li></ul>
         * @type {boolean || null}
         */
        this.UpgradeProxyAndRedisServer = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.UpgradeProxyAndRedisServer = 'UpgradeProxyAndRedisServer' in params ? params.UpgradeProxyAndRedisServer : null;

    }
}

/**
 * AllocateWanAddress response structure.
 * @class
 */
class AllocateWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Status of enabling public network access
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorTookDist request structure.
 * @class
 */
class DescribeInstanceMonitorTookDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * KillMasterGroup request structure.
 * @class
 */
class KillMasterGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * 1. The password must contain 8–30 characters. A password of 12 or more characters is recommended.
2. It cannot start with a slash (/).
3. It must contain characters in at least two of the following types:
    a. Lowercase letters (a–z)
    b. Uppercase letters (A–Z)
    c. Digits (0–9)
    d. ()`~!@#$%^&*-+=_|{}[]:;<>,.?/
         * @type {string || null}
         */
        this.Password = null;

        /**
         * Node information of a single-AZ deployed instance
         * @type {Array.<number> || null}
         */
        this.ShardIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Password = 'Password' in params ? params.Password : null;
        this.ShardIds = 'ShardIds' in params ? params.ShardIds : null;

    }
}

/**
 * Description of instance parameter in Char type
 * @class
 */
class InstanceTextParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type: Text
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether restart is required after a modification is made. Valid values: true, false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Valid values of the parameter
         * @type {Array.<string> || null}
         */
        this.TextValue = null;

        /**
         * Parameter status. 1: modifying; 2: modified
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.TextValue = 'TextValue' in params ? params.TextValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Parameter template information
 * @class
 */
class ParamTemplateInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Instance type. Valid values: `1` (Redis 2.8 Memory Edition in cluster architecture), `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture)
         * @type {number || null}
         */
        this.ProductType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook response structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Duration details
         * @type {Array.<CommandTake> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new CommandTake();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CloseSSL request structure.
 * @class
 */
class CloseSSLRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceAccount request structure.
 * @class
 */
class DescribeInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Number of entries per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Page offset
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * SwitchProxy request structure.
 * @class
 */
class SwitchProxyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance ProxyID
         * @type {string || null}
         */
        this.ProxyID = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ProxyID = 'ProxyID' in params ? params.ProxyID : null;

    }
}

/**
 * DescribeInstanceParamRecords request structure.
 * @class
 */
class DescribeInstanceParamRecordsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Maximum number of results returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeTaskList request structure.
 * @class
 */
class DescribeTaskListRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Maximum number of results returned per page. Default value: 20. Maximum value: 100.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit` (rounded down automatically).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Project ID
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Task type
         * @type {Array.<string> || null}
         */
        this.TaskTypes = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Task status
         * @type {Array.<number> || null}
         */
        this.TaskStatus = null;

        /**
         * Task status
         * @type {Array.<number> || null}
         */
        this.Result = null;

        /**
         * The field `OperatorUin` has been disused and replaced by `OperateUin`.
         * @type {Array.<number> || null}
         */
        this.OperatorUin = null;

        /**
         * Operator Uin
         * @type {Array.<string> || null}
         */
        this.OperateUin = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.TaskTypes = 'TaskTypes' in params ? params.TaskTypes : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.TaskStatus = 'TaskStatus' in params ? params.TaskStatus : null;
        this.Result = 'Result' in params ? params.Result : null;
        this.OperatorUin = 'OperatorUin' in params ? params.OperatorUin : null;
        this.OperateUin = 'OperateUin' in params ? params.OperateUin : null;

    }
}

/**
 * ChangeReplicaToMaster response structure.
 * @class
 */
class ChangeReplicaToMasterResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
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
 * CreateInstances response structure.
 * @class
 */
class CreateInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Transaction ID
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeTaskInfo request structure.
 * @class
 */
class DescribeTaskInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * ApplyParamsTemplate response structure.
 * @class
 */
class ApplyParamsTemplateResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {Array.<number> || null}
         */
        this.TaskIds = null;

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
        this.TaskIds = 'TaskIds' in params ? params.TaskIds : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeReplicationGroup request structure.
 * @class
 */
class DescribeReplicationGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances returned per page. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. `offset` = `limit` * (page number - 1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Replication group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Keyword for fuzzy search, which can be an instance name or instance ID.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * Redis node information
 * @class
 */
class RedisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.NodeRole = null;

        /**
         * Shard ID
         * @type {number || null}
         */
        this.ClusterId = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;
        this.ClusterId = 'ClusterId' in params ? params.ClusterId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmd request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * ModifyNetworkConfig request structure.
 * @class
 */
class ModifyNetworkConfigRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Network change type. Valid values:
- `changeVip`: VPC change, including the private IPv4 address and port.
- `changeVpc`: Subnet change.
- `changeBaseToVpc`: Change from classic network to VPC.
- `changeVPort`: Port change.
         * @type {string || null}
         */
        this.Operation = null;

        /**
         * Private IPv4 address of the instance, which is required if `Operation` is `changeVip`.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * VPC ID after the change, which is required if `Operation` is `changeVpc` or `changeBaseToVpc`.
         * @type {string || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID after the change, which is required if `Operation` is `changeVpc` or `changeBaseToVpc`.
         * @type {string || null}
         */
        this.SubnetId = null;

        /**
         * Retention period of the original private IPv4 address
- Unit: Days.
- Valid values: `0`, `1`, `2`, `3`, `7`, `15`.

**Note**: You can set the retention period of the original address only in the latest SDK. In earlier SDKs, the original address is released immediately. To view the SDK version, go to [SDK Center](https://intl.cloud.tencent.com/document/sdk?from_cn_redirect=1).
         * @type {number || null}
         */
        this.Recycle = null;

        /**
         * Network port after the change, which is required if `Operation` is `changeVPort` or `changeVip`. Value range: [1024,65535].
         * @type {number || null}
         */
        this.VPort = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Operation = 'Operation' in params ? params.Operation : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Recycle = 'Recycle' in params ? params.Recycle : null;
        this.VPort = 'VPort' in params ? params.VPort : null;

    }
}

/**
 * DescribeInstanceSecurityGroup request structure.
 * @class
 */
class DescribeInstanceSecurityGroupRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * List of instances
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * History of instance parameter modifications
 * @class
 */
class InstanceParamHistory extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Value before modification
         * @type {string || null}
         */
        this.PreValue = null;

        /**
         * Value after modification
         * @type {string || null}
         */
        this.NewValue = null;

        /**
         * Status. 1: modifying the parameter configuration; 2: modified the parameter configuration successfully; 3: failed to modify the parameter configuration
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Modification time
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
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.PreValue = 'PreValue' in params ? params.PreValue : null;
        this.NewValue = 'NewValue' in params ? params.NewValue : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.ModifyTime = 'ModifyTime' in params ? params.ModifyTime : null;

    }
}

/**
 * DescribeInstanceParams request structure.
 * @class
 */
class DescribeInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * CleanUpInstance response structure.
 * @class
 */
class CleanUpInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * ModifyDBInstanceSecurityGroups request structure.
 * @class
 */
class ModifyDBInstanceSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * List of IDs of security groups to be modified, which is an array of one or more security group IDs.
         * @type {Array.<string> || null}
         */
        this.SecurityGroupIds = null;

        /**
         * Instance ID in the format of cdb-c1nl9rpv or cdbro-c1nl9rpv. It is the same as the instance ID displayed in the TencentDB console.
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
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupIds = 'SecurityGroupIds' in params ? params.SecurityGroupIds : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeParamTemplates response structure.
 * @class
 */
class DescribeParamTemplatesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of parameter templates of the user.
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template details.
         * @type {Array.<ParamTemplateInfo> || null}
         */
        this.Items = null;

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

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParamTemplateInfo();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceShards request structure.
 * @class
 */
class DescribeInstanceShardsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Whether to filter out the replica node information
         * @type {boolean || null}
         */
        this.FilterSlave = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.FilterSlave = 'FilterSlave' in params ? params.FilterSlave : null;

    }
}

/**
 * Security group outbound rule
 * @class
 */
class Outbound extends  AbstractModel {
    constructor(){
        super();

        /**
         * Policy. Valid values: ACCEPT, DROP.
         * @type {string || null}
         */
        this.Action = null;

        /**
         * All the addresses that the address group ID represents.
         * @type {string || null}
         */
        this.AddressModule = null;

        /**
         * Source IP or IP address range, such as 192.168.0.0/16.
         * @type {string || null}
         */
        this.CidrIp = null;

        /**
         * Description.
         * @type {string || null}
         */
        this.Desc = null;

        /**
         * Network protocol, such as UDP and TCP.
         * @type {string || null}
         */
        this.IpProtocol = null;

        /**
         * Port.
         * @type {string || null}
         */
        this.PortRange = null;

        /**
         * All the protocols and ports that the service group ID represents.
         * @type {string || null}
         */
        this.ServiceModule = null;

        /**
         * All the addresses that the security group ID represents.
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
        this.Action = 'Action' in params ? params.Action : null;
        this.AddressModule = 'AddressModule' in params ? params.AddressModule : null;
        this.CidrIp = 'CidrIp' in params ? params.CidrIp : null;
        this.Desc = 'Desc' in params ? params.Desc : null;
        this.IpProtocol = 'IpProtocol' in params ? params.IpProtocol : null;
        this.PortRange = 'PortRange' in params ? params.PortRange : null;
        this.ServiceModule = 'ServiceModule' in params ? params.ServiceModule : null;
        this.Id = 'Id' in params ? params.Id : null;

    }
}

/**
 * DescribeAutoBackupConfig response structure.
 * @class
 */
class DescribeAutoBackupConfigResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup type. Automatic backup type: 1 (scheduled rollback)
         * @type {number || null}
         */
        this.AutoBackupType = null;

        /**
         * Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
         * @type {Array.<string> || null}
         */
        this.WeekDays = null;

        /**
         * Time period.
         * @type {string || null}
         */
        this.TimePeriod = null;

        /**
         * Number of days to retain full backup files
         * @type {number || null}
         */
        this.BackupStorageDays = null;

        /**
         * Number of days to retain Tendis binlog backup files
         * @type {number || null}
         */
        this.BinlogStorageDays = null;

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
        this.AutoBackupType = 'AutoBackupType' in params ? params.AutoBackupType : null;
        this.WeekDays = 'WeekDays' in params ? params.WeekDays : null;
        this.TimePeriod = 'TimePeriod' in params ? params.TimePeriod : null;
        this.BackupStorageDays = 'BackupStorageDays' in params ? params.BackupStorageDays : null;
        this.BinlogStorageDays = 'BinlogStorageDays' in params ? params.BinlogStorageDays : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceUpgradeInstance request structure.
 * @class
 */
class InquiryPriceUpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Shard size in MB.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of shards. This parameter can be left blank for Redis 2.8 in standard architecture, CKV in standard architecture, and Redis 2.8 in standalone architecture.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas. This parameter can be left blank for Redis 2.8 in standard architecture, CKV in standard architecture, and Redis 2.8 in standalone architecture.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

    }
}

/**
 * ModifyParamTemplate response structure.
 * @class
 */
class ModifyParamTemplateResponse extends  AbstractModel {
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
 * DescribeProjectSecurityGroups request structure.
 * @class
 */
class DescribeProjectSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * The number of security groups to be pulled. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Search criteria. You can enter a security group ID or name.
         * @type {string || null}
         */
        this.SearchKey = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeySizeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeySizeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key size distribution details
         * @type {Array.<DelayDistribution> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new DelayDistribution();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Security group rules
 * @class
 */
class SecurityGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Creation time in the format of yyyy-mm-dd hh:mm:ss.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Project ID.
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Security group ID.
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name.
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks.
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * Outbound rule.
         * @type {Array.<Outbound> || null}
         */
        this.Outbound = null;

        /**
         * Inbound rule.
         * @type {Array.<Inbound> || null}
         */
        this.Inbound = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.Outbound) {
            this.Outbound = new Array();
            for (let z in params.Outbound) {
                let obj = new Outbound();
                obj.deserialize(params.Outbound[z]);
                this.Outbound.push(obj);
            }
        }

        if (params.Inbound) {
            this.Inbound = new Array();
            for (let z in params.Inbound) {
                let obj = new Inbound();
                obj.deserialize(params.Inbound[z]);
                this.Inbound.push(obj);
            }
        }

    }
}

/**
 * CreateInstanceAccount request structure.
 * @class
 */
class CreateInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sub-account name
         * @type {string || null}
         */
        this.AccountName = null;

        /**
         * 1. The password must contain 8–30 characters. A password of 12 or more characters is recommended.
2. It cannot start with a slash (/).
3. It must contain characters in at least two of the following types:
    a. Lowercase letters (a–z)
    b. Uppercase letters (A–Z)
    c. Digits (0–9)
    d. ()`~!@#$%^&*-+=_|{}[]:;<>,.?/
         * @type {string || null}
         */
        this.AccountPassword = null;

        /**
         * Routing policy. Valid values: master (master node); replication (replica node)
         * @type {Array.<string> || null}
         */
        this.ReadonlyPolicy = null;

        /**
         * Read/Write policy. Valid values: r (read-only); rw (read/write).
         * @type {string || null}
         */
        this.Privilege = null;

        /**
         * Sub-account description information
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;
        this.AccountPassword = 'AccountPassword' in params ? params.AccountPassword : null;
        this.ReadonlyPolicy = 'ReadonlyPolicy' in params ? params.ReadonlyPolicy : null;
        this.Privilege = 'Privilege' in params ? params.Privilege : null;
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * EnableReplicaReadonly response structure.
 * @class
 */
class EnableReplicaReadonlyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Valid values: `ERROR`, `OK`. This field has been disused.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
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
        this.Status = 'Status' in params ? params.Status : null;
        this.TaskId = 'TaskId' in params ? params.TaskId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeMaintenanceWindow response structure.
 * @class
 */
class DescribeMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Start time of the maintenance window, such as 17:00.
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * End time of the maintenance window, such as 19:00.
         * @type {string || null}
         */
        this.EndTime = null;

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
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceSecurityGroup response structure.
 * @class
 */
class DescribeInstanceSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group information of the instance
         * @type {Array.<InstanceSecurityGroupDetail> || null}
         */
        this.InstanceSecurityGroupsDetail = null;

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

        if (params.InstanceSecurityGroupsDetail) {
            this.InstanceSecurityGroupsDetail = new Array();
            for (let z in params.InstanceSecurityGroupsDetail) {
                let obj = new InstanceSecurityGroupDetail();
                obj.deserialize(params.InstanceSecurityGroupsDetail[z]);
                this.InstanceSecurityGroupsDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ReleaseWanAddress response structure.
 * @class
 */
class ReleaseWanAddressResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

        /**
         * Status of disabling public network access
         * @type {string || null}
         */
        this.WanStatus = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.WanStatus = 'WanStatus' in params ? params.WanStatus : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Product information
 * @class
 */
class ProductConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * Product type. Valid values: `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture), `10` (Redis 4.0 Hybrid Storage Edition (Tendis)).
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Product name: Redis Master-Replica Edition, CKV Master-Replica Edition, CKV Cluster Edition, Redis Standalone Edition, Redis Cluster Edition, Tendis Hybrid Storage Edition
         * @type {string || null}
         */
        this.TypeName = null;

        /**
         * Minimum purchasable quantity
         * @type {number || null}
         */
        this.MinBuyNum = null;

        /**
         * Maximum purchasable quantity
         * @type {number || null}
         */
        this.MaxBuyNum = null;

        /**
         * Whether a product is sold out
         * @type {boolean || null}
         */
        this.Saleout = null;

        /**
         * Product engine: Tencent Cloud CKV or Redis community edition
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Compatible version: Redis 2.8, Redis 3.2, or Redis 4.0
         * @type {string || null}
         */
        this.Version = null;

        /**
         * Total capacity in GB
         * @type {Array.<string> || null}
         */
        this.TotalSize = null;

        /**
         * Shard size in GB
         * @type {Array.<string> || null}
         */
        this.ShardSize = null;

        /**
         * Number of replicas
         * @type {Array.<string> || null}
         */
        this.ReplicaNum = null;

        /**
         * Number of shards
         * @type {Array.<string> || null}
         */
        this.ShardNum = null;

        /**
         * Supported billing method. 1: monthly subscription; 0: pay-as-you-go
         * @type {string || null}
         */
        this.PayMode = null;

        /**
         * Whether to support read-only replicas
         * @type {boolean || null}
         */
        this.EnableRepicaReadOnly = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.TypeName = 'TypeName' in params ? params.TypeName : null;
        this.MinBuyNum = 'MinBuyNum' in params ? params.MinBuyNum : null;
        this.MaxBuyNum = 'MaxBuyNum' in params ? params.MaxBuyNum : null;
        this.Saleout = 'Saleout' in params ? params.Saleout : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Version = 'Version' in params ? params.Version : null;
        this.TotalSize = 'TotalSize' in params ? params.TotalSize : null;
        this.ShardSize = 'ShardSize' in params ? params.ShardSize : null;
        this.ReplicaNum = 'ReplicaNum' in params ? params.ReplicaNum : null;
        this.ShardNum = 'ShardNum' in params ? params.ShardNum : null;
        this.PayMode = 'PayMode' in params ? params.PayMode : null;
        this.EnableRepicaReadOnly = 'EnableRepicaReadOnly' in params ? params.EnableRepicaReadOnly : null;

    }
}

/**
 * ManualBackupInstance response structure.
 * @class
 */
class ManualBackupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * Instance node
 * @class
 */
class InstanceNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Id
         * @type {number || null}
         */
        this.Id = null;

        /**
         * Node details
         * @type {Array.<InstanceClusterNode> || null}
         */
        this.InstanceClusterNode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Id = 'Id' in params ? params.Id : null;

        if (params.InstanceClusterNode) {
            this.InstanceClusterNode = new Array();
            for (let z in params.InstanceClusterNode) {
                let obj = new InstanceClusterNode();
                obj.deserialize(params.InstanceClusterNode[z]);
                this.InstanceClusterNode.push(obj);
            }
        }

    }
}

/**
 * Tendis node information
 * @class
 */
class TendisNodes extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node ID
         * @type {string || null}
         */
        this.NodeId = null;

        /**
         * Node role
         * @type {string || null}
         */
        this.NodeRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.NodeId = 'NodeId' in params ? params.NodeId : null;
        this.NodeRole = 'NodeRole' in params ? params.NodeRole : null;

    }
}

/**
 * SwitchProxy response structure.
 * @class
 */
class SwitchProxyResponse extends  AbstractModel {
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
 * StartupInstance response structure.
 * @class
 */
class StartupInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * Details of instances in the DTS task
 * @class
 */
class DescribeInstanceDTSInstanceInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Region ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Instance ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Repository ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.SetId = null;

        /**
         * AZ ID
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance type
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Instance name
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance access address
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Status
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SetId = 'SetId' in params ? params.SetId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * Order transaction information
 * @class
 */
class TradeDealDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID, which is used when a TencentCloud API is called.
         * @type {string || null}
         */
        this.DealId = null;

        /**
         * Long order ID, which is used when an order issue is submitted for assistance.
         * @type {string || null}
         */
        this.DealName = null;

        /**
         * AZ ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of instances associated with the order
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Creator UIN
         * @type {string || null}
         */
        this.Creater = null;

        /**
         * Order creation time
         * @type {string || null}
         */
        this.CreatTime = null;

        /**
         * Order timeout period
         * @type {string || null}
         */
        this.OverdueTime = null;

        /**
         * Order completion time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Order status. 1: unpaid; 2: paid but not delivered; 3: In delivery; 4: successfully delivered; 5: delivery failed; 6: refunded; 7: order closed; 8: order expired; 9: order invalidated; 10: product invalidated; 11: requested payment rejected; 12: paying
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Order status description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Actual total price of the order in 0.01 CNY
         * @type {number || null}
         */
        this.Price = null;

        /**
         * Instance ID
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.DealName = 'DealName' in params ? params.DealName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Creater = 'Creater' in params ? params.Creater : null;
        this.CreatTime = 'CreatTime' in params ? params.CreatTime : null;
        this.OverdueTime = 'OverdueTime' in params ? params.OverdueTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Description = 'Description' in params ? params.Description : null;
        this.Price = 'Price' in params ? params.Price : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * Tag bound to the instance purchased via API
 * @class
 */
class ResourceTag extends  AbstractModel {
    constructor(){
        super();

        /**
         * Tag key
         * @type {string || null}
         */
        this.TagKey = null;

        /**
         * Tag value
         * @type {string || null}
         */
        this.TagValue = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TagKey = 'TagKey' in params ? params.TagKey : null;
        this.TagValue = 'TagValue' in params ? params.TagValue : null;

    }
}

/**
 * AssociateSecurityGroups response structure.
 * @class
 */
class AssociateSecurityGroupsResponse extends  AbstractModel {
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
 * Instance node information
 * @class
 */
class ReplicaGroup extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node group ID
         * @type {number || null}
         */
        this.GroupId = null;

        /**
         * Node group name, which is empty for the master node
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Node AZ ID, such as ap-guangzhou-1
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * Node group type. Valid values: master (master node group); replica (replica node group)
         * @type {string || null}
         */
        this.Role = null;

        /**
         * List of nodes in the node group
         * @type {Array.<RedisNode> || null}
         */
        this.RedisNodes = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.Role = 'Role' in params ? params.Role : null;

        if (params.RedisNodes) {
            this.RedisNodes = new Array();
            for (let z in params.RedisNodes) {
                let obj = new RedisNode();
                obj.deserialize(params.RedisNodes[z]);
                this.RedisNodes.push(obj);
            }
        }

    }
}

/**
 * DescribeTaskInfo response structure.
 * @class
 */
class DescribeTaskInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task status. preparing: to be run; running: running; succeed: succeeded; failed: failed; error: running error.
         * @type {string || null}
         */
        this.Status = null;

        /**
         * Task start time
         * @type {string || null}
         */
        this.StartTime = null;

        /**
         * Task type
         * @type {string || null}
         */
        this.TaskType = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Task message, which is displayed in case of an error. It will be blank if the status is running or succeeded.
         * @type {string || null}
         */
        this.TaskMessage = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.StartTime = 'StartTime' in params ? params.StartTime : null;
        this.TaskType = 'TaskType' in params ? params.TaskType : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.TaskMessage = 'TaskMessage' in params ? params.TaskMessage : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist response structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Big key type distribution details
         * @type {Array.<BigKeyTypeInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new BigKeyTypeInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * CleanUpInstance request structure.
 * @class
 */
class CleanUpInstanceRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceDealDetail response structure.
 * @class
 */
class DescribeInstanceDealDetailResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order details
         * @type {Array.<TradeDealDetail> || null}
         */
        this.DealDetails = null;

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

        if (params.DealDetails) {
            this.DealDetails = new Array();
            for (let z in params.DealDetails) {
                let obj = new TradeDealDetail();
                obj.deserialize(params.DealDetails[z]);
                this.DealDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Replication group info
 * @class
 */
class Groups extends  AbstractModel {
    constructor(){
        super();

        /**
         * User App ID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Region ID. 1: Guangzhou; 4: Shanghai; 5: Hong Kong (China); 6: Toronto; 7: Shanghai Finance; 8: Beijing; 9: Singapore; 11: Shenzhen Finance; 15: West US (Silicon Valley); 16: Chengdu; 17: Germany; 18: South Korea; 19: Chongqing; 21: India; 22: East US (Virginia); 23: Thailand; 24: Russia; 25: Japan
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Replication group info
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Replication group name
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.GroupName = null;

        /**
         * Replication group status. Valid values: 37 (Associating replication group), 38 (Reconnecting to replication group), 51 (Disassociating the replication group), 52 (Switching primary instance in the replication group), 53 (Modifying roles)
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Number of replication groups
         * @type {number || null}
         */
        this.InstanceCount = null;

        /**
         * Instances in replication group
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<Instances> || null}
         */
        this.Instances = null;

        /**
         * Remarks
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Remark = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.GroupName = 'GroupName' in params ? params.GroupName : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceCount = 'InstanceCount' in params ? params.InstanceCount : null;

        if (params.Instances) {
            this.Instances = new Array();
            for (let z in params.Instances) {
                let obj = new Instances();
                obj.deserialize(params.Instances[z]);
                this.Instances.push(obj);
            }
        }
        this.Remark = 'Remark' in params ? params.Remark : null;

    }
}

/**
 * DescribeInstances request structure.
 * @class
 */
class DescribeInstancesRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances returned per page. Default value: `20`. Maximum value: `1000`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Instance ID, such as crs-6ubhgouj.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance sorting criteria. The enumerated values are as listed below: <ul><li>projectId: Project ID. </li><li>createtime: Instance creation time. </li><li>instancename: Instance name. </li><li>type: Instance type. </li><li>curDeadline: Instance expiration time. </li></ul>
         * @type {string || null}
         */
        this.OrderBy = null;

        /**
         * Instance sorting order. <ul><li>`1`: Descending. </li><li>`0`: Ascending. Default value: `1`.</li></ul>
         * @type {number || null}
         */
        this.OrderType = null;

        /**
         * Array of VPC IDs such as 47525. If this parameter is not passed in or the array is empty, the classic network will be selected by default. This parameter is retained and can be ignored. It is set based on `UniqVpcIds` parameter format.
         * @type {Array.<string> || null}
         */
        this.VpcIds = null;

        /**
         * Array of VPC subnet IDs such as 56854. This parameter is retained and can be ignored. It is set based on `UniqSubnetIds` parameter format.
         * @type {Array.<string> || null}
         */
        this.SubnetIds = null;

        /**
         * Keywords for fuzzy query. which can be used to fuzzy query an instance by its ID or name.
         * @type {string || null}
         */
        this.SearchKey = null;

        /**
         * Array of project IDs
         * @type {Array.<number> || null}
         */
        this.ProjectIds = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Array of VPC IDs such as vpc-sad23jfdfk. If this parameter is not passed in or or the array is empty, the classic network will be selected by default.
         * @type {Array.<string> || null}
         */
        this.UniqVpcIds = null;

        /**
         * Array of VPC subnet IDs such as subnet-fdj24n34j2
         * @type {Array.<string> || null}
         */
        this.UniqSubnetIds = null;

        /**
         * Array of region IDs (disused). The corresponding region can be queried through the common parameter `Region`.
         * @type {Array.<number> || null}
         */
        this.RegionIds = null;

        /**
         * Instance status. <ul><li>`0`: Uninitialized. </li><li>`1`: In the process. </li><li>`2`: Running. </li><li>`-2`: Isolated. </li><li>`-3`: To be deleted. </li></ul>
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Instance architecture. <ul><li>`1`: Standalone edition. </li><li>`2`: Master-replica edition. </li><li>`3`: Cluster edition. </li></ul>
         * @type {number || null}
         */
        this.TypeVersion = null;

        /**
         * Storage engine information. Valid values: `Redis-2.8`, `Redis-4.0`, `Redis-5.0`, `Redis-6.0` or `CKV`.
         * @type {string || null}
         */
        this.EngineName = null;

        /**
         * Renewal mode. <ul><li>`0`: Manual renewal (default). </li><li>`1`: Auto-renewal. </li><li>`2`: No auto-renewal (set by user)</ul>
         * @type {Array.<number> || null}
         */
        this.AutoRenew = null;

        /**
         * Billing mode. Only pay-as-you-go billing is supported.
         * @type {string || null}
         */
        this.BillingMode = null;

        /**
         * Instance type. <ul><li>`1`: Legacy Redis cluster edition. </li><li>`2`: Redis 2.8 master-replica edition. </li><li>`3`: CKV master-replica edition. </li><li>`4`: CKV cluster edition. </li><li>`5`: Redis 2.8 standalone edition. </li><li>`6`: Redis 4.0 master-replica edition. </li><li>`7`: Redis 4.0 cluster edition. </li><li>8: Redis 5.0 master-replica edition. </li><li>`9`: Redis 5.0 cluster edition. </li></ul>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Array of the search keywords, which can query the instance by its ID, name, IP address.
         * @type {Array.<string> || null}
         */
        this.SearchKeys = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {Array.<number> || null}
         */
        this.TypeList = null;

        /**
         * Internal parameter, which can be ignored.
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * Resources filter by tag key and value. If this parameter is not specified or is an empty array, resources will not be filtered.
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * Resources filter by tag key. If this parameter is not specified or is an empty array, resources will not be filtered.
         * @type {Array.<string> || null}
         */
        this.TagKeys = null;

        /**
         * Instance product version. If this parameter is not passed in or the array is empty, the instances will not be filtered based this parameter by default. <ul><li>`local`: local disk edition. </li><li>`cloud`: Cloud disk edition. </li><li>`cdc`: Dedicated cluster edition. </li></ul>
         * @type {Array.<string> || null}
         */
        this.ProductVersions = null;

        /**
         * Batch query of the specified instances ID. The number of results returned is based on `Limit`.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

        /**
         * AZ deployment mode. <ul><li>`singleaz`: Single-AZ. </li><li>`1`: Multi-AZ. </li></ul>
         * @type {string || null}
         */
        this.AzMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OrderBy = 'OrderBy' in params ? params.OrderBy : null;
        this.OrderType = 'OrderType' in params ? params.OrderType : null;
        this.VpcIds = 'VpcIds' in params ? params.VpcIds : null;
        this.SubnetIds = 'SubnetIds' in params ? params.SubnetIds : null;
        this.SearchKey = 'SearchKey' in params ? params.SearchKey : null;
        this.ProjectIds = 'ProjectIds' in params ? params.ProjectIds : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.UniqVpcIds = 'UniqVpcIds' in params ? params.UniqVpcIds : null;
        this.UniqSubnetIds = 'UniqSubnetIds' in params ? params.UniqSubnetIds : null;
        this.RegionIds = 'RegionIds' in params ? params.RegionIds : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.TypeVersion = 'TypeVersion' in params ? params.TypeVersion : null;
        this.EngineName = 'EngineName' in params ? params.EngineName : null;
        this.AutoRenew = 'AutoRenew' in params ? params.AutoRenew : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.SearchKeys = 'SearchKeys' in params ? params.SearchKeys : null;
        this.TypeList = 'TypeList' in params ? params.TypeList : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.TagKeys = 'TagKeys' in params ? params.TagKeys : null;
        this.ProductVersions = 'ProductVersions' in params ? params.ProductVersions : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;
        this.AzMode = 'AzMode' in params ? params.AzMode : null;

    }
}

/**
 * Access command
 * @class
 */
class SourceCommand extends  AbstractModel {
    constructor(){
        super();

        /**
         * Command
         * @type {string || null}
         */
        this.Cmd = null;

        /**
         * Number of executions
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Cmd = 'Cmd' in params ? params.Cmd : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * ModfiyInstancePassword request structure.
 * @class
 */
class ModfiyInstancePasswordRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Old password of an instance
         * @type {string || null}
         */
        this.OldPassword = null;

        /**
         * New password of an instance
         * @type {string || null}
         */
        this.Password = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.OldPassword = 'OldPassword' in params ? params.OldPassword : null;
        this.Password = 'Password' in params ? params.Password : null;

    }
}

/**
 * DescribeSlowLog request structure.
 * @class
 */
class DescribeSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The start time
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * The end time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * The average execution time threshold of slow query in ms.
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Number of slow queries displayed per page. Default value: `20`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Slow query offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * Node role. <ul><li>`Master`: Master node</li><li>`Slave`: Replica node</li></ul>
         * @type {string || null}
         */
        this.Role = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.Role = 'Role' in params ? params.Role : null;

    }
}

/**
 * DeleteParamTemplate request structure.
 * @class
 */
class DeleteParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;

    }
}

/**
 * DescribeAutoBackupConfig request structure.
 * @class
 */
class DescribeAutoBackupConfigRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * DescribeInstanceMonitorSIP response structure.
 * @class
 */
class DescribeInstanceMonitorSIPResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Access source information
         * @type {Array.<SourceInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new SourceInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DestroyPostpaidInstance request structure.
 * @class
 */
class DestroyPostpaidInstanceRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * ChangeInstanceRole request structure.
 * @class
 */
class ChangeInstanceRoleRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Replication group ID
         * @type {string || null}
         */
        this.GroupId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance role. Valid values: `rw` (read-write), `r`( read-only).
         * @type {string || null}
         */
        this.InstanceRole = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.GroupId = 'GroupId' in params ? params.GroupId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceRole = 'InstanceRole' in params ? params.InstanceRole : null;

    }
}

/**
 * DeleteInstanceAccount request structure.
 * @class
 */
class DeleteInstanceAccountRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Sub-account name
         * @type {string || null}
         */
        this.AccountName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.AccountName = 'AccountName' in params ? params.AccountName : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey request structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: past 30 minutes; 3: past 6 hours; 4: past 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DescribeBackupDownloadRestriction response structure.
 * @class
 */
class DescribeBackupDownloadRestrictionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type of the network restrictions for downloading backup files. Valid values:

- `NoLimit`: Backup files can be downloaded over both public and private networks.
- `LimitOnlyIntranet`: Backup files can be downloaded only at private network addresses auto-assigned by Tencent Cloud.
- `Customize`: Backup files can be downloaded only in the customized VPC.
         * @type {string || null}
         */
        this.LimitType = null;

        /**
         * Only `In` can be passed in for this parameter, indicating that backup files can be downloaded in the custom `LimitVpc`.
         * @type {string || null}
         */
        this.VpcComparisonSymbol = null;

        /**
         * Whether backups can be downloaded at the custom `LimitIp` address.

- `In`: Download is allowed for the custom IP.
- `NotIn`: Download is not allowed for the custom IP.
         * @type {string || null}
         */
        this.IpComparisonSymbol = null;

        /**
         * VPC ID of the custom backup file download address, which will be displayed if `LimitType` is `Customize`.
         * @type {Array.<BackupLimitVpcItem> || null}
         */
        this.LimitVpc = null;

        /**
         * VPC ID of the custom backup file download address, which will be displayed if `LimitType` is `Customize`.
         * @type {Array.<string> || null}
         */
        this.LimitIp = null;

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
        this.LimitType = 'LimitType' in params ? params.LimitType : null;
        this.VpcComparisonSymbol = 'VpcComparisonSymbol' in params ? params.VpcComparisonSymbol : null;
        this.IpComparisonSymbol = 'IpComparisonSymbol' in params ? params.IpComparisonSymbol : null;

        if (params.LimitVpc) {
            this.LimitVpc = new Array();
            for (let z in params.LimitVpc) {
                let obj = new BackupLimitVpcItem();
                obj.deserialize(params.LimitVpc[z]);
                this.LimitVpc.push(obj);
            }
        }
        this.LimitIp = 'LimitIp' in params ? params.LimitIp : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * UpgradeInstance response structure.
 * @class
 */
class UpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ManualBackupInstance request structure.
 * @class
 */
class ManualBackupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the instance to be operated on, which can be obtained through the `InstanceId` field in the return value of the `DescribeInstance` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Backup remarks
         * @type {string || null}
         */
        this.Remark = null;

        /**
         * Retention time in days. 0 indicates the default retention time.
         * @type {number || null}
         */
        this.StorageDays = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Remark = 'Remark' in params ? params.Remark : null;
        this.StorageDays = 'StorageDays' in params ? params.StorageDays : null;

    }
}

/**
 * DescribeReplicationGroup response structure.
 * @class
 */
class DescribeReplicationGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of replication groups
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Replication group information
         * @type {Array.<Groups> || null}
         */
        this.Groups = null;

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

        if (params.Groups) {
            this.Groups = new Array();
            for (let z in params.Groups) {
                let obj = new Groups();
                obj.deserialize(params.Groups[z]);
                this.Groups.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyParamTemplate request structure.
 * @class
 */
class ModifyParamTemplateRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * ID of the source parameter template.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * New name after the parameter template is modified.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * New description after the parameter template is modified.
         * @type {string || null}
         */
        this.Description = null;

        /**
         * New parameter list after the parameter template is modified.
         * @type {Array.<InstanceParam> || null}
         */
        this.ParamList = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.ParamList) {
            this.ParamList = new Array();
            for (let z in params.ParamList) {
                let obj = new InstanceParam();
                obj.deserialize(params.ParamList[z]);
                this.ParamList.push(obj);
            }
        }

    }
}

/**
 * ModfiyInstancePassword response structure.
 * @class
 */
class ModfiyInstancePasswordResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * List of instance details
 * @class
 */
class InstanceSet extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * User AppID
         * @type {number || null}
         */
        this.Appid = null;

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Region ID. <ul><li>`1`: Guangzhou. </li><li>`4`: Shanghai. </li><li>`5`: Hong Kong (China). </li><li>`6`: Toronto. </li> <li>`7`: Shanghai Finance. </li> <li>`8`: Beijing. </li> <li>`9`: Singapore. </li> <li>`11`: Shenzhen Finance. </li> <li>`15`: West US (Silicon Valley). </li><li>`16`: Chengdu. </li><li>`17`: Frankfurt. </li><li>`18`: Seoul. </li><li>`19`: Chongqing. </li><li>`21`: Mumbai. </li><li>`22`: East US (Virginia). </li><li>`23`: Bangkok. </li><li>`24`: Moscow. </li><li>`25`: Tokyo. </li></ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * VPC ID, such as `75101`.
         * @type {number || null}
         */
        this.VpcId = null;

        /**
         * Subnet ID, such as `46315`.
         * @type {number || null}
         */
        this.SubnetId = null;

        /**
         * Current instance status. <ul><li>`0`: To be initialized. </li><li>`1`: In the process. </li><li>`2`: Running. </li><li>`-2`: Isolated. </li><li>`-3`: To be deleted. </li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Instance VIP
         * @type {string || null}
         */
        this.WanIp = null;

        /**
         * Port number of an instance
         * @type {number || null}
         */
        this.Port = null;

        /**
         * Instance creation time
         * @type {string || null}
         */
        this.Createtime = null;

        /**
         * Instance capacity in MB
         * @type {number || null}
         */
        this.Size = null;

        /**
         * This field has been disused. You can use the [GetMonitorData](https://intl.cloud.tencent.com/document/product/248/31014?from_cn_redirect=1) API to query the capacity used by the instance.
         * @type {number || null}
         */
        this.SizeUsed = null;

        /**
         * Instance type. <ul><li>`1`: Redis 2.8 memory edition in cluster architecture. </li><li>`2`: Redis 2.8 memory edition in standard architecture. </li><li>`3`: CKV 3.2 memory edition in standard architecture. </li><li>`4`: CKV 3.2 memory edition in cluster architecture. </li><li>`5`: Redis 2.8 memory edition in standalone architecture. </li></li><li>`6`: Redis 4.0 memory edition in standard architecture. </li></li><li>`7`: Redis 4.0 memory edition in cluster architecture. </li></li><li>`8`: Redis 5.0 memory edition in standard architecture. </li></li><li>`9`: Redis 5.0 memory edition in cluster architecture. </li></ul>
         * @type {number || null}
         */
        this.Type = null;

        /**
         * Whether to set the auto-renewal flag for an instance. <ul><li>`1`: Auto-renewal set. </li><li>`0`: Auto-renewal not set.</li></ul>
         * @type {number || null}
         */
        this.AutoRenewFlag = null;

        /**
         * Instance expiration time
         * @type {string || null}
         */
        this.DeadlineTime = null;

        /**
         * Engine: Redis community edition, Tencent Cloud CKV
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Product type. <ul><li>`standalone`: Standard edition. </li><li>`cluster`: Cluster edition. </li></ul>
         * @type {string || null}
         */
        this.ProductType = null;

        /**
         * VPC ID, such as vpc-fk33jsf43kgv.
         * @type {string || null}
         */
        this.UniqVpcId = null;

        /**
         * VPC subnet ID, such as subnet-fd3j6l35mm0.
         * @type {string || null}
         */
        this.UniqSubnetId = null;

        /**
         * Billing mode. Only pay-as-you-go billing is supported.
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * Description of an instance status, such as "Running".
         * @type {string || null}
         */
        this.InstanceTitle = null;

        /**
         * Scheduled deactivation time
         * @type {string || null}
         */
        this.OfflineTime = null;

        /**
         * Sub-status returned for an instance in process
         * @type {number || null}
         */
        this.SubStatus = null;

        /**
         * Anti-affinity tag
         * @type {Array.<string> || null}
         */
        this.Tags = null;

        /**
         * Instance node information
         * @type {Array.<InstanceNode> || null}
         */
        this.InstanceNode = null;

        /**
         * Shard size
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Billing ID
         * @type {number || null}
         */
        this.PriceId = null;

        /**
         * Isolation time
         * @type {string || null}
         */
        this.CloseTime = null;

        /**
         * Read weight of a replica node
         * @type {number || null}
         */
        this.SlaveReadWeight = null;

        /**
         * Instance tag information
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<InstanceTagInfo> || null}
         */
        this.InstanceTags = null;

        /**
         * Project name
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.ProjectName = null;

        /**
         * Whether an instance is password-free. <ul><li>`true`: Yes. </li><li>`false`: No. </li></ul>
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {boolean || null}
         */
        this.NoAuth = null;

        /**
         * Number of client connections
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ClientLimit = null;

        /**
         * DTS status (internal parameter, which can be ignored)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DtsStatus = null;

        /**
         * Upper shard bandwidth limit in MB
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.NetLimit = null;

        /**
         * Password-free instance flag (internal parameter, which can be ignored)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.PasswordFree = null;

        /**
         * Internal parameter, which can be ignored.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * Read-only instance flag (internal parameter, which can be ignored)
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ReadOnly = null;

        /**
         * Internal parameter, which can be ignored.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.RemainBandwidthDuration = null;

        /**
         * This parameter can be ignored for Redis instance.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Monitoring granularity type. <ul><li>`1m`: Monitoring at 1-minute granularity. </li><li>`5s`: Monitoring at 5-second granularity. </li></ul>
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.MonitorVersion = null;

        /**
         * The minimum number of max client connections
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ClientLimitMin = null;

        /**
         * The maximum number of max client connections
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {number || null}
         */
        this.ClientLimitMax = null;

        /**
         * Instance node details
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

        /**
         * Information of the region where the instance is deployed, such as `ap-guangzhou`.
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.Region = null;

        /**
         * Public IP
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.WanAddress = null;

        /**
         * Polaris service address
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.PolarisServer = null;

        /**
         * The current proxy version of an instance
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * The current cache minor version of an instance
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.CurrentRedisVersion = null;

        /**
         * Proxy version, which can be upgraded for the instance
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * Cache minor version, which can be upgraded for the instance
Note: This field may return null, indicating that no valid value can be obtained.
         * @type {string || null}
         */
        this.UpgradeRedisVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Appid = 'Appid' in params ? params.Appid : null;
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.VpcId = 'VpcId' in params ? params.VpcId : null;
        this.SubnetId = 'SubnetId' in params ? params.SubnetId : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.WanIp = 'WanIp' in params ? params.WanIp : null;
        this.Port = 'Port' in params ? params.Port : null;
        this.Createtime = 'Createtime' in params ? params.Createtime : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.SizeUsed = 'SizeUsed' in params ? params.SizeUsed : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.AutoRenewFlag = 'AutoRenewFlag' in params ? params.AutoRenewFlag : null;
        this.DeadlineTime = 'DeadlineTime' in params ? params.DeadlineTime : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.UniqVpcId = 'UniqVpcId' in params ? params.UniqVpcId : null;
        this.UniqSubnetId = 'UniqSubnetId' in params ? params.UniqSubnetId : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.InstanceTitle = 'InstanceTitle' in params ? params.InstanceTitle : null;
        this.OfflineTime = 'OfflineTime' in params ? params.OfflineTime : null;
        this.SubStatus = 'SubStatus' in params ? params.SubStatus : null;
        this.Tags = 'Tags' in params ? params.Tags : null;

        if (params.InstanceNode) {
            this.InstanceNode = new Array();
            for (let z in params.InstanceNode) {
                let obj = new InstanceNode();
                obj.deserialize(params.InstanceNode[z]);
                this.InstanceNode.push(obj);
            }
        }
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.PriceId = 'PriceId' in params ? params.PriceId : null;
        this.CloseTime = 'CloseTime' in params ? params.CloseTime : null;
        this.SlaveReadWeight = 'SlaveReadWeight' in params ? params.SlaveReadWeight : null;

        if (params.InstanceTags) {
            this.InstanceTags = new Array();
            for (let z in params.InstanceTags) {
                let obj = new InstanceTagInfo();
                obj.deserialize(params.InstanceTags[z]);
                this.InstanceTags.push(obj);
            }
        }
        this.ProjectName = 'ProjectName' in params ? params.ProjectName : null;
        this.NoAuth = 'NoAuth' in params ? params.NoAuth : null;
        this.ClientLimit = 'ClientLimit' in params ? params.ClientLimit : null;
        this.DtsStatus = 'DtsStatus' in params ? params.DtsStatus : null;
        this.NetLimit = 'NetLimit' in params ? params.NetLimit : null;
        this.PasswordFree = 'PasswordFree' in params ? params.PasswordFree : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.ReadOnly = 'ReadOnly' in params ? params.ReadOnly : null;
        this.RemainBandwidthDuration = 'RemainBandwidthDuration' in params ? params.RemainBandwidthDuration : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.MonitorVersion = 'MonitorVersion' in params ? params.MonitorVersion : null;
        this.ClientLimitMin = 'ClientLimitMin' in params ? params.ClientLimitMin : null;
        this.ClientLimitMax = 'ClientLimitMax' in params ? params.ClientLimitMax : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }
        this.Region = 'Region' in params ? params.Region : null;
        this.WanAddress = 'WanAddress' in params ? params.WanAddress : null;
        this.PolarisServer = 'PolarisServer' in params ? params.PolarisServer : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.CurrentRedisVersion = 'CurrentRedisVersion' in params ? params.CurrentRedisVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.UpgradeRedisVersion = 'UpgradeRedisVersion' in params ? params.UpgradeRedisVersion : null;

    }
}

/**
 * ReleaseWanAddress request structure.
 * @class
 */
class ReleaseWanAddressRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID.
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
 * CloseSSL response structure.
 * @class
 */
class CloseSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * ModifyMaintenanceWindow response structure.
 * @class
 */
class ModifyMaintenanceWindowResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Modification status. Valid values: success, failed.
         * @type {string || null}
         */
        this.Status = null;

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
        this.Status = 'Status' in params ? params.Status : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKeyTypeDist request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyTypeDistRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeInstanceMonitorTopNCmdTook request structure.
 * @class
 */
class DescribeInstanceMonitorTopNCmdTookRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Time span. 1: real time; 2: last 30 minutes; 3: last 6 hours; 4: last 24 hours
         * @type {number || null}
         */
        this.SpanType = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.SpanType = 'SpanType' in params ? params.SpanType : null;

    }
}

/**
 * DestroyPrepaidInstance response structure.
 * @class
 */
class DestroyPrepaidInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Order ID
         * @type {string || null}
         */
        this.DealId = null;

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
        this.DealId = 'DealId' in params ? params.DealId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeCommonDBInstances response structure.
 * @class
 */
class DescribeCommonDBInstancesResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instances
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance information
         * @type {Array.<RedisCommonInstanceList> || null}
         */
        this.InstanceDetails = null;

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

        if (params.InstanceDetails) {
            this.InstanceDetails = new Array();
            for (let z in params.InstanceDetails) {
                let obj = new RedisCommonInstanceList();
                obj.deserialize(params.InstanceDetails[z]);
                this.InstanceDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * InquiryPriceCreateInstance request structure.
 * @class
 */
class InquiryPriceCreateInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance type. Valid values: `2` (Redis 2.8 memory edition in standard architecture), `3` (CKV 3.2 memory edition in standard architecture), `4` (CKV 3.2 memory edition in cluster architecture), `6` (Redis 4.0 memory edition in standard architecture), `7` (Redis 4.0 memory edition in cluster architecture), `8` (Redis 5.0 memory edition in standard architecture), `9` (Redis 5.0 memory edition in cluster architecture).
         * @type {number || null}
         */
        this.TypeId = null;

        /**
         * Memory capacity in MB, which must be a multiple of 1,024. It is subject to the purchasable specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
If `TypeId` indicates the standard architecture, `MemSize` indicates the total memory capacity of an instance; if `TypeId` indicates the cluster architecture, `MemSize` indicates the memory capacity per shard.
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * Number of instances. The actual quantity purchasable at a time is subject to the specifications returned by the [DescribeProductInfo API](https://intl.cloud.tencent.com/document/api/239/30600?from_cn_redirect=1).
         * @type {number || null}
         */
        this.GoodsNum = null;

        /**
         * Length of purchase in months, which is required when creating a monthly-subscribed instance. Value range: [1,2,3,4,5,6,7,8,9,10,11,12,24,36]. For pay-as-you-go instances, set the parameter to `1`.
         * @type {number || null}
         */
        this.Period = null;

        /**
         * Billing mode. Valid values: `0` (pay-as-you-go), `1` (monthly subscription).
         * @type {number || null}
         */
        this.BillingMode = null;

        /**
         * ID of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Instance shard quantity. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, Redis 2.8 standalone edition, and Redis 4.0 standard architecture.
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Instance replica quantity. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, and Redis 2.8 standalone edition.
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Whether to support read-only replicas. This field is not required by Redis 2.8 standard architecture, CKV standard architecture, and Redis 2.8 standalone edition.
         * @type {boolean || null}
         */
        this.ReplicasReadonly = null;

        /**
         * Name of the AZ where the instance resides. For more information, see [Regions and AZs](https://intl.cloud.tencent.com/document/product/239/4106?from_cn_redirect=1).
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Valid values: `local` (local disk edition), `cloud` (cloud disk edition), `cdc` (dedicated cluster edition). Default value: `local` (local disk edition)
         * @type {string || null}
         */
        this.ProductVersion = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.TypeId = 'TypeId' in params ? params.TypeId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.GoodsNum = 'GoodsNum' in params ? params.GoodsNum : null;
        this.Period = 'Period' in params ? params.Period : null;
        this.BillingMode = 'BillingMode' in params ? params.BillingMode : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.ReplicasReadonly = 'ReplicasReadonly' in params ? params.ReplicasReadonly : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.ProductVersion = 'ProductVersion' in params ? params.ProductVersion : null;

    }
}

/**
 * UpgradeSmallVersion response structure.
 * @class
 */
class UpgradeSmallVersionResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
         */
        this.FlowId = null;

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
        this.FlowId = 'FlowId' in params ? params.FlowId : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceParams request structure.
 * @class
 */
class ModifyInstanceParamsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List of instance parameters modified
         * @type {Array.<InstanceParam> || null}
         */
        this.InstanceParams = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

        if (params.InstanceParams) {
            this.InstanceParams = new Array();
            for (let z in params.InstanceParams) {
                let obj = new InstanceParam();
                obj.deserialize(params.InstanceParams[z]);
                this.InstanceParams.push(obj);
            }
        }

    }
}

/**
 * OpenSSL request structure.
 * @class
 */
class OpenSSLRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Backup download information
 * @class
 */
class BackupDownloadInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Backup file name
         * @type {string || null}
         */
        this.FileName = null;

        /**
         * Backup file size in bytes. If the parameter value is `0`, the backup file size is unknown.
         * @type {number || null}
         */
        this.FileSize = null;

        /**
         * Address (valid for six hours) used to download the backup file over the public network
         * @type {string || null}
         */
        this.DownloadUrl = null;

        /**
         * Address (valid for six hours) used to download the backup file over the private network
         * @type {string || null}
         */
        this.InnerDownloadUrl = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.FileName = 'FileName' in params ? params.FileName : null;
        this.FileSize = 'FileSize' in params ? params.FileSize : null;
        this.DownloadUrl = 'DownloadUrl' in params ? params.DownloadUrl : null;
        this.InnerDownloadUrl = 'InnerDownloadUrl' in params ? params.InnerDownloadUrl : null;

    }
}

/**
 * Big key type distribution details
 * @class
 */
class BigKeyTypeInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

        /**
         * Size
         * @type {number || null}
         */
        this.Size = null;

        /**
         * Timestamp
         * @type {number || null}
         */
        this.Updatetime = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;
        this.Size = 'Size' in params ? params.Size : null;
        this.Updatetime = 'Updatetime' in params ? params.Updatetime : null;

    }
}

/**
 * DescribeInstanceNodeInfo request structure.
 * @class
 */
class DescribeInstanceNodeInfoRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * List size
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * The offset value
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeMaintenanceWindow request structure.
 * @class
 */
class DescribeMaintenanceWindowRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Instance node type
 * @class
 */
class InstanceClusterNode extends  AbstractModel {
    constructor(){
        super();

        /**
         * Node name
         * @type {string || null}
         */
        this.Name = null;

        /**
         * ID of the runtime node of the instance
         * @type {string || null}
         */
        this.RunId = null;

        /**
         * Cluster role. 0: master; 1: replica
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Node status. 0: readwrite; 1: read; 2: backup
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Service status. 0: down; 1: on
         * @type {number || null}
         */
        this.Connected = null;

        /**
         * Node creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Node elimination time
         * @type {string || null}
         */
        this.DownTime = null;

        /**
         * Distribution of node slots
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * Distribution of node keys
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Node QPS
         * @type {number || null}
         */
        this.Qps = null;

        /**
         * Node QPS slope
         * @type {number || null}
         */
        this.QpsSlope = null;

        /**
         * Node storage
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Node storage slope
         * @type {number || null}
         */
        this.StorageSlope = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Name = 'Name' in params ? params.Name : null;
        this.RunId = 'RunId' in params ? params.RunId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.Connected = 'Connected' in params ? params.Connected : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.DownTime = 'DownTime' in params ? params.DownTime : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Qps = 'Qps' in params ? params.Qps : null;
        this.QpsSlope = 'QpsSlope' in params ? params.QpsSlope : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;

    }
}

/**
 * DescribeTendisSlowLog request structure.
 * @class
 */
class DescribeTendisSlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID in the format of crs-ngvou0i1
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time in the format of 2019-09-08 12:12:41
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time in the format of 2019-09-09 12:12:41
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Slow query threshold in ms
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Maximum number of results returned per page. Default value: 20.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProxySlowLog request structure.
 * @class
 */
class DescribeProxySlowLogRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Slow query threshold in milliseconds
         * @type {number || null}
         */
        this.MinQueryTime = null;

        /**
         * Maximum number of results returned per page
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Offset, which is an integral multiple of `Limit`.
         * @type {number || null}
         */
        this.Offset = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.MinQueryTime = 'MinQueryTime' in params ? params.MinQueryTime : null;
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;

    }
}

/**
 * DescribeProxySlowLog response structure.
 * @class
 */
class DescribeProxySlowLogResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Total number of slow queries
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Slow query details
         * @type {Array.<InstanceProxySlowlogDetail> || null}
         */
        this.InstanceProxySlowLogDetail = null;

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

        if (params.InstanceProxySlowLogDetail) {
            this.InstanceProxySlowLogDetail = new Array();
            for (let z in params.InstanceProxySlowLogDetail) {
                let obj = new InstanceProxySlowlogDetail();
                obj.deserialize(params.InstanceProxySlowLogDetail[z]);
                this.InstanceProxySlowLogDetail.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * ModifyInstanceReadOnly request structure.
 * @class
 */
class ModifyInstanceReadOnlyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance input mode. Valid values: `0` (read/write), `1` (read-only)
         * @type {string || null}
         */
        this.InputMode = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InputMode = 'InputMode' in params ? params.InputMode : null;

    }
}

/**
 * DescribeInstanceAccount response structure.
 * @class
 */
class DescribeInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Account details
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {Array.<Account> || null}
         */
        this.Accounts = null;

        /**
         * Number of accounts
Note: This field may return null, indicating that no valid values can be obtained.
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

        if (params.Accounts) {
            this.Accounts = new Array();
            for (let z in params.Accounts) {
                let obj = new Account();
                obj.deserialize(params.Accounts[z]);
                this.Accounts.push(obj);
            }
        }
        this.TotalCount = 'TotalCount' in params ? params.TotalCount : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeInstanceMonitorBigKey request structure.
 * @class
 */
class DescribeInstanceMonitorBigKeyRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Request type. 1: string type; 2: all types
         * @type {number || null}
         */
        this.ReqType = null;

        /**
         * Time, such as "20190219"
         * @type {string || null}
         */
        this.Date = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.ReqType = 'ReqType' in params ? params.ReqType : null;
        this.Date = 'Date' in params ? params.Date : null;

    }
}

/**
 * DescribeBackupDownloadRestriction request structure.
 * @class
 */
class DescribeBackupDownloadRestrictionRequest extends  AbstractModel {
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
 * DescribeParamTemplateInfo response structure.
 * @class
 */
class DescribeParamTemplateInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Parameter template ID.
         * @type {string || null}
         */
        this.TemplateId = null;

        /**
         * Parameter template name.
         * @type {string || null}
         */
        this.Name = null;

        /**
         * Instance type. Valid values: `1` (Redis 2.8 Memory Edition in cluster architecture), `2` (Redis 2.8 Memory Edition in standard architecture), `3` (CKV 3.2 Memory Edition in standard architecture), `4` (CKV 3.2 Memory Edition in cluster architecture), `5` (Redis 2.8 Memory Edition in standalone architecture), `6` (Redis 4.0 Memory Edition in standard architecture), `7` (Redis 4.0 Memory Edition in cluster architecture), `8` (Redis 5.0 Memory Edition in standard architecture), `9` (Redis 5.0 Memory Edition in cluster architecture)
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * Parameter template description
         * @type {string || null}
         */
        this.Description = null;

        /**
         * Parameter details
         * @type {Array.<ParameterDetail> || null}
         */
        this.Items = null;

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
        this.TemplateId = 'TemplateId' in params ? params.TemplateId : null;
        this.Name = 'Name' in params ? params.Name : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.Description = 'Description' in params ? params.Description : null;

        if (params.Items) {
            this.Items = new Array();
            for (let z in params.Items) {
                let obj = new ParameterDetail();
                obj.deserialize(params.Items[z]);
                this.Items.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProductInfo request structure.
 * @class
 */
class DescribeProductInfoRequest extends  AbstractModel {
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
 * SwitchInstanceVip response structure.
 * @class
 */
class SwitchInstanceVipResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeInstanceParams response structure.
 * @class
 */
class DescribeInstanceParamsResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of instance parameters
         * @type {number || null}
         */
        this.TotalCount = null;

        /**
         * Instance parameter in Enum type
         * @type {Array.<InstanceEnumParam> || null}
         */
        this.InstanceEnumParam = null;

        /**
         * Instance parameter in Integer type
         * @type {Array.<InstanceIntegerParam> || null}
         */
        this.InstanceIntegerParam = null;

        /**
         * Instance parameter in Char type
         * @type {Array.<InstanceTextParam> || null}
         */
        this.InstanceTextParam = null;

        /**
         * Instance parameter in Multi type
         * @type {Array.<InstanceMultiParam> || null}
         */
        this.InstanceMultiParam = null;

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

        if (params.InstanceEnumParam) {
            this.InstanceEnumParam = new Array();
            for (let z in params.InstanceEnumParam) {
                let obj = new InstanceEnumParam();
                obj.deserialize(params.InstanceEnumParam[z]);
                this.InstanceEnumParam.push(obj);
            }
        }

        if (params.InstanceIntegerParam) {
            this.InstanceIntegerParam = new Array();
            for (let z in params.InstanceIntegerParam) {
                let obj = new InstanceIntegerParam();
                obj.deserialize(params.InstanceIntegerParam[z]);
                this.InstanceIntegerParam.push(obj);
            }
        }

        if (params.InstanceTextParam) {
            this.InstanceTextParam = new Array();
            for (let z in params.InstanceTextParam) {
                let obj = new InstanceTextParam();
                obj.deserialize(params.InstanceTextParam[z]);
                this.InstanceTextParam.push(obj);
            }
        }

        if (params.InstanceMultiParam) {
            this.InstanceMultiParam = new Array();
            for (let z in params.InstanceMultiParam) {
                let obj = new InstanceMultiParam();
                obj.deserialize(params.InstanceMultiParam[z]);
                this.InstanceMultiParam.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DisassociateSecurityGroups request structure.
 * @class
 */
class DisassociateSecurityGroupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Database engine name, which is `redis` for this API.
         * @type {string || null}
         */
        this.Product = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * List of instance IDs, which is an array of one or more instance IDs.
         * @type {Array.<string> || null}
         */
        this.InstanceIds = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Product = 'Product' in params ? params.Product : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.InstanceIds = 'InstanceIds' in params ? params.InstanceIds : null;

    }
}

/**
 * StartupInstance request structure.
 * @class
 */
class StartupInstanceRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Hot key details
 * @class
 */
class HotKeyInfo extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hot key
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Type
         * @type {string || null}
         */
        this.Type = null;

        /**
         * Count
         * @type {number || null}
         */
        this.Count = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Key = 'Key' in params ? params.Key : null;
        this.Type = 'Type' in params ? params.Type : null;
        this.Count = 'Count' in params ? params.Count : null;

    }
}

/**
 * Description of the instance parameter in Enum type
 * @class
 */
class InstanceEnumParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name
         * @type {string || null}
         */
        this.ParamName = null;

        /**
         * Parameter type: Enum
         * @type {string || null}
         */
        this.ValueType = null;

        /**
         * Whether restart is required after a modification is made. Valid values: true, false
         * @type {string || null}
         */
        this.NeedRestart = null;

        /**
         * Default value of the parameter
         * @type {string || null}
         */
        this.DefaultValue = null;

        /**
         * Current value
         * @type {string || null}
         */
        this.CurrentValue = null;

        /**
         * Parameter description
         * @type {string || null}
         */
        this.Tips = null;

        /**
         * Valid values of the parameter
         * @type {Array.<string> || null}
         */
        this.EnumValue = null;

        /**
         * Parameter status. 1: modifying; 2: modified
         * @type {number || null}
         */
        this.Status = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ParamName = 'ParamName' in params ? params.ParamName : null;
        this.ValueType = 'ValueType' in params ? params.ValueType : null;
        this.NeedRestart = 'NeedRestart' in params ? params.NeedRestart : null;
        this.DefaultValue = 'DefaultValue' in params ? params.DefaultValue : null;
        this.CurrentValue = 'CurrentValue' in params ? params.CurrentValue : null;
        this.Tips = 'Tips' in params ? params.Tips : null;
        this.EnumValue = 'EnumValue' in params ? params.EnumValue : null;
        this.Status = 'Status' in params ? params.Status : null;

    }
}

/**
 * CreateInstanceAccount response structure.
 * @class
 */
class CreateInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeInstanceBackups request structure.
 * @class
 */
class DescribeInstanceBackupsRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Number of backups returned per page. Default value: `20`. Maximum value: `100`.
         * @type {number || null}
         */
        this.Limit = null;

        /**
         * Pagination offset, which is an integral multiple of `Limit`. `offset` = `limit` * (page number - 1).
         * @type {number || null}
         */
        this.Offset = null;

        /**
         * ID of the instance to be operated on, which can be obtained through the `InstanceId` field in the return value of the `DescribeInstance` API.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Start time in the format of yyyy-MM-dd HH:mm:ss, such as 2017-02-08 16:46:34. This parameter is used to query the list of instance backups started during the [beginTime, endTime] range.
         * @type {string || null}
         */
        this.BeginTime = null;

        /**
         * End time in the format of yyyy-MM-dd HH:mm:ss, such as 2017-02-08 19:09:26. This parameter is used to query the list of instance backups started during the [beginTime, endTime] range.
         * @type {string || null}
         */
        this.EndTime = null;

        /**
         * Backup task status:
`1`: The backup is in the process.
`2`: The backup is normal.
`3`: The backup is being converted to an RDB file.
`4`: Conversion to RDB has been completed.
`-1`: The backup expired.
`-2`: The backup has been deleted.
         * @type {Array.<number> || null}
         */
        this.Status = null;

        /**
         * Instance name, which can be fuzzily searched.
         * @type {string || null}
         */
        this.InstanceName = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Limit = 'Limit' in params ? params.Limit : null;
        this.Offset = 'Offset' in params ? params.Offset : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.BeginTime = 'BeginTime' in params ? params.BeginTime : null;
        this.EndTime = 'EndTime' in params ? params.EndTime : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;

    }
}

/**
 * Security group details
 * @class
 */
class SecurityGroupDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Project ID
         * @type {number || null}
         */
        this.ProjectId = null;

        /**
         * Creation time
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * Security group ID
         * @type {string || null}
         */
        this.SecurityGroupId = null;

        /**
         * Security group name
         * @type {string || null}
         */
        this.SecurityGroupName = null;

        /**
         * Security group remarks
         * @type {string || null}
         */
        this.SecurityGroupRemark = null;

        /**
         * Security group inbound rule
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.InboundRule = null;

        /**
         * Security group outbound rule
         * @type {Array.<SecurityGroupsInboundAndOutbound> || null}
         */
        this.OutboundRule = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ProjectId = 'ProjectId' in params ? params.ProjectId : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.SecurityGroupId = 'SecurityGroupId' in params ? params.SecurityGroupId : null;
        this.SecurityGroupName = 'SecurityGroupName' in params ? params.SecurityGroupName : null;
        this.SecurityGroupRemark = 'SecurityGroupRemark' in params ? params.SecurityGroupRemark : null;

        if (params.InboundRule) {
            this.InboundRule = new Array();
            for (let z in params.InboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.InboundRule[z]);
                this.InboundRule.push(obj);
            }
        }

        if (params.OutboundRule) {
            this.OutboundRule = new Array();
            for (let z in params.OutboundRule) {
                let obj = new SecurityGroupsInboundAndOutbound();
                obj.deserialize(params.OutboundRule[z]);
                this.OutboundRule.push(obj);
            }
        }

    }
}

/**
 * InquiryPriceUpgradeInstance response structure.
 * @class
 */
class InquiryPriceUpgradeInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Price. Unit: USD
Note: this field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.Price = null;

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
        this.Price = 'Price' in params ? params.Price : null;
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DeleteInstanceAccount response structure.
 * @class
 */
class DeleteInstanceAccountResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * DescribeInstanceMonitorSIP request structure.
 * @class
 */
class DescribeInstanceMonitorSIPRequest extends  AbstractModel {
    constructor(){
        super();

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
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;

    }
}

/**
 * Information list of instance shards
 * @class
 */
class InstanceClusterShard extends  AbstractModel {
    constructor(){
        super();

        /**
         * Shard node name
         * @type {string || null}
         */
        this.ShardName = null;

        /**
         * Shard node ID
         * @type {string || null}
         */
        this.ShardId = null;

        /**
         * Role
         * @type {number || null}
         */
        this.Role = null;

        /**
         * Number of keys
         * @type {number || null}
         */
        this.Keys = null;

        /**
         * Slot information
         * @type {string || null}
         */
        this.Slots = null;

        /**
         * Storage capacity
         * @type {number || null}
         */
        this.Storage = null;

        /**
         * Capacity slope
         * @type {number || null}
         */
        this.StorageSlope = null;

        /**
         * ID of the runtime node of the instance
         * @type {string || null}
         */
        this.Runid = null;

        /**
         * Service status. 0: down; 1: on
         * @type {number || null}
         */
        this.Connected = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ShardName = 'ShardName' in params ? params.ShardName : null;
        this.ShardId = 'ShardId' in params ? params.ShardId : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Keys = 'Keys' in params ? params.Keys : null;
        this.Slots = 'Slots' in params ? params.Slots : null;
        this.Storage = 'Storage' in params ? params.Storage : null;
        this.StorageSlope = 'StorageSlope' in params ? params.StorageSlope : null;
        this.Runid = 'Runid' in params ? params.Runid : null;
        this.Connected = 'Connected' in params ? params.Connected : null;

    }
}

/**
 * OpenSSL response structure.
 * @class
 */
class OpenSSLResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * Tendis slow query details
 * @class
 */
class TendisSlowLogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Execution time
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Duration of the slow query (ms)
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

/**
 * ChangeInstanceRole response structure.
 * @class
 */
class ChangeInstanceRoleResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Async task ID
         * @type {number || null}
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
 * UpgradeProxyVersion request structure.
 * @class
 */
class UpgradeProxyVersionRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * The current proxy version
         * @type {string || null}
         */
        this.CurrentProxyVersion = null;

        /**
         * Upgradeable redis version
         * @type {string || null}
         */
        this.UpgradeProxyVersion = null;

        /**
         * `1` (upgrade immediately), `0` (upgrade during maintenance time)
         * @type {number || null}
         */
        this.InstanceTypeUpgradeNow = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.CurrentProxyVersion = 'CurrentProxyVersion' in params ? params.CurrentProxyVersion : null;
        this.UpgradeProxyVersion = 'UpgradeProxyVersion' in params ? params.UpgradeProxyVersion : null;
        this.InstanceTypeUpgradeNow = 'InstanceTypeUpgradeNow' in params ? params.InstanceTypeUpgradeNow : null;

    }
}

/**
 * Product information in the availability zone
 * @class
 */
class ZoneCapacityConf extends  AbstractModel {
    constructor(){
        super();

        /**
         * AZ ID, such as ap-guangzhou-3
         * @type {string || null}
         */
        this.ZoneId = null;

        /**
         * AZ name
         * @type {string || null}
         */
        this.ZoneName = null;

        /**
         * Whether a product is sold out in an AZ
         * @type {boolean || null}
         */
        this.IsSaleout = null;

        /**
         * Whether it is a default AZ
         * @type {boolean || null}
         */
        this.IsDefault = null;

        /**
         * Network type. basenet: basic network; vpcnet: VPC
         * @type {Array.<string> || null}
         */
        this.NetWorkType = null;

        /**
         * Information of an AZ, such as product specifications in it
         * @type {Array.<ProductConf> || null}
         */
        this.ProductSet = null;

        /**
         * AZ ID, such as 100003
         * @type {number || null}
         */
        this.OldZoneId = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.ZoneName = 'ZoneName' in params ? params.ZoneName : null;
        this.IsSaleout = 'IsSaleout' in params ? params.IsSaleout : null;
        this.IsDefault = 'IsDefault' in params ? params.IsDefault : null;
        this.NetWorkType = 'NetWorkType' in params ? params.NetWorkType : null;

        if (params.ProductSet) {
            this.ProductSet = new Array();
            for (let z in params.ProductSet) {
                let obj = new ProductConf();
                obj.deserialize(params.ProductSet[z]);
                this.ProductSet.push(obj);
            }
        }
        this.OldZoneId = 'OldZoneId' in params ? params.OldZoneId : null;

    }
}

/**
 * UpgradeInstance request structure.
 * @class
 */
class UpgradeInstanceRequest extends  AbstractModel {
    constructor(){
        super();

        /**
         * The ID of instance to be modified.
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * New memory size of an instance shard. <ul><li>Unit: MB. </li><li>You can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li><li>In case of capacity reduction, the new specification must be at least 1.3 times the used capacity; otherwise, the operation will fail.</li></ul>
         * @type {number || null}
         */
        this.MemSize = null;

        /**
         * New number of instance shards. <ul><li>This parameter is not required for standard architecture instances, but for cluster architecture instances. </li><li>For cluster architecture, you can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li></ul>
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * New replica quantity. <ul><li>You can only modify one of the three parameters at a time: `MemSize`, `RedisShardNum`, and `RedisReplicasNum`. To modify one of them, you need to enter the other two, which are consistent with the original configuration specifications of the instance. </li></ul>To modify the number of replicas in a multi-AZ instance, `NodeSet` must be passed in.</li></ul>
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Additional information for adding replicas for multi-AZ instances, including replica AZ and type (`NodeType` is `1`). This parameter is not required for single-AZ instances.
         * @type {Array.<RedisNodeInfo> || null}
         */
        this.NodeSet = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.MemSize = 'MemSize' in params ? params.MemSize : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;

        if (params.NodeSet) {
            this.NodeSet = new Array();
            for (let z in params.NodeSet) {
                let obj = new RedisNodeInfo();
                obj.deserialize(params.NodeSet[z]);
                this.NodeSet.push(obj);
            }
        }

    }
}

/**
 * DescribeInstanceNodeInfo response structure.
 * @class
 */
class DescribeInstanceNodeInfoResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * The number of proxy nodes
         * @type {number || null}
         */
        this.ProxyCount = null;

        /**
         * Proxy node information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<ProxyNodes> || null}
         */
        this.Proxy = null;

        /**
         * The number of redis nodes
         * @type {number || null}
         */
        this.RedisCount = null;

        /**
         * Redis node information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<RedisNodes> || null}
         */
        this.Redis = null;

        /**
         * The number of tendis nodes
         * @type {number || null}
         */
        this.TendisCount = null;

        /**
         * Tendis node information
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {Array.<TendisNodes> || null}
         */
        this.Tendis = null;

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
        this.ProxyCount = 'ProxyCount' in params ? params.ProxyCount : null;

        if (params.Proxy) {
            this.Proxy = new Array();
            for (let z in params.Proxy) {
                let obj = new ProxyNodes();
                obj.deserialize(params.Proxy[z]);
                this.Proxy.push(obj);
            }
        }
        this.RedisCount = 'RedisCount' in params ? params.RedisCount : null;

        if (params.Redis) {
            this.Redis = new Array();
            for (let z in params.Redis) {
                let obj = new RedisNodes();
                obj.deserialize(params.Redis[z]);
                this.Redis.push(obj);
            }
        }
        this.TendisCount = 'TendisCount' in params ? params.TendisCount : null;

        if (params.Tendis) {
            this.Tendis = new Array();
            for (let z in params.Tendis) {
                let obj = new TendisNodes();
                obj.deserialize(params.Tendis[z]);
                this.Tendis.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * DescribeProjectSecurityGroup response structure.
 * @class
 */
class DescribeProjectSecurityGroupResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Security group of the project
         * @type {Array.<SecurityGroupDetail> || null}
         */
        this.SecurityGroupDetails = null;

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

        if (params.SecurityGroupDetails) {
            this.SecurityGroupDetails = new Array();
            for (let z in params.SecurityGroupDetails) {
                let obj = new SecurityGroupDetail();
                obj.deserialize(params.SecurityGroupDetails[z]);
                this.SecurityGroupDetails.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instances in replication group
 * @class
 */
class Instances extends  AbstractModel {
    constructor(){
        super();

        /**
         * User AppID
         * @type {number || null}
         */
        this.AppId = null;

        /**
         * Instance ID
         * @type {string || null}
         */
        this.InstanceId = null;

        /**
         * Instance name
         * @type {string || null}
         */
        this.InstanceName = null;

        /**
         * Region ID. <ul><li>`1`: Guangzhou. </li><li>`4`: Shanghai. </li><li>`5`: Hong Kong (China). </li> <li>`6`: Toronto. </li> <li>`7`: Shanghai Finance. </li> <li>`8`: Beijing. </li> <li>`9`: Singapore. </li> <li>`11`: Shenzhen Finance. </li> <li>`15`: West US (Silicon Valley). </li> </ul>
         * @type {number || null}
         */
        this.RegionId = null;

        /**
         * Region ID
         * @type {number || null}
         */
        this.ZoneId = null;

        /**
         * Number of replicas
         * @type {number || null}
         */
        this.RedisReplicasNum = null;

        /**
         * Number of shards
         * @type {number || null}
         */
        this.RedisShardNum = null;

        /**
         * Shard memory size.
         * @type {number || null}
         */
        this.RedisShardSize = null;

        /**
         * Instance disk size
Note: This field may return `null`, indicating that no valid values can be obtained.
         * @type {number || null}
         */
        this.DiskSize = null;

        /**
         * Engine: Redis Community Edition, Tencent Cloud CKV.
         * @type {string || null}
         */
        this.Engine = null;

        /**
         * Read-write permission of the instance. <ul><li>`rw`: Read/Write. </li><li>`r`: Read-only. </li></ul>
         * @type {string || null}
         */
        this.Role = null;

        /**
         * Instance VIP
         * @type {string || null}
         */
        this.Vip = null;

        /**
         * Internal parameter, which can be ignored.
Note: This field may return null, indicating that no valid values can be obtained.
         * @type {string || null}
         */
        this.Vip6 = null;

        /**
         * VPC ID, such as `75101`.
         * @type {number || null}
         */
        this.VpcID = null;

        /**
         * Instance port
         * @type {number || null}
         */
        this.VPort = null;

        /**
         * Instance status. <ul><li>`0`: Uninitialized. </li><li>`1`: In the process. </li><li>`2`: Running. </li><li>`-2`: Isolated. </li><li>`-3`: To be deleted. </li></ul>
         * @type {number || null}
         */
        this.Status = null;

        /**
         * Repository ID
         * @type {number || null}
         */
        this.GrocerySysId = null;

        /**
         * Instance type. <ul><li>`1`: Redis 2.8 Memory Edition (Cluster Architecture). </li><li>`2`: Redis 2.8 Memory Edition (Standard Architecture). </li><li>`3`: CKV 3.2 Memory Edition (Standard Architecture). </li><li>`4`: CKV 3.2 Memory Edition (Cluster Architecture). </li><li>`5`: Redis 2.8 Standalone Edition. </li><li>`6`: Redis 4.0 Memory Edition (Standard Architecture). </li><li>`7`: Redis 4.0 Memory Edition (Cluster Architecture). </li><li>`8`: Redis 5.0 Memory Edition (Standard Architecture). </li><li>`9`: Redis 5.0 Memory Edition (Cluster Architecture). </li></ul>
         * @type {number || null}
         */
        this.ProductType = null;

        /**
         * The time when the instance was added to the replication group.
         * @type {string || null}
         */
        this.CreateTime = null;

        /**
         * The time when instances in the replication group were updated.
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
        this.AppId = 'AppId' in params ? params.AppId : null;
        this.InstanceId = 'InstanceId' in params ? params.InstanceId : null;
        this.InstanceName = 'InstanceName' in params ? params.InstanceName : null;
        this.RegionId = 'RegionId' in params ? params.RegionId : null;
        this.ZoneId = 'ZoneId' in params ? params.ZoneId : null;
        this.RedisReplicasNum = 'RedisReplicasNum' in params ? params.RedisReplicasNum : null;
        this.RedisShardNum = 'RedisShardNum' in params ? params.RedisShardNum : null;
        this.RedisShardSize = 'RedisShardSize' in params ? params.RedisShardSize : null;
        this.DiskSize = 'DiskSize' in params ? params.DiskSize : null;
        this.Engine = 'Engine' in params ? params.Engine : null;
        this.Role = 'Role' in params ? params.Role : null;
        this.Vip = 'Vip' in params ? params.Vip : null;
        this.Vip6 = 'Vip6' in params ? params.Vip6 : null;
        this.VpcID = 'VpcID' in params ? params.VpcID : null;
        this.VPort = 'VPort' in params ? params.VPort : null;
        this.Status = 'Status' in params ? params.Status : null;
        this.GrocerySysId = 'GrocerySysId' in params ? params.GrocerySysId : null;
        this.ProductType = 'ProductType' in params ? params.ProductType : null;
        this.CreateTime = 'CreateTime' in params ? params.CreateTime : null;
        this.UpdateTime = 'UpdateTime' in params ? params.UpdateTime : null;

    }
}

/**
 * DescribeInstanceMonitorHotKey response structure.
 * @class
 */
class DescribeInstanceMonitorHotKeyResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Hot key details
         * @type {Array.<HotKeyInfo> || null}
         */
        this.Data = null;

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

        if (params.Data) {
            this.Data = new Array();
            for (let z in params.Data) {
                let obj = new HotKeyInfo();
                obj.deserialize(params.Data[z]);
                this.Data.push(obj);
            }
        }
        this.RequestId = 'RequestId' in params ? params.RequestId : null;

    }
}

/**
 * Instance parameter
 * @class
 */
class InstanceParam extends  AbstractModel {
    constructor(){
        super();

        /**
         * Parameter name, such as “timeout”. For supported custom parameters, see <a href="https://www.tencentcloud.com/document/product/239/39796">Setting Instance Parameters</a>
         * @type {string || null}
         */
        this.Key = null;

        /**
         * Current parameter value. For example, if you set the current value of “timeout” to 120 (in seconds), the client connections that remain idle longer than 120 seconds will be closed. For more information on parameter values, see <a href="https://www.tencentcloud.com/document/product/239/39796">Setting Instance Parameters</a>
         * @type {string || null}
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
        this.Key = 'Key' in params ? params.Key : null;
        this.Value = 'Value' in params ? params.Value : null;

    }
}

/**
 * DisassociateSecurityGroups response structure.
 * @class
 */
class DisassociateSecurityGroupsResponse extends  AbstractModel {
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
 * ClearInstance response structure.
 * @class
 */
class ClearInstanceResponse extends  AbstractModel {
    constructor(){
        super();

        /**
         * Task ID
         * @type {number || null}
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
 * Slow log details
 * @class
 */
class InstanceSlowlogDetail extends  AbstractModel {
    constructor(){
        super();

        /**
         * Slow log duration
         * @type {number || null}
         */
        this.Duration = null;

        /**
         * Client address
         * @type {string || null}
         */
        this.Client = null;

        /**
         * Command
         * @type {string || null}
         */
        this.Command = null;

        /**
         * Command line details
         * @type {string || null}
         */
        this.CommandLine = null;

        /**
         * Execution duration
         * @type {string || null}
         */
        this.ExecuteTime = null;

        /**
         * Node ID
         * @type {string || null}
         */
        this.Node = null;

    }

    /**
     * @private
     */
    deserialize(params) {
        if (!params) {
            return;
        }
        this.Duration = 'Duration' in params ? params.Duration : null;
        this.Client = 'Client' in params ? params.Client : null;
        this.Command = 'Command' in params ? params.Command : null;
        this.CommandLine = 'CommandLine' in params ? params.CommandLine : null;
        this.ExecuteTime = 'ExecuteTime' in params ? params.ExecuteTime : null;
        this.Node = 'Node' in params ? params.Node : null;

    }
}

module.exports = {
    UpgradeSmallVersionRequest: UpgradeSmallVersionRequest,
    ModifyInstanceParamsResponse: ModifyInstanceParamsResponse,
    EnableReplicaReadonlyRequest: EnableReplicaReadonlyRequest,
    RedisBackupSet: RedisBackupSet,
    DescribeInstanceMonitorTopNCmdResponse: DescribeInstanceMonitorTopNCmdResponse,
    ModifyAutoBackupConfigResponse: ModifyAutoBackupConfigResponse,
    RestoreInstanceRequest: RestoreInstanceRequest,
    AllocateWanAddressRequest: AllocateWanAddressRequest,
    ApplyParamsTemplateRequest: ApplyParamsTemplateRequest,
    UpgradeInstanceVersionResponse: UpgradeInstanceVersionResponse,
    CreateInstancesRequest: CreateInstancesRequest,
    ModifyInstanceReadOnlyResponse: ModifyInstanceReadOnlyResponse,
    DescribeInstanceZoneInfoRequest: DescribeInstanceZoneInfoRequest,
    ModifyNetworkConfigResponse: ModifyNetworkConfigResponse,
    CommandTake: CommandTake,
    DescribeInstanceMonitorBigKeyResponse: DescribeInstanceMonitorBigKeyResponse,
    Inbound: Inbound,
    AssociateSecurityGroupsRequest: AssociateSecurityGroupsRequest,
    DescribeTaskListResponse: DescribeTaskListResponse,
    ModifyInstanceRequest: ModifyInstanceRequest,
    KillMasterGroupResponse: KillMasterGroupResponse,
    RenewInstanceResponse: RenewInstanceResponse,
    DescribeSlowLogResponse: DescribeSlowLogResponse,
    DescribeCommonDBInstancesRequest: DescribeCommonDBInstancesRequest,
    DescribeDBSecurityGroupsResponse: DescribeDBSecurityGroupsResponse,
    RestoreInstanceResponse: RestoreInstanceResponse,
    RedisNodeInfo: RedisNodeInfo,
    ModifyBackupDownloadRestrictionResponse: ModifyBackupDownloadRestrictionResponse,
    DescribeBackupUrlRequest: DescribeBackupUrlRequest,
    DeleteParamTemplateResponse: DeleteParamTemplateResponse,
    DescribeInstancesResponse: DescribeInstancesResponse,
    DescribeInstanceZoneInfoResponse: DescribeInstanceZoneInfoResponse,
    Account: Account,
    InstanceProxySlowlogDetail: InstanceProxySlowlogDetail,
    SecurityGroupsInboundAndOutbound: SecurityGroupsInboundAndOutbound,
    ResetPasswordResponse: ResetPasswordResponse,
    ClearInstanceRequest: ClearInstanceRequest,
    UpgradeInstanceVersionRequest: UpgradeInstanceVersionRequest,
    RegionConf: RegionConf,
    BigKeyInfo: BigKeyInfo,
    DescribeParamTemplatesRequest: DescribeParamTemplatesRequest,
    RenewInstanceRequest: RenewInstanceRequest,
    UpgradeVersionToMultiAvailabilityZonesResponse: UpgradeVersionToMultiAvailabilityZonesResponse,
    DescribeInstanceParamRecordsResponse: DescribeInstanceParamRecordsResponse,
    ModifyAutoBackupConfigRequest: ModifyAutoBackupConfigRequest,
    InstanceMultiParam: InstanceMultiParam,
    DescribeInstanceDealDetailRequest: DescribeInstanceDealDetailRequest,
    RedisNode: RedisNode,
    DescribeProjectSecurityGroupRequest: DescribeProjectSecurityGroupRequest,
    ParameterDetail: ParameterDetail,
    DescribeInstanceShardsResponse: DescribeInstanceShardsResponse,
    DestroyPrepaidInstanceRequest: DestroyPrepaidInstanceRequest,
    DisableReplicaReadonlyRequest: DisableReplicaReadonlyRequest,
    TaskInfoDetail: TaskInfoDetail,
    ModifyBackupDownloadRestrictionRequest: ModifyBackupDownloadRestrictionRequest,
    DisableReplicaReadonlyResponse: DisableReplicaReadonlyResponse,
    CreateParamTemplateResponse: CreateParamTemplateResponse,
    InstanceTagInfo: InstanceTagInfo,
    DescribeInstanceDTSInfoResponse: DescribeInstanceDTSInfoResponse,
    ChangeMasterInstanceResponse: ChangeMasterInstanceResponse,
    DestroyPostpaidInstanceResponse: DestroyPostpaidInstanceResponse,
    SwitchInstanceVipRequest: SwitchInstanceVipRequest,
    ChangeReplicaToMasterRequest: ChangeReplicaToMasterRequest,
    ProxyNodes: ProxyNodes,
    ModifyInstanceResponse: ModifyInstanceResponse,
    RedisCommonInstanceList: RedisCommonInstanceList,
    SourceInfo: SourceInfo,
    ModifyDBInstanceSecurityGroupsResponse: ModifyDBInstanceSecurityGroupsResponse,
    ChangeMasterInstanceRequest: ChangeMasterInstanceRequest,
    DescribeInstanceDTSInfoRequest: DescribeInstanceDTSInfoRequest,
    CreateParamTemplateRequest: CreateParamTemplateRequest,
    DescribeTendisSlowLogResponse: DescribeTendisSlowLogResponse,
    DescribeProductInfoResponse: DescribeProductInfoResponse,
    ModifyInstanceAccountRequest: ModifyInstanceAccountRequest,
    ModifyMaintenanceWindowRequest: ModifyMaintenanceWindowRequest,
    DescribeParamTemplateInfoRequest: DescribeParamTemplateInfoRequest,
    DescribeBackupUrlResponse: DescribeBackupUrlResponse,
    DescribeDBSecurityGroupsRequest: DescribeDBSecurityGroupsRequest,
    InquiryPriceCreateInstanceResponse: InquiryPriceCreateInstanceResponse,
    InstanceSecurityGroupDetail: InstanceSecurityGroupDetail,
    BackupLimitVpcItem: BackupLimitVpcItem,
    UpgradeProxyVersionResponse: UpgradeProxyVersionResponse,
    ResetPasswordRequest: ResetPasswordRequest,
    ModifyInstanceAccountResponse: ModifyInstanceAccountResponse,
    DelayDistribution: DelayDistribution,
    DescribeProjectSecurityGroupsResponse: DescribeProjectSecurityGroupsResponse,
    DescribeInstanceMonitorTookDistResponse: DescribeInstanceMonitorTookDistResponse,
    DescribeInstanceBackupsResponse: DescribeInstanceBackupsResponse,
    InstanceIntegerParam: InstanceIntegerParam,
    UpgradeVersionToMultiAvailabilityZonesRequest: UpgradeVersionToMultiAvailabilityZonesRequest,
    AllocateWanAddressResponse: AllocateWanAddressResponse,
    DescribeInstanceMonitorTookDistRequest: DescribeInstanceMonitorTookDistRequest,
    KillMasterGroupRequest: KillMasterGroupRequest,
    InstanceTextParam: InstanceTextParam,
    ParamTemplateInfo: ParamTemplateInfo,
    DescribeInstanceMonitorTopNCmdTookResponse: DescribeInstanceMonitorTopNCmdTookResponse,
    CloseSSLRequest: CloseSSLRequest,
    DescribeInstanceMonitorBigKeySizeDistRequest: DescribeInstanceMonitorBigKeySizeDistRequest,
    DescribeInstanceAccountRequest: DescribeInstanceAccountRequest,
    SwitchProxyRequest: SwitchProxyRequest,
    DescribeInstanceParamRecordsRequest: DescribeInstanceParamRecordsRequest,
    DescribeTaskListRequest: DescribeTaskListRequest,
    ChangeReplicaToMasterResponse: ChangeReplicaToMasterResponse,
    CreateInstancesResponse: CreateInstancesResponse,
    DescribeTaskInfoRequest: DescribeTaskInfoRequest,
    ApplyParamsTemplateResponse: ApplyParamsTemplateResponse,
    DescribeReplicationGroupRequest: DescribeReplicationGroupRequest,
    RedisNodes: RedisNodes,
    DescribeInstanceMonitorTopNCmdRequest: DescribeInstanceMonitorTopNCmdRequest,
    ModifyNetworkConfigRequest: ModifyNetworkConfigRequest,
    DescribeInstanceSecurityGroupRequest: DescribeInstanceSecurityGroupRequest,
    InstanceParamHistory: InstanceParamHistory,
    DescribeInstanceParamsRequest: DescribeInstanceParamsRequest,
    CleanUpInstanceResponse: CleanUpInstanceResponse,
    ModifyDBInstanceSecurityGroupsRequest: ModifyDBInstanceSecurityGroupsRequest,
    DescribeParamTemplatesResponse: DescribeParamTemplatesResponse,
    DescribeInstanceShardsRequest: DescribeInstanceShardsRequest,
    Outbound: Outbound,
    DescribeAutoBackupConfigResponse: DescribeAutoBackupConfigResponse,
    InquiryPriceUpgradeInstanceRequest: InquiryPriceUpgradeInstanceRequest,
    ModifyParamTemplateResponse: ModifyParamTemplateResponse,
    DescribeProjectSecurityGroupsRequest: DescribeProjectSecurityGroupsRequest,
    DescribeInstanceMonitorBigKeySizeDistResponse: DescribeInstanceMonitorBigKeySizeDistResponse,
    SecurityGroup: SecurityGroup,
    CreateInstanceAccountRequest: CreateInstanceAccountRequest,
    EnableReplicaReadonlyResponse: EnableReplicaReadonlyResponse,
    DescribeMaintenanceWindowResponse: DescribeMaintenanceWindowResponse,
    DescribeInstanceSecurityGroupResponse: DescribeInstanceSecurityGroupResponse,
    ReleaseWanAddressResponse: ReleaseWanAddressResponse,
    ProductConf: ProductConf,
    ManualBackupInstanceResponse: ManualBackupInstanceResponse,
    InstanceNode: InstanceNode,
    TendisNodes: TendisNodes,
    SwitchProxyResponse: SwitchProxyResponse,
    StartupInstanceResponse: StartupInstanceResponse,
    DescribeInstanceDTSInstanceInfo: DescribeInstanceDTSInstanceInfo,
    TradeDealDetail: TradeDealDetail,
    ResourceTag: ResourceTag,
    AssociateSecurityGroupsResponse: AssociateSecurityGroupsResponse,
    ReplicaGroup: ReplicaGroup,
    DescribeTaskInfoResponse: DescribeTaskInfoResponse,
    DescribeInstanceMonitorBigKeyTypeDistResponse: DescribeInstanceMonitorBigKeyTypeDistResponse,
    CleanUpInstanceRequest: CleanUpInstanceRequest,
    DescribeInstanceDealDetailResponse: DescribeInstanceDealDetailResponse,
    Groups: Groups,
    DescribeInstancesRequest: DescribeInstancesRequest,
    SourceCommand: SourceCommand,
    ModfiyInstancePasswordRequest: ModfiyInstancePasswordRequest,
    DescribeSlowLogRequest: DescribeSlowLogRequest,
    DeleteParamTemplateRequest: DeleteParamTemplateRequest,
    DescribeAutoBackupConfigRequest: DescribeAutoBackupConfigRequest,
    DescribeInstanceMonitorSIPResponse: DescribeInstanceMonitorSIPResponse,
    DestroyPostpaidInstanceRequest: DestroyPostpaidInstanceRequest,
    ChangeInstanceRoleRequest: ChangeInstanceRoleRequest,
    DeleteInstanceAccountRequest: DeleteInstanceAccountRequest,
    DescribeInstanceMonitorHotKeyRequest: DescribeInstanceMonitorHotKeyRequest,
    DescribeBackupDownloadRestrictionResponse: DescribeBackupDownloadRestrictionResponse,
    UpgradeInstanceResponse: UpgradeInstanceResponse,
    ManualBackupInstanceRequest: ManualBackupInstanceRequest,
    DescribeReplicationGroupResponse: DescribeReplicationGroupResponse,
    ModifyParamTemplateRequest: ModifyParamTemplateRequest,
    ModfiyInstancePasswordResponse: ModfiyInstancePasswordResponse,
    InstanceSet: InstanceSet,
    ReleaseWanAddressRequest: ReleaseWanAddressRequest,
    CloseSSLResponse: CloseSSLResponse,
    ModifyMaintenanceWindowResponse: ModifyMaintenanceWindowResponse,
    DescribeInstanceMonitorBigKeyTypeDistRequest: DescribeInstanceMonitorBigKeyTypeDistRequest,
    DescribeInstanceMonitorTopNCmdTookRequest: DescribeInstanceMonitorTopNCmdTookRequest,
    DestroyPrepaidInstanceResponse: DestroyPrepaidInstanceResponse,
    DescribeCommonDBInstancesResponse: DescribeCommonDBInstancesResponse,
    InquiryPriceCreateInstanceRequest: InquiryPriceCreateInstanceRequest,
    UpgradeSmallVersionResponse: UpgradeSmallVersionResponse,
    ModifyInstanceParamsRequest: ModifyInstanceParamsRequest,
    OpenSSLRequest: OpenSSLRequest,
    BackupDownloadInfo: BackupDownloadInfo,
    BigKeyTypeInfo: BigKeyTypeInfo,
    DescribeInstanceNodeInfoRequest: DescribeInstanceNodeInfoRequest,
    DescribeMaintenanceWindowRequest: DescribeMaintenanceWindowRequest,
    InstanceClusterNode: InstanceClusterNode,
    DescribeTendisSlowLogRequest: DescribeTendisSlowLogRequest,
    DescribeProxySlowLogRequest: DescribeProxySlowLogRequest,
    DescribeProxySlowLogResponse: DescribeProxySlowLogResponse,
    ModifyInstanceReadOnlyRequest: ModifyInstanceReadOnlyRequest,
    DescribeInstanceAccountResponse: DescribeInstanceAccountResponse,
    DescribeInstanceMonitorBigKeyRequest: DescribeInstanceMonitorBigKeyRequest,
    DescribeBackupDownloadRestrictionRequest: DescribeBackupDownloadRestrictionRequest,
    DescribeParamTemplateInfoResponse: DescribeParamTemplateInfoResponse,
    DescribeProductInfoRequest: DescribeProductInfoRequest,
    SwitchInstanceVipResponse: SwitchInstanceVipResponse,
    DescribeInstanceParamsResponse: DescribeInstanceParamsResponse,
    DisassociateSecurityGroupsRequest: DisassociateSecurityGroupsRequest,
    StartupInstanceRequest: StartupInstanceRequest,
    HotKeyInfo: HotKeyInfo,
    InstanceEnumParam: InstanceEnumParam,
    CreateInstanceAccountResponse: CreateInstanceAccountResponse,
    DescribeInstanceBackupsRequest: DescribeInstanceBackupsRequest,
    SecurityGroupDetail: SecurityGroupDetail,
    InquiryPriceUpgradeInstanceResponse: InquiryPriceUpgradeInstanceResponse,
    DeleteInstanceAccountResponse: DeleteInstanceAccountResponse,
    DescribeInstanceMonitorSIPRequest: DescribeInstanceMonitorSIPRequest,
    InstanceClusterShard: InstanceClusterShard,
    OpenSSLResponse: OpenSSLResponse,
    TendisSlowLogDetail: TendisSlowLogDetail,
    ChangeInstanceRoleResponse: ChangeInstanceRoleResponse,
    UpgradeProxyVersionRequest: UpgradeProxyVersionRequest,
    ZoneCapacityConf: ZoneCapacityConf,
    UpgradeInstanceRequest: UpgradeInstanceRequest,
    DescribeInstanceNodeInfoResponse: DescribeInstanceNodeInfoResponse,
    DescribeProjectSecurityGroupResponse: DescribeProjectSecurityGroupResponse,
    Instances: Instances,
    DescribeInstanceMonitorHotKeyResponse: DescribeInstanceMonitorHotKeyResponse,
    InstanceParam: InstanceParam,
    DisassociateSecurityGroupsResponse: DisassociateSecurityGroupsResponse,
    ClearInstanceResponse: ClearInstanceResponse,
    InstanceSlowlogDetail: InstanceSlowlogDetail,

}
