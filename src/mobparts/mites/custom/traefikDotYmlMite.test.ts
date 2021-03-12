/** @format */

//  traefikDotYmlMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { testCustomMite } from '../../../tests/testCustomMite'
import { traefikManikin } from '../../manikins/traefik'
import { traefikDotYmlMite } from './traefikDotYmlMite'

testCustomMite(traefikDotYmlMite, traefikManikin, `yml`)
