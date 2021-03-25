import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const InputBaseRootStyleDark: CSSProperties = {
  color: grey[400],
  marginBottom: `5px`,
  boxShadow: `inset -1px -1px 3px #39393A, inset 3px 3px 5px #000000`,
  '&:hover': {
    color: grey[300],
    boxShadow: `5px 5px 10px #000000, -2px -2px 5px #39393A`
  },
  '&$focused': {
    color: grey[200],
    boxShadow: `7px 7px 15px #000000, -2px -2px 7px #39393A`,
    '&:hover': {
      color: grey[200],
      boxShadow: `7px 7px 15px #000000, -2px -2px 7px #39393A`
    }
  }
}

export default InputBaseRootStyleDark
