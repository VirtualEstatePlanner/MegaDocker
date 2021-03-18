/** @format */

//  ContainerMemoryPane.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ContainerMemoryPane } from '../../components/ContainerMemoryPane'
import { render } from '@testing-library/react'

it('renders the ContainerMemoryPane component', () => {
  render(
    <div>
      <ContainerMemoryPane />
    </div>
  )
})
