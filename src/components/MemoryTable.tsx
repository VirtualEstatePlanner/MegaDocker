/** @format */

//  MemoryTable.tsx
//  MEGADocker
//  a React Component that renders the table of Memories for the Manikins selected in the Manikin Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { MegaContext } from './MegaContext'
import { MemoryRow } from './MemoryRow'
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png'
import circleIndicator from '../images/indicators/circleIndicator.png'
import { IMegaDockerAction } from '../interfaces/stateManagement/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMemory } from '../interfaces/objectInterfaces/IMemory'
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction'
import { workingManikins } from '../globals/workingManikins'
import { getMemories } from '../functions/reducers/getMemories'

/**
 * generates the memories table
 * @param props the component props
 */
export const MemoryTable: React.FC<any> = (props: any): React.ReactElement => {
  /**
   *  generates the payload to reduce
   * @param memoryToUpdate the IMemory that will be reduced against the state
   * @param newValue the IMemory.value to reduce against
   */
  const createMemoryValueAction: Function = (memoryToUpdate: IMemory, newValue: string): IUpdateMemoryValueAction => {
    return {
      type: `UPDATE_MEMORY_VALUE`,
      payload: {
        memory: memoryToUpdate,
        value: newValue
      }
    }
  }
  const {
    state,
    // eslint-disable-next-line
    dispatch
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const sortedMemories: IMemory[] = getMemories(workingManikins).sort((a: IMemory, b: IMemory) => a.name.localeCompare(b.name))

  return (
    <div style={{ width: '100%' }}>
      <Table className='MemoryTable' size='small' stickyHeader>
        <TableHead>
          <TableRow className='MemoryHeaderRow'>
            <TableCell size='small' variant='head' style={{ width: '20%' }}>
              Settings
            </TableCell>
            <TableCell size='small' variant='head' style={{ width: '75%' }} />
            <TableCell size='small' variant='head' style={{ width: '5%' }}>
              <img alt='' src={fullyValidated ? checkmarkIndicator : circleIndicator} height='25vh' />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className='MemoryTableBody'
          style={{
            width: '100%'
          }}
        >
          {sortedMemories.map((thisMemory: IMemory) => MemoryRow(thisMemory, (changeEvent: { target: { value: any } }) => dispatch(createMemoryValueAction(thisMemory, changeEvent.target.value))))}
        </TableBody>
      </Table>
    </div>
  )
}
