/** @format */

//  noWhitespaceValidator.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { noWhitespaceValidator } from '../../../functions/validators/noWhitespaceValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`abc`, `abc123`, `123ABC`]
const failingStrings: string[] = [
  `this string contains spaces`,
  `this\u0009string\u0009contains\u0009tabs`,
  `this\u000Astring\u000Acontains\u000Aline\u000Afeeds`,
  `this\u000Cstring\u000Ccontains\u000Cform\u000Cfeeds`
]

testValidator(passingStrings, noWhitespaceValidator, failingStrings)
