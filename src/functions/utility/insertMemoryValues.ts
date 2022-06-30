/** @format */

//  insertMemoryValues.ts
//  MEGADocker
//  populates memoryValues in the yml output
//  Created by George Georgulas IV on 3/5/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'

/**
 * updates yml with variables from memories
 * @param ymlInput the initial string to change
 * @param memories the memories to apply
 */
export const insertMemoryValues: (ymlInput: string, memories: IMemory[]) => string = (ymlInput: string, memories: IMemory[]): string => {
  let workingYml: string = ymlInput

  memories.forEach((eachMemory: IMemory) => {
    const tempYml = workingYml.split(eachMemory.memoryMarker).join(eachMemory.memoryValue)
    workingYml = tempYml
  })
  return workingYml
}
