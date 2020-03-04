import { ICustomMite } from '../../../interfaces/ICustomMite';

export const logstashDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3004,
  miteFile: {
    path: `elk/logstash-config`,
    name: `logstash`,
    extension: `conf`,
    contents: `# MegaDocker logstash.conf file for [[MOBNAME]]
input {
  file {
    path => /usr/share/logstash/logfiles/*
  }
}
output {
  elasticsearch {
    hosts => ["[[MOBNAME]]_elasticsearch:9200"]
  }
  stdout { 
    codec => rubydebug
  }
}
`
  }
};
