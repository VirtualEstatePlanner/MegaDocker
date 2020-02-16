import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { MegaProvider } from './MegaContext'

export const App: React.FC = (): React.ReactElement => {

  return (
    <div className="App">
      <MegaProvider>
        <ManikinPane></ManikinPane>
        <MainArea></MainArea>
      </MegaProvider>
    </div >
  )
}