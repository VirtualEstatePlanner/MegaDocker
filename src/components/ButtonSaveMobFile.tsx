/** @format */

//  ButtonSaveMobFile.tsx
//  MEGADocker
//  a React Button Component that saves a mob file in progress
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Button } from '@mui/material'
import { MegaContext } from './MegaContext'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { runningInTauri } from '../functions/utility/runningInTauri'

export const ButtonSaveMobFile: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const saveButtonClicked = (): void => {
    if (runningInTauri()) {
      dispatch({ type: `SAVE_MOB_FILE_TAURI`, payload: state })
    } else {
      dispatch({ type: `SAVE_MOB_FILE_BROWSER`, payload: state })
    }
  }

  return (
    <Button variant='contained' onClick={saveButtonClicked}>
      Save Mob
    </Button>
  )
}
