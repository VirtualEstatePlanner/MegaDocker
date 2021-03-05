/** @format */

import React from 'react'
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'
// import { ButtonExportKubernetes } from './ButtonExportKubernetes'
// import { ButtonOpenMob } from './ButtonOpenMob'
// import { ButtonSaveMob } from './ButtonSaveMob'

/* <ButtonOpenMob />
<ButtonSaveMob />
<ButtonExportKubernetes /> */
export const ButtonPane: React.FC = (): React.ReactElement => (
  <div className='ButtonPane'>
    <ButtonExportDockerSwarm />
  </div>
)
