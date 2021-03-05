/** @format */

import grey from '@material-ui/core/colors/grey'
import { CSSProperties } from '@material-ui/styles'

const InputLabelRootStyle: CSSProperties = {
  'color': grey[700],
  'textShadow': '2px 2px 3px #F0F0F3, -2px -2px 3px #F0F0F3, -2px 2px 3px #F0F0F3, 2px -2px 3px #F0F0F3',
  '&$focused': {
    color: `black`,
  },
}

export default InputLabelRootStyle
