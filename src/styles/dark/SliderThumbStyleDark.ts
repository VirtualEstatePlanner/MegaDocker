import { CSSProperties } from '@mui/styles'

const SliderThumbStyleDark: CSSProperties = {
  height: 28,
  width: 28,
  backgroundColor: `#131313`,
  boxShadow: `inset -1px -1px 2px #39393A, inset 2px 2px 3px #000000, -1px -1px 2px #39393A, 2px 2px 3px #000000,
  inset -1px 1px 2px #39393A, inset -2px 2px 3px #000000,  inset 1px -1px 2px #39393A, inset 2px -2px 3px #000000`,
  marginTop: -14,
  marginLeft: -14,
  '&:focus, &:hover, &.Mui-active': {
    boxShadow: `3px 3px 6px #000000, -1px -1px 1px #39393A, inset -6px -6px 12px #000000, inset 5px 5px 10px #39393A`,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      boxShadow: `inset -1px -1px 2px #39393A, inset 2px 2px 3px #000000, -1px -1px 2px #39393A, 2px 2px 3px #000000,
        inset -1px 1px 2px #39393A, inset -2px 2px 3px #000000,  inset 1px -1px 2px #39393A, inset 2px -2px 3px #000000`
    }
  }
}

export default SliderThumbStyleDark
