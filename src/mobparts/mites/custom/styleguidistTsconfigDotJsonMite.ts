/** @format */

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const styleguidistTsconfigDotJsonMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60018,
  miteFile: {
    path: `styleguidist/configs`,
    name: `tsconfig`,
    extension: `json`,
    permissions: `644`,
    contents: `{
      "compilerOptions": {
        "esModuleInterop": true,
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "commonjs",
        "lib": ["es6", "dom", "es2017"],
        "target": "esnext",
        "jsx": "react"
      },
      "include": [
        "src",
        "public",
        "typings",
        "./src/**/*"
      ]
    }
    `,
  },
}
