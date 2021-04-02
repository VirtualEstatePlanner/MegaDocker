/** @format */

//  MemoryCheckmark.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { render } from '@testing-library/react'
import { MegaProvider } from '../../components/MegaContext'
import { MemoryValidationIcon } from '../../components/MemoryValidationIcon'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'

it('renders the MemoryValidationIcon component', () => {
  ;(memory: IMemory) => {
    render(
      <div>
        <MegaProvider>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>{MemoryValidationIcon(memory)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </MegaProvider>
      </div>
    )
  }
})
