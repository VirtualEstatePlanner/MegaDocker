import React from "react";
import { InfoCard } from "./InfoCard"

export const InfoPane: React.FC = (): React.ReactElement => {
    console.log(`generating InfoPane`)
    return (
        <div className="InfoPane" >
            <InfoCard />
        </div>)
}