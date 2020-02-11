import React from "react";
import Button from "@material-ui/core/Button"

function buttonClicked() {
    console.log("pressed launch (but didnt do anything! Fix this!");
}

export const ButtonLaunchMob: React.FC = (): React.ReactElement =>
    <Button variant="contained" onClick={buttonClicked}>Launch Mob</Button>
