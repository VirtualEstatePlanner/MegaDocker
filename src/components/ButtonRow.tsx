import React from "react";
import { ButtonExportYML } from './ButtonExportYML'
import { ButtonLaunchMob } from './ButtonLaunchMob'
import { ButtonSaveMob } from './ButtonSaveMob'

export const ButtonRow: React.FC = () => {
    return (
        <div className="ButtonRow">
            <table>
                <tr>
                    <ButtonExportYML />
                    <ButtonSaveMob />
                    <ButtonLaunchMob />
                </tr>
            </table>
        </div>
    );
};
