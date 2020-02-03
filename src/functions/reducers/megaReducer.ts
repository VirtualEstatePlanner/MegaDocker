import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';
import { IMite } from '../../interfaces/IMite';
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { mobFileHeaderString } from '../../mobparts/mites/service/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/service/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/network/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/network/mobNetowrkFooterSectionString';

/**
 * updates selectedManikins array based on application state
 */
const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] =>
  manikinArray.filter((eachManikin) => eachManikin.isSelected === true);
/**
 * updates memories arrayb based on application state
 */
const updateMemories = (manikinArray: IManikin[]): IMemory[] =>
  manikinArray
    .filter((eachManikin: IManikin) => eachManikin.isSelected)
    .flatMap((eachManikin) => eachManikin.memories);
/**
 * updates allMobMites array based on application state
 */
const updateMobMites = (manikins: IManikin[]): IMite[] =>
  manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
  );
/**
 * updates serviceMites array based on application state
 */
const updateServiceMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Service`);
/**
 * updates networkMites array based on application state
 */
const updateNetworkMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Network`);
/**
 * updates customMites array based on application state
 */
const updateCustomMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Custom`);
/**
 * updates Info Pane content
 */
const updateInfoContent = (info: string): string => {
  return info;
};
/**
 * updates YML file
 */
const updateYML = (serviceMites: IMite[], networkMites: IMite[]): string => {
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
export const toggleManikinReducer = (
  prevState: IMegaDockerState,
  manikin: IManikin
): IMegaDockerAction => {
  const indexOfManikin: number = prevState.manikinTableContents.indexOf(
    manikin
  );
  let workingState: IMegaDockerState = { ...prevState };
  workingState.manikinTableContents[indexOfManikin].isSelected = !prevState
    .manikinTableContents[indexOfManikin].isSelected;
  workingState.selectedManikins = updateSelectedManikins(
    workingState.manikinTableContents
  );
  workingState.memoryTableContents = updateMemories(
    workingState.selectedManikins
  );
  workingState.allMobMites = updateMobMites(workingState.selectedManikins);
  workingState.mobServiceMites = updateServiceMites(
    updateMobMites(workingState.selectedManikins)
  );
  workingState.mobNetworkMites = updateNetworkMites(
    updateMobMites(workingState.selectedManikins)
  );
  workingState.mobCustomMites = updateCustomMites(
    updateMobMites(workingState.selectedManikins)
  );
  workingState.ymlOutput = ``;
  workingState.infoContent = `Manikin ${manikin.name} was toggled.`;
  return {
    type: 'TOGGLE_MANIKIN',
    payload: workingState
  };
};

/**
 * Updates application state with useReducer
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  prevState: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  let newState: IMegaDockerState = prevState;
  switch (action.type) {
    case `TOGGLE_MANIKIN`:
      const newSelectedManikins: IManikin[] = updateSelectedManikins(
        action.payload.manikinTableContents
      );
      const newMobMites: IMite[] = updateMobMites(newSelectedManikins);
      newState = {
        ...prevState,
        selectedManikins: newSelectedManikins,
        memoryTableContents: updateMemories(newSelectedManikins),
        allMobMites: newMobMites,
        mobServiceMites: updateServiceMites(newMobMites),
        mobNetworkMites: updateNetworkMites(newMobMites),
        mobCustomMites: updateCustomMites(newMobMites)
      };
      break;
    case `UPDATE_MEMORY_VALUE`:
      newState = {
        ...prevState,
        memoryTableContents: updateMemories(action.payload.manikinTableContents)
      };
      break;
    case `GENERATE_YML_OUTPUT`:
      newState = {
        ...prevState,
        ymlOutput: updateYML(
          action.payload.mobServiceMites,
          action.payload.mobNetworkMites
        )
      };
      break;
    case `UPDATE_INFO_CONTENT`:
      newState = {
        ...prevState,
        infoContent: updateInfoContent(action.payload.infoContent)
      };
      break;
    default:
      throw new Error(`something went wrong in the megaReducer function`);
  }
  return newState;
};
