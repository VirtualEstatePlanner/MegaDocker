/** @format */

//  ManikinSwitch.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ManikinSwitch } from './ManikinSwitch'
import { render } from '@testing-library/react'

test('renders the ManikinSwitch component', () => {
  render(
    <div>
      <ManikinSwitch />
    </div>
  )
})
