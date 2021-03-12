/** @format */

//  logstashDotYmlMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../tests/testCustomMite'
import { elkManikin } from '../../manikins/elk'
import { logstashDotYmlMite } from './logstashDotYmlMite'

testCustomMite(logstashDotYmlMite, elkManikin, `yml`)
