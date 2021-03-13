/** @format */

//  App.test.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { ManikinIcon } from './ManikinIcon'
import { ManikinSwitch } from './ManikinSwitch'

export const ManikinRow: React.FC = (props: any): React.ReactElement => {
  return (
    <TableRow className='ManikinRow'>
      {props.children}
      <TableCell>
        {props.children}
        {'manikinname'}
      </TableCell>
      <TableCell>
        {props.children}
        <ManikinIcon />
      </TableCell>
      <TableCell padding='checkbox'>
        {props.children}
        <ManikinSwitch />
      </TableCell>
    </TableRow>
  )
}
