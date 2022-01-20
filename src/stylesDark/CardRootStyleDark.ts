import { CSSProperties } from '@mui/styles'

const CardRootStyleDark: CSSProperties = {
  padding: `5%`,
  borderRadius: `24px`,
  boxShadow: `5px 5px 12px #000000, 
  -2px -2px 8px #39393A,  
  inset -1px -1px .5px #000000, 
  inset 1px 1px .5px #39393A`,
  '&:hover': {
    boxShadow: `none`
  }
}

export default CardRootStyleDark
