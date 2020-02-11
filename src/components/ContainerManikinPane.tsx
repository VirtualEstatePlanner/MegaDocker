import React from "react";
import { ManikinTable } from "./ManikinTable";

export const ManikinPane: React.FC = (props: any): React.ReactElement =>
    <div className="ManikinPane" >
        <ManikinTable>{props.children}</ManikinTable>
    </div>
