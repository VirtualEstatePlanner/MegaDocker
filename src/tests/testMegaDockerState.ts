/** @format */

//  IMegaDockerState.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../interfaces/IManikin'
import { IMemory } from '../interfaces/IMemory'
import { IMite } from '../interfaces/IMite'

/**
 * the interface for the Application State
 * @manikinTableContents the menu on the left - {...allManikins}
 * @selectedManikins the user's mob
 * @memoryTableContents the menu on the right - the memories for the mob
 * @allMobMites every mite in the mob (to Array.filter against)
 * @dockerComposeMites every docker compose mite
 * @kubernetesMites every kubernetes mite
 * @mobDServiceMites docker-compose service yml mites
 * @mobDNetworkMites docker-compose network yml mites
 * @mobKServiceMites docker-compose service yml mites
 * @mobKNetworkMites docker-compose network yml mites
 * @mobCustomMites an array of arrays of non-yml mites
 * @infoContent
 */
export interface IMegaDockerState {
  manikinTable: IManikin[]
  selectedManikins: IManikin[]
  memories: IMemory[]
  allMobMites: IMite[]
  mobDServiceMites: IMite[]
  mobDNetworkMites: IMite[]
  mobKServiceMites: IMite[]
  mobKNetworkMites: IMite[]
  mobCustomMites: IMite[][]
  infoContent: string
  ymlOutput: string
}
