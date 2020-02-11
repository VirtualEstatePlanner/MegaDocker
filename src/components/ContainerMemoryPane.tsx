import React from "react";
import { MemoryTable } from './MemoryTable'

export const MemoryPane: React.FC = (props: any): React.ReactElement => {
    return (
        <div className="MemoryPane" >
            <MemoryTable>{props.children}</MemoryTable> />
        </div>
    );
};
