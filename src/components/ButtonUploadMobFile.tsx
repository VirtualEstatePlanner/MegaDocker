/** @format */

//  ButtonUploadMobFile.tsx
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

export const ButtonUploadMobFile: React.FC = (): React.ReactElement => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const uploadButtonClicked = (): void => {
    if (runningInTauri()) {
      dispatch({ type: `UPLOAD_MOB_FILE_TAURI` })
    } else {
      dispatch({ type: `UPLOAD_MOB_FILE_BROWSER` })
    }
  }

  return (
    <Button variant='contained' onClick={uploadButtonClicked}>
      Load .mob file
    </Button>
  )
}
