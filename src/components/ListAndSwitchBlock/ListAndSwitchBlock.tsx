import * as React from 'react'
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Switch,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core'
import BluetoothIcon from '@material-ui/icons/Bluetooth'
import WifiIcon from '@material-ui/icons/Wifi'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360
    }
  })
)

const ListAndSwitchBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(['wifi'])

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List
      subheader={<ListSubheader>Settings</ListSubheader>}
      className={classes.root}>
      <ListItem>
        <ListItemIcon>
          <WifiIcon />
        </ListItemIcon>
        <ListItemText id='switch-list-label-wifi' primary='Wi-Fi' />
        <Switch
          edge='end'
          onChange={handleToggle('wifi')}
          checked={checked.indexOf('wifi') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-wifi'
          }}
        />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <BluetoothIcon />
        </ListItemIcon>
        <ListItemText id='switch-list-label-bluetooth' primary='Bluetooth' />
        <Switch
          edge='end'
          onChange={handleToggle('bluetooth')}
          checked={checked.indexOf('bluetooth') !== -1}
          inputProps={{
            'aria-labelledby': 'switch-list-label-bluetooth'
          }}
        />
      </ListItem>
    </List>
  )
}

export default ListAndSwitchBlock
