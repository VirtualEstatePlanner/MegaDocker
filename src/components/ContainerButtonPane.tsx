import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = (): React.ReactElement => {
    console.log(`generating ButtonPane`)
    return (
        <div className="ButtonPane">
            <ButtonExportYML />
            <ButtonSaveMob />
            <ButtonLaunchMob />
        </div>
    );
};
