import * as React from 'react'
import { Button, Menu, MenuItem } from '@material-ui/core'

const SimpleMenu: React.FC = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <MenuItem color='primary' onClick={handleClose}>
          Profile
        </MenuItem>
        <MenuItem color='primary' onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem color='primary' onClick={handleClose}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SimpleMenu
