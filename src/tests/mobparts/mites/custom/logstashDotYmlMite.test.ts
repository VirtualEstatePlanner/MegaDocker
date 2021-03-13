/** @format */

//  logstashDotYmlMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { elkManikin } from '../../../../mobparts/manikins/elk'
import { logstashDotYmlMite } from '../../../../mobparts/mites/custom/logstashDotYmlMite'

testCustomMite(logstashDotYmlMite, elkManikin, `yml`)
