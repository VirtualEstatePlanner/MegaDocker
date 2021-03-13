/** @format */

//  ContainerButtonPane.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ContainerButtonPane } from './ContainerButtonPane'
import { render } from '@testing-library/react'

test('renders the ContainerButtonPane component', () => {
  render(
    <div>
      <ContainerButtonPane />
    </div>
  )
})
