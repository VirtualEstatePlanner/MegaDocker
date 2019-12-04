import React from "react";

function buttonClicked() {
    console.log(".yml file should be exported!");
}

export const ButtonExportYML: React.FC = () => {
    return (
        <div className="Button">
            <button onClick={buttonClicked}>Export YML</button>
        </div>
    );
};
