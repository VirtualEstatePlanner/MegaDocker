/** @format */

import { Theme } from '@material-ui/core'

export interface IToggleThemeAction {
  type: `TOGGLE_THEME`
  payload: Theme
}
