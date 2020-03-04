import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchDotYmlMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3001,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `jvm`,
    extension: `options`,
    contents: `
`
  }
};
