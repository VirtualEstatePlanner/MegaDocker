import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'

const StepIconRootStyleDark: CSSProperties = {
  color: grey[900],
  '&$error': {
    borderColor: grey[900],
    color: `red`
  }
}

export default StepIconRootStyleDark
