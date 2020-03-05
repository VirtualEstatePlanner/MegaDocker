import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3000,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `elasticsearch`,
    extension: `yml`,
    contents: `
cluster.name: "[[MOBNAME]]-docker-cluster"
network.host: 0.0.0.0
path.data: /usr/share/elasticsearch/data
path.logs: /usr/share/elasticsearch/logs
    `
  }
};
