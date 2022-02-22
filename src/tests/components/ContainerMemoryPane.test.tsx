/** @format
 * @jest-environment jsdom
 */

//  ContainerMemoryPane.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from 'react'
import { ContainerMemoryPane } from '../../components/ContainerMemoryPane'
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

it('renders the ContainerMemoryPane component', () => {
  render(
    <div>
      <ContainerMemoryPane />
    </div>
  )
})
