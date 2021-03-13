/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testValidator: Function = (stringToBeTested: string, validatorToTest: (stringToValidate: string) => boolean) => {
  it('should be truthy', () => {
    expect(validatorToTest(stringToBeTested)).toBeTruthy()
  })
}
