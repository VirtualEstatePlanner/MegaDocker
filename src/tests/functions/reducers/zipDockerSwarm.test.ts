/** @format */

//  zipDockerSwarm.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MegaProvider, initialMegaDockerState } from '../../../components/MegaContext'
import { testMegaDockerAction } from '../../test-functions/testMegaDockerAction'
import { testMegaDockerState } from '../../test-functions/testMegaDockerState'

describe('tests the zipDockerCompose function', () => {
  testMegaDockerAction
  testMegaDockerState
})
