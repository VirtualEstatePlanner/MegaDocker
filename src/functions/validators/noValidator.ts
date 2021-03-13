/** @format */

//  noValidator.ts
//  MegaDocker
//  a dummy validator function that allows anything
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export const noValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length === 0) {
    return false
  }
  console.log(`noValidator.ts: this validator function is only for use in development`)
  console.log(`noValidator.ts: ${stringToValidate} automatically returned true`)
  console.log(`noValidator.ts: please use a real validator function`)
  return true
}
