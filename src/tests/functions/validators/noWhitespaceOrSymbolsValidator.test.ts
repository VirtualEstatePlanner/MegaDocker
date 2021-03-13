/** @format */

//  noWhitespaceOrSymbolsValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { noWhitespaceOrSymbolsValidator } from '../../../functions/validators/noWhitespaceOrSymbolsValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`abc`, `123`, `ABC`]
const failingStrings: string[] = [`!@#`, `1 2 3`, `abc 123`]

testValidator(passingStrings, noWhitespaceOrSymbolsValidator, failingStrings)
