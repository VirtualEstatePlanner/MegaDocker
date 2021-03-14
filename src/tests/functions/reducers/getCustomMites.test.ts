/** @format */

//  getCustomMites.testts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getMites } from '../../../functions/reducers/getMites'
import { workingManikins } from '../../../globals/workingManikins'
import { ICustomMite } from '../../../interfaces/ICustomMite'
import { IMite } from '../../../interfaces/IMite'
import { testCustomMite } from '../../test-functions/testCustomMite'

const testingMites: ICustomMite[][] = getCustomMites(getMites(workingManikins)) as ICustomMite[][]

testingMites.forEach((miteArray) => {
  miteArray.forEach((mite) => {
    console.log(mite.miteFile.name + mite.miteFile.extension)
    testCustomMite(mite)
  })
})
