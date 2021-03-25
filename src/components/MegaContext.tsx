/** @format */

//  MegaContext.tsx
//  MEGADocker
//  a React Context that handles application state for the MEGADocker application
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import React from 'react'
import { IMegaDockerState } from '../interfaces/IMegaDockerState'
import { IManikin } from '../interfaces/IManikin'
import { IMite } from '../interfaces/IMite'
import { workingManikins } from '../globals/workingManikins'
import { megaReducer } from '../functions/reducers/megaReducer'
import { OrbThemeLight } from './OrbThemeLight'

const coreManikins: IManikin[] = workingManikins.filter((eachManikin: IManikin) => (eachManikin.isCore ? true : false))
const otherManikins: IManikin[] = workingManikins.filter((eachManikin: IManikin) => (eachManikin.isCore ? false : true))
const initialMobMites: IMite[] = coreManikins.flatMap((eachManikin) => eachManikin.mites.flatMap((eachMite) => eachMite))

export const initialMegaDockerState: IMegaDockerState = {
  theme: OrbThemeLight,
  manikinTable: [...coreManikins, ...otherManikins],
  selectedManikins: coreManikins,
  memories: coreManikins.flatMap((eachManikin) => eachManikin.memories),
  allMobMites: initialMobMites,
  mobDServiceMites: initialMobMites.filter((eachMite) => eachMite.type === `DockerSwarmService`),
  mobDNetworkMites: initialMobMites.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`),
  mobCustomMites: [initialMobMites.filter((eachMite) => eachMite.type === `Custom`)],
  ymlOutput: ``,
}

export const MegaContext: React.Context<any> = React.createContext({
  state: initialMegaDockerState,
})

export const MegaProvider: React.FC = (props: any): React.ReactElement => {
  const [state, dispatch] = React.useReducer(megaReducer, initialMegaDockerState)

  return <MegaContext.Provider value={{ state, dispatch }}>{props.children}</MegaContext.Provider>
}

export const MegaConsumer: React.FC = (props: any): React.ReactElement => {
  return <MegaContext.Consumer>{props.children}</MegaContext.Consumer>
}
