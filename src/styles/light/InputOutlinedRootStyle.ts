import { CSSProperties } from '@material-ui/styles'

const InputOutlinedRootStyle: CSSProperties = {
  borderRadius: '50px',
  boxShadow: `.75px -4px 3px -3px #D8D8DB, 
    inset .75px 3px 3px #D8D8DB, 
    -.75px 4px 3px -3px white, 
    inset -.75px -3px 3px white`,
  '&:hover': {
    color: `black`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`
  },
  '&$focused': {
    color: `black`,
    boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
    '&:hover': {
      color: `black`,
      boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`
    }
  }
}

export default InputOutlinedRootStyle
