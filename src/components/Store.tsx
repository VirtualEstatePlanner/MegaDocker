import React from 'react'
import { megaReducer } from '../functions/reducers/megaReducer'
import { IMegaDockerState, initialMegaDockerState } from '../interfaces/IMegaDockerState';

export const Store = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const StoreProvider = (props: any): React.ReactElement => {
    const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)
    return (<Store.Provider value={{ ...state, ...dispatch }}>{props.children}</Store.Provider >)
}
