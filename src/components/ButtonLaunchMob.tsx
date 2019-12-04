import React from "react";

function buttonClicked() {
    console.log("docker stack should be launched!");
}

export const ButtonLaunchMob: React.FC = () => {
    return (
        <div className="Button">
            <button onClick={buttonClicked}>Launch Mob</button>
        </div>
    );
};
