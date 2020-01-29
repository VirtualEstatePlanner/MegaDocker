import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { StoreProvider } from './Store'
export const App: React.FC = (props: any): React.ReactElement => {

  return (
    <div className="App">
      <StoreProvider>
        <ManikinPane />
        <MainArea />
      </StoreProvider>
    </div>
  );
};
