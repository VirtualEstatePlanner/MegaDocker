/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IValidator } from '../interfaces/IValidator'

export const testValidator: Function = (testStringArray: string[], validatorToTest: IValidator) => {
  testStringArray.forEach((stringToBeTested: string) => {
    it('should return true', () => {
      expect(validatorToTest.isValidated).toStrictEqual(true)
    })
  })
}
