/** @format */

//  ManikinSwitch.tsx
//  MEGADocker
//  a React Component that renders the toggle switch for a Manikin
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Switch, TableCell } from '@mui/material'
import { MegaContext } from './MegaContext'
import { IManikin } from '../interfaces/objectInterfaces/IManikin'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'

export const ManikinSwitch: React.FC<IManikin> = (manikin: IManikin): React.ReactElement => {
  const {
    state,
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  return (
    <>
      <TableCell key={`${manikin.manikinName}ToggleCell`}>
        <Switch
          key={`${manikin.manikinName}Toggle`}
          checked={manikin.isSelected}
          disabled={manikin.isCore ? true : false}
          onClick={() =>
            dispatch({
              type: `TOGGLE_MANIKIN`,
              payload: state.manikinTable.indexOf(manikin)
            })
          }
        />
      </TableCell>
    </>
  )
}
