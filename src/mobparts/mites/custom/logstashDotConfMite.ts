/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const logstashDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60009,
  miteFile: {
    path: `elk/logstash-pipeline`,
    name: `logstash`,
    extension: `conf`,
    permissions: `644`,
    contents: `# MegaDocker logstash.conf file for [[MOBNAME]]
input {
 syslog {
  port => 5000
  type => docker
 }
 file {
  path => "/usr/share/logstash/logs/*"
 }
 beats {
  port => 5044
 }
}

output {
 elasticsearch {
  hosts => ["http://[[MOBNAME]]_elasticsearch:9200"]
  user => [[KIBANAUSER]]
  password => [[KIBANAPASSWORD]]
  index => "%{[@metadata][beat]}-%{[@metadata][version]}"
 }    
}
`,
  },
}
