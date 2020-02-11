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

const coreManikins: IManikin[] = getManikins(allManikins);
const coreMemories: IMemory[] = getMemories(coreManikins);
const coreMites: IMite[] = getMites(coreManikins);
const dServiceMites: IMite[] = getDServiceMites(coreMites);
const dNetworkMites: IMite[] = getDNetworkMites(coreMites);
const customMites: IMite[][] = getCustomMites(coreMites);
const welcomeInfo: string = `This is the Information Pane.  You can read more about the selected item here.`;
const coreYML: string = getYML(dServiceMites, dNetworkMites);

export const coreState: IMegaDockerState = {
  manikinTable: allManikins,
  selectedManikins: coreManikins,
  memories: coreMemories,
  allMobMites: coreMites,
  mobDServiceMites: dServiceMites,
  mobDNetworkMites: dNetworkMites,
  mobCustomMites: customMites,
  infoContent: welcomeInfo,
  ymlOutput: coreYML
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

  const updateMemoryValue: Function = (
    newValue: string,
    newReady: boolean,
    newInfo: string,
    memoryIndex: number
  ): IMegaDockerState => {
    let workingState: IMegaDockerState = { ...prevState };
    workingState.memories[memoryIndex].value = newValue;
    workingState.memories[memoryIndex].isReady = newReady;
    workingState.infoContent = newInfo;
    const newState = workingState;
    return newState;
  };

  let newState: IMegaDockerState = prevState; // duplicate the state to modify a copy

  switch (
    action.type // check which modification to make to state
  ) {
    case `APPLICATION_START`: // to start the program with core manikins selected
      return coreState;

    case `MANIKIN_TOGGLE_ACTION`: // to de/select a manikin
      newState.manikinTable = [...newState.manikinTable, action.payload];
      newState.selectedManikins = getManikins(newState.manikinTable);
      newState.memories = getMemories(newState.selectedManikins);
      newState.allMobMites = getMites(newState.selectedManikins);
      newState.mobDNetworkMites = getDServiceMites(newState.allMobMites);
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites);
      newState.mobCustomMites = getCustomMites(newState.allMobMites);
      newState.infoContent = action.payload.description;
      return newState;

    case `UPDATE_MEMORY_VALUE`: // to handle new data in a memory
      const newMemory = updateMemoryValue(action.payload);
      newState = { ...newState, memories: [...newState.memories, newMemory] };
      return newState;

    case `GENERATE_YML_OUTPUT`: // for export button
      newState = {
        ...prevState,
        ymlOutput: getYML(newState.mobDServiceMites, newState.mobDNetworkMites)
      };
      return newState;
    case `UPDATE_INFO_CONTENT`: // to dispatch user hints to info pane
      newState = {
        ...prevState,
        infoContent: updateInfoContent(action.payload)
      };
      return newState;
    default:
      throw new Error(`Unhandled action type`);
  }
};
