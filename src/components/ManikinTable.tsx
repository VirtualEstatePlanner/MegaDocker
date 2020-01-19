import React from "react";
import { ManikinRow } from "./ManikinRow";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { allManikins } from "../globals/allManikins"

export const ManikinTable: React.FC = () => {
    return (
        <Table className="ManikinTable" size="small" stickyHeader>
            <TableHead className="ManikinTableHeader">
                <TableRow>
                    <TableCell>Manikin Name</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Choose</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>

                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
                <ManikinRow />
            </TableBody>
        </Table>)
}