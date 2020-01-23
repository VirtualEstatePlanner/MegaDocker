import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { Store } from "./Store";
import { startingMites, startingCustomMites, startingServiceMites, startingNetworkMites } from '../globals/startingMites'
// import { IMegaDockerState } from "../classes/IMegaDockerState";

export const App: React.FC = (props: any): React.ReactElement => {
  const store = React.useContext(Store)

  console.log(store)
  console.log(startingMites)
  console.log(startingServiceMites)
  console.log(startingNetworkMites)
  console.log(startingCustomMites)
  return (
    <Store.Provider value={store}>{props.children}
      <div className="App">
        <ManikinPane />
        <MainArea />
      </div>
    </Store.Provider>
  );
};
