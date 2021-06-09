import * as React from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles
} from '@material-ui/core'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const useStyles = makeStyles({
  root: {
    width: 500
  }
})

const BottomNavigationBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = React.useState('recents')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}>
      <BottomNavigationAction
        label='Recents'
        value='recents'
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label='Favorites'
        value='favorites'
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label='Nearby'
        value='nearby'
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        label='Folder'
        value='folder'
        icon={<FolderIcon />}
      />
    </BottomNavigation>
  )
}

export default BottomNavigationBlock
