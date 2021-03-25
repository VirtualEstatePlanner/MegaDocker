import { CSSProperties } from '@material-ui/styles'

const ToggleButtonRootStyle: CSSProperties = {
  borderRadius: '12px',
  border: 'none',
  '&:hover': {
    backgroundColor: `#F0F0F3`,
    boxShadow: `.75px -4px 3px -3px #D8D8DB, 
  inset .75px 1px .75px #D8D8DB, 
  -.75px 4px 3px -3px white, 
  inset -.75px -1px .75px white`
  },
  '&$selected': {
    backgroundColor: `#F0F0F3`,
    color: `#000000`,
    boxShadow: `.75px -4px 5px -3px #D8D8DB, 
  inset .75px 1px .75px #D8D8DB, 
  -.75px 4px 5px -3px white, 
  inset -.75px -1px .75px white`
  }
}

export default ToggleButtonRootStyle
