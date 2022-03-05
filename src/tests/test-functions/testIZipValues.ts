/** @format */

//  testIZipValues.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IZipValues } from '../../interfaces/stateManagement/IZipValues'
import { cloudflareAPIToken } from '../../mobparts/memories/cloudflareAPIToken'

export const testIZipValues: Function = (zipToTest: IZipValues) => {
  describe('tests the docker-compose download button', () => {
    it('should have both values', () => {
      expect(zipToTest.memories).toContain(cloudflareAPIToken)
      expect(zipToTest.manikins.length).toStrictEqual(5)
    })
  })
}
