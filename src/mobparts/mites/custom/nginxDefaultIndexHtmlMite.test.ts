/** @format */

//  nginxDefaultIndexHtmlMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../tests/testCustomMite'
import { nginxManikin } from '../../manikins/nginx'
import { nginxDefaultIndexHtmlMite } from './nginxDefaultIndexHtmlMite'

testCustomMite(nginxDefaultIndexHtmlMite, nginxManikin, `html`)
