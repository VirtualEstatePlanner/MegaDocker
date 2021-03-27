/** @format */

//  noValidator.ts
//  MEGADocker
//  a dummy validator function that allows anything
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

export const noValidator: Function = (stringToValidate: string): boolean => {
  if (!stringToValidate || stringToValidate.length === 0) {
    return false
  }
  //TODO: replace all instances of this validator function with a real one
  return true
}
