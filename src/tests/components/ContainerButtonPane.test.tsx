/** @format */

//  ContainerButtonPane.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ContainerButtonPane } from '../../components/ContainerButtonPane'
import { render } from '@testing-library/react'

it('renders the ContainerButtonPane component', () => {
  render(
    <div>
      <ContainerButtonPane />
    </div>
  )
})
