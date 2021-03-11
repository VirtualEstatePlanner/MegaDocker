/** @format */

//  testMob.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { workingManikins } from '../globals/workingManikins'
import { IMob } from './IMob'

export const testMob: Function = (mobToTest: IMob) => {
  it('should have all 3 values', () => {
    expect(mobToTest.mobName).toStrictEqual(`someMobName`)
    expect(mobToTest.mobManikins.length).toBeGreaterThanOrEqual(5)
    expect(mobToTest.mobManikins.length).toBeLessThanOrEqual(workingManikins.length)
    expect(mobToTest.mobMemories.length).toBeGreaterThan(0)
  })
}
