#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface IManikinInput {
  description: string
  fileName: string
  uiName: string
}

let runtimeManikinAnswers: IManikinInput = {
  description: ``,
  fileName: ``,
  uiName: ``,
}

interface IManikinTemplateOptions {
  date: Date
  description: string
  fileName: string
  uiName: string
}

const makeOptions: Function = (input: IManikinInput): IManikinTemplateOptions => {
  const now: Date = new Date()

  const inputOptions: IManikinTemplateOptions = {
    date: now,
    description: input.description,
    fileName: input.fileName,
    uiName: input.uiName,
  }
  return inputOptions
}

const getManikinData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

getManikinData.question(`What is the full name of this service: `, function (manikinUIName: string) {
  runtimeManikinAnswers.uiName = manikinUIName
  getManikinData.question(`What will the file name for it be (camelCase): `, function (manikinName: string) {
    runtimeManikinAnswers.fileName = manikinName
    getManikinData.question(`a short description of what this service does: `, function (manikinDescription: string) {
      runtimeManikinAnswers.description = manikinDescription
      getManikinData.question(`Enter a short description for it (one line of text or less): `, function (desc: string) {
        runtimeManikinAnswers.description = desc
        getManikinData.close()
        let manikinRuntimeOptions = makeOptions(runtimeManikinAnswers)

        const outputNewManikinString: string = makeFileString(manikinRuntimeOptions)

        fs.writeFileSync(`src/mobparts/manikins/${manikinRuntimeOptions.fileName}.ts`, outputNewManikinString)
      })
    })
  })
})

const makeFileString: Function = (options: IManikinTemplateOptions): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

  //  ${options.fileName}.ts
  //  MEGADocker
  //  ${options.description}
  //  Created by George Georgulas IV on ${shortDate}.
  //  Copyright © ${year} The MegaDocker Group. All rights reserved.
  
  import { IManikin } from '../../interfaces/IManikin';
  
  import { ${options.fileName}ServiceMite } from '../mites/service/${options.fileName}ServiceMite';
  //import { ${options.fileName}NetworkMite } from '../mites/network/${options.fileName}NetworkMite';
  import ${options.fileName}Icon from '../../images/manikin-icons/${options.fileName}Icon.png';
  
  /**
   * ${options.uiName} Manikin
   */
  export const ${options.fileName}Manikin: IManikin = {
    description: \`${options.description}\`,
    folder: \`${options.fileName.toLowerCase()}\`,
    isCore: false,
    isSelected: false,
    manikinGroups: [],
    manikinIcon: \`${options.uiName}Icon\`,
    manikinIndex: 99999,
    memories: [],
    mites: [],
    name: \`${options.fileName}\`,
    ports: [],
    subfolders: [],
  };`
  return template
}
