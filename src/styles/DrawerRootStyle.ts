/** @format */

import { CSSProperties } from '@material-ui/styles'

const drawerWidth = 240
const appBarHeight = 70

const DrawerRootStyle: CSSProperties = {
  width: drawerWidth,
  height: `calc(100%-${appBarHeight}px)`,
  marginTop: appBarHeight,
  flexShrink: 0,
}

export default DrawerRootStyle
