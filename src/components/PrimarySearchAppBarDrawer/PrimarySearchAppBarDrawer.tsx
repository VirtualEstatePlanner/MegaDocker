import * as React from 'react'
import {
  Drawer,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SpeedDial,
  Theme,
  Toolbar,
  createStyles,
  makeStyles,
  Tooltip
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MailIcon from '@material-ui/icons/Mail'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import NestedList from '../NestedList/NestedList'
import SearchField from '../SearchField/SearchField'
import { ThemeModeSwitch } from '../OrbTheme/ThemeModeSwitch'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AppsIcon from '@material-ui/icons/Apps'
import BarChartIcon from '@material-ui/icons/BarChart'
import CloudIcon from '@material-ui/icons/Cloud'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PersonIcon from '@material-ui/icons/Person'
import SettingsIcon from '@material-ui/icons/Settings'
import Orbrunicon from './Orbrunicon'
import Orbrunlogoblack from './Orbrunlogoblack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerClose: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  })
)

const PrimarySearchAppBarDrawer: React.FC<any> = (props: any): JSX.Element => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <SpeedDial
        sx={{ position: `fixed`, top: 6, left: 16 }}
        ariaLabel='open drawer'
        icon={<Orbrunicon />}
        onClick={handleDrawerOpen}
        open={false}
      />
      <Drawer variant='persistent' anchor='top' open={open}>
        <Toolbar style={{ justifyContent: `left` }}>
          <Tooltip title='Close Menu'>
            <IconButton
              size='small'
              aria-label='close drawer'
              onClick={handleDrawerClose}
              className={classes.drawerClose}>
              <CloseIcon />
            </IconButton>
          </Tooltip>
          <Orbrunlogoblack />
        </Toolbar>
        <Toolbar style={{ justifyContent: `center` }}>
          <Tooltip title='Dashboard'>
            <IconButton size='small' aria-label='Dashboard'>
              <DashboardIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Apps'>
            <IconButton size='small' aria-label='Apps'>
              <AppsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Analytics'>
            <IconButton size='small' aria-label='Analytics'>
              <BarChartIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Cloud'>
            <IconButton size='small' aria-label='Cloud'>
              <CloudIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Notifications'>
            <IconButton size='small' aria-label='Notifications'>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Profile'>
            <IconButton size='small' aria-label='Profile'>
              <PersonIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title='Settings'>
            <IconButton size='small' aria-label='Settings'>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <SearchField />
        <NestedList />
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <ThemeModeSwitch />
        </List>
      </Drawer>
    </div>
  )
}
export default PrimarySearchAppBarDrawer
