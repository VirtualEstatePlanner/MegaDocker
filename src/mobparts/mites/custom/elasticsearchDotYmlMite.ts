import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50001,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `elasticsearch`,
    extension: `yml`,
    permissions: `644`,
    contents: `# MegaDocker elasticsearch.yml file for [[MOBNAME]]
cluster.name: "[[MOBNAME]]-docker-cluster"
network.host: 0.0.0.0
path.data: /usr/share/elasticsearch/data
path.logs: /usr/share/elasticsearch/logs
    `
  }
};
