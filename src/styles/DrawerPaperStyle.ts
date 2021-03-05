/** @format */

import { CSSProperties } from '@material-ui/styles'

const drawerWidth = 240
const appBarHeight = 70

const DrawerPaperStyle: CSSProperties = {
  width: drawerWidth,
  height: `calc(100%-${appBarHeight}px)`,
  marginTop: appBarHeight,
  borderRadius: '25px',
  backgroundColor: `#F0F0F3ED`,
  boxShadow: `12px 12px 30px -6px #B4B4B5`,
}

export default DrawerPaperStyle
