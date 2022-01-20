import { CSSProperties } from '@mui/styles'

const AlertRootStyle: CSSProperties = {
  maxWidth: `90%`,
  minWidth: `150px`,
  textOverflow: `wrap`,
  backgroundColor: `#F0F0F3`,
  borderRadius: `24px`,
  boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
  color: `#000000`,
  '&:hover': {
    backgroundColor: `#F0F0F3`,
    borderColor: `#F0F0F3`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`
  }
}

export default AlertRootStyle
