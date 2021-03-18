/** @format */

//  elasticsearchDotYmlMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { elasticsearchDotYmlMite } from '../../../../mobparts/mites/custom/elasticsearchDotYmlMite'
import { elkManikin } from '../../../../mobparts/manikins/elk'

testCustomMite(elasticsearchDotYmlMite, elkManikin, `yml`)
