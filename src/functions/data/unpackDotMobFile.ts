/** @format */

//  unpackDotMobFile.ts
//  MEGADocker
//  a function that converts an IMob to an IMegaDockerState
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMiniManikin } from '../../interfaces/objectInterfaces/IMiniManikin'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { buildApplicationState } from '../reducers/buildApplicationState'
import { maximizeManikin } from './maximizeManikin'

/**
 * converts an IMob to an IMegaDockerState
 * @param savedMob an IMob
 * @returns an IMegaDockerState
 */
export const unpackDotMobFile: Function = (savedMob: IMob): IMegaDockerState =>
  buildApplicationState(
    savedMob.mobManikins.map((manikin: IMiniManikin) => maximizeManikin(manikin)),
    savedMob.theme
  )
