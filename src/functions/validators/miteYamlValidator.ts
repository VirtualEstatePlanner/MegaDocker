/** @format */

//  miteYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import yaml from 'js-yaml'
import fs from 'fs'
import { IMite } from '../../interfaces/IMite'

export const miteYamlValidator: Function = (miteToValidate: IMite): boolean => {
  const temporaryFileName: string = `/tmp/${miteToValidate.miteIndex}YamlTestTempfile`
  console.log(miteToValidate.miteString)
  let isValidated: boolean = false
  if (!miteToValidate.miteString || miteToValidate.miteString.length === 0) {
    return isValidated
  } else {
    fs.writeFileSync(temporaryFileName, miteToValidate.miteString, { encoding: 'utf8' })
    const validator = yaml.load(miteToValidate.miteString)
    console.log(validator)
    //  console.log(fileIsValidated)
    //  fs.unlinkSync(temporaryFileName)
    //  isValidated = fileIsValidated
  }
  return isValidated
}
