/** @format */

//  vsCodeIndexDotHtmlMite.test.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { vsCodeIndexDotHtmlMite } from './vsCodeIndexDotHtmlMite'
import { testCustomMite } from '../../../tests/testCustomMite'
import { vsCodeManikin } from '../../manikins/vscode'

testCustomMite(vsCodeIndexDotHtmlMite, vsCodeManikin, `html`)
