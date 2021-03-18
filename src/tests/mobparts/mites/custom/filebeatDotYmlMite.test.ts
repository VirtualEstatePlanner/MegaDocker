/** @format */

//  filebeatDotYmlMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { filebeatDotYmlMite } from '../../../../mobparts/mites/custom/filebeatDotYmlMite'
import { testCustomMite } from '../../../test-functions/testCustomMite'
import { elkManikin } from '../../../../mobparts/manikins/elk'

testCustomMite(filebeatDotYmlMite, elkManikin, `yml`)
