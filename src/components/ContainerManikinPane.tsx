import React from "react";
import { ManikinTable } from "./ManikinTable";

export const ManikinPane: React.FC = (): React.ReactElement => {
    console.log(`generating ManikinPane`)
    return (
        <div className="ManikinPane" >
            <ManikinTable />
        </div>
    );
};
