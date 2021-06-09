import * as React from 'react'
import { AlertProps, Button, Snackbar } from '@material-ui/core/'
import MuiAlert from '@material-ui/core/Alert'
import { makeStyles, Theme } from '@material-ui/core/styles'

const Alert = React.forwardRef(function Alert(props: AlertProps, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref as React.RefObject<HTMLDivElement>}
      variant='filled'
      {...props}
    />
  )
})

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(4),
      width: '17%'
    }
  }
}))

const AlertBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Button variant='contained' onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant='outlined' onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity='error' variant='outlined'>
        This is an error message!
      </Alert>
      <Alert severity='warning' variant='outlined'>
        This is a warning message!
      </Alert>
      <Alert severity='info' variant='outlined'>
        This is an information message!
      </Alert>
      <Alert severity='success' variant='outlined'>
        This is a success message!
      </Alert>
    </div>
  )
}

export default AlertBlock
