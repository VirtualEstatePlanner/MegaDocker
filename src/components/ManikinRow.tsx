import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { ManikinIcon } from "./ManikinIcon";
import { ManikinSwitch } from "./ManikinSwitch";

export const ManikinRow: React.FC = (): React.ReactElement => {
    return (
        <TableRow className="ManikinRow">
            <TableCell>{'manikinname'}</TableCell>
            <TableCell><ManikinIcon /></TableCell>
            <TableCell padding="checkbox"><ManikinSwitch /></TableCell>
        </TableRow>)
}