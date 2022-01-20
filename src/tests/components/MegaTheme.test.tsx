/** @format */

//  MegaTheme.test.tsx
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2020-2021 The MegaDocker Group. All rights reserved.

import OrbThemeDark from '../../components/OrbTheme/OrbThemeDark'
import OrbThemeLight from '../../components/OrbTheme/OrbThemeLight'
import { render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material'

/*
 * mocks css for Asap font
 */
jest.mock('@fontsource/asap', () => ({
  fontsourceAsap: '',
}))

/*
 * mocks css for gray color
 */
jest.mock('@mui/material/colors/grey', () => ({
  greyColor: '',
}))

it('renders light mode', () => {
  render(
    <div>
      <ThemeProvider theme={OrbThemeLight} />
    </div>
  )
})

it('renders dark mode', () => {
  render(
    <div>
      <ThemeProvider theme={OrbThemeDark} />
    </div>
  )
})
