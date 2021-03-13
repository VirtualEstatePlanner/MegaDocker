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
  const spacesDetected: boolean = stringToValidate.includes(`\u0020`)
  const tabsDetected: boolean = stringToValidate.includes(`\u0009`)
  const lineFeedsDetected: boolean = stringToValidate.includes(`\u000A`)
  const formFeedsDetected: boolean = stringToValidate.includes(`\u000C`)
  if (spacesDetected) {
    console.log(`contains spaces`)
    return false
  }
  if (tabsDetected) {
    console.log(`contains tabs`)
    return false
  }
  if (lineFeedsDetected) {
    console.log(`contains line feeds`)
    return false
  }
  if (formFeedsDetected) {
    console.log(`contains form feeds`)
    return false
  }
  const whiteSpaceDetected: boolean = spacesDetected || tabsDetected || lineFeedsDetected || formFeedsDetected
  const isValidated: boolean = !whiteSpaceDetected
  return isValidated
}
