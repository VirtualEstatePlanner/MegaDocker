/** @format */

//  DataButtons.tsx
//  MEGADocker
//  a React Component that renders a fragment that holds the save and load buttons
//  Created by George Georgulas IV on 3/3/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ButtonSaveMobFile } from './ButtonSaveMobFile'
import { ButtonUploadMobFile } from './ButtonUploadMobFile'

export const DataButtons: React.FC = (): React.ReactElement => (
  <>
    <ButtonUploadMobFile />
    <ButtonSaveMobFile />
  </>
)
