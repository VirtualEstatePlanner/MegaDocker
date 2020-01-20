import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { Store, StoreProvider } from "./Store";

export const App: React.FC = (props) => {
  return (
    <StoreProvider>
      {console.log(Store)}
      {props.children}
      <div className="App">
        <ManikinPane />
        <MainArea />
      </div>
    </StoreProvider>
  );
};
