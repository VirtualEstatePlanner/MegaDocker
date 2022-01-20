import { CSSProperties } from '@mui/styles'

const drawerWidth = 240
const appBarHeight = 70

const DrawerPaperStyle: CSSProperties = {
  width: drawerWidth,
  height: `calc(100%-${appBarHeight}px)`,
  marginTop: 0,
  borderRadius: '25px',
  backgroundColor: `#F0F0F3`,
  boxShadow: `12px 12px 30px -6px #B4B4B5`
}

export default DrawerPaperStyle
