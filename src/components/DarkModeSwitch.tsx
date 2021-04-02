/** @format */

//  DarkModeSwitch.tsx
//  MEGADocker
//  a React Component that renders the toggle switch for dark mode
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Switch, TableCell, Theme } from '@material-ui/core'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { MegaContext } from './MegaContext'
import { OrbThemeDark } from './OrbThemeDark'

export const DarkModeSwitch: React.FC = (): React.ReactElement => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  return (
    <TableCell key='isSelected' style={{ width: '25%' }}>
      <Switch
        key={`ThemeToggleSwitch`}
        checked={state.theme === OrbThemeDark ? true : false}
        onClick={() => {
          dispatch({
            type: `TOGGLE_THEME`,
            payload: state.theme as Theme,
          })
        }}
      />
    </TableCell>
  )
}
