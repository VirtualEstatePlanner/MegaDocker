import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';

export interface IMegaDockerState {
  manikinTableContents: IManikin[];
  variableTableContents: IMemory[];
  allMobMites: IMite[];
  mobServiceMites: IMite[];
  mobNetworkMites: IMite[];
  infoContent: String;
  ymlOutput: String;
}
