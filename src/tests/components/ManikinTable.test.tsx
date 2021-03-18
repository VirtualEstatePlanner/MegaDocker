/** @format */

//  ManikinTable.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ManikinTable } from '../../components/ManikinTable'
import { render } from '@testing-library/react'
import { MegaProvider } from '../../components/MegaContext'

it('renders the ManikinTable component', () => {
  render(
    <div>
      <MegaProvider>
        <ManikinTable />
      </MegaProvider>
    </div>
  )
})
