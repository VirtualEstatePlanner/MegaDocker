import { CSSProperties } from '@mui/styles'

const InputOutlinedRootStyleDark: CSSProperties = {
  borderRadius: '50px',
  boxShadow: `.75px -4px 3px -3px #000000, 
    inset .75px 3px 3px #000000, 
    -.75px 4px 3px -3px #39393A, 
    inset -.75px -3px 3px #39393A`,
  '&:hover': {
    color: `#FFFFFF`,
    boxShadow: `7px 7px 15px #000000, -3px -3px 7px #39393A`
  },
  '&$focused': {
    color: `#FFFFFF`,
    boxShadow: `7px 7px 15px #000000, -3px -3px 7px #39393A`,
    '&:hover': {
      color: `#FFFFFF`,
      boxShadow: `7px 7px 15px #000000, -3px -3px 7px #39393A`
    }
  }
}

export default InputOutlinedRootStyleDark
