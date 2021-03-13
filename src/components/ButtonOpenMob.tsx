/** @format */

//  ButtonOpenMob.tsx
//  MegaDocker
//  a React Button Component that opens an existing .mdmob file
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import Button from '@material-ui/core/Button'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { MegaContext } from './MegaContext'

export const ButtonOpenMob: React.FC = (): React.ReactElement => {
  const { dispatch }: { dispatch: React.Dispatch<IMegaDockerAction> } = React.useContext(MegaContext)

  const buttonClicked = () => dispatch({ type: `OPEN_MOB_FILE` })
  return (
    <Button variant='contained' onClick={buttonClicked}>
      Open a Mob
    </Button>
  )
}
