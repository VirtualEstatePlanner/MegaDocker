/** @format */

//  megaReducer.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/12/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { OrbThemeDark } from '../../../components/OrbTheme/OrbThemeDark'
import { OrbThemeLight } from '../../../components/OrbTheme/OrbThemeLight'
import { getCustomMites } from '../../../functions/reducers/getCustomMites'
import { getDNetworkMites } from '../../../functions/reducers/getDNetworkMites'
import { getDServiceMites } from '../../../functions/reducers/getDServiceMites'
import { getManikins } from '../../../functions/reducers/getManikins'
import { getMemories } from '../../../functions/reducers/getMemories'
import { getMites } from '../../../functions/reducers/getMites'
import { megaReducer } from '../../../functions/reducers/megaReducer'
import { workingManikins } from '../../../globals/workingManikins'
import { IMegaDockerState } from '../../../interfaces/stateManagement/IMegaDockerState'
import { testMegaDockerAction } from '../../test-functions/testMegaDockerAction'
import { testMegaDockerState } from '../../test-functions/testMegaDockerState'

/*
 * mocks css for Asap font
 */
jest.mock('@fontsource/asap', () => ({
  fontsourceAsap: ''
}))

/*
 * mocks css for gray color
 */
jest.mock('@mui/material/colors/grey', () => ({
  greyColor: ''
}))

const selectedManikins = getManikins(workingManikins)
const memories = getMemories(selectedManikins)
const allMobMites = getMites(selectedManikins)
const mobDServiceMites = getDServiceMites(allMobMites)
const mobDNetworkMites = getDNetworkMites(allMobMites)
const mobCustomMites = getCustomMites(allMobMites)
const ymlOutput = `testingState`

const testingState: IMegaDockerState = {
  theme: OrbThemeLight,
  manikinTable: workingManikins,
  selectedManikins: selectedManikins,
  memories: memories,
  allMobMites: allMobMites,
  mobDServiceMites: mobDServiceMites,
  mobDNetworkMites: mobDNetworkMites,
  mobCustomMites: mobCustomMites,
  ymlOutput: ymlOutput
}

describe('tests the megaReducer function', () => {
  testMegaDockerAction()
  testMegaDockerState()
  expect(megaReducer(testingState, { type: 'TOGGLE_THEME', payload: OrbThemeLight })).toEqual({ ...testingState, theme: OrbThemeDark })
})

export {}
