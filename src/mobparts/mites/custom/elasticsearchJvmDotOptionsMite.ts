/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const elasticsearchJvmDotOptionsMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50002,
  miteFile: {
    path: `elk/elasticsearch-config`,
    name: `jvm`,
    extension: `options`,
    permissions: `644`,
    contents: `

`,
  },
}
