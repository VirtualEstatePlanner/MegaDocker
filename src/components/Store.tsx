import React from 'react'
import { megaReducer } from '../functions/reducers/megaReducer'
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { allManikins } from '../globals/allManikins';
import { IManikin } from '../interfaces/IManikin';
import { IMemory } from '../interfaces/IMemory';

const coreManikins: IManikin[] = allManikins.filter(
    (eachManikin) => eachManikin.isCore === true
);

const coreMemsArray: IMemory[][] = coreManikins.map(
    (eachManikin) => eachManikin.memories
);

const coreMems: IMemory[] = coreMemsArray.flatMap((eachArray) =>
    eachArray.concat().filter((eachMemory) => eachMemory)
);

const mobMites = allManikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
);

const initialMegaDockerState: IMegaDockerState = {
    manikinTableContents: allManikins,
    memoryTableContents: coreMems,
    allMobMites: mobMites,
    mobServiceMites: mobMites.filter((eachMite) => eachMite.type === `Service`),
    mobNetworkMites: mobMites.filter((eachMite) => eachMite.type === `Network`),
    mobCustomMites: mobMites.filter((eachMite) => eachMite.type === `Custom`),
    infoContent: `Learn more about something by clicking it and reading the information here.`,
    ymlOutput: ``
};

export const Store = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const StoreProvider = (props: any): React.ReactElement => {

    // TODO: remove once application Context works
    const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)
    console.log(state)
    // TODO: keep below this comment

    return (<Store.Provider value={{ ...state, ...dispatch }}>{props.children}</Store.Provider >)
}
