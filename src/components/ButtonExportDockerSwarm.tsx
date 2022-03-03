/** @format */

//  ButtonExportDockerSwarm.tsx
//  MEGADocker
//  a React Button Component that exports a Docker Swarm zip file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { runningInTauri } from '../functions/utility/runningInTauri'

export const ButtonExportDockerSwarm: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const exportButtonClicked = (): void => {
    if (runningInTauri()) {
      dispatch({ type: `DOCKER_SWARM_OUTPUT_TAURI` })
    } else {
      dispatch({ type: `DOCKER_SWARM_OUTPUT_BROWSER` })
    }
  }

  return (
    <Button disabled={fullyValidated ? false : true} variant='contained' onClick={exportButtonClicked}>
      Export as Docker Swarm
    </Button>
  )
}
