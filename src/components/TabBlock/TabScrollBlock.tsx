import * as React from 'react'
import { Tab, Tabs, Theme, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper
  }
}))

const TabScrollBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        aria-label='scrollable force tabs example'>
        <Tab label='Item One' />
        <Tab label='Item Two' />
        <Tab label='Item Three' />
        <Tab label='Item Four' />
        <Tab label='Item Five' />
        <Tab label='Item Six' />
        <Tab label='Item Seven' />
      </Tabs>
    </div>
  )
}

export default TabScrollBlock
