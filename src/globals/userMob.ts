import { coreManikins } from './coreManikins';
import { mobName } from '../mobparts/memories/mobName';
import { IMob } from '../interfaces/IMob';
import { userMemories } from './userMemories';

/**
 * the current Mob
 */
export let userMob: IMob = {
  mobManikins: [...coreManikins],
  mobName: mobName.value,
  mobMemories: userMemories
};
