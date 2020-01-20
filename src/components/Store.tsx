import React from 'react'
import { allManikins } from "../globals/allManikins";
import { IMegaDockerState } from '../classes/IMegaDockerState';

const initialState: IMegaDockerState = {
    manikinTableContents: [...allManikins],
    variableTableContents: [],
    allMites: [],
    mobServiceMites: [],
    mobNetworkMites: [],
    ymlOutput: ``
}

export const Store: React.Context<IMegaDockerState> = React.createContext<IMegaDockerState>(initialState)

export const useStore = (): IMegaDockerState => {
    return React.useContext(Store);
}

export const StoreProvider: React.FC = (props: any): React.ReactElement => {
    return <Store.Provider value={initialState}>{props.children}</Store.Provider>
}

export const StoreConsumer: React.FC = (props: any): React.ReactElement => {
    return <Store.Consumer /*value={initialState}*/>{props.children}</Store.Consumer>
}
