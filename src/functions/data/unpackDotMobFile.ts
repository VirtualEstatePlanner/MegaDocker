/** @format */

//  unpackDotMobFile.ts
//  MEGADocker
//  a function that converts an IMob to an IMegaDockerState
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { OrbThemeLight } from '../../components/OrbTheme/OrbThemeLight'
import { currentMegaDockerVersion } from '../../globals/currentMegaDockerVersion'
import { initialMegaDockerState } from '../../globals/initialMegaDockerState'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { mobName } from '../../mobparts/memories/mobName'
import { getCustomMites } from '../reducers/getCustomMites'
import { getDNetworkMites } from '../reducers/getDNetworkMites'
import { getDServiceMites } from '../reducers/getDServiceMites'
import { getMites } from '../reducers/getMites'
import { maximizeManikin } from './maximizeManikin'

/**
 * converts a string to an IMegaDockerState object
 */
export const unpackDotMobFile: Function = (savedMob: IMob): IMegaDockerState => {
  const manikinsToUnpack: IManikin[] = savedMob.mobManikins.map((manikin: IMiniManikin) => maximizeManikin(manikin))
  const memoriesToUnpack: IMemory[] = manikinsToUnpack.flatMap((manikin: IManikin) => manikin.memories)
  console.log(memoriesToUnpack)

  let newState: IMegaDockerState = { ...initialMegaDockerState }
  // maximize manikins from savedState.selectedManikins
  newState.selectedManikins = manikinsToUnpack
  newState.allMobMites = getMites(manikinsToUnpack)
  newState.memories = memoriesToUnpack
  newState.memories[newState.memories.indexOf(mobName)].memoryValue = savedMob.mobName
  newState.mobDServiceMites = getDServiceMites(newState.allMobMites)
  newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites)
  newState.mobCustomMites = getCustomMites(newState.allMobMites)
  newState.MEGADockerVersion = currentMegaDockerVersion
  newState.loadedFile = null
  newState.ymlOutput = ``
  newState.theme = OrbThemeLight
  return newState
}
