/** @format */

//  testHeaderMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { miteYamlValidator } from '../../functions/validators/miteYamlValidator'
import { IHeaderMite } from '../../interfaces/IHeaderMite'

export const testHeaderMite: Function = (headerMiteToTest: IHeaderMite) => {
  const lastFourDigitsOfMiteIndex: boolean = headerMiteToTest.miteIndex.toString().endsWith(`9999`)
  it('has an index in the appropriate range', () => {
    expect(lastFourDigitsOfMiteIndex).toStrictEqual(true)
  })
  it('has the correct type', () => {
    expect(headerMiteToTest.type).toStrictEqual(`DockerSwarmHeader`)
  })
  it('has a valid YAML miteString', () => {
    expect(miteYamlValidator(headerMiteToTest)).toStrictEqual(true)
  })
}
