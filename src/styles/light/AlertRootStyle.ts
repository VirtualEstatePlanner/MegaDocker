import { CSSProperties } from '@material-ui/styles'

const AlertRootStyle: CSSProperties = {
  backgroundColor: `#F0F0F3`,
  borderRadius: `24px`,
  boxShadow: `7px 7px 15px #9B9B9E, -3px -3px 7px white`,
  color: `#000000`,
  '&:hover': {
    borderColor: `#F0F0F3`,
    boxShadow: `7px 7px 15px #c2c2c5, -3px -3px 7px white`
  }
}

export default AlertRootStyle
