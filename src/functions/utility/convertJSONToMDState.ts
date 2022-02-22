/** @format */

//  convertStringToMDState.ts
//  MEGADocker
//  a function that uploads a file from the local file system to the web application
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMegaDockerState } from '../../interfaces/stateManagement/IMegaDockerState'
import { IMob } from '../../interfaces/objectInterfaces/IMob'
import { initialMegaDockerState } from '../../globals/initialMegaDockerState'
import { getMites } from '../reducers/getMites'
import { getCustomMites } from '../reducers/getCustomMites'
import { getDNetworkMites } from '../reducers/getDNetworkMites'
import { IMite } from '../../interfaces/objectInterfaces/IMite'
import { INetworkMite } from '../../interfaces/miteTypeInterfaces/INetworkMite'
import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'
import { getDServiceMites } from '../reducers/getDServiceMites'
import { OrbThemeLight } from '../../components/OrbTheme/OrbThemeLight'
// import shell from '@tauri-apps/api/shell'

/**
 * converts a string to an IMegaDockerState object
 */
export const convertStringToMDState: Function = (string: string): IMegaDockerState => {
  const savedState: IMob = JSON.parse(string)
  const savedAllMobMites: IMite[] = getMites(savedState.mobManikins)
  const savedMobDNetworkMites: INetworkMite[] = getDNetworkMites(savedAllMobMites)
  const savedMobDServiceMites: ITraefikedServiceMite[] = getDServiceMites(savedAllMobMites) as ITraefikedServiceMite[]
  const savedMobCustomMites: IMite[][] = getCustomMites(savedAllMobMites)
  const state: IMegaDockerState = {
    manikinTable: initialMegaDockerState.manikinTable,
    memories: savedState.mobMemories,
    selectedManikins: savedState.mobManikins,
    theme: OrbThemeLight,
    allMobMites: savedAllMobMites,
    mobDNetworkMites: savedMobDNetworkMites,
    mobDServiceMites: savedMobDServiceMites,
    mobCustomMites: savedMobCustomMites,
    ymlOutput: ``
  }
  return state
}
