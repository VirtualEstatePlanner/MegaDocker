import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';

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
