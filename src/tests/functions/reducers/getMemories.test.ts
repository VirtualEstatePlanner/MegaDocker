/** @format */

//  getMemories.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getMemories } from '../../../functions/reducers/getMemories'
import { workingManikins } from '../../../globals/workingManikins'
import { IMemory } from '../../../interfaces/objectInterfaces/IMemory'
import { testMemory } from '../../test-functions/testMemory'
import { testMegaDockerAction } from '../../test-functions/testMegaDockerAction'
import { testMegaDockerState } from '../../test-functions/testMegaDockerState'

const testingMemories: IMemory[] = getMemories(workingManikins)

testingMemories.forEach((memory) => {
  testMemory(memory)
})
