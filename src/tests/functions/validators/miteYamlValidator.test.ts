/** @format */

//  stringYamlValidator.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { miteYamlValidator } from '../../../functions/validators/miteYamlValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [
  `
services:
version:
`,
  `
 services:
 version:
 `,
  `
services:
 image:
 environment:
  - someflag=whatever
`,
]

const failingStrings: string[] = [
  `
 services:
version:
`,
  `
 services:
 version:
 version:
 `,
  `
services:
 image:
 environment:
  - someflag=whatever
   - someflag=whatever
`,
]

testValidator(passingStrings, miteYamlValidator, failingStrings)
