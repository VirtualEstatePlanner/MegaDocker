import { CSSProperties } from '@material-ui/styles'

const ListItemRootStyleDark: CSSProperties = {
  backgroundColor: `transparent`,
  color: `#FFFFFF`,
  borderRadius: `25px`,
  marginTop: `8px`,
  marginBottom: `8px`,
  '&:hover': {
    color: `#FFFFFF`,
    boxShadow: `.75px -4px 3px -3px #000000, 
  inset .75px 1px .5px #000000, 
  -.75px 4px 3px -3px #39393A, 
  inset -.75px -1px .5px #39393A`
  },
  '&$selected': {
    color: `#FFFFFF`,
    boxShadow: `.75px -4px 5px -3px #000000, 
  inset .75px 1px .75px #000000, 
  -.75px 4px 5px -3px #39393A, 
  inset -.75px -1px .75px #39393A`
  }
}

export default ListItemRootStyleDark
