/** @format */

//  IMiniMemory.ts
//  MEGADocker
//  an interface that represents a minimized IMemory
//  Created by George Georgulas IV on 2/28/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * interface for IMiniMemory
 * @memoryIndex the unique identifier of this IMemory
 * @name the human-readable name of this IMemory
 * @value the variable stored in this IMemory
 */
export interface IMiniMemory {
  memoryIndex: number
  memoryName: string
  memoryValue: string
}
