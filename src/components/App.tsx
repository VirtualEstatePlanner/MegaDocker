import React from "react";
import "./App.css";
import mdlogo from "../images/icons/icon.png";

function buttonClicked() {
  console.log("Button was clicked!");
}

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "gray" }}>
          In the <code style={{ color: "yellow" }}>src/App.tsx</code> file's{" "}
          <code style={{ color: "yellow" }}>header</code> tag, remove from this
      line...
        </p>
        <p></p>
        <img src={mdlogo.toString()} className="App-logo" alt="logo" />
        <p>
          Edit <code style={{ color: "yellow" }}>src/App.tsx</code> and save to
          hot reload, or run <code style={{ color: "yellow" }}>yarn build</code>{" "}
          from <code style={{ color: "yellow" }}>$PROJECT_ROOT</code> to create
          distributable appplications.
        </p>
        <button onClick={buttonClicked}>Button</button>
        <p style={{ color: "gray" }}>... to this line</p>
      </header>
    </div>
  );
};
