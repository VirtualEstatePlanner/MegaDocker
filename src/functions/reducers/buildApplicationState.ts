/** @format */

//  buildApplicationState.ts
//  MEGADocker
//  a function that builds a new application state from an array of Manikins
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { getCustomMites } from './getCustomMites'
import { getDNetworkMites } from './getDNetworkMites'
import { getDServiceMites } from './getDServiceMites'
import { getManikins } from './getManikins'
import { getMemories } from './getMemories'
import { getMites } from './getMites'
import { workingManikins } from '../../globals/workingManikins'
import { Theme } from '@mui/material'
import { OrbThemeLight } from '../../components/OrbTheme/OrbThemeLight'
import { OrbThemeDark } from '../../components/OrbTheme/OrbThemeDark'

/**
 * builds a new application state
 * @param savedManikins an array of IManikins that shows the surrent state of the manikinTable
 * @param theme a string either `light` or `dark`
 * @returns an IMegaDockerState
 */
export const buildApplicationState = (savedManikins: IManikin[], theme: `light` | `dark`): IMegaDockerState => {
  // find each manikin in the workingManikins array that matches a manikin in savedManikins and replace it
  const populateManikins: Function = (): IManikin[] => {
    let populatedManikins: IManikin[] = [...workingManikins]
    // if the manikinName traits match, add the savedManikin to the populatedManikins array and remove the manikin it matched
    populatedManikins.forEach((stockManikin: IManikin): void => {
      savedManikins.forEach((savedManikin: IManikin): void => {
        if (stockManikin.manikinName === savedManikin.manikinName) {
          // remove the stockManikin from the populatedManikins array and replace it with the savedManikin at the same index
          populatedManikins.splice(populatedManikins.indexOf(stockManikin), 1, savedManikin)
        }
      })
    })
    return populatedManikins
  }

  const unpackTheme: Function = (): Theme => {
    if (theme === `dark`) {
      return OrbThemeDark
    } else {
      return OrbThemeLight
    }
  }

  const newManikinTable = getManikins(populateManikins())
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
    theme: unpackTheme(),
    ymlOutput: ``
  }
  return newState
}
