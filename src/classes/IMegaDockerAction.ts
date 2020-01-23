import { IManikin } from './IManikin';
import { IMemory } from './IMemory';

interface ManikinAction {
  type: string;
  payload: IManikin;
}

export type IManikinAction = ManikinAction;

interface ManikinArrayAction {
  type: string;
  payload: IManikin[];
}

export type IManikinArrayAction = ManikinArrayAction;

interface StringAction {
  type: string;
  payload: string;
}

export type IStringAction = StringAction;

interface MemoryAction {
  type: string;
  payload: IMemory;
}

export type IMemoryAction = MemoryAction;

interface MemoryArrayAction {
  type: string;
  payload: IMemory[];
}

export type IMemoryArrayAction = MemoryArrayAction;

export type IMegaDockerAction =
  | IManikinAction
  | IManikinArrayAction
  | IMemoryAction
  | IMemoryArrayAction
  | IStringAction;
