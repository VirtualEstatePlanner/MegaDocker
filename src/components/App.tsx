import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { Store } from "./Store";
// import { IMegaDockerState } from "../classes/IMegaDockerState";

export const App: React.FC = (props: any): React.ReactElement => {
  const store = React.useContext(Store)

  console.log(store)
  return (
    <Store.Provider value={store}>{props.children}
      <div className="App">
        <ManikinPane />
        <MainArea />
      </div>
    </Store.Provider>
  );
};
