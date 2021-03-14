/** @format */

//  testHeaderMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { miteYamlValidator } from '../../functions/validators/miteYamlValidator'

export const testHeaderMite: Function = (headerString: string) => {
  it('has a valid YAML miteString', () => {
    expect(headerString).toBeDefined()
    expect(headerString).toBeTruthy()
    expect(miteYamlValidator(headerString)).toBeTruthy()
  })
}
