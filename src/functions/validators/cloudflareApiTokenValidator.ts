/** @format */

//  cloudflareApiTokenValidator.ts
//  MegaDocker
//  a validator function for Cloudflare API tokens
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const cloudflareApiTokenValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  if (stringToValidate.length == 0) {
    return false
  }
  const isExactlyFortyCharacters: boolean = stringToValidate.length === 40
  const isAlphanumericRegex: RegExp = new RegExp(`[a-zA-Z0-9_-]`)
  const containsOnlyAlphanumerics: boolean = isAlphanumericRegex.test(stringToValidate!) ? true : false
  const isValidated: boolean = containsOnlyAlphanumerics && isExactlyFortyCharacters
  return isValidated
}
