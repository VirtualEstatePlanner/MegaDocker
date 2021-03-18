/** @format */

//  ManikinIcon.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ManikinIcon } from '../../components/ManikinIcon'
import { render } from '@testing-library/react'
import { IManikin } from '../../interfaces/IManikin'
import { Table, TableBody, TableCell } from '@material-ui/core'
import { MegaProvider } from '../../components/MegaContext'

it('renders the ManikinIcon component', () => {
  ;(manikin: IManikin) => {
    render(
      <div>
        <MegaProvider>
          <Table>
            <TableBody>
              <TableCell>{ManikinIcon(manikin)}</TableCell>
            </TableBody>
          </Table>
        </MegaProvider>
      </div>
    )
  }
})
