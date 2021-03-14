/** @format */

//  getKNetworkMites.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getKNetworkMites } from '../../../functions/reducers/getKNetworkMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { IMite } from '../../../interfaces/IMite'

const testingMites: IMite[] = getMites(workingManikins)
