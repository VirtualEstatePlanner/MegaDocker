import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
export const VariableRow: React.FC = () => {
    return (
        <TableRow className="VariableRow">
            <TableCell>Description</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Help</TableCell>
        </TableRow>)
}