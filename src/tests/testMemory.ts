/** @format */

//  testMemory.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../interfaces/IMemory'

export const testMemory: Function = (memoryToTest: IMemory) => {
  it('is not ready', () => {
    expect(memoryToTest.isReady).toBeFalsy()
  })
  it('has an index in the correct range', () => {
    expect(memoryToTest.memoryIndex).toBeGreaterThanOrEqual(20000)
    expect(memoryToTest.memoryIndex).toBeLessThanOrEqual(29999)
  })
  it('has a name', () => {
    expect(memoryToTest.name).toBeDefined()
  })
  it('has a valid memoryMarker', () => {
    expect(memoryToTest.memoryMarker).toBeDefined()
  })
  it('has a tooltip', () => {
    expect(memoryToTest.tooltip).toBeDefined()
  })
  it('has an empty value', () => {
    expect(memoryToTest.value).toBeDefined()
    expect(memoryToTest.value).toHaveLength(0)
  })
}
