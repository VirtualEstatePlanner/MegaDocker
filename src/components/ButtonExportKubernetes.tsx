/** @format */

//  ButtonExportKubernetes.tsx
//  MegaDocker
//  a React Button Component that downloads a Kubernetes deployment zip file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import Button from '@material-ui/core/Button'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'

export const ButtonExportKubernetes: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const buttonClicked = (): void => dispatch({ type: `KUBERNETES_OUTPUT` })

  return (
    <Button disabled={fullyValidated ? false : true} variant='contained' onClick={buttonClicked}>
      Zip for Kubernetes Deployment
    </Button>
  )
}
