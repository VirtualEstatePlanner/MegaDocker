import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'

const BottomNavigationActionRootStyle: CSSProperties = {
  color: grey[600],
  backgroundColor: `#F0F0F3`,
  borderRadius: `25px`,
  margin: `7px`,
  '&:hover': {
    backgroundColor: `#F0F0F3`,
    boxShadow: `.75px -4px 3px -3px #D8D8DB, 
  inset .75px 1px .5px #D8D8DB, 
  -.75px 4px 3px -3px white, 
  inset -.75px -1px .5px white`
  },
  '&$selected': {
    backgroundColor: `#F0F0F3`,
    color: `#000000`,
    '&:hover': {
      backgroundColor: `#F0F0F3`,
      boxShadow: `none`
    }
  }
}

export default BottomNavigationActionRootStyle
