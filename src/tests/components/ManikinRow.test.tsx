/** @format */

//  ManikinRow.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { render } from '@testing-library/react'
import { ManikinRow } from '../../components/ManikinRow'
import { IManikin } from '../../interfaces/objectInterfaces/IManikin'
import { Table, TableBody } from '@mui/material'
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
