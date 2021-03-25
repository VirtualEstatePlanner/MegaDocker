/** @format */

//  ManikinTable.test.tsx
//  MEGADocker
//  a React Component that renders a table for the Manikins
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { Switch, TableCell } from '@material-ui/core'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { MegaContext } from './MegaContext'
import { Theme } from '@material-ui/core'
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
