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
  const spacesDetected: boolean = stringToValidate.includes(` `)
  const tabsDetected: boolean = stringToValidate.includes(`\t`)
  const carriageReturnsDetected: boolean = stringToValidate.includes(`
`)
  const whiteSpaceDetected: boolean = spacesDetected && tabsDetected && carriageReturnsDetected
  const isValidated: boolean = !whiteSpaceDetected
  return isValidated
}
