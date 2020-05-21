import React from "react";
//import { InfoPane } from "./ContainerInfoPane";
//<InfoPane></InfoPane>
import { ButtonPane } from "./ContainerButtonPane";
import { MemoryPane } from "./ContainerMemoryPane";

export const MainArea: React.FC = (): React.ReactElement =>
    <div className="MainArea" >
        <MemoryPane></MemoryPane>
        <ButtonPane></ButtonPane>
    </div>
