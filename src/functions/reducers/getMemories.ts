import { IManikin } from '../../interfaces/IManikin';
import { IMemory } from '../../interfaces/IMemory';

/**
 * updates memories array based on application state
 */
export const getMemories = (manikinsToGetMemoriesFrom: IManikin[]): IMemory[] =>
  manikinsToGetMemoriesFrom
    .filter((eachManikin: IManikin) => eachManikin.isSelected)
    .flatMap((eachManikin) => eachManikin.memories);
