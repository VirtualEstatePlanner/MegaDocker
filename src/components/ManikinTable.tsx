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
import { Store } from "./Store";

export const ManikinTable: React.FC = (props: any): React.ReactElement => {
    const prevState: IMegaDockerState = React.useContext(Store)
    // TODO: use dispatch function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] = React.useReducer(megaReducer, prevState)
    interface IColumn {
        name: string,
        label: string,
    }

    const columns: IColumn[] = [
        { name: "name", label: "Manikin" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]

    const handleCheckboxChange = (prevState: IMegaDockerState): IMegaDockerAction => {
        let newState: IMegaDockerAction = {
            type: 'TOGGLE_MANIKIN',
            payload: {
                ...prevState,
                manikinTableContents: [...prevState.manikinTableContents],
            }
        }
        return newState
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
                        <TableCell key={`${eachManikin.name}CheckboxCell`}><Switch key={`${eachManikin.name}Checkbox`}
                            checked={eachManikin.isSelected}
                            disabled={eachManikin.isCore ? true : false}
                            onChange={() => handleCheckboxChange(state)} />
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}
