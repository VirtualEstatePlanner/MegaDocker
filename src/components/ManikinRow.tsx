import React from "react";
import { ManikinIcon } from "./ManikinIcon";
import { ManikinSwitch } from "./ManikinSwitch";

export const ManikinRow: React.FC = () => {
    return (
        <div className="ManikinRow">
            <ManikinIcon />
            <ManikinSwitch />
            {'manikin description'}
        </div>)
}