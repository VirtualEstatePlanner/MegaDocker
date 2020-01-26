import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";

export const App: React.FC = (props: any): React.ReactElement => {

  return (
    <div className="App">
      <ManikinPane />
      <MainArea />
    </div>
  );
};
