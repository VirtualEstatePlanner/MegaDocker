import React from "react";

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import { MegaContext } from "./MegaContext";
// import { IMegaDockerState } from "../interfaces/IMegaDockerState";
// import { megaReducer } from "../functions/reducers/megaReducer";
// import { IApplicationStartAction } from "../interfaces/actionInterfaces/IApplicationStartAction";
// import { IGenerateYmlOutputAction } from "../interfaces/actionInterfaces/IGenerateYmlOutputAction";
// import { IManikinToggleAction } from "../interfaces/actionInterfaces/IMAnikinToggleAction";
// import { IUpdateInfoContentAction } from "../interfaces/actionInterfaces/IUpdateInfoContentAction";
// import { IUpdateMemoryValueAction } from "../interfaces/actionInterfaces/IUpdateMemoryValueAction";

export const InfoCard: React.FC = (props: any): React.ReactElement => {

    const appState = React.useContext(MegaContext)
    // because we aren't using dispatch in this file
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [state, dispatch]: [
    //     IMegaDockerState,
    //     React.Dispatch<IApplicationStartAction |
    //         IGenerateYmlOutputAction |
    //         IManikinToggleAction |
    //         IUpdateInfoContentAction |
    //         IUpdateMemoryValueAction>] = React.useReducer(megaReducer, appState)

    return (
        <Card className="ManikinInfo">
            <CardContent>{appState.infoContent}</CardContent>
        </Card>
    )
}