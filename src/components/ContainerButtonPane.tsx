/** @format */

//  ContainerButtonPane.tsx
//  MEGADocker
//  a React Component that renders a div that holds the buttons
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ButtonSaveZipFile } from './ButtonSaveZipFile'

export const ContainerButtonPane: React.FC = (): React.ReactElement => (
  <div className='ButtonPane'>
    <ButtonSaveZipFile />
  </div>
)
