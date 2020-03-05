import { ICustomMite } from '../../../interfaces/ICustomMite';

export const logstashDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3005,
  miteFile: {
    path: `elk/logstash-config`,
    name: `logstash`,
    extension: `yml`,
    contents: `# MegaDocker logstash.yml config file
http.host: "[[MOBNAME]]-docker-cluster"
xpack.monitoring.enabled: true
xpack.monitoring.elasticsearch.hosts: [ "http://[[MOBNAME]]_elasticsearch:9200" ]
xpack.monitoring.elasticsearch.username: [[KIBANAUSER]]
xpack.monitoring.elasticsearch.password: [[KIBANAPASSWORD]]
`
  }
};
