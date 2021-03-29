/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const styleguidistPackageDotJsonMite: ICustomMite = {
  type: `Custom`,
  miteString: ``,
  miteIndex: 60016,
  miteFile: {
    path: `styleguidist/configs`,
    name: `package`,
    extension: `json`,
    permissions: `644`,
    contents: `{
      "name": "styleguidist-typescript-react-material-ui-component-library",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "build": "./node_modules/.bin/webpack && cp src/index.html dist/index.html",
        "start": "./node_modules/.bin/webpack-dev-server --port 9000 --open --hot --inline --content-base src",
        "styleguide": "styleguidist server",
        "styleguide:build": "styleguidist build"
      },
      "engines": {
        "node": ">=10.13.0"
      },
      "author": "george@orb.run",
      "license": "MIT",
      "dependencies": {
        "@material-ui/core": "latest",
        "@material-ui/icons": "latest",
        "@material-ui/styles": "latest",
        "@types/material-ui": "latest",
        "@types/react": "16.9.22",
        "@types/react-dom": "16.9.5",
        "@types/react-intl-redux": "0.1.14",
        "react": "16.12.0",
        "react-dom": "16.12.0",
        "react-intl": "3.12.0",
        "react-intl-redux": "2.2.0",
        "react-redux": "7.2.0",
        "redux": "4.0.5",
        "typesafe-actions": "4.4.2"
      },
      "devDependencies": {
        "css-loader": "3.4.2",
        "file-loader": "^6.2.0",
        "react-docgen-typescript": "1.16.2",
        "react-styleguidist": "10.6.2",
        "source-map-loader": "0.2.4",
        "style-loader": "1.1.3",
        "ts-loader": "6.2.1",
        "typescript": "latest",
        "webpack": "4.41.5",
        "webpack-cli": "3.3.11",
        "webpack-dev-server": "3.10.1"
      }
    }
    `,
  },
}
