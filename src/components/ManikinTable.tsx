/** @format */

//  ManikinTable.tsx
//  MEGADocker
//  a React Component that renders a table for the Manikins
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { DarkModeSwitch } from './DarkModeSwitch'
import { ManikinRow } from './ManikinRow'
import { MegaContext } from './MegaContext'
import { IManikin } from '../interfaces/objectInterfaces/IManikin'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'

export const ManikinTable: React.FC = (): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  return (
    <Table className='ManikinTable' size='small' stickyHeader>
      <TableHead className='ManikinTableHeader'>
        <TableRow className='ManikinHeaderRow'>
          <TableCell key='name' style={{ width: '50%' }}>
            Services
          </TableCell>
          <TableCell key='icon' style={{ width: '15%', height: '100%' }} />
          <DarkModeSwitch />
        </TableRow>
      </TableHead>
      <TableBody className='ManikinTableBody'>{state.manikinTable.map((eachManikin: IManikin) => ManikinRow(eachManikin))}</TableBody>
    </Table>
  )
}
