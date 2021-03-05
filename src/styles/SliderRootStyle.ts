/** @format */

import { CSSProperties } from '@material-ui/styles'
import { lightBlue } from '@material-ui/core/colors'

const SliderRootStyle: CSSProperties = {
  'color': lightBlue[900],
  'height': 2,
  'padding': '15px 0',
  '& .MuiSlider-thumb': {
    'height': 28,
    'width': 28,
    'backgroundColor': `#F0F0F3`,
    'boxShadow': `inset -1px -1px 4px #ffffff, inset 1px 1px 2px #ADADAF`,
    'marginTop': -14,
    'marginLeft': -14,
    '&:focus, &:hover, &.Mui-active': {
      'boxShadow': `5px 5px 10px #ADADAF, -5px -5px 10px white`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: `inset -1px -1px 2px #ffffff, inset 1px 1px 4px #ADADAF`,
      },
    },
  },
  '& .MuiSlider-valueLabel': {
    'left': 'calc(-50% + 12px)',
    'top': -22,
    '& *': {
      background: 'transparent',
      color: '#000',
    },
  },
  '& .MuiSlider-track': {
    height: 2,
  },
  '& .MuiSlider-rail': {
    height: 2,
    opacity: 0.5,
    backgroundColor: lightBlue[300],
  },
  '& .MuiSlider-mark': {
    'backgroundColor': lightBlue[300],
    'height': 8,
    'width': 1,
    'marginTop': -3,
    '&.MuiSlider-markActive': {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  },
}

export default SliderRootStyle
