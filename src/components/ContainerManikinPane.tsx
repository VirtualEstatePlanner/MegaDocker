/** @format */

//  ContainerManikinPane.tsx
//  MEGADocker
//  a React Component that renders a div that holds the Manikin table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ManikinTable } from './ManikinTable'

export const ContainerManikinPane: React.FC = (): React.ReactElement => (
  <div className='ManikinPane'>
    <ManikinTable />
  </div>
)
