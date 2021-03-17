/** @format */

//  MemoryRow.tsx
//  MegaDocker
//  a React Component that renders one row of the Memory Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png'
import circleIndicator from '../images/indicators/circleIndicator.png'
import { IMemory } from '../interfaces/IMemory'
import { TextField, Tooltip } from '@material-ui/core'
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { MegaContext } from './MegaContext'

const createMemoryValueAction: Function = (memoryToUpdate: IMemory, newValue: string): IUpdateMemoryValueAction => {
  return {
    type: `UPDATE_MEMORY_VALUE`,
    payload: {
      memory: memoryToUpdate,
      value: newValue,
    },
  }
}

export const MemoryRow: React.FC<IMemory> = (memory: IMemory): React.ReactElement<IMemory> => {
  const {
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)
  return (
    <Tooltip title={memory.tooltip} key={memory.memoryIndex}>
      <TableRow hover>
        <TableCell style={{ width: '1%' }} padding='checkbox' variant='body' size='small'>
          {memory.name}
        </TableCell>
        <TableCell variant='body' style={{}} size='small'>
          <TextField
            fullWidth
            size='small'
            required={true}
            value={memory.value}
            type={memory.valueType}
            placeholder={`Please enter your ${memory.name} here`}
            autoComplete={memory.shouldAutocomplete.toString()}
            onChange={(changeEvent) => dispatch(createMemoryValueAction(memory, changeEvent.target.value))}
          />
        </TableCell>
        <TableCell style={{ width: '5%' }} className='ManikinReadyIcon' variant='body' size='small'>
          <img alt='ready indicator' height='25vh' src={memory.value === `` ? circleIndicator : memory.validator(memory.value).valueOf() ? checkmarkIndicator : circleIndicator} />
        </TableCell>
      </TableRow>
    </Tooltip>
  )
}
