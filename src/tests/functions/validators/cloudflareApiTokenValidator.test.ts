/** @format */

//  cloudflareApiTokenValidator.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { cloudflareApiTokenValidator } from '../../../functions/validators/cloudflareApiTokenValidator'
import { testValidator } from '../../test-functions/testValidator'

const passingStrings: string[] = [`qwer1234qwer1234WQER1234QWER1234qw12er34`, `1234qwerasdfzxcvPOIULKJH9087mn56bg674rfv`, `plokijuhygtfrdeswaqzxcvbnm1234567890abcd`]
const failingStrings: string[] = [`1234!@#|1234qwerQWERqwerASDFZXCVasdfzcv`, `ZXCVASDFQWERASDFZXCVQWERASDFZXCV+WER[RFV`, `1029384756qpwoeirutyalskdjfhgbmznxc01928l`]

testValidator(passingStrings, cloudflareApiTokenValidator, failingStrings)
