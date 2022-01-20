/** @format */

//  autheliaRedisDotConfMite.ts
//  MEGADocker
//  Configuration for Authelia's Redis database service
//  Created by George Georgulas IV on 3/27/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const autheliaRedisDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60001,
  miteFile: {
    path: `ldap/authelia-redis-conf`,
    name: `redis`,
    extension: `conf`,
    permissions: `644`,
    contents: `
##### LOGGING
loglevel notice
# can be: debug, verbose, notice, or warning

logfile ""
crash-log-enabled no
databases 16
set-proc-title no
save 3600 1
save 300 100
save 60 10000
stop-writes-on-bgsave-error yes
rdbcompression yes
rdbchecksum yes
sanitize-dump-payload no
dbfilename dump.rdb
rdb-del-sync-files yes
dir ./
replica-priority 100

daemonize no
pidfile /var/run/redis_6379.pid
protected-mode yes
port 0
tls-port 6379
tls-cert-file /etc/ssl/[[PRIMARYDOMAIN]].crt
tls-key-file /etc/ssl/[[PRIMARYDOMAIN]].key
tls-auth-clients no
aclfile /etc/redis/users.acl
acllog-max-len 128
acl-pubsub-default resetchannels
tcp-backlog 511
tcp-keepalive 300
timeout 0
maxclients 10000
disable-thp yes
lua-time-limit 5000
hash-max-ziplist-entries 512
hash-max-ziplist-value 64
list-max-ziplist-size -2
list-compress-depth 0
set-max-intset-entries 512
zset-max-ziplist-entries 128
zset-max-ziplist-value 64
hll-sparse-max-bytes 3000
stream-node-max-bytes 4096
stream-node-max-entries 100
activerehashing yes
client-output-buffer-limit normal 0 0 0
client-output-buffer-limit replica 256mb 64mb 60
client-output-buffer-limit pubsub 32mb 8mb 60
hz 10
dynamic-hz yes
aof-rewrite-incremental-fsync yes
rdb-save-incremental-fsync yes

`
  }
}
