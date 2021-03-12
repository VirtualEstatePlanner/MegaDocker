/** @format */

//  autheliaDotConfMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { autheliaDotConfMite } from './autheliaDotConfMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { ldapManikin } from '../../manikins/ldap'

testCustomMite(autheliaDotConfMite, ldapManikin, `conf`)
