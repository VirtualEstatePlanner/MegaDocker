#!/usr/bin/env ts-node-script
/** @format */

import * as fs from 'fs'
import readline from 'readline'

interface INetworkMiteInput {
  displayName: string
  fileName: string
  description: string
}

let runtimeNetworkMiteAnswers: INetworkMiteInput = {
  description: ``,
  fileName: ``,
  displayName: ``,
}

const getNetworkMiteData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const makeNetworkMiteFileString: Function = (options: INetworkMiteInput): string => {
  const date: Date = new Date()
  const shortDate = date.toLocaleString().split(',')[0]
  const year: number = date.getFullYear()
  const template: string = `/** @format */

//  ${options.fileName}.ts
//  MEGADocker
//  ${options.description}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.
  
import { IMite } from '../../interfaces/IMite'

export const ${options.fileName}NetworkMite: IMite = {
  type: \`DockerSwarmNetwork\`,
  miteIndex: 99999,
  miteString: \`

# Begin ${options.displayName} Network Section

 ${options.displayName.toLowerCase()}:
  driver: overlay

# End ${options.displayName} Network Section

\`}`

  return template
}

getNetworkMiteData.question(`What is the name of this application: `, function (displayName: string) {
  runtimeNetworkMiteAnswers.displayName = displayName
  getNetworkMiteData.question(`What will the file name for it be (camelCase): `, function (fileName: string) {
    runtimeNetworkMiteAnswers.fileName = fileName
    getNetworkMiteData.question(`a short description of what this service does: `, function (description: string) {
      runtimeNetworkMiteAnswers.description = description
      getNetworkMiteData.close()

      const outputNewManikinString: string = makeNetworkMiteFileString(runtimeNetworkMiteAnswers)

      fs.writeFileSync(`src/mobparts/mites/network/${runtimeNetworkMiteAnswers.fileName}.ts`, outputNewManikinString)
    })
  })
})
