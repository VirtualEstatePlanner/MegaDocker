import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';

export interface IMegaDockerState {
  manikinTableContents: IManikin[];
  variableTableContents: IMemory[];
  allMites: IMite[];
  mobServiceMites: IMite[];
  mobNetworkMites: IMite[];
  ymlOutput: String;
}
