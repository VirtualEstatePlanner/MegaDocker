import React from "react";
import "./App.css";
import { ManikinPane } from './ContainerManikinPane'
import { MainArea } from "./ContainerMainArea";
import { megaReducer } from "../functions/reducers/megaReducer";
import { initialMegaDockerState } from "../interfaces/IMegaDockerState";

export const App: React.FC = (props: any): React.ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)

  console.log(state)

  return (
    <div className="App">
      <ManikinPane />
      <MainArea />
    </div>
  );
};
