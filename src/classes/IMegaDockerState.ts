import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';
import { allManikins } from '../globals/allManikins';
import { coreMemories } from '../globals/coreMemories';
export interface IMegaDockerState {
  manikinTableContents: IManikin[];
  memoryTableContents: IMemory[];
  allMobMites: IMite[];
  mobServiceMites: IMite[];
  mobNetworkMites: IMite[];
  infoContent: String;
  ymlOutput: String;
}

export const initialMegaDockerState: IMegaDockerState = {
  manikinTableContents: [...allManikins],
  memoryTableContents: [...coreMemories],
  allMobMites: [],
  mobServiceMites: [],
  mobNetworkMites: [],
  infoContent: `Learn more about the object you last clicked on by reading the text in this part of the window.`,
  ymlOutput: `some YML string`
};
