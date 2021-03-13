/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testValidator: Function = (stringsThatShouldPass: string[], stringsThatShouldFail: string[], validatorToTest: (stringToValidate: string) => boolean) => {
  it('should be truthy', () => {
    stringsThatShouldPass.forEach((passingString) => {
      expect(validatorToTest(passingString)).toBeTruthy()
    })
    stringsThatShouldFail.forEach((failingString) => {
      expect(validatorToTest(failingString)).toBeFalsy()
    })
  })
}
