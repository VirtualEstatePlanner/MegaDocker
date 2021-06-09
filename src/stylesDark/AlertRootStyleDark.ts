import { CSSProperties } from '@material-ui/styles'

const AlertRootStyleDark: CSSProperties = {
  maxWidth: `90%`,
  minWidth: `150px`,
  textOverflow: `wrap`,
  backgroundColor: `#131313`,
  borderRadius: `24px`,
  boxShadow: `7px 7px 15px #000000, -3px -3px 7px #39393A`,
  color: `#FFFFFF`,
  '&:hover': {
    backgroundColor: `#131313`,
    borderColor: `#131313`,
    boxShadow: `7px 7px 15px #000000, -3px -3px 7px #39393A`
  }
}

export default AlertRootStyleDark
