/** @format */

//  stringYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YAML from 'yaml'
import fs from 'fs'

const temporaryFileName: string = `/tmp/${new Date()}YamlTestTempfile`
export const stringYamlValidator: Function = (stringToValidate: string): boolean => {
  let isValidated: boolean = false
  if (!stringToValidate || stringToValidate.length === 0) {
    return isValidated
  } else {
    fs.writeFileSync(temporaryFileName, stringToValidate, { encoding: 'utf8' })
    const fileIsValidated: boolean = YAML.parse(temporaryFileName)
    fs.unlinkSync(temporaryFileName)
    isValidated = fileIsValidated
    console.log(isValidated)
  }
  return isValidated
}
