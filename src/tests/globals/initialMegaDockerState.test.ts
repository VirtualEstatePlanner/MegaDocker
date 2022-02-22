/** @format */

//  initialMegaDockerState.ts
//  MEGADocker
//  the application's beginning state
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { initialMegaDockerState } from '../../globals/initialMegaDockerState'
import { testMegaDockerState } from '../test-functions/testMegaDockerState'

describe(`tests each possible MegaDockerState property`, () => {
  testMegaDockerState(initialMegaDockerState)
})
