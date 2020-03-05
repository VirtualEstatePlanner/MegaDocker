import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchJvmDotOptionsMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3001,
  miteFile: {
    path: `elk/filebeat-config`,
    name: `filebeat`,
    extension: `yml`,
    contents: `# MegaDocker filebeat.yml configuration file
filebeat.config:
 modules:
  path: /usr/share/filebeat/modules.d/*.yml
  reload.enabled: false
  
filebeat.autodiscover:
 providers:
  - type: docker
    hints.enabled: true
  
processors:
 - add_cloud_metadata: ~
  
output.elasticsearch:
 hosts: "[[MOBNAME]]_elasticsearh:9200"
 username: "[[KIBANAUSER]]"
 password: "[[KIBANAPASSWORD]]"
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
