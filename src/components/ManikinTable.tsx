import React from "react";
import { ManikinRow } from "./ManikinRow";
import Table from "@material-ui/core/Table";

import { allManikins } from "../globals/allManikins"

export const ManikinTable: React.FC = () => {
    return (
        <Table className="ManikinTable" size="small">
            <ManikinRow />
            <ManikinRow />
            <ManikinRow />
            <ManikinRow />
            <ManikinRow />
            <ManikinRow />
        </Table>)
}