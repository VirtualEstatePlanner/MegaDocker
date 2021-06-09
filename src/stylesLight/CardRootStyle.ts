import { CSSProperties } from '@material-ui/styles'

const CardRootStyle: CSSProperties = {
  padding: '5%',
  borderRadius: '24px',
  boxShadow: `5px 5px 12px #BFBFC1, 
  -5px -5px 12px white, 
  inset -1px -1px .5px #BFBFC1, 
  inset 1px 1px .5px white`,
  '&:hover': {
    boxShadow: `none`
  }
}

export default CardRootStyle
