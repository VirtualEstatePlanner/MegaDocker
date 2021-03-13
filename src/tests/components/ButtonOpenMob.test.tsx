/** @format */

//  ButtonOpenMob.test.tsx
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ButtonOpenMob } from '../../components/ButtonOpenMob'
import { render } from '@testing-library/react'

test('renders the ButtonOpenMob component', () => {
  render(
    <div>
      <ButtonOpenMob />
    </div>
  )
})