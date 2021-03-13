/** @format */

//  elasticsearchLog4j2DotPropertiesMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { elasticsearchLog4j2DotPropertiesMite } from '../../../../mobparts/mites/custom/elasticsearchLog4j2DotPropertiesMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { elkManikin } from '../../../../mobparts/manikins/elk'

testCustomMite(elasticsearchLog4j2DotPropertiesMite, elkManikin, `properties`)
