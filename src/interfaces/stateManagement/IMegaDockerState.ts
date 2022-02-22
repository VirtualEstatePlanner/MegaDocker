/** @format */

//  IMegaDockerState.ts
//  MEGADocker
//  an interface to represent the entire application state
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'
import { IManikin } from '../objectInterfaces/IManikin'
import { IMemory } from '../objectInterfaces/IMemory'
import { IMite } from '../objectInterfaces/IMite'

/**
 * the interface for the Application State
 * @manikinTable the menu on the left - {...workingManikins}
 * @selectedManikins the manikins selected in the user's mob
 * @memories the menu on the right - the memories for the mob
 * @allMobMites every mite in the mob (to Array.filter against)
 * @mobDServiceMites docker swarm service yml mites
 * @mobDNetworkMites docker swarm network yml mites
 * @mobCustomMites an array of arrays of non-yml mites
 */
export interface IMegaDockerState {
  theme: Theme
  manikinTable: IManikin[]
  selectedManikins: IManikin[]
  memories: IMemory[]
  allMobMites: IMite[]
  mobDServiceMites: IMite[]
  mobDNetworkMites: IMite[]
  mobCustomMites: IMite[][]
  ymlOutput: string
}
