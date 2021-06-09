import { CSSProperties } from '@material-ui/styles'

const drawerWidth = 240

const DrawerPaperStyle: CSSProperties = {
  width: drawerWidth,
  marginTop: 0,
  border: `none`,
  borderRadius: '24px',
  backgroundColor: `#E7E7E880`,
  backdropFilter: `blur(50px)`,
  boxShadow: `inset -.5px -.5px 1px #BFBFC1, 
  inset .5px .5px 1px white`
}

export default DrawerPaperStyle
