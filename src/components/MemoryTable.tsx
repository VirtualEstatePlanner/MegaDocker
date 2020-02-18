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
import { IMemory } from "../interfaces/IMemory";
import { IUpdateMemoryValueAction } from "../interfaces/actionInterfaces/IUpdateMemoryValueAction";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";

/**
 * generates the memories table
 * @param props the component props
 */
export const MemoryTable: React.FC<any> = (props: any): React.ReactElement => {

    const { state, dispatch }: { state: IMegaDockerState, dispatch: React.Dispatch<IMegaDockerAction> } = React.useContext(MegaContext)
    const fullyValidated: boolean = state.memories.every((memory) => memory.isReady)
    /**
     *  generates the payload to reduce
     * @param memory the IMemory that will be reduced against the state
     * @param newValue the IMemory.value to reduce against
     */
    const createMemoryValueAction = (
        memoryToUpdate: IMemory,
        newValue: string): IUpdateMemoryValueAction => {
        return {
            type: `UPDATE_MEMORY_VALUE`,
            payload: {
                memory: memoryToUpdate,
                value: newValue
            }
        }
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
                    <TableCell>Settings</TableCell>
                    <TableCell></TableCell>
                    <TableCell><img alt="" src={fullyValidated ? checkmarkIcon : xmarkIcon} height={20} width={20} /></TableCell>
                </TableRow>
            </TableHead>
            <TableBody
                className="MemoryTableBody">
                {state.memories.map((thisMemory: IMemory) => (
                    <Tooltip
                        title={thisMemory.tooltip}
                        key={thisMemory.memoryIndex}>
                        <TableRow
                            hover>
                            <TableCell
                                padding='checkbox'>{thisMemory.name}</TableCell>
                            <TableCell>
                                <Input
                                    fullWidth
                                    required={true}
                                    value={thisMemory.value}
                                    type={thisMemory.valueType}
                                    placeholder={(`Please enter your ${thisMemory.name} here`)}
                                    autoComplete={thisMemory.shouldAutocomplete.toString()}
                                    onChange={changeEvent => dispatch(createMemoryValueAction(thisMemory, changeEvent.target.value))}>
                                </Input>
                            </TableCell>
                            <TableCell
                                className="ManikinReadyIcon">
                                <img
                                    alt='ready indicator'
                                    height={20}
                                    width={20}
                                    src={thisMemory.value === `` ? xmarkIcon : (thisMemory.validator(thisMemory.value).valueOf() ? checkmarkIcon : xmarkIcon)} />
                            </TableCell>
                        </TableRow>
                    </Tooltip>
                ))}
            </TableBody>
        </Table >
    )
}