import React from "react";
import {
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import { IManikin } from "../interfaces/IManikin";
import { IToggleManikinAction } from "../interfaces/actionInterfaces/IToggleManikinAction";
import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { MegaContext } from "./MegaContext";
import { megaReducer } from "../functions/reducers/megaReducer";

export const ManikinTable: React.FC = (): React.ReactElement => {
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IToggleManikinAction>] = React.useReducer(megaReducer, React.useContext(MegaContext))

    interface IColumn {
        name: string,
        label: string,
    }

    const columns: IColumn[] = [
        { name: "name", label: "Manikin" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]

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
                {state.manikinTable.map((eachManikin: IManikin) => (
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
                                onChange={() => dispatch({
                                    type: `TOGGLE_MANIKIN`,
                                    payload: state.manikinTable.indexOf(eachManikin)
                                }
                                )} />
                        </TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>
    )
}
