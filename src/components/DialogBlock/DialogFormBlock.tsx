import * as React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'

const DialogFormBlock: React.FC<any> = (props: any) => {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button variant='contained' color='primary' onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe the orb.run newsletter, please enter your email address
            here. We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='normal'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
            variant='outlined'
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='primary' onClick={handleClose}>
            Cancel
          </Button>
          <Button variant='contained' color='secondary' onClick={handleClose}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogFormBlock
