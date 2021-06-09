import * as React from 'react'
import { TextField, Theme, createStyles, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    textField: {
      margin: theme.spacing(1),
      width: '25ch'
    }
  })
)

const TextFieldLayoutBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div>
        <TextField
          className={classes.textField}
          required
          id='outlined-required'
          label='Required'
          defaultValue='Hello World'
        />
        <TextField
          className={classes.textField}
          disabled
          id='outlined-disabled'
          label='Disabled'
          defaultValue='Hello World'
        />
        <TextField
          className={classes.textField}
          id='outlined-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
        />
        <TextField
          className={classes.textField}
          id='outlined-read-only-input'
          label='Read Only'
          defaultValue='Hello World'
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          className={classes.textField}
          id='outlined-number'
          label='Number'
          type='number'
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          className={classes.textField}
          id='outlined-search'
          label='Search field'
          type='search'
        />
        <TextField
          className={classes.textField}
          id='outlined-helperText'
          label='Helper text'
          defaultValue='Default Value'
          helperText='Some important text'
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          required
          id='standard-required'
          label='Required'
          defaultValue='Hello World'
          variant='standard'
        />
        <TextField
          className={classes.textField}
          disabled
          id='standard-disabled'
          label='Disabled'
          defaultValue='Hello World'
          variant='standard'
        />
        <TextField
          className={classes.textField}
          id='standard-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='standard'
        />
        <TextField
          className={classes.textField}
          id='standard-read-only-input'
          label='Read Only'
          defaultValue='Hello World'
          InputProps={{
            readOnly: true
          }}
          variant='standard'
        />
        <TextField
          className={classes.textField}
          id='standard-number'
          label='Number'
          type='number'
          InputLabelProps={{
            shrink: true
          }}
          variant='standard'
        />
        <TextField
          className={classes.textField}
          id='standard-search'
          label='Search field'
          type='search'
          variant='standard'
        />
        <TextField
          className={classes.textField}
          id='standard-helperText'
          label='Helper text'
          defaultValue='Default Value'
          helperText='Some important text'
          variant='standard'
        />
      </div>
      <div>
        <TextField
          id='outlined-full-width'
          label='Label'
          style={{ margin: 8 }}
          placeholder='Placeholder'
          helperText='Full width!'
          fullWidth
          margin='dense'
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id='outlined-full-width'
          label='Label'
          style={{ margin: 8 }}
          placeholder='Placeholder'
          helperText='Full width and five rows!'
          fullWidth
          multiline
          rows={5}
          margin='dense'
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label='Label'
          id='outlined-margin-dense'
          defaultValue='Default Value'
          className={classes.textField}
          helperText='Some important text'
          margin='dense'
        />
        <TextField
          label='Label'
          id='outlined-margin-dense-2'
          defaultValue='Default Value'
          className={classes.textField}
          helperText='Some important text'
          margin='dense'
        />
      </div>
    </div>
  )
}

export default TextFieldLayoutBlock
