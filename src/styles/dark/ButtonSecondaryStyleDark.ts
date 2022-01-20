import { CSSProperties } from '@mui/styles'

const ButtonSecondaryStyleDark: CSSProperties = {
  color: `#000000`,
  boxShadow: `-.75px 5px 4px -3px #000000, 
  inset -.75px -1px .75px #000000, 
  .75px -4px 3px -3px #39393A, 
  inset .75px 1px .75px #39393A`,
  '&:hover': {
    color: `#FFFFFF`,
    backgroundColor: `#131313`,
    boxShadow: `.75px -4px 3px -3px #000000, 
    inset .75px 1px .75px #000000, 
    -.75px 4px 3px -3px #39393A, 
    inset -.75px -1px .75px #39393A`
  }
}

export default ButtonSecondaryStyleDark
