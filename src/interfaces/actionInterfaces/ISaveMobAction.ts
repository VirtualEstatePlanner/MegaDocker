/** @format */

import { IManikin } from '../IManikin'
import { IMemory } from '../IMemory'

export interface ISaveMobAction {
  type: `SAVE_MOB_FILE`
  payload: { manikins: IManikin[]; memories: IMemory[] }
}
