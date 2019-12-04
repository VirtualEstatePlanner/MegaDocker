import React from "react";

function buttonClicked() {
    console.log("Button was clicked!");
}

export const Button: React.FC = () => {
    return (
        <div className="Button">
            <button onClick={buttonClicked}>Button</button>
        </div>
    );
};
