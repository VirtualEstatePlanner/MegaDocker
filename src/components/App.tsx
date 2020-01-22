import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { StoreProvider } from "./Store";

export const App: React.FC = (): React.ReactElement => {
  return (
    <StoreProvider>
      <div className="App">
        <ManikinPane />
        <MainArea />
      </div>
    </StoreProvider>
  );
};
