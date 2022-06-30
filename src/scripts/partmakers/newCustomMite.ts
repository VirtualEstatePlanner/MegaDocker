#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface ICustomMiteInput {
  filePath: string
  fileName: string
  fileExtension: string
  fileDescription: string
  filePermissions: number
}

const runtimeCustomMiteAnswers: ICustomMiteInput = {
  filePath: ``,
  fileName: ``,
  fileDescription: ``,
  fileExtension: ``,
  filePermissions: 0
}

const getManikinData = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

getManikinData.question(`What is the path to this file's location?: `, function (filePath: string) {
  runtimeCustomMiteAnswers.filePath = filePath
  getManikinData.question(`What is the name of this file?: `, function (fileName: string) {
    runtimeCustomMiteAnswers.fileName = fileName
    getManikinData.question(`What is this file's extension? (conf, config, db, html, js, json, ldif, options, properties, sh, txt, or yml): `, function (fileExtension: string) {
      runtimeCustomMiteAnswers.fileExtension = fileExtension
      getManikinData.question(`What is a short description of this file's purpose?: `, function (fileDescription: string) {
        runtimeCustomMiteAnswers.fileDescription = fileDescription
        getManikinData.question(`What permissions should this file have? (3-digits between 0 and 7 number, such as 644): `, function (filePermissions: string) {
          runtimeCustomMiteAnswers.filePermissions = parseInt(filePermissions)
          getManikinData.close()

          const outputNewManikinString: string = makeFileString(runtimeCustomMiteAnswers)

          fs.writeFileSync(`src/mobparts/mites/custom/${runtimeCustomMiteAnswers.fileName}Mite.ts`, outputNewManikinString)
        })
      })
    })
  })
})

const makeFileString: (options: ICustomMiteInput) => string = (options: ICustomMiteInput): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template = `/** @format */

//  ${options.fileName}Mite.ts
//  MEGADocker
//  ${options.fileDescription}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

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
