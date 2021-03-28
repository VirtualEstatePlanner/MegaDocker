#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface ICustomMiteInput {
  filePath: string
  fileName: string
  fileExtension: string
  filePermissions: number
}

let runtimeCustomMiteAnswers: ICustomMiteInput = {
  filePath: ``,
  fileName: ``,
  fileExtension: ``,
  filePermissions: 0,
}

const getManikinData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

getManikinData.question(`What is the path to this file's location?: `, function (filePath: string) {
  runtimeCustomMiteAnswers.filePath = filePath
  getManikinData.question(`What is the name of this file?: `, function (fileName: string) {
    runtimeCustomMiteAnswers.fileName = fileName
    getManikinData.question(`What is this file's extension? (conf, config, db, html, js, json, ldif, options, properties, sh, txt, or yml): `, function (fileExtension: string) {
      runtimeCustomMiteAnswers.fileExtension = fileExtension
      getManikinData.question(`What permissions should this file have? (3-digits between 0 and 7 number, such as 644): `, function (filePermissions: string) {
        runtimeCustomMiteAnswers.filePermissions = parseInt(filePermissions)
        getManikinData.close()

        const outputNewManikinString: string = makeFileString(runtimeCustomMiteAnswers)

        fs.writeFileSync(`src/mobparts/mites/custom/${runtimeCustomMiteAnswers.fileName}.ts`, outputNewManikinString)
      })
    })
  })
})

const makeFileString: Function = (options: ICustomMiteInput): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

import { ICustomMite } from '../../../interfaces/ICustomMite'

export const filebrowserDatabaseDotDbMite: ICustomMite = {
  type: \`Custom\`,
  miteString: \`\`,
  miteIndex: 99999,
  miteFile: {
    path: \`${runtimeCustomMiteAnswers.filePath}\`,
    name: \`${runtimeCustomMiteAnswers.fileName}\`,
    extension: \`${runtimeCustomMiteAnswers.fileExtension}\`,
    permissions: \`${runtimeCustomMiteAnswers.filePermissions}\`,
    contents: \`\`,
  },
}`
  return template
}
