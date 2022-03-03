/** @format */

//  ExportButtons.tsx
//  MEGADocker
//  a React Component that renders a fragment that holds the export buttons
//  Created by George Georgulas IV on 3/3/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import * as React from 'react'
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'
import { ButtonExportKubernetesPod } from './ButtonExportKubernetesPod'

export const ExportButtons: React.FC = (): React.ReactElement => (
  <>
    <ButtonExportDockerSwarm />
    <ButtonExportKubernetesPod />
  </>
)
