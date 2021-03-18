/** @format */

//  IValidator.ts
//  MEGADocker
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
    describe('tests an array of strings for validity', () => {
      it('should return true for every valid string', () => {
        expect(validatorToTest(passingString)).toStrictEqual(true)
      })
    })
    if (stringsThatAreEmpty) {
      stringsThatAreEmpty.forEach((nonexistentString) => {
        it('should return false on null or empty string', () => {
          expect(validatorToTest(nonexistentString)).toStrictEqual(false)
        })
      })
    }
    if (stringsThatFail) {
      stringsThatFail.forEach((failingString) => {
        it('should return false for invalid strings', () => {
          expect(validatorToTest(failingString)).toStrictEqual(false)
        })
      })
    }
  })
}
