/** @format */

//  noWhitespaceValidator.ts
//  MEGADocker
//  a validator function that disallows whitespace
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

export const noWhitespaceValidator: (stringToValidate: string) => boolean = (stringToValidate: string): boolean => {
  if (!stringToValidate) {
    return false
  }
  const spacesDetected: boolean = stringToValidate.includes(`\u0020`)
  const tabsDetected: boolean = stringToValidate.includes(`\u0009`)
  const lineFeedsDetected: boolean = stringToValidate.includes(`\u000A`)
  const formFeedsDetected: boolean = stringToValidate.includes(`\u000C`)
  if (spacesDetected) {
    return false
  }
  if (tabsDetected) {
    return false
  }
  if (lineFeedsDetected) {
    return false
  }
  if (formFeedsDetected) {
    return false
  }
  const whiteSpaceDetected: boolean = spacesDetected || tabsDetected || lineFeedsDetected || formFeedsDetected
  const isValidated = !whiteSpaceDetected
  return isValidated
}
