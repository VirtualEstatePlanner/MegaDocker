import * as React from 'react'
import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Theme
} from '@material-ui/core'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IConfirmationDialogRawProps from '../../interfaces/ui/IConfirmationDialogRawProps'

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel'
]

const ConfirmationDialogRaw: React.FC<IConfirmationDialogRawProps> = (
  props: IConfirmationDialogRawProps
): JSX.Element => {
  const { onClose, value: valueProp, open, ...other } = props
  const [value, setValue] = React.useState(valueProp)
  const radioGroupRef = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp)
    }
  }, [valueProp, open])

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus()
    }
  }

  const handleCancel = () => {
    onClose()
  }

  const handleOk = () => {
    onClose(value)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <Dialog
      maxWidth='xs'
      TransitionProps={{ onEntering: handleEntering }}
      aria-labelledby='confirmation-dialog-title'
      open={open}
      {...other}>
      <DialogTitle id='confirmation-dialog-title'>Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label='ringtone'
          name='ringtone'
          value={value}
          onChange={handleChange}>
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          variant='contained'
          color='primary'
          onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant='contained' color='secondary' onClick={handleOk}>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      width: '80%',
      maxHeight: 435
    }
  })
)

const DialogConfirmationBlock = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('Dione')

  const handleClickListItem = () => {
    setOpen(true)
  }

  const handleClose = (newValue?: string) => {
    setOpen(false)

    if (newValue) {
      setValue(newValue)
    }
  }

  return (
    <div className={classes.root}>
      <List component='div' role='group'>
        <ListItem button divider disabled>
          <ListItemText primary='Interruptions' />
        </ListItem>
        <ListItem
          button
          divider
          aria-haspopup='true'
          aria-controls='ringtone-menu'
          aria-label='phone ringtone'
          onClick={handleClickListItem}>
          <ListItemText primary='Phone ringtone' secondary={value} />
        </ListItem>
        <ListItem button divider disabled>
          <ListItemText
            primary='Default notification ringtone'
            secondary='Tethys'
          />
        </ListItem>
        <ConfirmationDialogRaw
          classes={{
            paper: classes.paper
          }}
          id='ringtone-menu'
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </div>
  )
}

export default DialogConfirmationBlock
