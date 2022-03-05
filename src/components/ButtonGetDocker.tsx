/** @format */

//  ButtonGetDocker.tsx
//  MEGADocker
//  a React Button Component that opens the page to download the Docker installer
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'
import { openURL } from '../functions/utility/openURL'

const getDockerURL: URL = new URL(`https://docs.docker.com/get-docker/`)

const getDockerButtonClicked: VoidFunction = (): void => {
  openURL(getDockerURL)
}

export const ButtonGetDocker: React.FC = (): React.ReactElement => (
  <Button variant='contained' onClick={getDockerButtonClicked}>
    Get Docker
  </Button>
)
