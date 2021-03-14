/** @format */

//  ldapServiceMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testTraefikedServiceMite } from '../../../test-functions/testTraefikedServiceMite'
import { ldapServiceMite } from '../../../../mobparts/mites/service/ldapServiceMite'

testTraefikedServiceMite(ldapServiceMite)
