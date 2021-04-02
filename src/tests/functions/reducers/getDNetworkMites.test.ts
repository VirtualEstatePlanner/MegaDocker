/** @format */

//  getDNetworkMites.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { IMite } from '../../../interfaces/objectInterfaces/IMite'
import { testNetworkMite } from '../../test-functions/testNetworkMite'

const testingMites: IMite[] = getDNetworkMites(getMites(workingManikins))

testingMites.forEach((mite) => {
  testNetworkMite(mite)
})
