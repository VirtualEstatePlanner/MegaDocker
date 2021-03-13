/** @format */

//  styleguidistTsconfigDotJsonMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { styleguidistTsconfigDotJsonMite } from '../../../../mobparts/mites/custom/styleguidistTsconfigDotJsonMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { styleguidistManikin } from '../../../../mobparts/manikins/styleguidist'

testCustomMite(styleguidistTsconfigDotJsonMite, styleguidistManikin, `json`)
