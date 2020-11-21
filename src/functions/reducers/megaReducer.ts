import React from 'react';
// interfaces
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
// global consts
// import { allManikins } from '../../globals/allManikins';
import { workingManikins } from '../../globals/workingManikins';
// reducer operation functions
import { getManikins } from './getManikins';
import { getMemories } from './getMemories';
import { getMites } from './getMites';
import { getDServiceMites } from './getDServiceMites';
import { getDNetworkMites } from './getDNetworkMites';
import { getKServiceMites } from './getKServiceMites';
import { getKNetworkMites } from './getKNetworkMItes';
import { getCustomMites } from './getCustomMites';
import { updateInfoContent } from './updateInfoContent';
import { zipDockerSwarm } from './zipDockerSwarm';
import { zipKubernetesDeployment } from './zipKubernetesDeployment';

/**
 * Updates application state
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  state: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  /**
   * a mutable copy of the state to make changes to
   */
  let newState: IMegaDockerState = { ...state };

  switch (
    action.type // check which modification to make to state
  ) {
    case `APPLICATION_START`: // to start the program with only core manikins selected
      newState.manikinTable = workingManikins;
      newState.selectedManikins = getManikins(workingManikins);
      newState.memories = getMemories(newState.selectedManikins);
      newState.allMobMites = getMites(newState.selectedManikins);
      newState.mobDServiceMites = getDServiceMites(newState.allMobMites);
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites);
      newState.mobKServiceMites = getKServiceMites(newState.allMobMites);
      newState.mobKNetworkMites = getKNetworkMites(newState.allMobMites);
      newState.mobCustomMites = getCustomMites(newState.allMobMites);
      newState.infoContent = `This is the Information Pane.  You can read these about the selected item here.`;
      newState.ymlOutput = `newState`;
      return newState;

    case `TOGGLE_MANIKIN`: // to de/select a manikin
      newState.manikinTable[action.payload].isSelected = !state.manikinTable[
        action.payload
      ].isSelected; // reverses the selected boolean in the manikin passed to it
      newState.selectedManikins = getManikins(newState.manikinTable); // rebuilds selected Manikins
      newState.memories = getMemories(newState.selectedManikins); // rebuilds Memories
      newState.allMobMites = getMites(newState.selectedManikins); // rebuilds Mites
      newState.mobDServiceMites = getDServiceMites(newState.allMobMites); // docker swarm network Mites
      newState.mobDNetworkMites = getDNetworkMites(newState.allMobMites); // docker swarm service Mites
      newState.mobKServiceMites = getKServiceMites(newState.allMobMites);
      newState.mobKNetworkMites = getKNetworkMites(newState.allMobMites);
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

    case `OPEN_MOB_FILE`: // TODO: for save button
      return newState;

    case `SAVE_MOB_FILE`: // TODO: for open button
      return newState;

    case `DOCKER_SWARM_OUTPUT`: // TODO: for docker swarm export button
      zipDockerSwarm({
        manikins: newState.selectedManikins,
        memories: newState.memories,
      });
      return newState;

    case `KUBERNETES_OUTPUT`: // TODO: for kubernetes export button
      newState = {
        ...newState,
        ymlOutput: zipKubernetesDeployment(
          newState.mobKServiceMites,
          newState.mobKNetworkMites
        ),
      };
      return newState;

    case `UPDATE_INFO_CONTENT`: // to dispatch user hints to info pane
      newState = {
        ...newState,
        infoContent: updateInfoContent(action.payload),
      };
      return newState;

    default:
      throw new Error(
        `megaReducer Error: hit default case in action.type switch`
      );
  }
};
