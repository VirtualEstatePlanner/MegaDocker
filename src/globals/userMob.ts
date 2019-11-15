import { coreManikins } from './coreManikins';
import { mobName } from '../mobparts/memories/mobName';
import { IMob } from '../classes/IMob';
import { userMemories } from './userMemories';

export let userMob: IMob = {
  mobManikins: [...coreManikins],
  mobName: mobName.value,
  mobMemories: userMemories
};
