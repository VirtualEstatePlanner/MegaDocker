/** @format */

//  getDServiceMites.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { IMite } from '../../../interfaces/objectInterfaces/IMite'
import { testTraefikedServiceMite } from '../../test-functions/testTraefikedServiceMite'

const testingMites: IMite[] = getDServiceMites(getMites(workingManikins))

testingMites.forEach((mite) => {
  testTraefikedServiceMite(mite)
})
