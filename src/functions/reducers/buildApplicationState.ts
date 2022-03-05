/** @format */

//  buildApplicationState.ts
//  MEGADocker
//  a function that builds a new application state from an array of Manikins
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'
import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { getCustomMites } from './getCustomMites'
import { getDNetworkMites } from './getDNetworkMites'
import { getDServiceMites } from './getDServiceMites'
import { getManikins } from './getManikins'
import { getMemories } from './getMemories'
import { getMites } from './getMites'

/**
 * builds a new application state
 * @param manikinArray an array of IManikins that shows the surrent state of the manikinTable
 */
export const buildApplicationState = (manikinArray: IManikin[], theme: Theme): IMegaDockerState => {
    const newManikinTable = getManikins(manikinArray)
    const newMemories = getMemories(newManikinTable)
    const newMites = getMites(newManikinTable)
    const newDServiceMites = getDServiceMites(newMites)
    const newDNetworkMites = getDNetworkMites(newMites)
    const newCustomMites = getCustomMites(newMites)
    const newState: IMegaDockerState = {
        manikinTable: newManikinTable,
        memories: newMemories,
        allMobMites: newMites,
        MEGADockerVersion: currentMegaDockerVersion,
        loadedFile: null,
        mobDServiceMites: newDServiceMites,
        mobDNetworkMites: newDNetworkMites,
        mobCustomMites: newCustomMites,
        selectedManikins: newManikinTable.filter((manikin: IManikin) => manikin.isSelected),
        theme: theme,
        ymlOutput: ``
    }
    return newState
}
