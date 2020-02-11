import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = (props: any): React.ReactElement =>
    <div className="ButtonPane">
        <ButtonExportYML>{props.children}</ButtonExportYML>
        <ButtonSaveMob>{props.children}</ButtonSaveMob>
        <ButtonLaunchMob>{props.children}</ButtonLaunchMob>
    </div>
