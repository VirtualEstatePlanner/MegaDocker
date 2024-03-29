/** @format */

//  MemoryValidationIcon.test.tsx
//  MEGADocker
//  a React Component that renders the validation icon on a Memory
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { TableCell } from '@mui/material'
import { IMemory } from '../interfaces/objectInterfaces/IMemory'
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png'
import circleIndicator from '../images/indicators/circleIndicator.png'

export const MemoryValidationIcon: React.FC<IMemory> = (memory: IMemory): React.ReactElement => (
  <TableCell className='MemoryReadyIcon' variant='body' size='small'>
    <img alt='ready indicator' height='25vh' src={memory.memoryValue === `` ? circleIndicator : memory.isReady ? checkmarkIndicator : circleIndicator} />
  </TableCell>
)
