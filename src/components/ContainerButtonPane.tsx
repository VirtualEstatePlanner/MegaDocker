import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = (): React.ReactElement =>
    <div className="ButtonPane">
        <ButtonExportYML></ButtonExportYML>
        <ButtonSaveMob></ButtonSaveMob>
        <ButtonLaunchMob></ButtonLaunchMob>
    </div>
