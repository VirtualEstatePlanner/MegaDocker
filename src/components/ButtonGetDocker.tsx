/** @format */

//  ButtonGetDocker.tsx
//  MEGADocker
//  a React Button Component that downloads the Docker installer for the host OS
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'

export const ButtonGetDocker: React.FC = (): React.ReactElement => (
  <Button variant='contained' href={`https://docs.docker.com/get-docker/`}>
    Get Docker
  </Button>
)
