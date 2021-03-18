/** @format */

//  ManikinRow.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { render } from '@testing-library/react'
import { ManikinRow } from '../../components/ManikinRow'
import { IManikin } from '../../interfaces/IManikin'
import { Table, TableBody } from '@material-ui/core'
import { MegaProvider } from '../../components/MegaContext'

it('renders the ManikinRow component', () => {
  ;(manikin: IManikin) => {
    render(
      <div>
        <MegaProvider>
          <Table>
            <TableBody>{ManikinRow(manikin)}</TableBody>
          </Table>
        </MegaProvider>
      </div>
    )
  }
})
