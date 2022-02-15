/** @format */

//  ManikinRow.tsx
//  MEGADocker
//  a React Component that renders one row of the Manikin Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { TableCell, TableRow, Tooltip } from '@mui/material'
import { ManikinIcon } from './ManikinIcon'
import { ManikinSwitch } from './ManikinSwitch'
import { IManikin } from '../interfaces/objectInterfaces/IManikin'

export const ManikinRow: React.FC<IManikin> = (manikin: IManikin): React.ReactElement => {
  return (
    <Tooltip key={`${manikin.name}Row`} title={manikin.description}>
      <TableRow className={manikin.isCore ? 'CoreManikinRow' : 'ManikinRow'} hover={manikin.isCore ? false : true}>
        <TableCell size='small' key={`${manikin.name}NameCell`}>
          {manikin.name}
        </TableCell>
        {ManikinIcon(manikin)}
        {ManikinSwitch(manikin)}
      </TableRow>
    </Tooltip>
  )
}
