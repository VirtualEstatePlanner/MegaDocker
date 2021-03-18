/** @format */

//  mobnameValidator.ts
//  MEGADocker
//  a validator function that disallows whitespace, symbols, and lengths greath than 20
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const mobnameValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length === 0) {
    return false
  }
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[sa-z0-9]*$`)
  const hasNoWhiteSpaceOrSymbols: boolean = noWhiteSpaceRegex.test(stringToValidate) ? true : false
  const nameLengthRequirements: boolean = stringToValidate.length < 20 && stringToValidate.length > 4
  const isValidated: boolean = hasNoWhiteSpaceOrSymbols && nameLengthRequirements
  return isValidated
}
