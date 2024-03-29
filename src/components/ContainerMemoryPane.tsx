/** @format */

//  ContainerMemoryPane.tsx
//  MEGADocker
//  a React Component that renders a div that holds the memory table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { MemoryTable } from './MemoryTable'

export const ContainerMemoryPane: React.FC = (): React.ReactElement => {
  return (
    <div className='MemoryPane'>
      <MemoryTable />
    </div>
  )
}
