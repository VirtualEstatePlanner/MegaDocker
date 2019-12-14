import React from "react";

function buttonClicked() {
    console.log("pressed launch!");
}

export const ButtonLaunchMob: React.FC = () => {
    return (
        <button onClick={buttonClicked}>Launch Mob</button>
    );
};
