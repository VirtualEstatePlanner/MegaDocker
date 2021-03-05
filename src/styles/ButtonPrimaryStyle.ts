/** @format */

import { CSSProperties } from '@material-ui/styles'

const ButtonPrimaryStyle: CSSProperties = {
  'boxShadow': `5px 5px 10px #D8D8DB, -5px -5px 10px white`,
  'color': `#000000`,
  '&:hover': {
    backgroundColor: `#F0F0F3`,
    color: `#000000`,
    boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #D8D8DB`,
  },
}

export default ButtonPrimaryStyle
