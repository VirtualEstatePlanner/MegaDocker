/** @format */

//  ContainerButtonPane.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'

export const ContainerButtonPane: React.FC = (): React.ReactElement => (
  <div className='ButtonPane'>
    <ButtonExportDockerSwarm />
  </div>
)
