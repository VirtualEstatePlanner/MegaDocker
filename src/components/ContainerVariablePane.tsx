import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonRow: React.FC = () => {
    return (
        <div className="VariablePane
        ">
            <ButtonExportYML />
            <ButtonSaveMob />
            <ButtonLaunchMob />
        </div>
    );
};
