import React from "react";
import { InfoPane } from "./ContainerInfoPane";
import { ButtonPane } from "./ContainerButtonPane";
import { MemoryPane } from "./ContainerMemoryPane";

export const MainArea: React.FC = (props: any): React.ReactElement =>
    <div className="MainArea" >{props.children}
        <InfoPane>{props.children}</InfoPane>
        <MemoryPane>{props.children}</MemoryPane>
        <ButtonPane>{props.children}</ButtonPane>
    </div>
