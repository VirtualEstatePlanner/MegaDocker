import { CSSProperties } from '@material-ui/styles'

const TableRowSelectedStyleDark: CSSProperties = {
  backgroundColor: `#333333`,
  color: `#EEEEEE`,
  borderRadius: `25px`,
  marginTop: `8px`,
  marginBottom: `8px`,
  '&:hover': {
    backgroundColor: `#333333`,
    color: `#EEEEEE`,
    boxShadow: `.75px -4px 3px -3px #D8D8DB, inset .75px 1px .5px #D8D8DB, -.75px 4px 3px -3px white, inset -.75px -1px .5px white`
  }
}

export default TableRowSelectedStyleDark
