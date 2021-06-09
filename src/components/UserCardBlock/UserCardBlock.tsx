import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import UserCard from '../UserCard/UserCard'
import lornaAccount from '../../examples/accounts/users/lornaAccount'
import georgeAccount from '../../examples/accounts/users/georgeAccount'
import joeAccount from '../../examples/accounts/users/joeAccount'
import kiraAccount from '../../examples/accounts/users/kiraAccount'
import kodaAccount from '../../examples/accounts/users/kodaAccount'
import laurenAccount from '../../examples/accounts/users/laurenAccount'
import lennyAccount from '../../examples/accounts/users/lennyAccount'
import darleneAccount from '../../examples/accounts/users/darleneAccount'
import dorisAccount from '../../examples/accounts/users/dorisAccount'
import annieAccount from '../../examples/accounts/users/annieAccount'
import michonneAccount from '../../examples/accounts/users/michonneAccount'
import brunnhildeAccount from '../../examples/accounts/users/brunnhildeAccount'
import trooper from '../../examples/accounts/users/trooper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary
    },
    container: {
      alignItems: 'flex-start',
      justify: 'flex-start'
    }
  })
)

const UserCardBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={georgeAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={joeAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={kodaAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={kiraAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={laurenAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={lornaAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={lennyAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={darleneAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={dorisAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={annieAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={michonneAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={brunnhildeAccount.user}></UserCard>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper} elevation={0}>
            <UserCard user={trooper.user}></UserCard>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserCardBlock
