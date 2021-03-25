import grey from '@material-ui/core/colors/grey'
import { CSSProperties } from '@material-ui/styles'

const InputLabelRootStyleDark: CSSProperties = {
  color: grey[300],
  textShadow:
    '2px 2px 3px #131313, -2px -2px 3px #131313, -2px 2px 3px #131313, 2px -2px 3px #131313',
  '&$focused': {
    color: `#FFFFFF`
  }
}

export default InputLabelRootStyleDark
