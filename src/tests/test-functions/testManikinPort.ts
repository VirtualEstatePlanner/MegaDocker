/** @format */

//  IManikinPort.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikinPort } from '../../interfaces/IManikinPort'

export const testManikinPort: Function = (portToTest: IManikinPort) => {
  describe('tests a manikin port for validity', () => {
    it('has an external port within range 0-65535', () => {
      expect(portToTest.externalPort).toBeGreaterThanOrEqual(0)
      expect(portToTest.externalPort).toBeLessThanOrEqual(65536)
    })
    it('has an internal port within range 0-65535', () => {
      expect(portToTest.internalPort).toBeGreaterThanOrEqual(0)
      expect(portToTest.internalPort).toBeLessThanOrEqual(65536)
    })
    it('uses the same port internally and externally', () => {
      expect(portToTest.internalPort).toStrictEqual(portToTest.externalPort)
    })
    it('has a UDP value', () => {
      expect(portToTest.isUDP).toBeDefined()
    })
  })
}
