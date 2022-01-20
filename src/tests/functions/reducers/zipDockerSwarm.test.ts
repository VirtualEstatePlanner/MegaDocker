/** @format
 * @jest-environment jsdom
 */

//  zipDockerSwarm.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react"
import { testMegaDockerAction } from '../../test-functions/testMegaDockerAction'
import { testMegaDockerState } from '../../test-functions/testMegaDockerState'

describe('tests the zipDockerCompose function', () => {
  testMegaDockerAction()
  testMegaDockerState()
})
