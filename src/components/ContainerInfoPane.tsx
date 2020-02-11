import React from "react";
import { InfoCard } from "./InfoCard"

export const InfoPane: React.FC<any> = (props: any): React.ReactElement => {
    console.log(`generating InfoPane`)
    return (
        <div className="InfoPane">{props.children}
            <InfoCard />
        </div>)
}