/** @format */

//  styleguidistPackageDotJsonMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { styleguidistPackageDotJsonMite } from './styleguidistPackageDotJsonMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { styleguidistManikin } from '../../manikins/styleguidist'

testCustomMite(styleguidistPackageDotJsonMite, styleguidistManikin, `json`)
