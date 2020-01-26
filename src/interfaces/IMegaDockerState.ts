import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';
import { allManikins } from '../globals/allManikins';

export interface IMegaDockerState {
  manikinTableContents: IManikin[];
  memoryTableContents: IMemory[];
  allMobMites: IMite[];
  mobServiceMites: IMite[];
  mobNetworkMites: IMite[];
  mobCustomMites: IMite[];
  infoContent: string;
  ymlOutput: string;
}

const coreManikins: IManikin[] = allManikins.filter(
  (eachManikin) => eachManikin.isCore === true
);

const coreMemsArray: IMemory[][] = coreManikins.map(
  (eachManikin) => eachManikin.memories
);

const coreMems: IMemory[] = coreMemsArray.flatMap((eachArray) =>
  eachArray.concat().filter((eachMemory) => eachMemory)
);

const mobMites = allManikins.flatMap((eachManikin) =>
  eachManikin.mites.flatMap((eachMite) => eachMite)
);

export const initialMegaDockerState: IMegaDockerState = {
  manikinTableContents: [...allManikins],
  memoryTableContents: coreMems,
  allMobMites: mobMites,
  mobServiceMites: mobMites.filter((eachMite) => eachMite.type === `Service`),
  mobNetworkMites: mobMites.filter((eachMite) => eachMite.type === `Network`),
  mobCustomMites: mobMites.filter((eachMite) => eachMite.type === `Custom`),
  infoContent: `Learn more about something by clicking it and reading the information here.`,
  ymlOutput: ``
};
