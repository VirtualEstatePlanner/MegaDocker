/** @format */

//  ButtonTemplate.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ButtonTemplate } from '../../components/ButtonTemplate'
import { render } from '@testing-library/react'

test('renders the ButtonTemplate component', () => {
  render(
    <div>
      <ButtonTemplate />
    </div>
  )
})