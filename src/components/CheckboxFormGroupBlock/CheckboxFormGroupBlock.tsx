import * as React from 'react'
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    formControl: {
      margin: theme.spacing(3)
    }
  })
)

const CheckboxFormGroupBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    gilad: true,
    jason: true,
    antoine: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  const { gilad, jason, antoine } = state
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name='gilad' />
            }
            label='Gilad Gray'
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name='jason' />
            }
            label='Jason Killian'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name='antoine'
              />
            }
            label='Antoine Llorca'
          />
        </FormGroup>
        <FormHelperText>Be careful</FormHelperText>
      </FormControl>
      <FormControl
        required
        error={error}
        component='fieldset'
        className={classes.formControl}>
        <FormLabel component='legend'>Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name='gilad' />
            }
            label='Gilad Gray'
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name='jason' />
            }
            label='Jason Killian'
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name='antoine'
              />
            }
            label='Antoine Llorca'
          />
        </FormGroup>
        <FormHelperText>
          {error
            ? 'You must select exactly the 2 most sus individuals!'
            : 'These 2 individuals are very sus.'}
        </FormHelperText>
      </FormControl>
    </div>
  )
}

export default CheckboxFormGroupBlock
