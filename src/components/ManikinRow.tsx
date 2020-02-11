import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { ManikinIcon } from "./ManikinIcon";
import { ManikinSwitch } from "./ManikinSwitch";

export const ManikinRow: React.FC = (props: any): React.ReactElement => {
    return (
        <TableRow className="ManikinRow">{props.children}
            <TableCell>{props.children}{'manikinname'}</TableCell>
            <TableCell>{props.children}<ManikinIcon /></TableCell>
            <TableCell padding="checkbox">{props.children}<ManikinSwitch /></TableCell>
        </TableRow>)
}