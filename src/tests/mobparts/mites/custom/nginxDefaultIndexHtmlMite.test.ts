/** @format */

//  nginxDefaultIndexHtmlMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { nginxManikin } from '../../../../mobparts/manikins/nginx'
import { nginxDefaultIndexHtmlMite } from '../../../../mobparts/mites/custom/nginxDefaultIndexHtmlMite'

testCustomMite(nginxDefaultIndexHtmlMite, nginxManikin, `html`)
