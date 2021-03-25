/** @format */

//  ButtonExportDockerSwarm.tsx
//  MEGADocker
//  a React Button Component that downloads a Docker Swarm zip file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@material-ui/core'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { mobName } from '../mobparts/memories/mobName'

export const ButtonExportDockerSwarm: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const buttonClicked = (): void => {
    dispatch({ type: `DOCKER_SWARM_OUTPUT` })
  }

  const mobnameIndex: number = state.memories.indexOf(mobName)
  const mobname: string = state.memories[mobnameIndex].value

  return (
    <Button disabled={fullyValidated ? false : true} variant='contained' onClick={buttonClicked}>
      download {mobname}.zip
    </Button>
  )
}
