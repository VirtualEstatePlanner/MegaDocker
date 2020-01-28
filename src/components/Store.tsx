import React from 'react'
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { allManikins } from '../globals/allManikins';
import { IManikin } from '../interfaces/IManikin';
import { IMite } from '../interfaces/IMite';

const tableManikins: IManikin[] = allManikins

export const updateSelectedManikins = (manikinArray: IManikin[]) => manikinArray.filter((eachManikin) => eachManikin.isSelected === true)

export const updateMemories = (manikinArray: IManikin[]) =>
    (manikinArray.filter((eachManikin: IManikin) =>
        eachManikin.memories)).flatMap((eachManikin) =>
            eachManikin.memories)

export const updateMobMites = (manikins: IManikin[]): IMite[] => manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite));

export const updateServiceMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Service`)

export const updateNetworkMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Network`)

export const updateCustomMites = (miteArray: IMite[]) => miteArray.filter((eachMite) => eachMite.type === `Custom`)

let initialMegaDockerState: IMegaDockerState = {
    manikinTableContents: tableManikins,
    selectedManikins: updateSelectedManikins(tableManikins),
    memoryTableContents: updateMemories(updateSelectedManikins(tableManikins)),
    allMobMites: updateMobMites(updateSelectedManikins(tableManikins)),
    mobServiceMites: updateServiceMites(updateMobMites(updateSelectedManikins(tableManikins))),
    mobNetworkMites: updateNetworkMites(updateMobMites(updateSelectedManikins(tableManikins))),
    mobCustomMites: updateCustomMites(updateMobMites(updateSelectedManikins(tableManikins))),
    infoContent: `Learn more about something by clicking it and reading the information here.`,
    ymlOutput: ``
};

export const Store = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const StoreProvider = (props: any): React.ReactElement => {
    return (<React.Suspense fallback="loading"><Store.Provider value={initialMegaDockerState}>{props.children}</Store.Provider ></React.Suspense>)
}
