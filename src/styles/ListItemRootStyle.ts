/** @format */

import { CSSProperties } from '@material-ui/styles'

const ListItemRootStyle: CSSProperties = {
  'backgroundColor': `#F0F0F3`,
  'color': `#000000`,
  'boxShadow': `3px 3px 7px #D8D8DB, -5px -5px 10px white`,
  'borderRadius': `8px`,
  'marginTop': `8px`,
  'marginBottom': `8px`,
  '&:hover': {
    backgroundColor: `#F0F0F3`,
    color: `#000000`,
    boxShadow: `inset -3px -3px 7px #ffffff, inset 3px 3px 5px #ADADAF`,
    borderRadius: `8px`,
  },
}

export default ListItemRootStyle
