/**
 * /* eslint-disable no-useless-escape
 *
 * @format
 */

// for lines 29 - 32

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const styleguidistWebpackDotConfigDotJsMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 50016,
  miteFile: {
    path: `styleguidist/configs`,
    name: `webpack.config`,
    extension: `js`,
    permissions: `644`,
    contents: `module.exports = {
      entry: "./src/index.tsx",
      output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
      },
      devServer: {
        host: '0.0.0.0',
        port: 6060,
        disableHostCheck: true
      },
      devtool: "source-map",
      resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
      },
      module: {
        rules: [
          { test: /\.tsx?$/, loader: "ts-loader" },
          { test: /\.(png|jpe?g|gif|tif|bmp)$/i, use: [{loader: 'file-loader'}] },
          { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
          { test: /\.css$/, use: ["style-loader", "css-loader"] }
        ]
      }
    };`,
  },
}
