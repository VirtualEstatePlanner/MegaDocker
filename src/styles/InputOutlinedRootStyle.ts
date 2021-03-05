/** @format */

import { CSSProperties } from '@material-ui/styles'

const InputOutlinedRootStyle: CSSProperties = {
  'borderRadius': '50px',
  'boxShadow': `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`,
  '&:hover': {
    color: `black`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`,
  },
  '&$focused': {
    'color': `black`,
    'boxShadow': `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
    '&:hover': {
      color: `black`,
      boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
    },
  },
}

export default InputOutlinedRootStyle
