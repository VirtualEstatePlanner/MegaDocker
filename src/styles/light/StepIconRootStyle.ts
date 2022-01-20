import { CSSProperties } from '@mui/styles'
import { grey } from '@mui/material/colors'

const StepIconRootStyle: CSSProperties = {
  color: grey[300],
  "&$error": {
    "borderColor": grey[300],
    "color": "red"
  }
}

export default StepIconRootStyle
