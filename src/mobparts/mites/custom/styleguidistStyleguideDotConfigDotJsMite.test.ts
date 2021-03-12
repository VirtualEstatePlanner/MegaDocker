/** @format */

//  styleguidistStyleguideDotConfigDotJsMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { styleguidistStyleguideDotConfigDotJsMite } from './styleguidistStyleguideDotConfigDotJsMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { styleguidistManikin } from '../../manikins/styleguidist'

testCustomMite(styleguidistStyleguideDotConfigDotJsMite, styleguidistManikin, `js`)
