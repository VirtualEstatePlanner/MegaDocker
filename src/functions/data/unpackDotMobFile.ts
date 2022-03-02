/** @format */

//  unpackDotMobFile.ts
//  MEGADocker
//  a function that converts an IMob to an IMegaDockerState
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { initialMegaDockerState } from '../../globals/initialMegaDockerState'
import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { maximizeManikin } from './maximizeManikin'

/**
 * converts a string to an IMegaDockerState object
 */
export const unpackDotMobFile: Function = (savedState: IMob): IMegaDockerState => {
  let newState: IMegaDockerState = { ...initialMegaDockerState }
  // maximize manikins from savedState.selectedManikins
  newState.selectedManikins = savedState.mobManikins.map((manikin: IMiniManikin) => maximizeManikin(manikin))
  return newState
}
