import { CSSProperties } from '@mui/styles'

const SpeedDialFabStyleDark: CSSProperties = {
  backgroundColor: `#2A2A2A80`,
  backdropFilter: `blur(5px)`,
  boxShadow: '1px 1px 7px #00000040',
  '&:hover': {
    backgroundColor: `#3F3F3FB3`,
    backdropFilter: `blur(10px)`,
    boxShadow: '3px 3px 7px #000000'
  }
}

export default SpeedDialFabStyleDark
