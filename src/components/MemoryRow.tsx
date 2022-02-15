/** @format */

//  MemoryRow.tsx
//  MEGADocker
//  a React Component that renders one row of the Memory Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { TableCell, TableRow, TextField, Tooltip } from '@mui/material'
import { IMemory } from '../interfaces/objectInterfaces/IMemory'
import { MemoryValidationIcon } from './MemoryValidationIcon'

/**
 * renders a row of the memory table
 * @param memory the memory to render
 */
export const MemoryRow: React.FC<IMemory> = (
  memory: IMemory,
  handleChangeFunction: React.Dispatch<React.SetStateAction<React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>>>
): React.ReactElement<IMemory> => {
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
            onChange={handleChangeFunction}
          />
        </TableCell>
        {MemoryValidationIcon(memory)}
      </TableRow>
    </Tooltip>
  )
}
