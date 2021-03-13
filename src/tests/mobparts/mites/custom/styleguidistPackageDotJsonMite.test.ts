/** @format */

//  styleguidistPackageDotJsonMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { styleguidistPackageDotJsonMite } from '../../../../mobparts/mites/custom/styleguidistPackageDotJsonMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { styleguidistManikin } from '../../../../mobparts/manikins/styleguidist'

testCustomMite(styleguidistPackageDotJsonMite, styleguidistManikin, `json`)
