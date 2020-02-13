import React from "react";
import { InfoPane } from "./ContainerInfoPane";
import { ButtonPane } from "./ContainerButtonPane";
import { MemoryPane } from "./ContainerMemoryPane";

export const MainArea: React.FC = (): React.ReactElement =>
    <div className="MainArea" >
        <InfoPane></InfoPane>
        <MemoryPane></MemoryPane>
        <ButtonPane></ButtonPane>
    </div>
