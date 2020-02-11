import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { MegaContextProvider } from './MegaContext'
// import { IMegaDockerState } from "../interfaces/IMegaDockerState";

export const App: React.FC = (props: any): React.ReactElement =>
  <div className="App">
    <MegaContextProvider>{props.children}
      <ManikinPane>{props.children}</ManikinPane>
      <MainArea>{props.children}</MainArea>
    </MegaContextProvider>
  </div >
