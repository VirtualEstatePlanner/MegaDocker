/** @format */

//  getManikins.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getManikins } from '../../../functions/reducers/getManikins'
import { workingManikins } from '../../../globals/workingManikins'
import { IManikin } from '../../../interfaces/objectInterfaces/IManikin'
import { testManikin } from '../../test-functions/testManikin'

const testingManikins: IManikin[] = getManikins(workingManikins)

testingManikins.forEach((manikin) => {
  testManikin(manikin)
})
