import React from "react";
import { InfoPane } from "./ContainerInfoPane";
import { ButtonPane } from "./ContainerButtonPane";
import { MemoryPane } from "./ContainerMemoryPane";

export const MainArea: React.FC = () => {
    return (
        <div className="MainArea" >
            <InfoPane />
            <MemoryPane />
            <ButtonPane />
        </div>
    );
};