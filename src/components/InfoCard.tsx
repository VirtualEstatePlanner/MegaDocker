import React from "react";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Context } from "./Context";
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { megaReducer } from "../functions/reducers/megaReducer";

export const InfoCard: React.FC = (props: any): React.ReactElement => {
    const appState = React.useContext(Context)

    // because we aren't using dispatch in this file
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, appState)
    console.log(`updating InfoCard`)

    return (
        <Card className="ManikinInfo">
            <CardContent>{state.infoContent}</CardContent>
        </Card>
    )
}