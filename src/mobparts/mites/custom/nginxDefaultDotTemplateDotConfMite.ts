/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const nginxDefaultDotTemplateDotConfMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60012,
  miteFile: {
    path: `nginx/conf`,
    name: `default.template`,
    extension: `conf`,
    permissions: `644`,
    contents: `

`,
  },
}
