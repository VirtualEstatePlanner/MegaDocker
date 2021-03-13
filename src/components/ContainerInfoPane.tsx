/** @format */

//  ContainerInfoPane.tsx
//  MegaDocker
//  a React Component that renders a div holds the information card - deprecated
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { InfoCard } from './InfoCard'

export const ContainerInfoPane: React.FC = (): React.ReactElement => (
  <div className='InfoPane'>
    <InfoCard />
  </div>
)
