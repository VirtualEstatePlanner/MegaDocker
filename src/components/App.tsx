import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { ContextProvider } from './Context'
export const App: React.FC = (props: any): React.ReactElement => {

  return (
    <div className="App">
      <ContextProvider>
        <ManikinPane />
        <MainArea />
      </ContextProvider>
    </div>
  );
};
