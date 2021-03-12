/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const nginxDefaultDotTemplateDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50010,
  miteFile: {
    path: `nginx/conf`,
    name: `default.template`,
    extension: `conf`,
    permissions: `644`,
    contents: `

`,
  },
}
