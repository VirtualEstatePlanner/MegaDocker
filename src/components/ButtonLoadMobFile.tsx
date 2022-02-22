/** @format */

//  ButtonLoadMobFile.tsx
//  MEGADocker
//  a React Button Component that loads a mob file in progress
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { runningInTauri } from '../functions/utility/runningInTauri'

export const ButtonLoadMobFile: React.FC = (): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const loadButtonClicked = (): void => {
    if (runningInTauri()) {
      dispatch({ type: `DOCKER_SWARM_OUTPUT_TAURI` })
    } else {
      dispatch({ type: `DOCKER_SWARM_OUTPUT_BROWSER` })
    }
  }

  return (
    <Button variant='contained' onClick={loadButtonClicked}>
      Load .mob file
    </Button>
  )
}
