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
// import { IMegaDockerAction } from "../interfaces/IMegaDockerAction";
// import { IMegaDockerState } from "../interfaces/IMegaDockerState";
import { MegaContext } from "./MegaContext";
import { megaReducer } from "../functions/reducers/megaReducer";

export const ManikinTable: React.FC = (): React.ReactElement => {
    const [state, dispatch] =
        React.useReducer(megaReducer, React.useContext(MegaContext))

    return (
        <Table className="ManikinTable" size="small" stickyHeader>
            <TableHead className="ManikinTableHeader">
                <TableRow>
                    <TableCell key="name">Services</TableCell>
                    <TableCell key="icon" />
                    <TableCell key="isSelected" />
                </TableRow>
            </TableHead>
            <TableBody className="ManikinTableBody">
                {state.manikinTable.map((eachManikin: IManikin) => (
                    <Tooltip
                        key={`${eachManikin.name}Row`}
                        title={eachManikin.description}>
                        <TableRow
                            className="ManikinRow"
                            hover={eachManikin.isCore ? false : true}>
                            <TableCell key={`${eachManikin.name}NameCell`}>
                                {eachManikin.name}</TableCell>
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
                        </TableRow>
                    </Tooltip>))}
            </TableBody>
        </Table>
    )
}
