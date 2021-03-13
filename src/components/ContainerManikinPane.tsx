/** @format */

//  App.test.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { ManikinTable } from './ManikinTable'

export const ContainerManikinPane: React.FC = (): React.ReactElement => (
  <div className='ManikinPane'>
    <ManikinTable />
  </div>
)
