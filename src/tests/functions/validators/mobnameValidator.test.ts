/** @format */

//  mobnameValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { mobnameValidator } from '../../../functions/validators/mobnameValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`somevalidmobname`, `othervalidmobname`, `anothervalidmobname`]
const failingStrings: string[] = [`nope`, `not correct`, `thismobnameiswaytoolongtobeconsiderdvalid`]

testValidator(passingStrings, mobnameValidator, failingStrings)
