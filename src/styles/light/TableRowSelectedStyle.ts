import { CSSProperties } from '@mui/styles'

const TableRowSelectedStyle: CSSProperties = {
  backgroundColor: `#EEEEEE`,
  color: `#000000`,
  borderRadius: `25px`,
  marginTop: `8px`,
  marginBottom: `8px`,
  '&:hover': {
    backgroundColor: `#EEEEEE`,
    color: `#000000`,
    boxShadow: `.75px -4px 3px -3px #D8D8DB, inset .75px 1px .5px #D8D8DB, -.75px 4px 3px -3px white, inset -.75px -1px .5px white`
  }
}

export default TableRowSelectedStyle
