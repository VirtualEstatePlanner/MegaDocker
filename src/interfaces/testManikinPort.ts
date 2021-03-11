/** @format */

//  IManikinPort.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikinPort } from './IManikinPort'

export const testManikinPort: Function = (portToTest: IManikinPort) =>
  it('has all 3 values', () => {
    expect(portToTest.externalPort).toBeDefined()
    expect(portToTest.externalPort).toBeTruthy()
    expect(portToTest.internalPort).toBeDefined()
    expect(portToTest.internalPort).toBeTruthy()
    expect(portToTest.isUDP).toBeDefined()
  })
