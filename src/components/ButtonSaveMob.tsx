import React from "react";
// import { saveFile } from "../functions/core/saveFile";
import Button from "@material-ui/core/Button"

function saveButtonClicked() {
    console.log("pressed save (but didn't do anything)");
    // saveFile(
    //     `${process.env.PWD}`,
    //     `testfilename`,
    //     `megamob`,
    //     `so what the hell does this mob even do?`
    // );
}

export const ButtonSaveMob: React.FC = (): React.ReactElement => {
    console.log(`generating ButtonSaveMob`)
    return (
        <Button variant="contained" onClick={saveButtonClicked}>Save Mob</Button>
    );
};
