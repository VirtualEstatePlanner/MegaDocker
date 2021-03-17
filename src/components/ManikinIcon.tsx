/** @format */

//  ManikinIcon.tsx
//  MegaDocker
//  a React Component that renders the icon for a Manikin
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { TableCell } from '@material-ui/core'
import React from 'react'
import { IManikin } from '../interfaces/IManikin'

export const ManikinIcon: React.FC<IManikin> = (manikin: IManikin): React.ReactElement => {
  return (
    <TableCell className='ManikinIcon'>
      <img src={manikin.manikinIcon} alt={`${manikin.name} Icon`} height='15' width='15' />
    </TableCell>
  )
}
