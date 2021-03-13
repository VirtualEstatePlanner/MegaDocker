/** @format */

//  ManikinRow.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ManikinRow } from './ManikinRow'
import { render } from '@testing-library/react'

test('renders the ManikinRow component', () => {
  render(
    <div>
      <table>
        <tbody>
          <ManikinRow />
        </tbody>
      </table>
    </div>
  )
})
