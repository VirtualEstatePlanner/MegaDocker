import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const StepIconRootStyleDark: CSSProperties = {
  color: grey[900],
  '&$error': {
    borderColor: grey[900],
    color: `red`
  }
}

export default StepIconRootStyleDark
