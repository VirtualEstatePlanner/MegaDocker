/** @format */

//  IZipDockerCompose.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IZipDockerCompose } from '../interfaces/IZipDockerCompose'
import { cloudflareAPIToken } from '../mobparts/memories/cloudflareAPIToken'

export const testDcokerComposeZip: Function = (zipToTest: IZipDockerCompose) => {
  it('should have all 3 values', () => {
    expect(zipToTest.memories).toContain(cloudflareAPIToken)
    expect(zipToTest.manikins.length).toStrictEqual(5)
  })
}
