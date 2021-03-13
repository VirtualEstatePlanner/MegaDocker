/** @format */

//  MegaContext.tsx
//  MegaDocker
//  a React Component that
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IManikin } from '../interfaces/IManikin'
import { IMemory } from '../interfaces/IMemory'
import { IMite } from '../interfaces/IMite'
import { workingManikins } from '../globals/workingManikins'
import { mobFileHeaderSectionString } from '../mobparts/mites/headers/mobFileHeaderSectionString'
import { mobServicesFooterSectionString } from '../mobparts/mites/headers/mobServicesFooterSectionString'
import { mobNetworkFooterSectionString } from '../mobparts/mites/headers/mobNetworkFooterSectionString'
import { mobNetworkHeaderSectionString } from '../mobparts/mites/headers/mobNetworkHeaderSectionString'
import { megaReducer } from '../functions/reducers/megaReducer'

const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] => manikinArray.filter((eachManikin) => eachManikin.isSelected === true)
const updateMemories = (manikinArray: IManikin[]): IMemory[] => manikinArray.filter((eachManikin: IManikin) => eachManikin.isSelected).flatMap((eachManikin) => eachManikin.memories)
const updateMobMites = (manikins: IManikin[]): IMite[] => manikins.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))
const updateDServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`)
const updateDNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`)
const updateKServiceMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `KubernetesService`)
const updateKNetworkMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `KubernetesNetwork`)
const updateCustomMites = (miteArray: IMite[]): IMite[] => miteArray.filter((eachMite) => eachMite.type === `Custom`)
const updateYML = (serviceMites: IMite[], networkMites: IMite[]): string => {
  const tempServicesYML: string[] = serviceMites.flatMap((eachMite) => eachMite.miteString)
  const tempNetworksYML: string[] = networkMites.flatMap((eachMite) => eachMite.miteString)
  const ymlOutputArray: string[] = [mobFileHeaderSectionString, ...tempServicesYML, mobServicesFooterSectionString, mobNetworkHeaderSectionString, ...tempNetworksYML, mobNetworkFooterSectionString]
  const ymlString: string = ymlOutputArray.join(``)
  return ymlString
}
const updateInfoContent = (info: string): string => {
  return info
}

const getCoreManikins = (manikins: IManikin[]): IManikin[] => {
  return manikins.filter((eachManikin: IManikin) => (eachManikin.isCore ? true : false))
}

const getSelectableManikins = (manikins: IManikin[]): IManikin[] => {
  return manikins.filter((eachManikin: IManikin) => (eachManikin.isCore ? false : true))
}

const coreManikins: IManikin[] = getCoreManikins(workingManikins)
const selectableManikins: IManikin[] = getSelectableManikins(workingManikins)
const sortedManikins: IManikin[] = [...coreManikins, ...selectableManikins]

const initialTableManikins: IManikin[] = sortedManikins
const initialSelectedManikins: IManikin[] = updateSelectedManikins(initialTableManikins)
const initialMemoryTableContents: IMemory[] = updateMemories(initialSelectedManikins)
const initialMobMites: IMite[] = updateMobMites(initialSelectedManikins)
const initialDServiceMites: IMite[] = updateDServiceMites(initialMobMites)
const initialDNetworkMites: IMite[] = updateDNetworkMites(initialMobMites)
const initialKServiceMites: IMite[] = updateKServiceMites(initialMobMites)
const initialKNetworkMites: IMite[] = updateKNetworkMites(initialMobMites)
const initialCustomMites: IMite[][] = [updateCustomMites(initialMobMites)]
const initialInfoContent: string = updateInfoContent(`This is the Information Pane.  You can read more about the selected item here.`)
const initialYmlOutput: string = updateYML(initialDServiceMites, initialDNetworkMites)

export const initialMegaDockerState: IMegaDockerState = {
  manikinTable: sortedManikins,
  selectedManikins: initialSelectedManikins,
  memories: initialMemoryTableContents,
  allMobMites: initialMobMites,
  mobDServiceMites: initialDServiceMites,
  mobDNetworkMites: initialDNetworkMites,
  mobKServiceMites: initialKServiceMites,
  mobKNetworkMites: initialKNetworkMites,
  mobCustomMites: initialCustomMites,
  infoContent: initialInfoContent,
  ymlOutput: initialYmlOutput,
}

export const MegaContext: React.Context<any> = React.createContext({
  state: initialMegaDockerState,
})

export const MegaProvider: React.FC = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)

  return <MegaContext.Provider value={{ state, dispatch }}>{props.children}</MegaContext.Provider>
}
