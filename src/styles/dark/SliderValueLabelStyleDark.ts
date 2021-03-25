import { CSSProperties } from '@material-ui/styles'
import { grey } from '@material-ui/core/colors'

const SliderValueLabelStyleDark: CSSProperties = {
  left: 'calc(-50% + 12px)',
  top: -22,
  '& *': {
    background: 'transparent',
    color: grey[400]
  }
}

export default SliderValueLabelStyleDark
