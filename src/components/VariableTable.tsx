import React from "react";
import Input from "@material-ui/core/Input";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Tooltip from "@material-ui/core/Tooltip";
import { IMemory } from '../classes/IMemory';
import { allManikins } from '../globals/allManikins';
import { mobName } from '../mobparts/memories/mobName'
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"//import { mobName } from "../mobparts/memories/mobName"

var tableMemories: IMemory[] = allManikins.filter(eachManikin => (
    eachManikin.isSelected === true)).map(eachManikin => (
        eachManikin.memories)).filter(function (value, index, array) {
            return value.length !== 0
        }).flat()

tableMemories = [mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, mobName, ...tableMemories]
console.log(tableMemories)

export const VariableTable: React.FC = () => {
    const [variableValue, setVariableValue] = React.useState();
    return (
        <React.Suspense fallback={<div>...loading</div>}>
            <Table className="VariableTable" size="small" stickyHeader>
                <TableHead className="VariableTableHeader" >
                    <TableRow>
                        <TableCell >Description</TableCell>
                        <TableCell>Value</TableCell>
                        <TableCell>Ready</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="MemoryTableBody">
                    {tableMemories.map(eachMemory => (
                        <TableRow key={eachMemory.name}>
                            <TableCell padding='checkbox'>{eachMemory.name}</TableCell>
                            <TableCell >
                                <Tooltip title={eachMemory.tooltip}>
                                    <Input
                                        fullWidth
                                        value={eachMemory.value}
                                        placeholder="input data here"
                                        onChange={event => setVariableValue(event.target.value)}
                                    />
                                </Tooltip>
                            </TableCell>
                            <TableCell ><img alt='ready indicator' height={20} width={20} src={eachMemory.value ? checkmarkIcon : xmarkIcon} /></TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </React.Suspense>)
}