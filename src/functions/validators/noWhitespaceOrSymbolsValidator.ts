/** @format */

//  noWhitespaceOrSymbolsValidator.ts
//  MegaDocker
//  a validator function that disallows whitespace and symbols
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const noWhitespaceOrSymbolsValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[sa-zA-Z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceRegex.test(stringToValidate) ? true : false
  const nameLengthRequirements: boolean = stringToValidate.length < 20
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements
  return isValidated
}
