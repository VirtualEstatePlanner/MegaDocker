import React from "react";
// import { userMegaDockerFolder } from '../globals/userMegaDockerFolder'
// import { mobName } from '../mobparts/memories/mobName'
// import { userMob } from '../globals/userMob'
// import { saveFile } from '../functions/core/saveFile'
import Button from "@material-ui/core/Button"

function buttonClicked() {
    //saveFile(userMegaDockerFolder, mobName.value, `yml`, userMob.mobManikins.toString())
    console.log("pressed export (but didn't do anything! Fix this!)");
    // saveFile(
    //     `${process.env.PWD}`,
    //     `testfilename`,
    //     `yml`,
    //     `so what the hell does this yml even say?`
    // );
}

export const ButtonExportYML: React.FC = (props: any): React.ReactElement =>
    <Button value={props.children} variant="contained" onClick={buttonClicked}>Export YML</Button>
