/** @format */

//  styleguidistWebpackDotConfigDotJsMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { styleguidistManikin } from '../../../../mobparts/manikins/styleguidist'
import { styleguidistWebpackDotConfigDotJsMite } from '../../../../mobparts/mites/custom/styleguidistWebpackDotConfigDotJsMite'

testCustomMite(styleguidistWebpackDotConfigDotJsMite, styleguidistManikin, `js`)
