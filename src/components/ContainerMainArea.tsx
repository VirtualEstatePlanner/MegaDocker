/** @format */

//  ContainerMainArea.test.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { ContainerButtonPane } from './ContainerButtonPane'
import { ContainerMemoryPane } from './ContainerMemoryPane'

export const ContainerMainArea: React.FC = (): React.ReactElement => (
  <div className='MainArea'>
    <ContainerMemoryPane />
    <ContainerButtonPane />
  </div>
)
