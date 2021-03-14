/** @format */

//  getMites.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { IMite } from '../../../interfaces/IMite'
import { testCustomMite } from '../../test-functions/testCustomMite'

const testingMites: IMite[] = getMites(workingManikins)
const testingCustomMites: IMite[][] = getCustomMites(testingMites)
const testingNetworkMites: IMite[] = getDNetworkMites(testingMites)
const testingServiceMites: IMite[] = getDServiceMites(testingMites)
