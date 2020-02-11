//contextexample.ts;

import React from 'react';
import { initialMegaDockerState } from './MegaContext';
import { megaReducer } from '../functions/reducers/megaReducer';
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { IMegaDockerAction } from '../interfaces/IMegaDockerAction';
import { IApplicationStartAction } from '../interfaces/actionInterfaces/IApplicationStartAction';
import { IGenerateYmlOutputAction } from '../interfaces/actionInterfaces/IGenerateYmlOutputAction';
import { IManikinToggleAction } from '../interfaces/actionInterfaces/IManikinToggleAction';
import { IUpdateInfoContentAction } from '../interfaces/actionInterfaces/IUpdateInfoContentAction';
import { IUpdateMemoryValueAction } from '../interfaces/actionInterfaces/IUpdateMemoryValueAction';

export const initialState = initialMegaDockerState;

export const StateContext = () => React.createContext(initialState);

export interface StateProviderProps {
  reducer: React.Reducer<
    IMegaDockerState,
    | IApplicationStartAction
    | IGenerateYmlOutputAction
    | IManikinToggleAction
    | IUpdateInfoContentAction
    | IUpdateMemoryValueAction
  >;
  intialState: IMegaDockerState;
  children: any;
}

const stateProps: StateProviderProps = (megaReducer, initialMegaDockerState, {[]}) => {
    reducer: megaReducer,
    initialState: initialMegaDockerState,

}

export const StateProvider = (props: StateProviderProps): React.ReactElement => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => React.useContext(StateContext);
