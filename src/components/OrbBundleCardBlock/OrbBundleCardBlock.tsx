import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import OrbBundleCard from '../OrbBundleCard/OrbBundleCard'
import homeOrb from '../../interfaces/orbs/bundles/homeOrb'
import educatorOrb from '../../interfaces/orbs/bundles/educatorOrb'
import enterpriseOrb from '../../interfaces/orbs/bundles/enterpriseOrb'
import smallbusinessOrb from '../../interfaces/orbs/bundles/smallbusinessOrb'
import studentOrb from '../../interfaces/orbs/bundles/studentOrb'
import workOrb from '../../interfaces/orbs/bundles/workOrb'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1)
    },
    container: {
      alignItems: `center`,
      justify: `flex-center`
    }
  })
)

const OrbBundleCardBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div>
      <Grid container direction='row' spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={homeOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={workOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={studentOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={educatorOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={smallbusinessOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <OrbBundleCard orb={enterpriseOrb.orb}></OrbBundleCard>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default OrbBundleCardBlock
