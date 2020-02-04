import React from "react";
import {
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { Tooltip } from "@material-ui/core";
import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
import { megaReducer } from "../functions/reducers/megaReducer";
import { IManikin } from "../interfaces/IManikin";
import {
    Context,
    updateSelectedManikins,
    updateMemories,
    updateMobMites,
    updateServiceMites,
    updateNetworkMites,
    updateCustomMites,
    updateYML
} from "./Context";

export const ManikinTable: React.FC = (props: any): React.ReactElement => {
    console.log(`updating ManikinTable`)

    const appState: IMegaDockerState = React.useContext(Context)
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, appState)

    interface IColumn {
        name: string,
        label: string,
    }

    const columns: IColumn[] = [
        { name: "name", label: "Manikin" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]

    const toggleManikin = (prevState: IMegaDockerState, manikin: IManikin): IMegaDockerAction => {

        const indexOfManikin: number = prevState.manikinTableContents.indexOf(manikin)
        let workingState: IMegaDockerState = prevState
        workingState.manikinTableContents[indexOfManikin].isSelected = !prevState.manikinTableContents[indexOfManikin].isSelected
        console.log(`${workingState.manikinTableContents[indexOfManikin].name} manikin was ${workingState.manikinTableContents[indexOfManikin].isSelected ? 'selected' : 'deselected'}`)
        workingState.selectedManikins = updateSelectedManikins(workingState.manikinTableContents)
        workingState.memoryTableContents = updateMemories(workingState.selectedManikins)
        workingState.allMobMites = updateMobMites(workingState.selectedManikins)
        workingState.mobServiceMites = updateServiceMites(updateMobMites(workingState.selectedManikins))
        workingState.mobNetworkMites = updateNetworkMites(updateMobMites(workingState.selectedManikins))
        workingState.mobCustomMites = updateCustomMites(updateMobMites(workingState.selectedManikins))
        workingState.ymlOutput = updateYML(workingState.mobServiceMites, workingState.mobNetworkMites)
        workingState.infoContent = `Manikin ${manikin.name} was set to ${workingState.manikinTableContents[indexOfManikin].isSelected}.`

        const newState = { ...workingState }

        const newStateAction: IMegaDockerAction = {
            type: 'TOGGLE_MANIKIN',
            payload: newState
        }

        return newStateAction
    }

    return (
        <Table className="ManikinTable" size="small" stickyHeader>
            <TableHead className="ManikinTableHeader">
                <TableRow>
                    {columns.map(column => (
                        <TableCell
                            key={column.name}>
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody className="ManikinTableBody">
                {state.manikinTableContents.map((eachManikin: IManikin) => (
                    <TableRow
                        key={`${eachManikin.name}Row`}
                        className="ManikinRow"
                        hover={eachManikin.isCore ? false : true}>
                        <Tooltip title={eachManikin.description}>
                            <TableCell key={`${eachManikin.name}NameCell`}>
                                {eachManikin.name}</TableCell>
                        </Tooltip>
                        <TableCell key={`${eachManikin.name}Icon`}>
                            <img alt={eachManikin.name}
                                src={eachManikin.manikinIcon}
                                height="20"
                                width="20" />
                        </TableCell>
                        <TableCell key={`${eachManikin.name}CheckboxCell`}>
                            <Switch
                                key={`${eachManikin.name}Checkbox`}
                                checked={eachManikin.isSelected}
                                disabled={eachManikin.isCore ? true : false}
                                onChange={() => dispatch(toggleManikin(state, eachManikin))} />
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}
