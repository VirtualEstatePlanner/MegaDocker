/** @format */

//  nginxServiceMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testTraefikedServiceMite } from '../../../test-functions/testTraefikedServiceMite'
import { nginxServiceMite } from '../../../../mobparts/mites/service/nginxServiceMite'

testTraefikedServiceMite(nginxServiceMite)
