import { ICustomMite } from '../../../interfaces/ICustomMite';

export const logstashDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3000,
  miteFile: {
    path: `elk/logstash-config`,
    name: `logstash`,
    extension: `yml`,
    contents: `
http.host: "docker-cluster"
xpack.monitoring.elasticsearch.hosts: [ "http://[[MOBNAME]]_elasticsearch:9200" ]
xpack.monitoring.enabled: true
`
  }
};
