import { ICustomMite } from '../../../interfaces/ICustomMite';

export const nginxDefaultDotConfDotTemplate: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 3000,
  miteFile: {
    path: `nginx/conf`,
    name: `default.template`,
    extension: `conf`,
    contents: `
`
  }
};
