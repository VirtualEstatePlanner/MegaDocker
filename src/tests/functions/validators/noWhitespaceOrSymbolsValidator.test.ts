/** @format */

//  noWhitespaceOrSymbolsValidator.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { noWhitespaceOrSymbolsValidator } from '../../../functions/validators/noWhitespaceOrSymbolsValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`abcde`, `12345`, `ABCDE`]
const failingStrings: string[] = [`!@#`, `1\u000A23`, `abc\u000C123`]

testValidator(passingStrings, noWhitespaceOrSymbolsValidator, failingStrings)
