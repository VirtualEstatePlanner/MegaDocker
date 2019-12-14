import React from "react";
import "./App.css";
import { ButtonRow } from './ButtonRow'
import { InfoPane } from './InfoPane'
import { ManikinRow } from './ManikinRow'
import { ManikinTable } from './ManikinTable'

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "gray" }}>
        </p>
        <ButtonRow />
        <ManikinRow />
        <ManikinTable />
        <InfoPane />
      </header>
    </div>
  );
};
