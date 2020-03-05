import { ICustomMite } from '../../../interfaces/ICustomMite';

export const logstashDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3004,
  miteFile: {
    path: `elk/logstash-pipeline`,
    name: `logstash`,
    extension: `conf`,
    contents: `# MegaDocker logstash.conf file for [[MOBNAME]]
input {
 syslog {
  port => 5000
  type => docker
 }
file {
 path => /usr/share/logstash/logs/*
 }
}
    
output {
 elasticsearch {
  hosts => ["http://[[MOBNAME]]_elasticsearch:9200"]
 }    
}
`
  }
};
