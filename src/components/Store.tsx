import React from 'react'
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { IManikin } from '../interfaces/IManikin';
import { IMemory } from '../interfaces/IMemory';
import { IMite } from '../interfaces/IMite';
import { allManikins } from '../globals/allManikins';
import { mobFileHeaderString } from '../mobparts/mites/service/mobFileHeaderString';
import { servicesFooterSectionString } from '../mobparts/mites/service/servicesFooterSectionString';
import { mobNetworkFooterSectionString } from '../mobparts/mites/network/mobNetowrkFooterSectionString';
import { mobNetworksSectionString } from '../mobparts/mites/network/mobNetworksSectionString';

const tableManikins: IManikin[] = allManikins

export const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] => manikinArray.filter((eachManikin) => eachManikin.isSelected === true)

export const updateMemories = (manikinArray: IManikin[]): IMemory[] =>
    (manikinArray.filter((eachManikin: IManikin) =>
        eachManikin.isSelected)).flatMap((eachManikin) =>
            eachManikin.memories)

export const updateMobMites = (manikins: IManikin[]): IMite[] => manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite));

export const updateServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `Service`)

export const updateNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `Network`)

export const updateCustomMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `Custom`)

export const updateYML = (serviceMites: IMite[], networkMites: IMite[]): string => {
    let tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
    let tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
    let ymlOutputArray: string[] = [mobFileHeaderString, ...tempServicesYML, servicesFooterSectionString, mobNetworksSectionString, ...tempNetworksYML, mobNetworkFooterSectionString]
    let ymlString: string = ymlOutputArray.join(``)
    return ymlString
}

export const updateInfoContent = (info: string): string => {
    return info
}

let initialMegaDockerState: IMegaDockerState = {
    manikinTableContents: tableManikins,
    selectedManikins: updateSelectedManikins(tableManikins),
    memoryTableContents: updateMemories(updateSelectedManikins(tableManikins)),
    allMobMites: updateMobMites(updateSelectedManikins(tableManikins)),
    mobServiceMites: updateServiceMites(updateMobMites(updateSelectedManikins(tableManikins))),
    mobNetworkMites: updateNetworkMites(updateMobMites(updateSelectedManikins(tableManikins))),
    mobCustomMites: updateCustomMites(updateMobMites(updateSelectedManikins(tableManikins))),
    infoContent: updateInfoContent(`This is the Information Pane.  You can read more about the selected item here.`),
    ymlOutput: updateYML(updateServiceMites(updateMobMites(updateSelectedManikins(tableManikins))), updateNetworkMites(updateMobMites(updateSelectedManikins(tableManikins))))
};

export const Store = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const StoreProvider = (props: any): React.ReactElement => {
    return (<React.Suspense fallback="...loading"><Store.Provider value={initialMegaDockerState}>{props.children}</Store.Provider ></React.Suspense>)
}

export const StoreConsumer = (props: any): React.ReactElement => {
    return (
        <React.Suspense fallback="...loading">
            <Store.Consumer>{props.children}</Store.Consumer>
        </React.Suspense>

    )
}