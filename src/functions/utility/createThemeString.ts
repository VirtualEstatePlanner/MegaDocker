/** @format */

//  createThemeString.ts
//  MEGADocker
//  converts a Material UI theme to either `light` or `dark`
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'
import { OrbThemeDark } from '../../components/OrbTheme/OrbThemeDark'

/**
 * @param theme a Material UI Theme
 * @returns `light` or `dark`
 */
export const createThemeString: Function = (theme: Theme): `light` | `dark` => {
  if (theme === OrbThemeDark) {
    return `dark`
  } else {
    return `light`
  }
}
