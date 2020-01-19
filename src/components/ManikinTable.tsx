import React from "react";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { ManikinSwitch } from "./ManikinSwitch";

// import { Store } from "../components/Store";

import { allManikins } from "../globals/allManikins"
import { IManikin } from "../classes/IManikin";

interface IColumn {
    name: string,
    label: string,
}
export const ManikinTable: React.FC = () => {
    const tableData: IManikin[] = allManikins
    const columns: IColumn[] = [
        { name: "name", label: "Manikin Name" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]
    return (
        <Table className="ManikinTable" size="small" stickyHeader>
            <TableHead className="ManikinTableHeader">
                <TableRow>
                    {columns.map(column => (
                        <TableCell
                            key={column.name}>
                            {column.label}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {tableData.map(eachManikin => (
                    <TableRow key={eachManikin.name}>
                        <TableCell key={eachManikin.name}>{eachManikin.name}</TableCell>
                        <TableCell key={eachManikin.name}>
                            <img alt={eachManikin.name}
                                src={eachManikin.manikinIcon}
                                height="15"
                                width="15" />
                        </TableCell>
                        <TableCell><Switch checked={eachManikin.isSelected ? true : false} disabled={eachManikin.isCore ? true : false} /></TableCell>
                    </TableRow>))}
            </TableBody>
        </Table>)
}