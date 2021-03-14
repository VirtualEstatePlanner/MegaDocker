/** @format */

//  miteYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YamlValidator from 'yaml-validator'
import fs from 'fs'
import { IMite } from '../../interfaces/IMite'

export const miteYamlValidator: Function = (miteToValidate: IMite): boolean => {
  if (!miteToValidate || !miteToValidate.miteString || miteToValidate.miteString.length === 0) {
    return false
  } else {
    const temporaryYamlFileName: string = `/tmp/YamlValidator/mite-${miteToValidate.miteIndex}-Testfile.yml`
    if (!fs.existsSync(`/tmp/YamlValidator`)) {
      fs.mkdirSync(`/tmp/YamlValidator`)
    }
    if (fs.existsSync(temporaryYamlFileName)) {
      fs.unlinkSync(temporaryYamlFileName)
    }
    fs.writeFileSync(temporaryYamlFileName, miteToValidate.miteString, { encoding: 'utf8' })

    class YamlValidatorWithErrors extends YamlValidator {
      validateAndReturnBoolean: Function = (files: string[]): boolean => {
        let didValidate: boolean | undefined = undefined
        try {
          super.validate(files)
        } catch (error) {
          didValidate = false
        }
        return didValidate || true
      }
    }
    const validator: YamlValidatorWithErrors = new YamlValidatorWithErrors()

    const isValidated = validator.validateAndReturnBoolean([temporaryYamlFileName])
    return isValidated
  }
}
