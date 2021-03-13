/** @format */

//  MegaContext.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MegaProvider } from './MegaContext'
import { render } from '@testing-library/react'

test('renders the MegaProvider component', () => {
  render(
    <div>
      <MegaProvider />
    </div>
  )
})
