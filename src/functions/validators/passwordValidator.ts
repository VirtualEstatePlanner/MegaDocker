/** @format */

//  passwordValidator.ts
//  MegaDocker
//  a validator function for passwords
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const passwordValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length == 0) {
    return false
  }
  const passwordRegex: RegExp = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})')
  const passesRegex: boolean = passwordRegex.test(stringToValidate) ? true : false
  const isAtLeast8Characters: boolean = stringToValidate.length > 7
  const isValidated: boolean = passesRegex && isAtLeast8Characters
  return isValidated
}
