#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import { IMemoryValueType } from '../../interfaces/IMemoryValueType'
import readline from 'readline'

type IValidatorString = `domain` | `email` | `no` | `noWhitespace` | `noWhiteSpaceOrSymbols` | `password`

interface IMemoryInput {
  autocomplete: boolean
  description: string
  name: string
  type: IMemoryValueType
  memoryType: string
  validator: IValidatorString
}

interface IMemoryTemplateOptions {
  autocomplete: boolean
  date: Date
  description: string
  fileName: string
  memoryMarker: string
  memoryType: string
  memoryName: string
  tooltip: string
  validator: IValidatorString
  valueType: IMemoryValueType
}
let runtimeMemoryAnswers: IMemoryInput = {
  autocomplete: false,
  description: `inputDesc`,
  name: `inputName`,
  memoryType: `SecretMemory`,
  type: `text`,
  validator: `no`,
}

const getMemoryData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

getMemoryData.question(`What kind of memory is this? (Secret or Normal): `, function (memoryType: string) {
  runtimeMemoryAnswers.name = memoryType
  switch (memoryType) {
    case 'Normal': {
      runtimeMemoryAnswers.autocomplete = true
      break
    }
    case 'Secret': {
      runtimeMemoryAnswers.autocomplete = false
      break
    }
    default: {
      throw new Error(`ERROR: ${memoryType} != 'Normal' or 'Secret'.  Exiting script`)
    }
  }
  getMemoryData.question(`Name this memory (camelCase): `, function (memoryName: string) {
    runtimeMemoryAnswers.name = memoryName
    getMemoryData.question(`Choose a html input type for it (text, email, or password): `, function (htmltype: string) {
      if (['text', 'email', 'password'].includes(htmltype) == false) {
        throw new Error(`ERROR: ${htmltype} != 'text', or 'email', or 'password'.  Exiting script`)
      } else {
        runtimeMemoryAnswers.type = htmltype as IMemoryValueType
      }
      getMemoryData.question(`Should it autocomplete ('true' or 'false'): `, function (auto: string) {
        switch (auto) {
          case 'true': {
            runtimeMemoryAnswers.autocomplete = true
            break
          }
          case 'false': {
            runtimeMemoryAnswers.autocomplete = false
            break
          }
          default: {
            throw new Error(`ERROR: ${auto} != 'true' or 'false'.  Exiting script`)
          }
        }

        getMemoryData.question(`Enter a short description for it (one line of text or less): `, function (desc: string) {
          runtimeMemoryAnswers.description = desc
          getMemoryData.question(`Choose a validator ('email', 'no', 'noWhitespace' 'noWhiteSpaceOrSymbols' 'password'): `, function (validator: string) {
            switch (validator) {
              case 'email': {
                runtimeMemoryAnswers.validator = validator as IValidatorString
                break
              }
              case 'no': {
                runtimeMemoryAnswers.validator = validator as IValidatorString
                break
              }
              case 'noWhitespace': {
                runtimeMemoryAnswers.validator = validator as IValidatorString
                break
              }
              case 'noWhiteSpaceOrSymbols': {
                runtimeMemoryAnswers.validator = validator as IValidatorString
                break
              }
              case 'password': {
                runtimeMemoryAnswers.validator = validator as IValidatorString
                break
              }
              default: {
                throw new Error(`ERROR: ${validator} != 'email', 'no', 'noWhitespace' 'noWhiteSpaceOrSymbols' 'password'.  Exiting script`)
              }
            }
            getMemoryData.close()
            let runtimeOptions = makeOptions(runtimeMemoryAnswers)

            const outputNewMemoryString: string = makeFileString(runtimeOptions)

            fs.writeFileSync(`src/mobparts/memories/${runtimeOptions.fileName}.ts`, outputNewMemoryString)
          })
        })
      })
    })
  })
})

const makeOptions: Function = (input: IMemoryInput): IMemoryTemplateOptions => {
  const now: Date = new Date()
  const marker: string = input.name.toUpperCase()

  const inputOptions: IMemoryTemplateOptions = {
    autocomplete: input.autocomplete,
    date: now,
    description: input.description,
    fileName: input.name,
    memoryMarker: marker,
    memoryName: input.name,
    memoryType: input.memoryType,
    tooltip: input.description,
    validator: input.validator,
    valueType: input.type,
  }
  return inputOptions
}

const makeFileString: Function = (options: IMemoryTemplateOptions): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

//  ${options.fileName}.ts
//  MEGADocker
//  ${options.description}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { ${options.validator}Validator } from '../../functions/validators/${options.validator}Validator';

export const ${options.memoryName}: IMemory = {
  memoryIndex: 99999,
  memoryMarker: \`[[${options.memoryMarker}]]\`,
  memoryType: \`${options.memoryType}\`,
  shouldAutocomplete: ${options.autocomplete},
  name: \`${options.description}\`,
  tooltip: \`${options.tooltip}\`,
  value: \`\`,
  valueType: \`${options.valueType}\`,
  isReady: false,
  validator: ${options.validator}Validator,
};`

  return template
}
