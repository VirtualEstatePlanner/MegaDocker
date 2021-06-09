import * as React from 'react'
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'

const RadioButtonBlock: React.FC = (): JSX.Element => {
  const [value, setValue] = React.useState('female')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value)
  }

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>Gender</FormLabel>
      <RadioGroup
        aria-label='gender'
        name='gender1'
        value={value}
        onChange={handleChange}>
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio />} label='Male' />
        <FormControlLabel value='other' control={<Radio />} label='Other' />
        <FormControlLabel
          value='rathernotsay'
          control={<Radio />}
          label='I would rather not say'
        />
        <FormControlLabel
          value='meatpopsicle'
          disabled
          control={<Radio />}
          label='Meat Popsicle'
        />
      </RadioGroup>
    </FormControl>
  )
}

export default RadioButtonBlock
