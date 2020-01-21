import React from "react";
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"

export const MemoryRow: React.FC = () => {
    const [memoryValue, setMemoryValue] = React.useState();
    return (
        <TableRow className="MemoryRow" hover>
            <TableCell>IMemory.name</TableCell>
            <TableCell><input value={memoryValue} placeholder="Imemory.value" onChange={e => setMemoryValue(e.target.value)} size={50} /></TableCell>
            <TableCell>IMemory.tooltip</TableCell>
            <TableCell><img alt='ready indicator' height={20} width={20} src={memoryValue ? checkmarkIcon : xmarkIcon} /></TableCell>
        </TableRow>)
}