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
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"//import { mobName } from "../mobparts/memories/mobName"
import { Store, updateMemories, updateMobMites, updateServiceMites, updateNetworkMites, updateCustomMites } from './Store';
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { megaReducer } from "../functions/reducers/megaReducer";
import { IMemory } from "../interfaces/IMemory";

export const MemoryTable: React.FC = (props: any): React.ReactElement => {
    const prevState = React.useContext(Store)
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, prevState)
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
        workingState.memoryTableContents = updateMemories(workingState.selectedManikins)
        workingState.allMobMites = updateMobMites(workingState.selectedManikins)
        workingState.mobServiceMites = updateServiceMites(updateMobMites(workingState.selectedManikins))
        workingState.mobNetworkMites = updateNetworkMites(updateMobMites(workingState.selectedManikins))
        workingState.mobCustomMites = updateCustomMites(updateMobMites(workingState.selectedManikins))
        workingState.infoContent = `Manikin ${memory.name} was updated with ${memory.value}.`
        workingState.ymlOutput = ``

        let newStateAction: IMegaDockerAction = {
            type: 'UPDATE_MEMORY_VALUE',
            payload: workingState
        }
        return newStateAction
    }
    return (
        <React.Suspense
            fallback={<div>...loading</div>}>
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
                            <TableCell >
                                <Tooltip
                                    title={eachMemory.tooltip}>
                                    <Input
                                        fullWidth
                                        value={eachMemory.value}
                                        type={eachMemory.valueType}
                                        placeholder={(`Please enter your ${eachMemory.name} here`)}
                                        onChange={event => dispatch(updateMemoryValue(state, eachMemory, event))}
                                    />
                                </Tooltip>
                            </TableCell>
                            <TableCell
                                className="ManikinReadyIcon">
                                <img
                                    alt='ready indicator'
                                    height={20}
                                    width={20}
                                    src={eachMemory.validator ? (eachMemory.value !== `` ? checkmarkIcon : xmarkIcon) : xmarkIcon} />
                            </TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </React.Suspense>
    )
}
