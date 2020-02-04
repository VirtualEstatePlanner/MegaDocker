import React from "react";
import { MemoryTable } from './MemoryTable'

export const MemoryPane: React.FC = (): React.ReactElement => {
    console.log(`generating MemoryPane`)
    return (
        <div className="MemoryPane" >
            <MemoryTable />
        </div>
    );
};
