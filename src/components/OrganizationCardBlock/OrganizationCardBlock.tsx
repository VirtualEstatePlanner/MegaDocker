import * as React from 'react'
import { Grid, Paper, Theme, createStyles, makeStyles } from '@material-ui/core'
import OrganizationCard from '../OrganizationCard/OrganizationCard'
import OrbTheme from '../OrbTheme/OrbThemeLight'
import megaCom from '../../examples/accounts/organizations/megaCom'
import megaNet from '../../examples/accounts/organizations/megaNet'
import orbRun from '../../examples/accounts/organizations/orbRun'

const OrganizationCardBlock: React.FC = (): JSX.Element => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1
      },
      paper: {
        padding: theme.spacing(1)
      },
      container: {
        alignItems: 'center',
        justify: 'flex-start'
      }
    })
  )

  const classes = useStyles(OrbTheme)
  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrganizationCard org={megaCom} />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrganizationCard org={megaNet} />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrganizationCard org={orbRun} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrganizationCardBlock
