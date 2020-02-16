import React from "react";
import { MemoryTable } from './MemoryTable'

export const MemoryPane: React.FC = (): React.ReactElement => {
    return (
        <div className="MemoryPane" >
            <MemoryTable></MemoryTable>
        </div>
    );
};
