import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';
import { IMite } from '../../interfaces/IMite';
import { IMegaDockerAction } from '../../interfaces/IMegaDockerAction';
import { IMegaDockerState } from '../../interfaces/IMegaDockerState';
import { mobFileHeaderString } from '../../mobparts/mites/service/mobFileHeaderString';
import { servicesFooterSectionString } from '../../mobparts/mites/service/servicesFooterSectionString';
import { mobNetworksSectionString } from '../../mobparts/mites/network/mobNetworksSectionString';
import { mobNetworkFooterSectionString } from '../../mobparts/mites/network/mobNetowrkFooterSectionString';
import { initialMegaDockerState } from '../../components/Context';

/**
 * updates selectedManikins array based on application state
 */
const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] => {
  return manikinArray.filter((eachManikin) => eachManikin.isSelected === true);
};
/**
 * updates memories array based on application state
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

/**
 * Updates application state with useReducer
 */
export const megaReducer: React.Reducer<IMegaDockerState, IMegaDockerAction> = (
  prevState: IMegaDockerState,
  action: IMegaDockerAction
): IMegaDockerState => {
  console.log(`running megaReducer`);
  let newState: IMegaDockerState = prevState;
  switch (action.type) {
    case `APPLICATION_START`:
      newState = initialMegaDockerState;
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
      throw new Error(`Unhadndled action type: ${action.type}`);
  }
  return newState;
};
