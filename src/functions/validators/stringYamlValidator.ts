/** @format */

//  miteYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YAML from 'yaml'
import fs from 'fs'

export const stringYamlValidator: Function = (stringToValidate: string): boolean => {
  const temporaryFileName: string = `/tmp/string-someString-temporaryFile`
  fs.writeFileSync(temporaryFileName, stringToValidate, { encoding: 'utf8' })
  const isValidated: boolean = YAML.parse(temporaryFileName)
  return isValidated
}