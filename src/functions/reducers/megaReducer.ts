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
 * Updates application state with useReducer
 */

const updateSelectedManikins = (manikinArray: IManikin[]): IManikin[] =>
  manikinArray.filter((eachManikin) => eachManikin.isSelected === true);
const updateMemories = (manikinArray: IManikin[]): IMemory[] =>
  manikinArray
    .filter((eachManikin: IManikin) => eachManikin.isSelected)
    .flatMap((eachManikin) => eachManikin.memories);
const updateMobMites = (manikins: IManikin[]): IMite[] =>
  manikins.flatMap((eachManikin) =>
    eachManikin.mites.flatMap((eachMite) => eachMite)
  );
const updateServiceMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Service`);
const updateNetworkMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Network`);
const updateCustomMites = (miteArray: IMite[]): IMite[] =>
  miteArray.filter((eachMite) => eachMite.type === `Custom`);
const updateInfoContent = (info: string): string => {
  return info;
};
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
    default:
      throw new Error(`something went wrong in the megaReducer function`);
  }
  return newState;
};
