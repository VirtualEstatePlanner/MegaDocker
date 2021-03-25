/** @format */

//  ContainerButtonPane.tsx
//  MEGADocker
//  a React Component that renders a div that holds the buttons
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'

export const ContainerButtonPane: React.FC = (): React.ReactElement => (
  <div className='ButtonPane'>
    <ButtonExportDockerSwarm />
  </div>
)
