/** @format
 * @jest-environment jsdom
 */

//  MemoryTable.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Component } from "react"
import { MemoryTable } from '../../components/MemoryTable'
import { render } from '@testing-library/react'
import { MegaProvider } from '../../components/MegaContext'

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

it('renders the MemoryTable component', () => {
  render(
    <div>
      <MegaProvider>
        <MemoryTable />
      </MegaProvider>
    </div>
  )
})
