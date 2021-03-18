/** @format */

//  App.tsx
//  MEGADocker
//  a React Component that renders the entire MEGADocker application
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { ContainerManikinPane } from './ContainerManikinPane'
import { ContainerMainArea } from './ContainerMainArea'
import { MegaProvider } from './MegaContext'
import { MegaTheme } from './MegaTheme'
import { ThemeProvider } from '@material-ui/core'

export const App: React.FC = (): React.ReactElement => {
  return (
    <div className='App'>
      <MegaProvider>
        <ThemeProvider theme={MegaTheme}>
          <ContainerManikinPane />
          <ContainerMainArea />
        </ThemeProvider>
      </MegaProvider>
    </div>
  )
}
