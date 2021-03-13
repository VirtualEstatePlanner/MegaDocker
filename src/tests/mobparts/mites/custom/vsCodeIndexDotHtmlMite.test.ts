/** @format */

//  vsCodeIndexDotHtmlMite.test.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { vsCodeIndexDotHtmlMite } from '../../../../mobparts/mites/custom/vsCodeIndexDotHtmlMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { vsCodeManikin } from '../../../../mobparts/manikins/vscode'

testCustomMite(vsCodeIndexDotHtmlMite, vsCodeManikin, `html`)
