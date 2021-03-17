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
import { IManikin } from '../../../interfaces/IManikin'
import { testCustomMite } from '../../test-functions/testCustomMite'
import { testMegaDockerAction } from '../../test-functions/testMegaDockerAction'
import { testMegaDockerState } from '../../test-functions/testMegaDockerState'

const testingManikins: IManikin[] = workingManikins

testingManikins.forEach((manikin) => {
  const manikinCustomMites: ICustomMite[][] = getCustomMites(getMites([manikin])) as ICustomMite[][]
  manikinCustomMites.forEach((miteArray) => {
    miteArray.forEach((mite) => {
      testCustomMite(mite, manikin, mite.miteFile.extension)
    })
  })
})
