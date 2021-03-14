/** @format */

//  megaReducer.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getKNetworkMites } from '../../../functions/reducers/getKNetworkMites'
import { getKServiceMites } from '../../../functions/reducers/getKServiceMites'
import { getManikins } from '../../../functions/reducers/getManikins'
import { getMemories } from '../../../functions/reducers/getMemories'
import { getMites } from '../../../functions/reducers/getMites'
import { megaReducer } from '../../../functions/reducers/megaReducer'
import { workingManikins } from '../../../globals/workingManikins'
import { IManikin } from '../../../interfaces/IManikin'
import { IMegaDockerState } from '../../../interfaces/IMegaDockerState'

const selectedManikins = getManikins(workingManikins)
const memories = getMemories(selectedManikins)
const allMobMites = getMites(selectedManikins)
const mobDServiceMites = getDServiceMites(allMobMites)
const mobDNetworkMites = getDNetworkMites(allMobMites)
const mobKServiceMites = getKServiceMites(allMobMites)
const mobKNetworkMites = getKNetworkMites(allMobMites)
const mobCustomMites = getCustomMites(allMobMites)
const infoContent = `This is testing information.`
const ymlOutput = `testingState`

const testingState: IMegaDockerState = {
  manikinTable: workingManikins,
  selectedManikins: selectedManikins,
  memories: memories,
  allMobMites: allMobMites,
  mobDServiceMites: mobDServiceMites,
  mobDNetworkMites: mobDNetworkMites,
  mobKServiceMites: mobKServiceMites,
  mobKNetworkMites: mobKNetworkMites,
  mobCustomMites: mobCustomMites,
  infoContent: infoContent,
  ymlOutput: ymlOutput,
}
