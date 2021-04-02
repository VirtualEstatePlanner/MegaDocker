/** @format */

//  IMegaDockerState.ts
//  MEGADocker
//  an interface to represent the entire application state
//  Created by George Georgulas IV on 4/15/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { Theme } from '@material-ui/core'
import { IManikin } from '../IManikin'
import { IMemory } from '../IMemory'
import { IMite } from '../IMite'

/**
 * the interface for the Application State
 * @manikinTableContents the menu on the left - {...allManikins}
 * @selectedManikins the user's mob
 * @memoryTableContents the menu on the right - the memories for the mob
 * @allMobMites every mite in the mob (to Array.filter against)
 * @dockerComposeMites every docker compose mite
 * @mobDServiceMites docker-compose service yml mites
 * @mobDNetworkMites docker-compose network yml mites
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
