/** @format */

//  ButtonGetDocker.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ButtonGetDocker } from '../../components/ButtonGetDocker'
import { render } from '@testing-library/react'

it('renders the ButtonGetDocker component', () => {
  render(
    <div>
      <ButtonGetDocker />
    </div>
  )
})
