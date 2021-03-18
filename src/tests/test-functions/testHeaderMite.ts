/** @format */

//  testHeaderMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { stringYamlValidator } from '../../functions/validators/stringYamlValidator'
import { IHeaderMite } from '../../interfaces/IHeaderMite'

export const testHeaderMite: Function = (headerMiteToTest: IHeaderMite) => {
  const lastFourDigitsOfMiteIndex: boolean = headerMiteToTest.miteIndex.toString().endsWith(`9999`)
  describe('tests a header mite for validity', () => {
    it('has an index in the appropriate range', () => {
      expect(lastFourDigitsOfMiteIndex).toStrictEqual(true)
    })
    it('has the correct type', () => {
      expect(headerMiteToTest.type).toStrictEqual(`DockerSwarmHeader`)
    })
    it('has a valid YAML miteString', () => {
      expect(stringYamlValidator(headerMiteToTest.miteString)).toStrictEqual(true)
    })
  })
}
