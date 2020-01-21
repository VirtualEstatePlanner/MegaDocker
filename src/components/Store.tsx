import React from 'react'
import { allManikins } from "../globals/allManikins";
import { coreMemories } from '../globals/coreMemories';
import { IMegaDockerState } from '../classes/IMegaDockerState';

const initialState: IMegaDockerState = {
    manikinTableContents: [...allManikins],
    variableTableContents: [...coreMemories],
    allMobMites: [],
    mobServiceMites: [],
    mobNetworkMites: [],
    infoContent: 'Read information about your selection here.',
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
