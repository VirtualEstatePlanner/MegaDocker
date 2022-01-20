/** @format */

//  ContainerManikinPane.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ContainerManikinPane } from '../../components/ContainerManikinPane'
import { render } from '@testing-library/react'

/*
 * mocks css for Asap font
 */
jest.mock('@fontsource/asap', () => ({
  fontsourceAsap: ''
}))

/*
 * mocks css for gray color
 */
jest.mock('@mui/material/colors/grey', () => ({
  greyColor: ''
}))

it('renders the ContainerManikinPane component', () => {
  render(
    <div>
      <ContainerManikinPane />
    </div>
  )
})
