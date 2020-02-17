import React from "react";
import { ButtonExportDockerSwarm } from './ButtonExportDockerSwarm'
import { ButtonExportKubernetes } from './ButtonExportKubernetes'
import { ButtonOpenMob } from './ButtonOpenMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = (): React.ReactElement =>
    <div className="ButtonPane">
        <ButtonExportDockerSwarm />
        <ButtonExportKubernetes />
        <ButtonSaveMob />
        <ButtonOpenMob />
    </div>
