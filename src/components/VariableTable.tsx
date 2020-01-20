import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { VariableRow } from './VariableRow';
//import { mobName } from "../mobparts/memories/mobName"

export const VariableTable: React.FC = () => {
    return (
        <React.Suspense fallback={<div>...loading</div>}>
            <Table className="VariableTable" size="small" stickyHeader>
                <TableHead className="VariableTableHeader" >
                    <TableRow>
                        <TableCell>Variable Description</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Information</TableCell>
                        <TableCell>Ready</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                    <VariableRow />
                </TableBody>
            </Table>
        </React.Suspense>)
}