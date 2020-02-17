import React from 'react';
import JSZip from 'jszip';
// data interfaces
import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';
import { IMite } from '../../interfaces/IMite';
// action interfaces
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
// global consts
import { allManikins } from '../../globals/allManikins';
import { mobFileHeaderString } from '../../mobparts/mites/headers/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/headers/servicesFooterSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/headers/mobNetworkFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/headers/mobNetworksSectionString';

/**
 * Updates application state for React.useReducer
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  state: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  /**
   * mutable copy of the state to change
   */
  let newState: IMegaDockerState = { ...state };

  /**
   * updates selectedManikins array based on application state
   */
  const getManikins = (manikinsToSelectFrom: IManikin[]): IManikin[] =>
    manikinsToSelectFrom.filter(
      (eachManikin) => eachManikin.isSelected === true
    );
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
    miteArray.filter((eachMite) => eachMite.type === `DockerSwarmService`);
  /**
   * updates networkMites array based on application state
   */

  const getDNetworkMites = (miteArray: IMite[]): IMite[] =>
    miteArray.filter((eachMite) => eachMite.type === `DockerSwarmNetwork`);

  // /**
  //  * updates serviceMites array based on application state
  //  */
  // const getKServiceMites = (miteArray: IMite[]): IMite[] =>
  //   miteArray.filter((eachMite) => eachMite.type === `KubernetesService`);

  // /**
  //  * updates networkMites array based on application state
  //  */
  // const getKNetworkMites = (miteArray: IMite[]): IMite[] =>
  //   miteArray.filter((eachMite) => eachMite.type === `KubernetesNetwork`);

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
   * makes Docker Swarm .zip file
   */
  const zipDockerSwarm = (
    serviceMites: IMite[],
    networkMites: IMite[]
  ): string => {
    const tempServicesYML: string[] = serviceMites.flatMap(
      (eachMite) => eachMite.miteString
    );
    const tempNetworksYML: string[] = networkMites.flatMap(
      (eachMite) => eachMite.miteString
    );
    const ymlOutputArray: string[] = [
      mobFileHeaderString,
      ...tempServicesYML,
      servicesFooterSectionString,
      mobNetworksSectionString,
      ...tempNetworksYML,
      mobNetworkFooterSectionString
    ];
    const ymlString: string = ymlOutputArray.join(``);
    return ymlString;
  };
  /**
   * makes Docker Swarm .zip file
   */
  const zipKubernetesPod = (
    serviceMites: IMite[],
    networkMites: IMite[]
  ): string => {
    const tempServicesYML: string[] = serviceMites.flatMap(
      (eachMite) => eachMite.miteString
    );
    const tempNetworksYML: string[] = networkMites.flatMap(
      (eachMite) => eachMite.miteString
    );
    const ymlOutputArray: string[] = [
      mobFileHeaderString,
      ...tempServicesYML,
      servicesFooterSectionString,
      mobNetworksSectionString,
      ...tempNetworksYML,
      mobNetworkFooterSectionString
    ];
    const ymlString: string = ymlOutputArray.join(``);
    return ymlString;
  };

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
      newState.ymlOutput = zipDockerSwarm(
        newState.mobDServiceMites,
        newState.mobDNetworkMites
      );
      return newState;

    case `TOGGLE_MANIKIN`: // to de/select a manikin
      newState.manikinTable[action.payload].isSelected = !state.manikinTable[
        action.payload
      ].isSelected; // reverses the selected boolean in the manikin passed to it
      newState.selectedManikins = getManikins(newState.manikinTable); // rebuilds selected Manikins
      newState.memories = getMemories(newState.selectedManikins); // rebuilds Memories
      newState.allMobMites = getMites(newState.selectedManikins); // rebuilds Mites
      newState.mobDNetworkMites = getDServiceMites(newState.allMobMites); // docker swarm network Mites
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites); // docker swarm service Mites
      newState.mobCustomMites = getCustomMites(newState.allMobMites); // custom mite file-based Mite[]
      newState.infoContent = `Toggled ${
        newState.manikinTable[action.payload].name
      } .isSelected to ${newState.manikinTable[action.payload].isSelected}`;
      return newState;

    case `UPDATE_MEMORY_VALUE`: // to handle changing data in a memory's value
      const memoryIndex = newState.memories.indexOf(action.payload.memory);
      newState.memories[memoryIndex].value = action.payload.value;
      newState.memories[memoryIndex].isReady = newState.memories[
        memoryIndex
      ].validator(newState.memories[memoryIndex].value);
      newState.infoContent = `${action.payload.memory.name} was updated`;
      return newState;

    case `DOCKER_SWARM_OUTPUT`: // for export button
      newState = {
        ...newState,
        ymlOutput: zipDockerSwarm(
          newState.mobDServiceMites,
          newState.mobDNetworkMites
        )
      };
      return newState;

    case `KUBERNETES_OUTPUT`: // for export button
      newState = {
        ...newState,
        ymlOutput: zipKubernetesPod(
          newState.mobKServiceMites,
          newState.mobKNetworkMites
        )
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
