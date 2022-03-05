/** @format */

//  packDotMobFile.ts
//  MEGADocker
//  a function that converts an IMegaDockerState to an IMob
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { mobName } from '../../mobparts/memories/mobName'
import { minimizeManikin } from './minimizeManikin'
import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { createThemeString } from '../utility/createThemeString'

/**
 * creates an IMob of the current IMegaDockerState
 * @param state an IMegaDockerState
 * @returns an IMob
 */
export const packDotMobFile: Function = (state: IMegaDockerState): IMob => {
  const minimizedManikins: IMiniManikin[] = []

  state.selectedManikins.forEach((manikin: IManikin): void => {
    minimizedManikins.push(minimizeManikin(manikin))
  })

  return {
    mobManikins: minimizedManikins,
    mobName: `${state.memories[state.memories.indexOf(mobName)].memoryValue}`,
    mobVersion: state.MEGADockerVersion,
    theme: createThemeString(state.theme)
  }
}
