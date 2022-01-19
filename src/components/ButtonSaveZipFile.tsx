/** @format */

//  SaveZipFile.tsx
//  MEGADocker
//  a React Button Component that saves a Docker Swarm zip file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@material-ui/core'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { mobName } from '../mobparts/memories/mobName'
import { runningInTauri } from '../functions/runningInTauri'

export const ButtonSaveZipFile: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const buttonClicked = (): void => {
    if (runningInTauri()) {
      console.log(`exported docker swarm with tauri fs library`)
      dispatch({ type: `DOCKER_SWARM_OUTPUT_TAURI` })
    } else {
      console.log(`exported docker swarm with filesaver npm library`)
      dispatch({ type: `DOCKER_SWARM_OUTPUT_BROWSER` })
    }
  }

  const mobnameIndex: number = state.memories.indexOf(mobName)
  const mobname: string = state.memories[mobnameIndex].value

  return (
    <Button disabled={fullyValidated ? false : true} variant='contained' onClick={buttonClicked}>
      Save {mobname}.zip
    </Button>
  )
}