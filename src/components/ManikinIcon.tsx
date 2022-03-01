/** @format */

//  ManikinIcon.tsx
//  MEGADocker
//  a React Component that renders the icon for a Manikin
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { TableCell } from '@mui/material'
import { IManikin } from '../interfaces/objectInterfaces/IManikin'

export const ManikinIcon: React.FC<IManikin> = (manikin: IManikin): React.ReactElement => {
  return (
    <TableCell className='ManikinIcon'>
      <img src={manikin.manikinIcon} alt={`${manikin.manikinName} Icon`} height='15' width='15' />
    </TableCell>
  )
}
