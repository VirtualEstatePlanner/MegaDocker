import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"

//import { IMemory } from "../classes/IMemory"


export const VariableRow: React.FC = () => {
    const [variableValue, setVariableValue] = React.useState();
    return (
        <TableRow className="VariableRow">
            <TableCell>IMemory.name</TableCell>
            <TableCell><input value={variableValue} placeholder="Imemory.value" onChange={e => setVariableValue(e.target.value)} size={50} /></TableCell>
            <TableCell>IMemory.tooltip</TableCell>
            <TableCell><img alt='ready indicator' height={20} width={20} src={variableValue ? checkmarkIcon : xmarkIcon} /></TableCell>
        </TableRow>)
}