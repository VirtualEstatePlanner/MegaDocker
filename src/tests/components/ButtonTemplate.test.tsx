/** @format */

//  ButtonTemplate.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ButtonTemplate } from '../../components/ButtonTemplate'
import { render } from '@testing-library/react'

it('renders the ButtonTemplate component', () => {
  render(
    <div>
      <ButtonTemplate />
    </div>
  )
})
