import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';
import { IMite } from '../../interfaces/IMite';
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { allManikins } from '../../globals/allManikins';
import { mobFileHeaderString } from '../../mobparts/mites/service/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/service/servicesFooterSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/network/mobNetowrkFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/network/mobNetworksSectionString';

/**
 * updates selectedManikins array based on application state
 */
export const updateSelectedManikins = (
  manikinArray: IManikin[]
): IManikin[] => {
  return manikinArray.filter((eachManikin) => eachManikin.isSelected === true);
};
/**
 * updates memories array based on application state
 */
export const updateMemories = (manikinArray: IManikin[]): IMemory[] =>
  manikinArray
    .filter((eachManikin: IManikin) => eachManikin.isSelected)
    .flatMap((eachManikin) => eachManikin.memories);
/**
 * updates allMobMites array based on application state
 */
export const updateMobMites = (manikins: IManikin[]): IMite[] =>
  manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
  );
/**
 * updates serviceMites array based on application state
 */
export const updateServiceMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Service`);
/**
 * updates networkMites array based on application state
 */
export const updateNetworkMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Network`);
/**
 * updates customMites array based on application state
 */
export const updateCustomMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Custom`);
/**
 * updates Info Pane content
 */
export const updateInfoContent = (info: string): string => {
  return info;
};
/**
 * updates YML file
 */
export const updateYML = (
  serviceMites: IMite[],
  networkMites: IMite[]
): string => {
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

const initialTableManikins: IManikin[] = [...allManikins];
const initialSelectedManikins: IManikin[] = updateSelectedManikins(
  initialTableManikins
);
const initialMemoryTableContents: IMemory[] = updateMemories(
  initialSelectedManikins
);
const initialMobMites: IMite[] = updateMobMites(initialSelectedManikins);
const initialServiceMites: IMite[] = updateServiceMites(initialMobMites);
const initialNetworkMites: IMite[] = updateNetworkMites(initialMobMites);
const initialCustomMites: IMite[] = updateCustomMites(initialMobMites);
const initialInfoContent: string = `This is the Information Pane.  You can read more about the selected item here.`;
const initialYmlOutput: string = updateYML(
  initialServiceMites,
  initialNetworkMites
);

export const initialMegaDockerState: IMegaDockerState = {
  manikinTableContents: initialTableManikins,
  selectedManikins: initialSelectedManikins,
  memoryTableContents: initialMemoryTableContents,
  allMobMites: initialMobMites,
  mobDServiceMites: initialServiceMites,
  mobDNetworkMites: initialNetworkMites,
  mobCustomMites: initialCustomMites,
  infoContent: initialInfoContent,
  ymlOutput: initialYmlOutput
};
/**
 * Updates application state with useReducer
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  prevState: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  console.log(`running megaReducer with type ${action.type} and payload:`);
  console.log(action.payload);
  let newState: IMegaDockerState = prevState;
  switch (action.type) {
    case `APPLICATION_START`:
      newState = initialMegaDockerState;
      console.log(`dispatched action 'APPLICATION_START'`);
      break;
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
        mobDServiceMites: updateServiceMites(newMobMites),
        mobDNetworkMites: updateNetworkMites(newMobMites),
        mobCustomMites: updateCustomMites(newMobMites),
        infoContent: `manikinThatWasToggled.description`
      };
      console.log(`dispatched action 'TOGGLE_MANIKIN'`);
      break;
    case `UPDATE_MEMORY_VALUE`:
      newState = {
        ...prevState,
        memoryTableContents: updateMemories(action.payload.manikinTableContents)
      };
      console.log(`dispatched action 'UPDATE_MEMORY_VALUE'`);
      break;
    case `GENERATE_YML_OUTPUT`:
      newState = {
        ...prevState,
        ymlOutput: updateYML(
          action.payload.mobServiceMites,
          action.payload.mobNetworkMites
        )
      };
      console.log(`dispatched action 'GENERATE_YML_OUTPUT'`);
      break;
    case `UPDATE_INFO_CONTENT`:
      newState = {
        ...prevState,
        infoContent: updateInfoContent(action.payload.infoContent)
      };
      console.log(`dispatched action 'UPDATE_INFO_CONTENT'`);
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
  return newState;
};
