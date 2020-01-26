import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';
import { allManikins } from '../globals/allManikins';
import { coreMemories } from '../globals/coreMemories';
import {
  startingMites,
  startingServiceMites,
  startingNetworkMites,
  startingCustomMites
} from '../globals/startingMites';
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

export const initialMegaDockerState: IMegaDockerState = {
  manikinTableContents: [...allManikins],
  memoryTableContents: [...coreMemories],
  allMobMites: [...startingMites],
  mobServiceMites: [...startingServiceMites],
  mobNetworkMites: [...startingNetworkMites],
  mobCustomMites: [...startingCustomMites],
  infoContent: `Learn more about the object you last clicked on by reading the text in this part of the window.`,
  ymlOutput: ``
};
