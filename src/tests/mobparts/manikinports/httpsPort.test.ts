/** @format */

//  httpsPort.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testManikinPort } from '../../test-functions/testManikinPort'
import { httpsPort } from '../../../mobparts/manikinports/httpsPort'

testManikinPort(httpsPort)
