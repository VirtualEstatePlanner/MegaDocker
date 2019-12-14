import React from "react";
import { saveFile } from "../functions/core/saveFile";

function buttonClicked() {
    console.log("pressed save!");
    saveFile(
        `${process.env.PWD}`,
        `testfilename`,
        `megamob`,
        `so what the hell does this mob even say?`
    );
}

export const ButtonSaveMob: React.FC = () => {
    return (
        <button onClick={buttonClicked}>Save Mob</button>
    );
};
