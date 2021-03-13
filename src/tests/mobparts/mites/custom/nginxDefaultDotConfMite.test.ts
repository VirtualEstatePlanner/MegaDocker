/** @format */

//  nginxDefaultDotConfMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { nginxManikin } from '../../../../mobparts/manikins/nginx'
import { nginxDefaultDotConfMite } from '../../../../mobparts/mites/custom/nginxDefaultDotConfMite'

testCustomMite(nginxDefaultDotConfMite, nginxManikin, `conf`)
