import { CSSProperties } from '@mui/styles'

const drawerWidth = 240
const appBarHeight = 70

const DrawerRootStyle: CSSProperties = {
  width: drawerWidth,
  height: `calc(100%-${appBarHeight}px)`,
  marginTop: 0,
  flexShrink: 0
}

export default DrawerRootStyle
