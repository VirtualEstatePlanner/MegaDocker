import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { MegaContextProvider } from './MegaContext'

export const App: React.FC = (props: any): React.ReactElement => {
  console.log(`generating App`)
  return (
    <div className="App">
      <MegaContextProvider>
        <ManikinPane />
        <MainArea />
      </MegaContextProvider>
    </div>
  );
};
