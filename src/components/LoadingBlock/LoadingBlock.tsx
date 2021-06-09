import * as React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2)
      }
    }
  })
)

const LoadingBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CircularProgress thickness={2.5} />
      <CircularProgress color='secondary' thickness={2.5} />
    </div>
  )
}

export default LoadingBlock
