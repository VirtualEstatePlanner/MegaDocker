/** @format */

//  nginxDefaultDotTemplateDotConfMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { nginxDefaultDotTemplateDotConfMite } from '../../../../mobparts/mites/custom/nginxDefaultDotTemplateDotConfMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { nginxManikin } from '../../../../mobparts/manikins/nginx'

testCustomMite(nginxDefaultDotTemplateDotConfMite, nginxManikin, `conf`)
