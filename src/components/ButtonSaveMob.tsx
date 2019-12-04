import React from "react";

function buttonClicked() {
    console.log(".mob file should be saved!");
}

export const ButtonSaveMob: React.FC = () => {
    return (
        <div className="Button">
            <button onClick={buttonClicked}>Save Mob</button>
        </div>
    );
};
