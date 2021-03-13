/** @format */

//  noWhitespaceValidator.ts
//  MegaDocker
//  a validator function that disallows whitespace
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const noWhitespaceValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const noWhiteSpaceRegex: RegExp = new RegExp(`^[s]*$`)
  const isValidated: boolean = noWhiteSpaceRegex.test(stringToValidate) ? true : false
  return isValidated
}
