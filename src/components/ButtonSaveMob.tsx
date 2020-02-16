import React from "react";
// import { saveFile } from "../functions/core/saveFile";
import Button from "@material-ui/core/Button"

function saveButtonClicked() {
    // TODO: this entire function
    // saveFile(
    //     `${process.env.PWD}`,
    //     `testfilename`,
    //     `megamob`,
    //     `so what the hell does this mob even do?`
    // );
}

export const ButtonSaveMob: React.FC = (): React.ReactElement =>
    <Button variant="contained" onClick={saveButtonClicked}>Save Mob</Button>
