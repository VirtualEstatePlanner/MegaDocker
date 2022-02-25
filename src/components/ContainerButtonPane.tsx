/** @format */

//  ContainerButtonPane.tsx
//  MEGADocker
//  a React Component that renders a div that holds the buttons
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ButtonGetDocker } from './ButtonGetDocker'
//import { ButtonUploadMobFile } from './ButtonUploadMobFile'
import { ButtonSaveMobFile } from './ButtonSaveMobFile'
import { ButtonExportZipFile } from './ButtonExportZipFile'

export const ContainerButtonPane: React.FC = (): React.ReactElement => (
  <div className='ButtonPane'>
    <ButtonGetDocker />
    <ButtonSaveMobFile />
    <ButtonExportZipFile />
  </div>
)
//TODO: Make Upload Button work
//<ButtonUploadMobFile />