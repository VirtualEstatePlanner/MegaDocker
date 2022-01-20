/**
 * @format
 */

/* eslint-disable no-template-curly-in-string */
// for line 26

import { ICustomMite } from '../../../interfaces/miteTypeInterfaces/ICustomMite'

export const styleguidistStyleguideDotConfigDotJsMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60017,
  miteFile: {
    path: `styleguidist/configs`,
    name: `styleguide.config`,
    extension: `js`,
    permissions: `644`,
    contents: `const glob = require("glob");
    const path = require("path");
    const fs   = require("fs");
    
    module.exports = {
      components: () => {
        return glob.sync("src/shared/components/**/*.{ts,tsx}").filter(file => {
          if (file.match(/connect.tsx$/)) {
            return true
          } else {
            const pathObject = path.parse(file);
            pathObject.ext = \`.connect\${pathObject.ext}\`
            const { root, dir, ext, name } = pathObject;
            return !fs.existsSync(path.format({ root, dir, ext, name }));
          }
        });
      },
      propsParser: require("react-docgen-typescript").withDefaultConfig({
        savePropValueAsString: true,
      }).parse,
      webpackConfig: Object.assign({}, require("./webpack.config"), {}),
      styleguideComponents: {
        Wrapper: __dirname + "/src/styleguide/Wrapper.tsx",
      },
      styleguideDir: "docs",
    };
    `
  }
}
