/** @format */

//  ContainerMemoryPane.test.tsx
//  MegaDocker
//  a React Component that renders a div that holds the memory table
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { MemoryTable } from './MemoryTable'

export const ContainerMemoryPane: React.FC = (): React.ReactElement => {
  return (
    <div className='MemoryPane'>
      <MemoryTable />
    </div>
  )
}
