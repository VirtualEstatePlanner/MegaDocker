/** @format */

//  domainValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { domainValidator } from '../../../functions/validators/domainValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`megadocker.com`, `megadocker.net`, `megadocker.info`]
const failingStrings: string[] = [`megadockercom`, `megadockernet`, `megadocker,info`]

testValidator(passingStrings, domainValidator, failingStrings)
