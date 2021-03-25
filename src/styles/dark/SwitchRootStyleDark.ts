import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const SwitchRootStyleDark: CSSProperties = {
  root: {
    width: 42,
    height: 26,
    padding: 3
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: '#ffffff',
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none'
      }
    }
  },
  thumb: {
    width: 24,
    height: 24
  },
  track: {
    borderRadius: 26,
    backgroundColor: grey[200],
    opacity: 1
  }
}

export default SwitchRootStyleDark
