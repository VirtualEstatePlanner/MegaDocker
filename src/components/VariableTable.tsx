import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { IMemory } from '../classes/IMemory';
import { allManikins } from '../globals/allManikins';
import * as checkmarkIcon from "../images/indicators/checkmarkIcon.png"
import * as xmarkIcon from "../images/indicators/xmarkIcon.png"//import { mobName } from "../mobparts/memories/mobName"

const tableMemories: IMemory[] = allManikins.filter(eachManikin => (
    eachManikin.isSelected === true)).map(eachManikin => (
        eachManikin.memories)).filter(function (value, index, array) {
            return value.length !== 0
        }).flat()

export const VariableTable: React.FC = () => {
    const [variableValue, setVariableValue] = React.useState();
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

                    {tableMemories.map(eachMemory => (
                        <TableRow key={eachMemory.name}>
                            <TableCell >{eachMemory.name}</TableCell>
                            <TableCell><input
                                value={eachMemory.value}
                                placeholder=""
                                onChange={e => setVariableValue(e.target.value)} size={50} /></TableCell>
                            <TableCell>{eachMemory.tooltip}</TableCell>
                            <TableCell><img alt='ready indicator' height={20} width={20} src={eachMemory.value ? checkmarkIcon : xmarkIcon} /></TableCell>
                        </TableRow>))}

                </TableBody>
            </Table>
        </React.Suspense>)
}