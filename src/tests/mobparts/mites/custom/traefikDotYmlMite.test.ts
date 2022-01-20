/** @format */

//  traefikDotYmlMite.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../test-functions/testCustomMite'
import { traefikManikin } from '../../../../mobparts/manikins/traefik'
import { traefikDotYmlMite } from '../../../../mobparts/mites/custom/traefikDotYmlMite'

testCustomMite(traefikDotYmlMite, traefikManikin, `yml`)
