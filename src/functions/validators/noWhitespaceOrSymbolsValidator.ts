/** @format */

//  noWhitespaceOrSymbolsValidator.ts
//  MEGADocker
//  a validator function that disallows whitespace and symbols
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { noWhitespaceValidator } from './noWhitespaceValidator'

export const noWhitespaceOrSymbolsValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const hasNoWhitespace: boolean = noWhitespaceValidator(stringToValidate)
  const noWhiteSpaceOrSymbolsRegex: RegExp = new RegExp(`^[sa-zA-Z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceOrSymbolsRegex.test(stringToValidate) ? true : false
  const nameLengthRequirements: boolean = stringToValidate.length < 21 && stringToValidate.length > 4
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements && hasNoWhitespace
  return isValidated
}
