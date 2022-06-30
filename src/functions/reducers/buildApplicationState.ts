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
import { IThemeString } from '../../interfaces/templateLiteralUnionTypes/IThemeString'

/**
 * builds a new application state
 * @param savedManikins an array of IManikins that shows the surrent state of the manikinTable
 * @param theme a IThemeString that represents the current theme
 * @returns an IMegaDockerState
 */
export const buildApplicationState = (savedManikins: IManikin[], theme: IThemeString): IMegaDockerState => {
  // find each manikin in the workingManikins array that matches a manikin in savedManikins and replace it
  const populateManikins: Function = (): IManikin[] => {
    const populatedManikins: IManikin[] = [...workingManikins]
    // if the manikinName traits match, add the savedManikin to the populatedManikins array and remove the manikin it matched
    populatedManikins.forEach((stockManikin: IManikin): void => {
      savedManikins.forEach((savedManikin: IManikin): void => {
        if (stockManikin.manikinName === savedManikin.manikinName) {
          // remove the stockManikin from the populatedManikins array and replace it with the savedManikin at the same index
          populatedManikins.splice(populatedManikins.indexOf(stockManikin), 1, savedManikin)
        }
      })
    })
    // filter core manikins from the populatedManikins array into another array
    const coreManikins: IManikin[] = populatedManikins.filter((manikin: IManikin): boolean => manikin.isCore)
    // sort coreManikins by manikinIndex
    coreManikins.sort((a: IManikin, b: IManikin): number => a.manikinIndex - b.manikinIndex)
    // filter non-core manikins from the populatedManikins array into another array
    const nonCoreManikins: IManikin[] = populatedManikins.filter((manikin: IManikin): boolean => !manikin.isCore)
    // sort nonCoreManikins by manikinIndex
    nonCoreManikins.sort((a: IManikin, b: IManikin): number => a.manikinIndex - b.manikinIndex)
    // return the populatedManikins array with the coreManikins array at the beginning and the nonCoreManikins array at the end
    return [...coreManikins, ...nonCoreManikins]
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
  return {
    manikinTable: populateManikins(),
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
}
