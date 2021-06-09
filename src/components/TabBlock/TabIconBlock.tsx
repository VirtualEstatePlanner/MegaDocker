import * as React from 'react'
import { Tab, Tabs, makeStyles } from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AppsIcon from '@material-ui/icons/Apps'
import AnalyticsIcon from '@material-ui/icons/Analytics'
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles({
  root: {}
})

const TabIconBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='scrollable'
      indicatorColor='secondary'
      textColor='inherit'
      aria-label='icon labeled tabs'>
      <Tab
        label='Dashboard'
        aria-label='Dashboard'
        icon={<DashboardIcon />}
        className={classes.root}
      />
      <Tab
        label='Apps'
        aria-label='Apps'
        icon={<AppsIcon />}
        className={classes.root}
      />
      <Tab
        label='Analytics'
        aria-label='Analytics'
        icon={<AnalyticsIcon />}
        className={classes.root}
      />
      <Tab
        label='Settings'
        aria-label='Settings'
        icon={<SettingsIcon />}
        className={classes.root}
      />
    </Tabs>
  )
}

export default TabIconBlock
