import * as React from 'react'
import { orbReducer } from '../../functions/reducers/OrbReducer'
import { ThemeProvider } from '@material-ui/core'
import { initialOrbState } from '../../globals/name/initialOrbState'

export const OrbContext: React.Context<any> = React.createContext({
  state: initialOrbState
})

export const OrbProvider: React.FC = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(orbReducer, initialOrbState)

  return (
    <OrbContext.Provider value={{ ...state, ...dispatch }}>
      <ThemeProvider theme={state.theme}>{props.children}</ThemeProvider>
    </OrbContext.Provider>
  )
}
