/** @format */

//  IManikinPort.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikinPort } from './IManikinPort'

export const testManikinPort: Function = (portToTest: IManikinPort) =>
  it('has all 3 values', () => {
    expect(portToTest.externalPort).toBeGreaterThanOrEqual(0)
    expect(portToTest.externalPort).toBeLessThanOrEqual(65536)
    expect(portToTest.internalPort).toBeGreaterThanOrEqual(0)
    expect(portToTest.internalPort).toBeLessThanOrEqual(65536)
    expect(portToTest.isUDP).toBeDefined()
  })
