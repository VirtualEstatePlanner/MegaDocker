/** @format */

//  rocketchatMongoStartupDotShMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { rocketchatMongoStartupDotShMite } from './rocketchatMongoStartupDotShMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { rocketchatManikin } from '../../manikins/rocketchat'

testCustomMite(rocketchatMongoStartupDotShMite, rocketchatManikin, `sh`)
