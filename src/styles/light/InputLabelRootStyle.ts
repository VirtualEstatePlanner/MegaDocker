import grey from '@mui/material/colors/grey'
import { CSSProperties } from '@mui/styles'

const InputLabelRootStyle: CSSProperties = {
  color: grey[700],
  textShadow:
    '2px 2px 3px #F0F0F3, -2px -2px 3px #F0F0F3, -2px 2px 3px #F0F0F3, 2px -2px 3px #F0F0F3',
  '&$focused': {
    color: `black`
  }
}

export default InputLabelRootStyle
