/** @format */

//  emailValidator.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { emailValidator } from '../../../functions/validators/emailValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`georgegeorgulas@gmail.com`, `george_georgulas@me.com`, `george@orb.run`]
const failingStrings: string[] = [`georgegeorgulasatgmail.]dotcom`, `george_georgulas_medotcom`, `george?@orb.run`]

testValidator(passingStrings, emailValidator, failingStrings)
