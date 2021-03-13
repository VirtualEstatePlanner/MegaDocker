/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testValidator: Function = (stringsThatPass: string[], validatorToTest: (stringToValidate: string) => boolean, stringsThatFail?: string[]) => {
  it('should be true', () => {
    stringsThatPass.forEach((passingString) => {
      expect(validatorToTest(passingString)).toStrictEqual(true)
    })
  })
  it('should return false on null', () => {
    expect(validatorToTest(null!)).toStrictEqual(false)
  })
  if (stringsThatFail) {
    it('should be false', () => {
      stringsThatFail.forEach((failingString) => {
        expect(validatorToTest(failingString)).toStrictEqual(false)
      })
    })
  }
}
