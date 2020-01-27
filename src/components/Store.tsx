import React from 'react'
import { megaReducer } from '../functions/reducers/megaReducer'
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { allManikins } from '../globals/allManikins';
import { IManikin } from '../interfaces/IManikin';
import { IMite } from '../interfaces/IMite';

const tableManikins: IManikin[] = allManikins

export const updateSelectedManikins = (manikinArray: IManikin[]) => manikinArray.filter((eachManikin) => eachManikin.isSelected === true)

const selectedManikins: IManikin[] = updateSelectedManikins(tableManikins)

export const updateMemories = (manikinArray: IManikin[]) =>
    (manikinArray.filter((eachManikin: IManikin) =>
        eachManikin.memories)).flatMap((eachManikin) =>
            eachManikin.memories)

export const updateMobMites = (manikins: IManikin[]): IMite[] => manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite));

export const updateServiceMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Service`)

export const updateNetworkMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Network`)

export const updateCustomMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Custom`)

const initialMegaDockerState: IMegaDockerState = {
    manikinTableContents: tableManikins,
    selectedManikins: updateSelectedManikins(tableManikins),
    memoryTableContents: updateMemories(updateSelectedManikins(tableManikins)),
    allMobMites: updateMobMites(selectedManikins),
    mobServiceMites: updateServiceMites(updateMobMites(selectedManikins)),
    mobNetworkMites: updateNetworkMites(updateMobMites(selectedManikins)),
    mobCustomMites: updateCustomMites(updateMobMites(selectedManikins)),
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
