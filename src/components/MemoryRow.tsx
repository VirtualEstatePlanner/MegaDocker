/** @format */

//  MemoryRow.tsx
//  MEGADocker
//  a React Component that renders one row of the Memory Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { TableCell, TableRow } from '@material-ui/core'
import { IMemory } from '../interfaces/IMemory'
import { TextField, Tooltip } from '@material-ui/core'
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { MegaContext } from './MegaContext'
import { MemoryValidationIcon } from './MemoryValidationIcon'

/**
 *  generates the payload to reduce
 * @param memory the IMemory that will be reduced against the state
 * @param newValue the IMemory.value to reduce against
 */
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
    // eslint-disable-next-line
    state,
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)
  return (
    <Tooltip title={memory.tooltip} key={memory.memoryIndex}>
      <TableRow hover>
        <TableCell padding='checkbox' variant='body' size='small'>
          {memory.name}
        </TableCell>
        <TableCell variant='body' size='small'>
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
        {MemoryValidationIcon(memory)}
      </TableRow>
    </Tooltip>
  )
}
