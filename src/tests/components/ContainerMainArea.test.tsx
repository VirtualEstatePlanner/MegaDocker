/** @format */

//  ContainerMainArea.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ContainerMainArea } from '../../components/ContainerMainArea'
import { render } from '@testing-library/react'

it('renders the ContainerMainArea component', () => {
  render(
    <div>
      <ContainerMainArea />
    </div>
  )
})
