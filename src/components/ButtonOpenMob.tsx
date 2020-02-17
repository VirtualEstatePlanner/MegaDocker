import React from "react";
import Button from "@material-ui/core/Button"

function buttonClicked() {
}

export const ButtonOpenMob: React.FC = (): React.ReactElement =>
    <Button variant="contained" onClick={buttonClicked}>Open a Mob</Button>
