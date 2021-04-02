/** @format */

import { IMemory } from '../objectInterfaces/IMemory'

export interface IUpdateMemoryValueAction {
  type: `UPDATE_MEMORY_VALUE`
  payload: {
    memory: IMemory
    value: string
  }
}
