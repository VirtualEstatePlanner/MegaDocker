/** @format */

//  MemoryRow.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MemoryRow } from '../../components/MemoryRow'
import { render } from '@testing-library/react'
import { Table, TableBody } from '@material-ui/core'
import { IMemory } from '../../interfaces/IMemory'
import { MegaProvider } from '../../components/MegaContext'

it('renders the MemoryRow component', () => {
  ;(memory: IMemory) => {
    render(
      <div>
        <MegaProvider>
          <Table>
            <TableBody>{MemoryRow(memory)}</TableBody>
          </Table>
        </MegaProvider>
      </div>
    )
  }
})
