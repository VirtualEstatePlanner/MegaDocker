import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const StepIconRootStyle: CSSProperties = {
  color: grey[300],
  "&$error": {
    "borderColor": grey[300],
    "color": "red"
  }
}

export default StepIconRootStyle
