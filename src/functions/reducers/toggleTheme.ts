/** @format */

//  toggleTheme.ts
//  MEGADocker
//  a function that switches between light mode and dark mode
//  Created by George Georgulas IV on 3/23/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'
import { OrbThemeDark } from '../../components/OrbTheme/OrbThemeDark'
import { OrbThemeLight } from '../../components/OrbTheme/OrbThemeLight'

/**
 * toggles the UI Theme, defaulting to light if theme is neither light nor dark
 */
export const toggleTheme: Function = (theme: Theme): Theme => {
  switch (theme) {
    case OrbThemeDark:
      return OrbThemeLight
    case OrbThemeLight:
      return OrbThemeDark
    default:
      return OrbThemeLight
  }
}
