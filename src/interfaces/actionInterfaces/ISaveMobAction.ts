/** @format */

import { IManikin } from '../objectInterfaces/IManikin'
import { IMemory } from '../objectInterfaces/IMemory'

export interface ISaveMobAction {
  type: `SAVE_MOB_FILE`
  payload: { manikins: IManikin[]; memories: IMemory[] }
}
