/** @format */

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const nginxDefaultDotTemplateDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60013,
  miteFile: {
    path: `nginx/conf`,
    name: `default.template`,
    extension: `conf`,
    permissions: `644`,
    contents: `

`,
  },
}
