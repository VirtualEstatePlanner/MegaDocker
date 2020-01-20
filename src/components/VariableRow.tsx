import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
//import { IMemory } from "../classes/IMemory"


export const VariableRow: React.FC = () => {
    const [variableValue, setVariableValue] = React.useState();
    return (
        <TableRow className="VariableRow">
            <TableCell>name</TableCell>
            <TableCell><input value={variableValue} onChange={e => setVariableValue(e.target.value)} size={50} /></TableCell>
            <TableCell>tooltip</TableCell>
        </TableRow>)
}