import React from "react";
// import { userMegaDockerFolder } from '../globals/userMegaDockerFolder'
// import { mobName } from '../mobparts/memories/mobName'
// import { userMob } from '../globals/userMob'
// import { saveFile } from '../functions/core/saveFile'
import Button from "@material-ui/core/Button"

function buttonClicked() {
    // TODO: this entire function
    //saveFile(userMegaDockerFolder, mobName.value, `yml`, userMob.mobManikins.toString())
    // saveFile(
    //     `${process.env.PWD}`,
    //     `testfilename`,
    //     `yml`,
    //     `so what the hell does this yml even say?`
    // );
}

export const ButtonExportDockerSwarm: React.FC = (props: any): React.ReactElement =>
    <Button value={props.children} variant="contained" onClick={buttonClicked}>Export Mob as Docker Swarm Stack</Button>
