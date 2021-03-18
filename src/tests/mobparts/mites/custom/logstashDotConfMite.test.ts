/** @format */

//  logstashDotConfMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { elkManikin } from '../../../../mobparts/manikins/elk'
import { logstashDotConfMite } from '../../../../mobparts/mites/custom/logstashDotConfMite'

testCustomMite(logstashDotConfMite, elkManikin, `conf`)
