/** @format */

//  miteYamlValidator.ts
//  MegaDocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YamlValidator from 'yaml-validator'
import fs from 'fs'

export const stringYamlValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length === 0) {
    return false
  } else {
    const temporaryYamlFileName: string = `/tmp/YamlValidator/mite-somestring-Testfile.yml`
    if (!fs.existsSync(`/tmp/YamlValidator`)) {
      fs.mkdirSync(`/tmp/YamlValidator`)
    }
    if (fs.existsSync(temporaryYamlFileName)) {
      fs.unlinkSync(temporaryYamlFileName)
    }
    fs.writeFileSync(temporaryYamlFileName, stringToValidate, { encoding: 'utf8' })

    class YamlValidatorWithErrors extends YamlValidator {
      validateAndReturnBoolean: Function = (files: string[]): boolean => {
        let validatePassed: boolean
        try {
          super.validate(files)
          validatePassed = true
        } catch (error) {
          validatePassed = false
        }
        return validatePassed
      }
    }
    const validator: YamlValidatorWithErrors = new YamlValidatorWithErrors()

    const isValidated = validator.validateAndReturnBoolean([temporaryYamlFileName])
    return isValidated
  }
}
