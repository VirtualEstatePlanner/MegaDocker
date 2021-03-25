/** @format */

//  MemoryTable.tsx
//  MEGADocker
//  a React Component that renders the table of Memories for the Manikins selected in the Manikin Table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import { MegaContext } from './MegaContext'
import { MemoryRow } from './MemoryRow'
import checkmarkIndicator from '../images/indicators/checkmarkIndicator.png'
import circleIndicator from '../images/indicators/circleIndicator.png'
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IMemory } from '../interfaces/IMemory'

/**
 * generates the memories table
 * @param props the component props
 */
export const MemoryTable: React.FC<any> = (props: any): React.ReactElement => {
  const {
    state,
    // eslint-disable-next-line
    dispatch,
  }: {
    state: IMegaDockerState
    dispatch: React.Dispatch<IMegaDockerAction>
  } = React.useContext(MegaContext)

  const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

  const sortedMemories: IMemory[] = state.memories.sort((a: IMemory, b: IMemory) => a.name.localeCompare(b.name))

  return (
    <div style={{ width: '100%' }}>
      <Table className='MemoryTable' size='small' stickyHeader>
        <TableHead>
          <TableRow className='MemoryHeaderRow'>
            <TableCell size='small' variant='head' style={{ width: '15%' }}>
              Settings
            </TableCell>
            <TableCell size='small' variant='head' style={{ width: '80%' }} />
            <TableCell size='small' variant='head' style={{ width: '5%' }}>
              <img alt='' src={fullyValidated ? checkmarkIndicator : circleIndicator} height='25vh' />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          className='MemoryTableBody'
          style={{
            width: '100%',
          }}>
          {sortedMemories.map((thisMemory: IMemory) => MemoryRow(thisMemory))}
        </TableBody>
      </Table>
    </div>
  )
}
