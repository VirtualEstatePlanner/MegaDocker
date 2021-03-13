/** @format */

//  emailValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { emailValidator } from '../../../functions/validators/emailValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [``, ``, ``]
const failingStrings: string[] = [``, ``, ``]

testValidator(passingStrings, failingStrings, emailValidator)
