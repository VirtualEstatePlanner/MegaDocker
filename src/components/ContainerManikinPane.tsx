import React from "react";
import { ManikinTable } from "./ManikinTable";

export const ManikinPane: React.FC = (): React.ReactElement => {
    return (
        <div className="ManikinPane" >
            <ManikinTable />
        </div>
    );
};
