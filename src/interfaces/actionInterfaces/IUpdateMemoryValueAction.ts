import { IMegaDockerAction } from '../IMegaDockerAction';
import { IMemory } from '../IMemory';

export interface IUpdateMemoryValueAction extends IMegaDockerAction {
  type: `UPDATE_MEMORY_VALUE`;
  payload: {
    memory: IMemory;
    value: string;
  };
}
