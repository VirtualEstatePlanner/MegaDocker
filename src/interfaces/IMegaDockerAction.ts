import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import { IMite } from './IMite';

interface MiteAction {
  type: string;
  payload: IMite;
}

export type IMiteAction = MiteAction;

interface ManikinAction {
  type: string;
  payload: IManikin;
}

export type IManikinAction = ManikinAction;

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

export type IMegaDockerAction =
  | IManikinAction
  | IMemoryAction
  | IMiteAction
  | IStringAction;
