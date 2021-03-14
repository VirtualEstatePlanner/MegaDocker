/** @format */

//  getMemories.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getMemories } from '../../../functions/reducers/getMemories'
import { workingManikins } from '../../../globals/workingManikins'
import { IMemory } from '../../../interfaces/IMemory'

const testingMemories: IMemory[] = getMemories(workingManikins)
