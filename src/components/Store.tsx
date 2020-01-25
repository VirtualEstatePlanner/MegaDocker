import React from 'react'
import { megaReducer } from '../functions/reducers/megaReducer'
import { IMegaDockerState, initialMegaDockerState } from '../classes/IMegaDockerState';
import { IMegaDockerAction } from '../classes/IMegaDockerAction';

export const Store: React.Context<IMegaDockerState> = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const useStore = (): IMegaDockerState => {
    return React.useContext(Store);
}

export const StoreProvider: React.FC = (props: any): React.ReactElement => {
    const [state, dispatch]: [IMegaDockerState, React.Dispatch<IMegaDockerAction>] =
        React.useReducer(megaReducer, initialMegaDockerState)
    return (
        <Store.Provider value={state}>
            {props.children}
        </Store.Provider>)
}

export const StoreConsumer: React.FC = (props: any): React.ReactElement => {
    return (
        <Store.Consumer>
            {props.children}
        </Store.Consumer>
    )
}
