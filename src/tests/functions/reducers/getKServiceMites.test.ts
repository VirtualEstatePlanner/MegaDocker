/** @format */

//  getKServiceMites.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getKServiceMites } from '../../../functions/reducers/getKServiceMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { IMite } from '../../../interfaces/IMite'
import { testTraefikedServiceMite } from '../../test-functions/testTraefikedServiceMite'

const testingMites: IMite[] = getKServiceMites(getMites(workingManikins))

testingMites.forEach((mite) => {
  testTraefikedServiceMite(mite)
})
