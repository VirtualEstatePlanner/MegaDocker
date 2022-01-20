/** @format */

//  MemoryRow.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MemoryRow } from '../../components/MemoryRow'
import { render } from '@testing-library/react'
import { Table, TableBody } from '@mui/material'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { MegaProvider } from '../../components/MegaContext'

/*
 * mocks css for Asap font
 */
jest.mock('@fontsource/asap', () => ({
  fontsourceAsap: ''
}))

/*
 * mocks css for gray color
 */
jest.mock('@mui/material/colors/grey', () => ({
  greyColor: ''
}))

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
