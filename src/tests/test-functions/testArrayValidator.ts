/** @format */

//  IValidator.ts
//  MegaDocker
//  a interface for a validator function to validate input in a memory
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

export const testArrayValidator: Function = (
  stringsThatPass: string[],
  validatorToTest: (stringToValidate: string | null | undefined) => boolean,
  stringsThatFail?: string[],
  stringsThatAreEmpty?: (null | undefined)[]
) => {
  stringsThatPass.forEach((passingString) => {
    it('should return true for every valid', () => {
      console.log(`tested ${passingString}`)
      expect(validatorToTest(passingString)).toStrictEqual(true)
    })
  })
  if (stringsThatAreEmpty) {
    stringsThatAreEmpty.forEach((nonexistentString) => {
      console.log(`tested ${nonexistentString}`)
      it('should return false on null or empty string', () => {
        expect(validatorToTest(nonexistentString)).toStrictEqual(false)
      })
    })
  }
  if (stringsThatFail) {
    stringsThatFail.forEach((failingString) => {
      console.log(`tested ${failingString}`)
      it('should return false for invalid strings', () => {
        expect(validatorToTest(failingString)).toStrictEqual(false)
      })
    })
  }
}
