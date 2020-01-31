import React from "react";
import { InfoPane } from "./ContainerInfoPane";
import { ButtonPane } from "./ContainerButtonPane";
import { MemoryPane } from "./ContainerMemoryPane";

export const MainArea: React.FC = (props: any): React.ReactElement => {
    return (
        <div className="MainArea" >{props.children}
            <InfoPane />
            <MemoryPane />
            <ButtonPane />
        </div>
    );
};
