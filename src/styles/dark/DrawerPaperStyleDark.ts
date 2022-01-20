import { CSSProperties } from '@mui/styles'

const drawerWidth = 240
const appBarHeight = 70

const DrawerPaperStyleDark: CSSProperties = {
  width: drawerWidth,
  height: `calc(100%-${appBarHeight}px)`,
  marginTop: 0,
  borderRadius: '25px',
  backgroundColor: `#131313`,
  boxShadow: `12px 12px 30px -6px #000000`
}

export default DrawerPaperStyleDark
