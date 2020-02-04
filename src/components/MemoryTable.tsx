import React from "react";
import {
    Input,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip
} from "@material-ui/core";
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"
import { Context, updateYML } from './Context';
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { megaReducer } from "../functions/reducers/megaReducer";
import { IMemory } from "../interfaces/IMemory";

export const MemoryTable: React.FC = (props: any): React.ReactElement => {

    const appState = React.useContext(Context)
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, appState)
    console.log(`updating MemoryTable`)

    const updateMemoryValue = (
        prevState: IMegaDockerState,
        memory: IMemory,
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ): IMegaDockerAction => {
        const indexOfMemory: number = prevState.memoryTableContents.indexOf(memory)
        let workingState: IMegaDockerState = prevState
        workingState.memoryTableContents[indexOfMemory].value = event.target.value
        workingState.memoryTableContents[indexOfMemory].isReady = workingState.memoryTableContents[indexOfMemory].validator(workingState.memoryTableContents[indexOfMemory].value)
        workingState.manikinTableContents = prevState.manikinTableContents
        workingState.selectedManikins = prevState.selectedManikins
        workingState.memoryTableContents = prevState.memoryTableContents
        workingState.allMobMites = prevState.allMobMites
        workingState.mobServiceMites = prevState.mobServiceMites
        workingState.mobNetworkMites = prevState.mobNetworkMites
        workingState.mobCustomMites = prevState.mobCustomMites
        workingState.infoContent = `Manikin ${memory.name} was updating to ${memory.value}.`
        workingState.ymlOutput = updateYML(workingState.mobServiceMites, workingState.mobNetworkMites)

        let newStateAction: IMegaDockerAction = {
            type: 'UPDATE_MEMORY_VALUE',
            payload: workingState
        }
        return newStateAction
    }

    return (
        <Table
            className="MemoryTable"
            size="small"
            stickyHeader>
            <TableHead
                className="MemoryTableHeader">
                <TableRow
                    className="MemoryHeaderRow">
                    <TableCell>Description</TableCell>
                    <TableCell>Value</TableCell>
                    <TableCell>Ready</TableCell>
                </TableRow>
            </TableHead>
            <TableBody
                className="MemoryTableBody">
                {state.memoryTableContents.map((eachMemory: IMemory) => (
                    <TableRow
                        hover
                        key={eachMemory.memoryIndex}>
                        <TableCell
                            padding='checkbox'>{eachMemory.name}</TableCell>
                        <TableCell>
                            <Tooltip
                                title={eachMemory.tooltip}>
                                <Input
                                    fullWidth
                                    required={true}
                                    value={eachMemory.value}
                                    type={eachMemory.valueType}
                                    placeholder={(`Please enter your ${eachMemory.name} here`)}
                                    autoComplete={eachMemory.shouldAutocomplete.toString()}
                                    onChange={event => dispatch(updateMemoryValue(state, eachMemory, event))}>
                                </Input>
                            </Tooltip>
                        </TableCell>
                        <TableCell
                            className="ManikinReadyIcon">
                            <img
                                alt='ready indicator'
                                height={20}
                                width={20}
                                src={eachMemory.value === `` ? xmarkIcon : (eachMemory.validator(eachMemory.value).valueOf() ? checkmarkIcon : xmarkIcon)} />
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}