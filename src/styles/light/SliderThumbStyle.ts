import { CSSProperties } from '@material-ui/styles'

const SliderThumbStyle: CSSProperties = {
  height: 28,
  width: 28,
  backgroundColor: `#F0F0F3`,
  boxShadow: `inset -2px -2px 3px #FFFFFF, inset 1px 1px 2px #aeaeb1, -2px -2px 3px #FFFFFF, 1px 1px 2px #aeaeb1,
  inset -2px 2px 3px #FFFFFF, inset -1px 1px 2px #aeaeb1,  inset 2px -2px 3px #FFFFFF, inset 1px -1px 2px #aeaeb1`,
  marginTop: -14,
  marginLeft: -14,
  '&:focus, &:hover, &.Mui-active': {
    boxShadow: `2px 2px 4px #aeaeb1, -3px -3px 6px #FFFFFF, inset -5px -5px 10px #aeaeb1, inset 6px 6px 12px #FFFFFF`,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      boxShadow: `inset -2px -2px 3px #FFFFFF, inset 1px 1px 2px #aeaeb1, -2px -2px 3px #FFFFFF, 1px 1px 2px #aeaeb1,
        inset -2px 2px 3px #FFFFFF, inset -1px 1px 2px #aeaeb1,  inset 2px -2px 3px #FFFFFF, inset 1px -1px 2px #aeaeb1`
    }
  }
}

export default SliderThumbStyle
