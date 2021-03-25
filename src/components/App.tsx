/** @format */

//  App.tsx
//  MEGADocker
//  a React Component that renders the entire MEGADocker application
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { Paper } from '@material-ui/core'
import { ContainerManikinPane } from './ContainerManikinPane'
import { ContainerMainArea } from './ContainerMainArea'
import { MegaProvider } from './MegaContext'

export const App: React.FC = (): React.ReactElement => {
  return (
    <div className='App'>
      <MegaProvider>
        <Paper square>
          <ContainerManikinPane />
          <ContainerMainArea />
        </Paper>
      </MegaProvider>
    </div>
  )
}
