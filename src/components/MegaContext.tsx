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

const initialTableManikins: IManikin[] = [...allManikins]
const initialSelectedManikins: IManikin[] = updateSelectedManikins(initialTableManikins)
const initialMemoryTableContents: IMemory[] = updateMemories(initialSelectedManikins)
const initialMobMites: IMite[] = updateMobMites(initialSelectedManikins)
const initialServiceMites: IMite[] = updateServiceMites(initialMobMites)
const initialNetworkMites: IMite[] = updateNetworkMites(initialMobMites)
const initialCustomMites: IMite[][] = [updateCustomMites(initialMobMites)]
const initialInfoContent: string = `This is the Information Pane.  You can read more about the selected item here.`
const initialYmlOutput: string = updateYML(initialServiceMites, initialNetworkMites)


export const initialMegaDockerState: IMegaDockerState = {
    manikinTable: initialTableManikins,
    selectedManikins: initialSelectedManikins,
    memories: initialMemoryTableContents,
    allMobMites: initialMobMites,
    mobDServiceMites: initialServiceMites,
    mobDNetworkMites: initialNetworkMites,
    mobCustomMites: initialCustomMites,
    infoContent: initialInfoContent,
    ymlOutput: initialYmlOutput
};

export const MegaContext: React.Context<IMegaDockerState> = React.createContext<IMegaDockerState>(initialMegaDockerState)

export const MegaContextProvider: React.FC = (props: any): React.ReactElement => {

    return (
        <MegaContext.Provider value={initialMegaDockerState}>
            {props.children}
        </MegaContext.Provider >
    )
}

export const MegaContextConsumer: React.FC = (props: any): React.ReactElement => {
    return (
        <MegaContext.Consumer>
            {props.children}
        </MegaContext.Consumer>

    )
}