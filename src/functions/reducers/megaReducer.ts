import React from 'react';
// data interfaces
import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';
import { IMite } from '../../interfaces/IMite';
// action interfaces
import { IApplicationStartAction } from '../../interfaces/actionInterfaces/IApplicationStartAction';
import { IGenerateYmlOutputAction } from '../../interfaces/actionInterfaces/IGenerateYmlOutputAction';
import { IManikinToggleAction } from '../../interfaces/actionInterfaces/IManikinToggleAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { IUpdateMemoryValueAction } from '../../interfaces/actionInterfaces/IUpdateMemoryValueAction';
import { IUpdateInfoContentAction } from '../../interfaces/actionInterfaces/IUpdateInfoContentAction';
// global consts
import { allManikins } from '../../globals/allManikins';
import { mobFileHeaderString } from '../../mobparts/mites/service/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/service/servicesFooterSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/network/mobNetowrkFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/network/mobNetworksSectionString';

/**
 * updates selectedManikins array based on application state
 */
const getManikins = (manikinsToSelectFrom: IManikin[]): IManikin[] =>
  manikinsToSelectFrom.filter((eachManikin) => eachManikin.isSelected === true);
/**
 * updates memories array based on application state
 */
const getMemories = (manikinsToGetMemoriesFrom: IManikin[]): IMemory[] =>
  manikinsToGetMemoriesFrom
    .filter((eachManikin: IManikin) => eachManikin.isSelected)
    .flatMap((eachManikin) => eachManikin.memories);
/**
 * updates allMobMites array based on application state
 */
const getMites = (manikinsToGetMitesFrom: IManikin[]): IMite[] =>
  manikinsToGetMitesFrom.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
  );
/**
 * updates serviceMites array based on application state
 */

const getDServiceMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Service`);
/**
 * updates networkMites array based on application state
 */

const getDNetworkMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Network`);

/**
 * updates customMites array based on application state
 */
const getCustomMites = (miteArray: IMite[]): IMite[][] => [
  miteArray.filter((eachMite) => eachMite.type === `Custom`)
];

/**
 * updates Info Pane content
 */
const updateInfoContent = (info: string): string => {
  return info;
};
/**
 * updates YML file
 */
const getYML = (serviceMites: IMite[], networkMites: IMite[]): string => {
  let tempServicesYML: string[] = serviceMites.flatMap(
    (eachMite) => eachMite.miteString
  );
  let tempNetworksYML: string[] = networkMites.flatMap(
    (eachMite) => eachMite.miteString
  );
  let ymlOutputArray: string[] = [
    mobFileHeaderString,
    ...tempServicesYML,
    servicesFooterSectionString,
    mobNetworksSectionString,
    ...tempNetworksYML,
    mobNetworkFooterSectionString
  ];
  let ymlString: string = ymlOutputArray.join(``);
  return ymlString;
};

/**
 * Updates application state for React.useReducer
 */
export const megaReducer: React.Reducer<
  IMegaDockerState,
  | IApplicationStartAction
  | IGenerateYmlOutputAction
  | IManikinToggleAction
  | IUpdateInfoContentAction
  | IUpdateMemoryValueAction
> = (
  prevState: IMegaDockerState,
  action:
    | IApplicationStartAction
    | IGenerateYmlOutputAction
    | IManikinToggleAction
    | IUpdateInfoContentAction
    | IUpdateMemoryValueAction
): IMegaDockerState => {
  console.log(`running megaReducer with type ${action.type} and payload:`);
  console.log(action.payload);

  let newState: IMegaDockerState = prevState; // duplicate the state to modify a copy

  switch (
    action.type // check which modification to make to state
  ) {
    case `APPLICATION_START`: // to start the program with only core manikins selected
      newState.manikinTable = allManikins;
      newState.selectedManikins = getManikins(allManikins);
      newState.memories = getMemories(newState.selectedManikins);
      newState.allMobMites = getMites(newState.selectedManikins);
      newState.mobDServiceMites = getDServiceMites(newState.allMobMites);
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites);
      newState.mobCustomMites = getCustomMites(newState.allMobMites);
      newState.infoContent = `This is the Information Pane.  You can read these about the selected item here.`;
      newState.ymlOutput = getYML(
        newState.mobDServiceMites,
        newState.mobDNetworkMites
      );
      return newState;

    case `MANIKIN_TOGGLE_ACTION`: // to de/select a manikin
      const mIndex: number = newState.manikinTable.indexOf(action.payload);
      newState.manikinTable[mIndex].isSelected = !newState.manikinTable[mIndex]
        .isSelected;
      newState.selectedManikins = getManikins(newState.manikinTable);
      newState.memories = getMemories(newState.selectedManikins);
      newState.allMobMites = getMites(newState.selectedManikins);
      newState.mobDNetworkMites = getDServiceMites(newState.allMobMites);
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites);
      newState.mobCustomMites = getCustomMites(newState.allMobMites);
      newState.infoContent = `Toggled ${action.payload.name} .isSelected to ${newState.manikinTable[mIndex].isSelected}`;
      return newState;

    case `UPDATE_MEMORY_VALUE`: // to handle changing data in a memory's value
      const memoryIndex = newState.memories.indexOf(action.payload.memory);
      newState.memories[memoryIndex].value = action.payload.value;
      newState.memories[memoryIndex].isReady = newState.memories[
        memoryIndex
      ].validator(newState.memories[memoryIndex].value);
      newState.infoContent = `${action.payload.memory.name} was updated`;
      return newState;

    case `GENERATE_YML_OUTPUT`: // for export button
      newState = {
        ...newState,
        ymlOutput: getYML(newState.mobDServiceMites, newState.mobDNetworkMites)
      };
      return newState;

    case `UPDATE_INFO_CONTENT`: // to dispatch user hints to info pane
      newState = {
        ...newState,
        infoContent: updateInfoContent(action.payload)
      };
      return newState;

    default:
      throw new Error(`megaReducer Error: hit default case in switch`);
  }
};
