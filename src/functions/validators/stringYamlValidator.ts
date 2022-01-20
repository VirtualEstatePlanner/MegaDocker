/** @format */

//  stringYamlValidator.ts
//  MEGADocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import YamlValidator from 'yaml-validator'
import fs from 'fs'

export const stringYamlValidator: Function = (stringToValidate: string): boolean => {
  const temporaryYamlFileName: string = `/tmp/YamlValidator/mite-somestring-Testfile.yml`
  if (!fs.existsSync(`/tmp/YamlValidator`)) {
    fs.mkdirSync(`/tmp/YamlValidator`)
  }
  fs.writeFileSync(temporaryYamlFileName, stringToValidate, { encoding: 'utf8' })

  class YamlValidatorForTesting extends YamlValidator {
    testValidation: Function = (files: string[]): boolean => {
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
  const validator: YamlValidatorForTesting = new YamlValidatorForTesting()

  const isValidated = validator.testValidation([temporaryYamlFileName])
  return isValidated
}
