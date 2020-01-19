import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonPane: React.FC = () => {
    return (
        <div className="ButtonPane" style={{ backgroundColor: "dodgerblue" }}>
            <ButtonExportYML />
            <ButtonSaveMob />
            <ButtonLaunchMob />
        </div>
    );
};
