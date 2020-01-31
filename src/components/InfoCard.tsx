import React from "react";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { Context } from "./Context";
//import { IMegaDockerState } from "../interfaces/IMegaDockerState";
//import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
//import { megaReducer } from "../functions/reducers/megaReducer";

export const InfoCard: React.FC = (props: any): React.ReactElement => {
    const appState = React.useContext(Context)
    //    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, appState)

    return (
        <Card className="ManikinInfo">
            <CardContent>{appState.infoContent}</CardContent>
        </Card>
    )
}