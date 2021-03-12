/** @format */

//  nginxDefaultDotTemplateDotConfMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { nginxDefaultDotTemplateDotConfMite } from './nginxDefaultDotTemplateDotConfMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { nginxManikin } from '../../manikins/nginx'

testCustomMite(nginxDefaultDotTemplateDotConfMite, nginxManikin, `conf`)
