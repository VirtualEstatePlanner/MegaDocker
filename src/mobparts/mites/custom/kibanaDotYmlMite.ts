/** @format */

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const kibanaDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60008,
  miteFile: {
    path: `elk/kibana-config`,
    name: `kibana`,
    extension: `yml`,
    permissions: `644`,
    contents: `# MegaDocker kibana configuration file for [[MOBNAME]]
server.port: 80
xpack.reporting.kibanaServer.hostname: 0.0.0.0
server.rewriteBasePath: false
server.name: "kibana.[[PRIMARYDOMAIN]]"
elasticsearch.hosts: ["http://[[MOBNAME]]_elasticsearch:9200"]
kibana.index: ".kibana"
elasticsearch.username: "[[KIBANAUSER]]"
elasticsearch.password: "[[KIBANAPASSWORD]]"
server.ssl.enabled: true
server.ssl.certificate: /ssl/[[PRIMARYDOMAIN]].crt
server.ssl.key: /ssl/[[PRIMARYDOMAIN]].key
logging.verbose: true
elasticsearch.logQueries: true
logging.dest: stdout
logging.json: true
i18n.locale: "en"
`,
  },
}
