/** @format */

//  createThemeString.ts
//  MEGADocker
//  converts a Material UI theme to an IThemeString
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'
import { OrbThemeDark } from '../../components/OrbTheme/OrbThemeDark'
import { IThemeString } from '../../interfaces/templateLiteralUnionTypes/IThemeString'

/**
 * @param theme a Material UI Theme
 * @returns an IThemeString
 */
export const createThemeString: Function = (theme: Theme): IThemeString => {
  if (theme === OrbThemeDark) {
    return `dark`
  } else {
    return `light`
  }
}
