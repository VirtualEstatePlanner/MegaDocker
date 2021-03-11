/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const nginxDefaultDotConfDotTemplate: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50009,
  miteFile: {
    path: `nginx/conf`,
    name: `default.template`,
    extension: `conf`,
    permissions: `644`,
    contents: `

`,
  },
}
