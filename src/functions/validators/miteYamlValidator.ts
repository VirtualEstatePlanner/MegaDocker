/** @format */

//  miteYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YAML from 'yaml'
import { IMite } from '../../interfaces/IMite'
import fs from 'fs'

export const miteYamlValidator: Function = (miteToValidate: IMite): boolean => {
  const temporaryFileName: string = `/tmp/mite-${miteToValidate.miteIndex}-temporaryFile`
  fs.writeFileSync(temporaryFileName, miteToValidate.miteString, { encoding: 'utf8' })
  const tempFileExists: boolean = fs.existsSync(temporaryFileName)
  console.log(`does file exist: ${tempFileExists}`)

  const temporaryFileData: string = fs.readFileSync(temporaryFileName, { encoding: 'utf8', flag: 'r' })
  const isValidated: boolean = YAML.parse(temporaryFileName)
  console.log(`data in temporary file being parsed: `)
  console.log(``)
  console.log(temporaryFileData)
  console.log(``)
  //  fs.unlinkSync(temporaryFileName)
  return isValidated
}
