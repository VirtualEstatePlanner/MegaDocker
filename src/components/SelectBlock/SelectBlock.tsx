import * as React from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Theme,
  createStyles,
  makeStyles
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 150
    }
  })
)

const SelectBlock: React.FC = (): JSX.Element => {
  const classes = useStyles()
  const [Department, setDepartment] = React.useState('')

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setDepartment(event.target.value as string)
  }

  return (
    <div>
      <FormControl
        variant='outlined'
        margin='dense'
        className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>
          Department
        </InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={Department}
          onChange={handleChange}
          label='Department'>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>General Admin</MenuItem>
          <MenuItem value={2}>Development</MenuItem>
          <MenuItem value={3}>Tech</MenuItem>
          <MenuItem value={4}>Sales</MenuItem>
          <MenuItem value={5}>Marketing</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectBlock
