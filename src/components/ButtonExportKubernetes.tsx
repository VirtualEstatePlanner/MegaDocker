import React from 'react';
import Button from '@material-ui/core/Button';
import { MegaContext } from './MegaContext';
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction';


// old buttonClick code
//saveFile(userMegaDockerFolder, mobName.value, `yml`, userMob.mobManikins.toString())
// saveFile(
//     `${process.env.PWD}`,
//     `testfilename`,
//     `yml`,
//     `so what the hell does this yml even say?`
// );

export const ButtonExportKubernetes: React.FC = (): React.ReactElement => {

    const { state, dispatch }: { state: IMegaDockerState, dispatch: React.Dispatch<IMegaDockerAction> } = React.useContext(MegaContext)

    const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)

    const buttonClicked = (): void => dispatch({ type: `KUBERNETES_OUTPUT` })

    return (
        <Button disabled={fullyValidated ? false : true} variant="contained" onClick={buttonClicked} >Export as Kubernetes Pod</ Button>
    )
}