import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
export const VariableRow: React.FC = () => {
    return (
        <TableRow className="VariableRow">
            <TableCell>name</TableCell>
            <TableCell>value</TableCell>
            <TableCell>tooltip</TableCell>
        </TableRow>)
}