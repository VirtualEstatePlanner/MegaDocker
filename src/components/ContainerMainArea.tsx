/** @format */

//  ContainerMainArea.tsx
//  MEGADocker
//  a React Component that renders a div that holds the right side of the application
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ContainerButtonPane } from './ContainerButtonPane'
import { ContainerMemoryPane } from './ContainerMemoryPane'

export const ContainerMainArea: React.FC = (): React.ReactElement => (
  <div className='MainArea'>
    <ContainerMemoryPane />
    <ContainerButtonPane />
  </div>
)
