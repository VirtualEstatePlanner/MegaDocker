import { ICustomMite } from '../../../interfaces/ICustomMite';

export const elasticsearchLog4j2DotPropertiesMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3002,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `log4j2`,
    extension: `properties`,
    contents: `
#
`
  }
};
