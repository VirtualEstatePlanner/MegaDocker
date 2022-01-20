import { CSSProperties } from '@mui/styles'

const TableRowRootStyleDark: CSSProperties = {
  backgroundColor: `#000000`,
  color: `#FFFFFF`,
  borderRadius: `25px`,
  marginTop: `8px`,
  marginBottom: `8px`,
  '&:hover': {
    backgroundColor: `#111111`,
    color: `#FFFFFF`,
    boxShadow: `.75px -4px 3px -3px #D8D8DB, inset .75px 1px .5px #D8D8DB, -.75px 4px 3px -3px white, inset -.75px -1px .5px white`
  }
}

export default TableRowRootStyleDark
