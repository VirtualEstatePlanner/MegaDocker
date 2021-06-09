import * as React from 'react'
import { Switch } from '@material-ui/core'

const SwitchBlock: React.FC = (): JSX.Element => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }

  return (
    <>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        color='secondary'
        name='checkedA'
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color='secondary'
        name='checkedB'
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </>
  )
}

export default SwitchBlock
