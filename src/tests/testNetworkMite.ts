/** @format */

//  testNetworkMite.ts
//  MegaDocker
//  an automated test to be called by testing networkMites
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMite } from '../interfaces/IMite'

export const testNetworkMite: Function = (miteToTest: IMite) => {
  it('has correct type', () => {
    expect(miteToTest.type).toStrictEqual(`DockerSwarmNetwork`)
  })
  it('contains all of the neccessary strings', () => {
    expect(miteToTest.miteString).toContain(`

# Begin`)
    expect(miteToTest.miteString).toContain(`:
  driver: overlay

# End `)
    expect(miteToTest.miteString).toContain(` Network Section

`)
    expect(miteToTest.miteString).toContain(` Network Section

`)
  })
  it('has an index in the appropriate range', () => {
    expect(miteToTest.miteIndex).toBeGreaterThanOrEqual(40000)
    expect(miteToTest.miteIndex).toBeLessThanOrEqual(49999)
  })
}
