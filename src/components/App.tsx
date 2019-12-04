import React from "react";
import "./App.css";
import { ButtonRow } from './ButtonRow'

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "gray" }}>
        </p>
        <ButtonRow />
      </header>
    </div>
  );
};
