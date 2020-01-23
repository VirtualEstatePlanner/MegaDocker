import { IManikin } from './IManikin';
import { IMemory } from './IMemory';

interface ManikinAction {
  type: string;
  payload: IManikin;
  dispatch: React.Dispatch<IMegaDockerAction>;
}

export type IManikinAction = ManikinAction;

/*interface ManikinArrayAction {
  type: string;
  payload: IManikin[];
  dispatch: React.Dispatch<IMegaDockerAction>;
}*/

//export type IManikinArrayAction = ManikinArrayAction;

interface StringAction {
  type: string;
  payload: string;
  dispatch: React.Dispatch<IMegaDockerAction>;
}

export type IStringAction = StringAction;

interface MemoryAction {
  type: string;
  payload: IMemory;
  dispatch: React.Dispatch<IMegaDockerAction>;
}

export type IMemoryAction = MemoryAction;

/*interface MemoryArrayAction {
  type: string;
  dispatch: React.Dispatch<IMegaDockerAction>;
  payload: IMemory[];
}*/

// export type IMemoryArrayAction = MemoryArrayAction;

export type IMegaDockerAction =
  | IManikinAction
  //  | IManikinArrayAction
  | IMemoryAction
  //  | IMemoryArrayAction
  | IStringAction;
