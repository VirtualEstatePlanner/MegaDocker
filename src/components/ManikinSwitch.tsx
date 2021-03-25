/** @format */

//  ManikinSwitch.test.tsx
//  MEGADocker
//  a React Component that renders the toggle switch for a Manikin
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Switch, TableCell } from '@material-ui/core'
import { MegaContext } from './MegaContext'
import { IManikin } from '../interfaces/IManikin'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'

export const ManikinSwitch: React.FC<IManikin> = (manikin: IManikin): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  return (
    <div className='ManikinSwitch'>
      <TableCell key={`${manikin.name}ToggleCell`}>
        <Switch
          key={`${manikin.name}Toggle`}
          checked={manikin.isSelected}
          disabled={manikin.isCore ? true : false}
          onClick={() =>
            dispatch({
              type: `TOGGLE_MANIKIN`,
              payload: state.manikinTable.indexOf(manikin),
            })
          }
        />
      </TableCell>
    </div>
  )
}
