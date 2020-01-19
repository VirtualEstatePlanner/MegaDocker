import React from "react";
import { InfoPane } from "./ContainerInfoPane";
import { ButtonPane } from "./ContainerButtonPane";
import { VariablePane } from "./ContainerVariablePane";

export const MainArea: React.FC = () => {
    return (
        <div className="MainArea" >
            <InfoPane />
            <VariablePane />
            <ButtonPane />
        </div>
    );
};
