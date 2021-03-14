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
  let isValidated: boolean = false
  if (!miteToValidate || !miteToValidate.miteString || miteToValidate.miteString.length === 0) {
    return isValidated
  } else {
    const temporaryYamlFileName: string = `/tmp/YamlValidator/mite-${miteToValidate.miteIndex}-Testfile.yml`
    const logfileName: string = `/tmp/YamlValidator/mite-${miteToValidate.miteIndex}.YamlValidationLog`
    const temporaryJsonFileName: string = `/tmp/YamlValidator/mite-${miteToValidate.miteIndex}-Testfile.json`
    if (!fs.existsSync(`/tmp/YamlValidator`)) {
      fs.mkdirSync(`/tmp/YamlValidator`)
    }
    if (fs.existsSync(logfileName)) {
      fs.unlinkSync(logfileName)
    }
    if (fs.existsSync(temporaryJsonFileName)) {
      fs.unlinkSync(temporaryJsonFileName)
    }
    if (fs.existsSync(temporaryYamlFileName)) {
      fs.unlinkSync(temporaryYamlFileName)
    }
    fs.writeFileSync(temporaryYamlFileName, miteToValidate.miteString, { encoding: 'utf8' })

    const YamlValidatorFilesToCheck: string[] = [temporaryYamlFileName]
    //    const outputYamlFileName: string = `/tmp/YamlValidator/mite-${miteToValidate.miteIndex}-Validated.yml`

    const YamlValidatorOptions: YamlValidator.IYamlValidatorOptions = {
      log: logfileName,
      structure: false,
      onWarning: (): void => {
        fs.writeFileSync(`/tmp/YamlValidator/mite-${miteToValidate.miteIndex}.YamlValidationLog`, `warning`, { encoding: 'utf8' })
      },
      writeJson: true,
    }

    const validator: YamlValidator = new YamlValidator(YamlValidatorOptions)
    validator.validate(YamlValidatorFilesToCheck)
    isValidated = !fs.existsSync(logfileName)
  }
  return isValidated
}
