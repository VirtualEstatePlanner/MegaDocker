import { ICustomMite } from '../../../interfaces/ICustomMite';

export const filebeatDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3001,
  miteFile: {
    path: `elk/filebeat-config`,
    name: `filebeat`,
    extension: `yml`,
    contents: `# MegaDocker filebeat.yml configuration file
filebeat.config.modules.path: /usr/share/filebeat/modules.d/*.yml
filebeat.config.reload.enabled: false

filebeat.modules:
- module: apache
  access:
    var.paths: ["/logfiles"]
- module: elasticsearch
  access:
    var.paths: ["/logfiles"]
- module: kibana
  access:
    var.paths: ["/logfiles"]
- module: logstash
  access:
    var.paths: ["/logfiles"]
- module: mongodb
  access:
    var.paths: ["/logfiles"]
- module: mysql
  access:
    var.paths: ["/logfiles"]
- module: nginx
  access:
    var.paths: ["/logfiles"]
- module: redis
  access:
    var.paths: ["/logfiles"]
- module: traefik
  access:
    var.paths: ["/logfiles"]

processors.add_docker_metadata. host: "unix:///var/run/docker.sock"

decode_json_fields.fields: ["message"]
decode_json_fields.target: "json"
decode_json_fields.overwrite_keys: true

output.elasticsearch.hosts: ["[[MOBNAME]]_elasticsearch:9200"]
output.elasticsearch.username: "[[KIBANAUSER]]"
output.elasticsearch.password: "[[KIBANAPASSWORD]]"
output.elasticsearch.indices:
 - index: "filebeat-%{[agent.version]}-%{+yyyy.MM.dd}"

setup.kibana.host: "[[MOBNAME]]_kibana:5601"
setup.kibana.protocol: "http"

logging.json: true
logging.metrics.enabled: false
`
  }
};

// prospectors:
//  - paths:
//   - /var/lib/docker/containers/*/*.log
//     document_type: syslog
// output:
//  logstash:
//   enabled: true
//   hosts:
//       - [[MOBNAME]]_logstash]]:5044
