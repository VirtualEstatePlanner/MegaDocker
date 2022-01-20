/** @format */

//  IMegaDockerState.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'

import { OrbThemeLight } from '../../components/OrbTheme/OrbThemeLight'
 
export const testMegaDockerState = (stateToTest: IMegaDockerState) => describe(`tests each possible MegaDockerState property`, () => {
    it(`has every property described in the interface`, () => {
        expect(stateToTest.theme).toEqual(OrbThemeLight)
        expect(stateToTest.manikinTable.length).toBeGreaterThan(0)
        expect(stateToTest.selectedManikins.length).toBeGreaterThan(0)
        expect(stateToTest.memories.length).toBeGreaterThan(0)
        expect(stateToTest.allMobMites.length).toBeGreaterThan(0)
        expect(stateToTest.ymlOutput).toBe(``)
    })
})
