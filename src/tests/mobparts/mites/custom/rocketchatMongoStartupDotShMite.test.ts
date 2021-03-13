/** @format */

//  rocketchatMongoStartupDotShMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { rocketchatMongoStartupDotShMite } from '../../../../mobparts/mites/custom/rocketchatMongoStartupDotShMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { rocketchatManikin } from '../../../../mobparts/manikins/rocketchat'

testCustomMite(rocketchatMongoStartupDotShMite, rocketchatManikin, `sh`)
