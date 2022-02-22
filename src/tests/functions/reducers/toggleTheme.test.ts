/** @format */

//  toggleTheme.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { createTheme } from '@mui/material'
import { OrbThemeDark } from '../../../components/OrbTheme/OrbThemeDark'
import { OrbThemeLight } from '../../../components/OrbTheme/OrbThemeLight'
import { toggleTheme } from '../../../functions/reducers/toggleTheme'
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

describe('tests the themeToggle function', () => {
  it('toggles Theme successfully', () => {
    expect(toggleTheme(OrbThemeLight)).toEqual(OrbThemeDark)
    expect(toggleTheme(OrbThemeDark)).toEqual(OrbThemeLight)
    expect(() => {
      toggleTheme(createTheme({}))
    }).toThrowError(`toggleTheme error: passed non-standard theme to theme switch`)
  })
})
