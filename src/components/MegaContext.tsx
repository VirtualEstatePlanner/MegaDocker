/** @format */

//  MegaContext.tsx
//  MEGADocker
//  a React Component that handles application state for the MEGADocker application
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { megaReducer } from '../functions/reducers/megaReducer'
import { ThemeProvider } from '@mui/material'
import { initialMegaDockerState } from '../globals/initialMegaDockerState'

export const MegaContext: React.Context<any> = React.createContext({
  state: initialMegaDockerState
})

export const MegaProvider: React.FC = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)

  return (
    <MegaContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>{props.children}</ThemeProvider>
    </MegaContext.Provider>
  )
}

export const MegaConsumer: React.FC = (props: any): React.ReactElement => {
  return <MegaContext.Consumer>{props.children}</MegaContext.Consumer>
}
