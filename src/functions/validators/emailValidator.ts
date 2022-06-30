/** @format */

//  emailValidator.ts
//  MEGADocker
//  a validator function for email addresses

//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

export const emailValidator: (stringToValidate: string) => boolean = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length === 0) {
    return false
  }
  const emailRegex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')
  const isValidated: boolean = emailRegex.test(stringToValidate) ? true : false
  return isValidated
}
