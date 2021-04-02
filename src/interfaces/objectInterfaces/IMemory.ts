/** @format */

//  IMemory.ts
//  MEGADocker
//  an interface that represents a variable used by a Manikin - data storage and input primitive for settings
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemoryMarker } from '../templateLiteralUnionTypes/IMemoryMarker'
import { IMemoryType } from '../templateLiteralUnionTypes/IMemoryType'
import { IMemoryValueType } from '../templateLiteralUnionTypes/IMemoryValueType'

/**
 * interface for IMemory
 * @fromManikins manikinIndexes from IManikins this IMemory appears in
 * @isReady returns true if value passes validator
 * @memoryIndex the unique identifier of this IMemory
 * @memoryMarker the IMemoryMarker to be replaced with this memory's value
 * @name the human-readable name of this IMemory
 * @shouldAutocomplete if true, value will autocomplete in browser
 * @tooltip mouseover hint text
 * @validator function to check if value is valid for this IMemory
 * @value the variable stored in this IMemory
 * @valueType input type in browser, one of: password | email | text
 */
export interface IMemory {
  isReady: boolean
  memoryIndex: number
  memoryMarker: IMemoryMarker
  memoryType: IMemoryType
  name: string
  shouldAutocomplete: boolean
  tooltip: string
  validator: Function
  value: string
  valueType: IMemoryValueType
}
