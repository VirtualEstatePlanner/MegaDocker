import React from "react";
// import { saveFile } from "../functions/core/saveFile";
import Button from "@material-ui/core/Button"
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { MegaContext } from "./MegaContext";

// saveFile(
//     `${process.env.PWD}`,
//     `testfilename`,
//     `megamob`,
//     `so what the hell does this mob even do?`
// );

export const ButtonSaveMob: React.FC = (): React.ReactElement => {

    const { state, dispatch }: { state: IMegaDockerState, dispatch: React.Dispatch<IMegaDockerAction> } = React.useContext(MegaContext)

    const buttonClicked = (): void => {
        dispatch({ type: `SAVE_MOB_FILE`, payload: { manikins: state.selectedManikins, memories: state.memories } })
    }

    return (
        <Button variant="contained" onClick={buttonClicked}>Save this Mob</Button>
    )
}