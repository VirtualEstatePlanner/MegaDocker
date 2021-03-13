/** @format */

//  noWhitespaceValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { noWhitespaceValidator } from '../../../functions/validators/noWhitespaceValidator'
import { testValidator } from '../../test-functions/testValidator'

testValidator(`1234123412341234123412341234123412341234`, noWhitespaceValidator)
