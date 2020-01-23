import React from 'react'
import { defaultReducer } from '../functions/reducers/defaultReducer'
import { IMegaDockerState, initialMegaDockerState } from '../classes/IMegaDockerState';

export const Store: React.Context<IMegaDockerState> = React.createContext<IMegaDockerState | any>(initialMegaDockerState)

export const useStore = (): IMegaDockerState => {
    return React.useContext(Store);
}


export const StoreProvider: React.FC = (props: any): React.ReactElement => {
    const [state, dispatch]: [IMegaDockerState, any] = React.useReducer(defaultReducer, initialMegaDockerState)
    return <Store.Provider value={state}> {props.children}</Store.Provider >
}

export const StoreConsumer: React.FC = (props: any): React.ReactElement => {
    return (
        <Store.Consumer>
            {props.children}
        </Store.Consumer>
    )
}