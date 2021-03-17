/** @format */

//  MemoryValidationIcon.test.tsx
//  MegaDocker
//  a React Component that renders the validation icon on a Memory
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { TableCell } from '@material-ui/core'
import { IMemory } from '../interfaces/IMemory'
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png'
import circleIndicator from '../images/indicators/circleIndicator.png'

export const MemoryValidationIcon: React.FC<IMemory> = (memory: IMemory): React.ReactElement => (
  <TableCell className='MemoryReadyIcon' variant='body' size='small'>
    <img alt='ready indicator' height='25vh' src={memory.value === `` ? circleIndicator : memory.validator(memory.value).valueOf() ? checkmarkIndicator : circleIndicator} />
  </TableCell>
)
