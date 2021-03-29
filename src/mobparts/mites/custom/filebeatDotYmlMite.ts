/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const filebeatDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60006,
  miteFile: {
    path: `elk/filebeat-config`,
    name: `filebeat`,
    extension: `yml`,
    permissions: `600`,
    contents: `# MegaDocker filebeat.yml configuration file
filebeat.config.modules.path: /usr/share/filebeat/modules.d/*.yml
filebeat.config.reload.enabled: false

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
`,
  },
}

// TODO: add modules to config
// filebeat.modules:
// - module: apache
//   access:
//     var.paths: ["/logfiles"]
// - module: elasticsearch
//   access:
//     var.paths: ["/logfiles/elk"]
// - module: kibana
//   access:
//     var.paths: ["/logfiles/elk"]
// - module: logstash
//   access:
//     var.paths: ["/logfiles/elk"]
// - module: mongodb
//   access:
//     var.paths: ["/logfiles"]
// - module: mysql
//   access:
//     var.paths: ["/logfiles"]
// - module: nginx
//   access:
//     var.paths: ["/logfiles/nginx"]
// - module: redis
//   access:
//     var.paths: ["/logfiles"]
// - module: traefik
//   access:
//     var.paths: ["/logfiles/traefik"]
