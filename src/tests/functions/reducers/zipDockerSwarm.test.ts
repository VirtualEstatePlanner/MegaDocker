/** @format */

//  zipDockerSwarm.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getManikins } from '../../../functions/reducers/getManikins'
import { getMemories } from '../../../functions/reducers/getMemories'
import { getMites } from '../../../functions/reducers/getMites'
import { zipDockerSwarm } from '../../../functions/reducers/zipDockerSwarm'
import { workingManikins } from '../../../globals/workingManikins'
import { IMegaDockerState } from '../../test-functions/testMegaDockerState'

const selectedManikins = getManikins(workingManikins)
const memories = getMemories(selectedManikins)
const allMobMites = getMites(selectedManikins)
const mobDServiceMites = getDServiceMites(allMobMites)
const mobDNetworkMites = getDNetworkMites(allMobMites)
const mobCustomMites = getCustomMites(allMobMites)
const ymlOutput = `testingState`
/*
const testingState: IMegaDockerState = {
  manikinTable: workingManikins,
  selectedManikins: selectedManikins,
  memories: memories,
  allMobMites: allMobMites,
  mobDServiceMites: mobDServiceMites,
  mobDNetworkMites: mobDNetworkMites,
  mobCustomMites: mobCustomMites,
  ymlOutput: ymlOutput,
}
*/
