import React from "react";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//import { manikinToggleReducer } from "../functions/reducers/manikinToggleReducer";

import { allManikins } from "../globals/allManikins"
import { IManikin } from "../classes/IManikin";

interface IColumn {
    name: string,
    label: string,
}
export const ManikinTable: React.FC = () => {
    const tableData: IManikin[] = allManikins
    const columns: IColumn[] = [
        { name: "name", label: "Manikin" },
        { name: "icon", label: "" },
        { name: "isSelected", label: "Choose" }
    ]
    return (
        <React.Suspense fallback={<div>...loading</div>}>
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
                <TableBody className="ManikinTableBody">
                    {tableData.map(eachManikin => (



                        <TableRow
                            key={eachManikin.name}
                            className={eachManikin.isCore ? "CoreManikinRow" : "ManikinRow"}
                            hover={eachManikin.isCore ? false : true} >
                            <TableCell key={eachManikin.name}>{eachManikin.name}</TableCell>
                            <TableCell key={eachManikin.manikinIcon}>
                                <img alt={eachManikin.name}
                                    src={eachManikin.manikinIcon}
                                    height="20"
                                    width="20" />
                            </TableCell>
                            <TableCell key={eachManikin.description}><Switch
                                defaultChecked={eachManikin.isCore ? true : false}
                                value={eachManikin.isSelected}
                                disabled={eachManikin.isCore ? true : false} />
                            </TableCell>
                        </TableRow>))}
                </TableBody>
            </Table>
        </React.Suspense >
    )
}