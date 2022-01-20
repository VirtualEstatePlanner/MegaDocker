/** @format */

//  IMegaDockerState.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { initialMegaDockerState } from '../../globals/initialMegaDockerState'

export const testMegaDockerState = () => describe(`tests each possible MegaDockerState property`, () => {
    it(`has every property described in the interface`, () => {
        expect(initialMegaDockerState.theme).toBeDefined()
        expect(initialMegaDockerState.manikinTable).toBeDefined()
        expect(initialMegaDockerState.selectedManikins).toBeDefined()
        expect(initialMegaDockerState.memories).toBeDefined()
        expect(initialMegaDockerState.allMobMites).toBeDefined()
        expect(initialMegaDockerState.ymlOutput).toBe(``)
    })
})
