/** @format */

//  initialMegaDockerState.ts
//  MEGADocker
//  the application's beginning state
//  Created by George Georgulas IV on 3/17/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { OrbThemeLight } from '../components/OrbTheme/OrbThemeLight'
import { IMegaDockerState } from '../interfaces/stateManagement/IMegaDockerState'
import { IMite } from '../interfaces/objectInterfaces/IMite'
import { workingManikins } from './workingManikins'
import { IManikin } from '../interfaces/objectInterfaces/IManikin'

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
  ymlOutput: ``
}
