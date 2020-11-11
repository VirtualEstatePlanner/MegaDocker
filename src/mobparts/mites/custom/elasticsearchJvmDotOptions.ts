import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchJvmDotOptionsMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3002,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `jvm`,
    extension: `options`,
    permissions: `644`,
    contents: `
#
`
  }
};
