import { ICustomMite } from '../../../interfaces/ICustomMite';

export const kibanaDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3000,
  miteFile: {
    path: `elk/kibana-config`,
    name: `kibana`,
    extension: `yml`,
    contents: `
server.port: 80
server.host: "kibana.[[PRIMARYDOMAIN]]"
server.rewriteBasePath: false
server.name: "kibana.[[PRIMARYDOMAIN]]"
elasticsearch.hosts: ["http://[[MOBNAME]]_elasticsearch:9200"]
elasticsearch.preserveHost: true
kibana.index: ".kibana"
elasticsearch.username: "[[KIBANAUSER]]"
elasticsearch.password: "[[KIBANAPASSWORD]]"
server.ssl.enabled: true
server.ssl.certificate: /ssl/[[PRIMARYDOMAIN]].crt
server.ssl.key: /ssl/[[PRIMARYDOMAIN]].key
logging.verbose: true
elasticsearch.logQueries: true
logging.dest: stdout
i18n.locale: "en"
`
  }
};
