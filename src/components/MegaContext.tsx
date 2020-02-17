import React from 'react'
import { IMegaDockerState } from '../interfaces/IMegaDockerState';
import { IManikin } from '../interfaces/IManikin';
import { IMemory } from '../interfaces/IMemory';
import { IMite } from '../interfaces/IMite';
import { allManikins } from '../globals/allManikins';
import { mobFileHeaderString } from '../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworkFooterSectionString } from '../mobparts/mites/headers/mobNetworkFooterSectionString';
import { mobNetworksSectionString } from '../mobparts/mites/headers/mobNetworksSectionString';
import { megaReducer } from '../functions/reducers/megaReducer'

const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] => manikinArray.filter((eachManikin) => eachManikin.isSelected === true)
const updateMemories = (manikinArray: IManikin[]): IMemory[] =>
    (manikinArray.filter((eachManikin: IManikin) =>
        eachManikin.isSelected)).flatMap((eachManikin) =>
            eachManikin.memories)
const updateMobMites = (manikins: IManikin[]): IMite[] => manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite));
const updateServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`)
const updateNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`)
const updateCustomMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `Custom`)
const updateYML = (serviceMites: IMite[], networkMites: IMite[]): string => {
    const tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
    const tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
    const ymlOutputArray: string[] = [mobFileHeaderString, ...tempServicesYML, servicesFooterSectionString, mobNetworksSectionString, ...tempNetworksYML, mobNetworkFooterSectionString]
    const ymlString: string = ymlOutputArray.join(``)
    return ymlString
}
const updateInfoContent = (info: string): string => {
    return info
}

const initialTableManikins: IManikin[] = [...allManikins]
const initialSelectedManikins: IManikin[] = updateSelectedManikins(initialTableManikins)
const initialMemoryTableContents: IMemory[] = updateMemories(initialSelectedManikins)
const initialMobMites: IMite[] = updateMobMites(initialSelectedManikins)
const initialServiceMites: IMite[] = updateServiceMites(initialMobMites)
const initialNetworkMites: IMite[] = updateNetworkMites(initialMobMites)
const initialCustomMites: IMite[][] = [updateCustomMites(initialMobMites)]
const initialInfoContent: string = updateInfoContent(`This is the Information Pane.  You can read more about the selected item here.`);
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

export const MegaContext: React.Context<any> = React.createContext({
    state: initialMegaDockerState
})

export const MegaProvider: React.FC = (props: any): React.ReactElement => {

    const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)

    return (
        <MegaContext.Provider value={{ state, dispatch }}>{props.children}</MegaContext.Provider>
    )
}

