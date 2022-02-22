/** @format */

//  stringYamlValidator.ts
//  MEGADocker
//  A function to check if a mite's miteString is valid yaml
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import YamlValidator from 'yaml-validator'

export const stringYamlValidator: Function = (stringToValidate: string): boolean => {
  class YamlValidatorForTesting extends YamlValidator {
    testValidation: Function = (yamlStrings: string[]): boolean => {
      let validatePassed: boolean = false
      try {
        super.validate(yamlStrings)
        validatePassed = true
      } catch (error) {
        validatePassed = false
      }
      return validatePassed
    }
  }

  const validator: YamlValidatorForTesting = new YamlValidatorForTesting()

  const isValidated = validator.testValidation([stringToValidate])
  return isValidated
}
