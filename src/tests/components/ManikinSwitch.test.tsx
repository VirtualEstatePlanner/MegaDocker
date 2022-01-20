/** @format */

//  ManikinSwitch.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { render } from '@testing-library/react'
import { Table, TableBody, TableCell } from '@mui/material'
import { ManikinSwitch } from '../../components/ManikinSwitch'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { MegaProvider } from '../../components/MegaContext'

/*
 * mocks css for Asap font
 */
jest.mock('@fontsource/asap', () => ({
  fontsourceAsap: '',
}))

/*
 * mocks css for gray color
 */
jest.mock('@mui/material/colors/grey', () => ({
  greyColor: '',
}))

it('renders the ManikinSwitch component', () => {
  ;(manikin: IManikin) => {
    render(
      <div>
        <MegaProvider>
          <Table>
            <TableBody>
              <TableCell>{ManikinSwitch(manikin)}</TableCell>
            </TableBody>
          </Table>
        </MegaProvider>
      </div>
    )
  }
})
