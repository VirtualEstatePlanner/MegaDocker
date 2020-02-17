import React from "react";
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'
import { ButtonExportKubernetes } from './ButtonExportKubernetes'
import { ButtonOpenMob } from './ButtonOpenMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = (): React.ReactElement =>
    <div className="ButtonPane">
        <ButtonOpenMob />
        <ButtonSaveMob />
        <ButtonExportDockerSwarm />
        <ButtonExportKubernetes />
    </div>
