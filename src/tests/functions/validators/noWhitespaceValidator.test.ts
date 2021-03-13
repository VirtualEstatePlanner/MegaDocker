/** @format */

//  noWhitespaceValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { noWhitespaceValidator } from '../../../functions/validators/noWhitespaceValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`abc`, `abc123`, `123ABC`]
const failingStrings: string[] = [`this string contains spaces`, `this   string   contains    tabs`]

testValidator(passingStrings, noWhitespaceValidator, failingStrings)
