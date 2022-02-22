/** @format */

//  IToggleThemeAction.ts
//  MEGADocker
//  interface for a React Context dispatch to toggle the light or dark mode theme
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { Theme } from '@mui/material'

export interface IToggleThemeAction {
  type: `TOGGLE_THEME`
  payload: Theme
}
