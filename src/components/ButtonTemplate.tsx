import React from "react";

function buttonClicked() {
    // console.log("Button was clicked!");
}

export const Button: React.FC = (): React.ReactElement => {
    console.log(`generating ButtonTemplate - WHY ARE YOU DOING THIS?`)
    return (
        <div className="Button">
            <button onClick={buttonClicked}>Button</button>
        </div>
    );
};
