import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const BottomNavigationActionRootStyleDark: CSSProperties = {
  color: grey[600],
  backgroundColor: `#131313`,
  borderRadius: `25px`,
  margin: `7px`,
  '&:hover': {
    backgroundColor: `#131313`,
    boxShadow: `.75px -4px 3px -3px black, 
  inset .75px 1px .5px black, 
  -.75px 4px 3px -3px #39393A, 
  inset -.75px -1px .5px #39393A`
  },
  '&$selected': {
    backgroundColor: `#131313`,
    color: `#FFFFFF`,
    '&:hover': {
      backgroundColor: `#131313`,
      boxShadow: `none`
    }
  }
}

export default BottomNavigationActionRootStyleDark
