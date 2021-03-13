/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testValidator: Function = (stringsThatPass: string[], stringsThatFail: string[], validatorToTest: (stringToValidate: string) => boolean) => {
  it('should be true', () => {
    stringsThatPass.forEach((passingString) => {
      expect(validatorToTest(passingString)).toStrictEqual(true)
    })
  })
  it('should be false', () => {
    stringsThatFail.forEach((failingString) => {
      expect(validatorToTest(failingString)).toStrictEqual(false)
    })
  })
}
