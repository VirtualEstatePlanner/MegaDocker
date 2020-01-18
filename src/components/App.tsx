import React from "react";
import "./App.css";
import { ButtonPane } from './ContainerButtonPane'
import { InfoPane } from './ContainerInfoPane'
import { VariablePane } from './ContainerVariablePane'
import { ManikinPane } from './ContainerManikinPane'

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "gray" }}>
        </p>
        <ButtonPane />
        <ManikinPane />
        <InfoPane />
        <VariablePane />
      </header>
    </div>
  );
};
