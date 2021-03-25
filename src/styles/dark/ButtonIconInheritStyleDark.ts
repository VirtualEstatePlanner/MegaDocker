import { CSSProperties } from '@material-ui/styles'

const ButtonIconInheritStyleDark: CSSProperties = {
  color: `#FFFFFF`,
  boxShadow: `-.75px 4px 3px -3px #000000, 
  inset -.75px -1px .75px #000000, 
  .75px -4px 3px -3px #39393A, 
  inset .75px 1px .75px #39393A`,
  '&:hover': {
    backgroundColor: `#131313`,
    boxShadow: `.75px -4px 3px -3px #000000, 
    inset .75px 1px .75px #000000, 
    -.75px 4px 3px -3px #39393A, 
    inset -.75px -1px .75px #39393A`
  }
}

export default ButtonIconInheritStyleDark
