import React from "react";
import Button from "@material-ui/core/Button"

function buttonClicked() {
    // console.log("pressed launch!");
}

export const ButtonLaunchMob: React.FC = (): React.ReactElement => {
    console.log(`generating ButtonLaunchMob`)
    return (
        <Button variant="contained" onClick={buttonClicked}>Launch Mob</Button>
    );
};
