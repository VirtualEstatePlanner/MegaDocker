/** @format */

//  IMegaDockerAction.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MegaContext } from '../../components/MegaContext'
import { IApplicationStartAction } from '../../interfaces/actionInterfaces/IApplicationStartAction'
import { IOutputDockerSwarmBrowserAction } from '../../interfaces/actionInterfaces/IOutputDockerSwarmBrowserAction'
import { IOutputDockerSwarmTauriAction } from '../../interfaces/actionInterfaces/IOutputDockerSwarmTauriAction'
import { ISaveMobAction } from '../../interfaces/actionInterfaces/ISaveMobAction'
import { IOpenMobAction } from '../../interfaces/actionInterfaces/IOpenMobAction'
import { IToggleManikinAction } from '../../interfaces/actionInterfaces/IToggleManikinAction'
import { IUpdateMemoryValueAction } from '../../interfaces/actionInterfaces/IUpdateMemoryValueAction'

export const testMegaDockerAction = () => describe('tests each possible MegaDockerAction', () => {
    it(`has a Consumer and a Provider`, () => {
        expect(MegaContext.Consumer).toBeDefined()
        expect(MegaContext.Provider).toBeDefined()
    })
})
