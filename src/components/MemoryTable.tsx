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
import { MegaContext } from './MegaContext';
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
// import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { megaReducer } from "../functions/reducers/megaReducer";
import { IMemory } from "../interfaces/IMemory";
import { IApplicationStartAction } from "../interfaces/actionInterfaces/IApplicationStartAction";
import { IGenerateYmlOutputAction } from "../interfaces/actionInterfaces/IGenerateYmlOutputAction";
import { IManikinToggleAction } from "../interfaces/actionInterfaces/IManikinToggleAction";
import { IUpdateInfoContentAction } from "../interfaces/actionInterfaces/IUpdateInfoContentAction";
import { IUpdateMemoryValueAction } from "../interfaces/actionInterfaces/IUpdateMemoryValueAction";

export const MemoryTable: React.FC = (props: any): React.ReactElement => {

    const appState = React.useContext(MegaContext)

    /**
     * @state the current application state
     * @dispatch a function to update that by passing an action to megaReducer
     */
    const [state, dispatch]: [
        IMegaDockerState,
        React.Dispatch<IApplicationStartAction |
            IGenerateYmlOutputAction |
            IManikinToggleAction |
            IUpdateInfoContentAction |
            IUpdateMemoryValueAction>] = React.useReducer(megaReducer, appState)

    /**
     * 
     * @param prevState the previous application state
     * @param memoryToUpdate an IMemory
     * @param changeEvent a React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
     */
    const updateMemoryValue = (
        prevState: IMegaDockerState,
        memoryToUpdate: IMemory,
        changeEvent: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): IUpdateMemoryValueAction => {

        /**
         *  generates the payload to reduce
         * @param memory the IMemory that will be reduced against the state
         * @param newValue the IMemory.value to reduce against
         */
        const newMemoryValuePayload = {
            memory: memoryToUpdate,
            value: changeEvent.target.value
        }

        let newStateAction: IUpdateMemoryValueAction = {
            type: 'UPDATE_MEMORY_VALUE',
            payload: newMemoryValuePayload
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
                {state.memories.map((thisMemory: IMemory) => (
                    <TableRow
                        hover
                        key={thisMemory.memoryIndex}>
                        <TableCell
                            padding='checkbox'>{thisMemory.name}</TableCell>
                        <TableCell>
                            <Tooltip
                                title={thisMemory.tooltip}>
                                <Input
                                    fullWidth
                                    required={true}
                                    value={thisMemory.value}
                                    type={thisMemory.valueType}
                                    placeholder={(`Please enter your ${thisMemory.name} here`)}
                                    autoComplete={thisMemory.shouldAutocomplete.toString()}
                                    onChange={changeEvent => dispatch(updateMemoryValue(state, thisMemory, changeEvent))}>
                                </Input>
                            </Tooltip>
                        </TableCell>
                        <TableCell
                            className="ManikinReadyIcon">
                            <img
                                alt='ready indicator'
                                height={20}
                                width={20}
                                src={thisMemory.value === `` ? xmarkIcon : (thisMemory.validator(thisMemory.value).valueOf() ? checkmarkIcon : xmarkIcon)} />
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}