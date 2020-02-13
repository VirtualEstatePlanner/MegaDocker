import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { MegaContextProvider } from './MegaContext'
// import { IMegaDockerState } from "../interfaces/IMegaDockerState";

export const App: React.FC = (): React.ReactElement =>
  <div className="App">
    <MegaContextProvider>
      <ManikinPane></ManikinPane>
      <MainArea></MainArea>
    </MegaContextProvider>
  </div >
