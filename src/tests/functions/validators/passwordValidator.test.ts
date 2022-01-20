/** @format */

//  passwordValidator.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { passwordValidator } from '../../../functions/validators/passwordValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`asdfASDF1234!@#$`, `12#$qwER`, `1qaz@WSX`]
const failingStrings: string[] = [`alllowercase`, `ALLCAPS`, `2Sh0rt`, `1234!@#$`]

testValidator(passingStrings, passwordValidator, failingStrings)
