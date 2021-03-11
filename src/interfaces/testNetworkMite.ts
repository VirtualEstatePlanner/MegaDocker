/** @format */

//  testNetworkMite.ts
//  MegaDocker
//  an automated test to be called by testing networkMites
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite'

export const testNetworkMite: Function = (miteToTest: IMite) =>
  it('matches 4 template strings, has correct type, is in index range', () => {
    expect(miteToTest.type).toStrictEqual(`DockerSwarmNetwork`)
    expect(miteToTest.miteString).toContain(`

# Begin`)
    expect(miteToTest.miteString).toContain(`:
  driver: overlay

# End `)
    expect(miteToTest.miteString).toContain(` Network Section

`)
    expect(miteToTest.miteString).toContain(` Network Section

`)
    expect(miteToTest.miteIndex).toBeGreaterThanOrEqual(40000)
    expect(miteToTest.miteIndex).toBeLessThanOrEqual(49999)
  })
