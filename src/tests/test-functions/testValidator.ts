/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testValidator: Function = (stringsThatPass: string[], validatorToTest: (stringToValidate: string | null) => boolean, stringsThatFail?: string[]) => {
  it('should return false on null or empty string', () => {
    expect(validatorToTest(``)).toStrictEqual(false)
    expect(validatorToTest(null)).toStrictEqual(false)
  })
  it('should return true for valid strings', () => {
    stringsThatPass.forEach((passingString) => {
      expect(validatorToTest(passingString)).toStrictEqual(true)
    })
  })
  if (stringsThatFail) {
    it('should return false for invalid strings', () => {
      stringsThatFail.forEach((failingString) => {
        expect(validatorToTest(failingString)).toStrictEqual(false)
      })
    })
  }
}
