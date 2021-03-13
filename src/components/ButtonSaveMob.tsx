/** @format */

//  ButtonSaveMob.tsx
//  MegaDocker
//  a React Button Component that saves the current mob as a .mdmob file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import Button from '@material-ui/core/Button'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { MegaContext } from './MegaContext'

export const ButtonSaveMob: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const buttonClicked = (): void => {
    dispatch({
      type: `SAVE_MOB_FILE`,
      payload: { manikins: state.selectedManikins, memories: state.memories },
    })
  }

  return (
    <Button variant='contained' onClick={buttonClicked}>
      Save this Mob
    </Button>
  )
}
