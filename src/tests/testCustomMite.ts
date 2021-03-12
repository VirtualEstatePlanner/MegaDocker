/** @format */

//  ICustomMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ICustomMite } from '../interfaces/ICustomMite'
import { IFileExtension } from '../interfaces/IFileExtension'
import { IManikin } from '../interfaces/IManikin'

export const testCustomMite: Function = (customMiteToTest: ICustomMite, manikin: IManikin, extension: IFileExtension) => {
  it(`matches IMiteType`, () => {
    expect(customMiteToTest.type).toStrictEqual(`Custom`)
  })
  it(`has an index in the correct range`, () => {
    expect(customMiteToTest.miteIndex).toBeGreaterThanOrEqual(50000)
    expect(customMiteToTest.miteIndex).toBeLessThanOrEqual(59999)
  })
  it(`is in the correct Manikin folder`, () => {
    expect(customMiteToTest.miteFile.path).toContain(manikin.folder)
  })
  it(`has non-empty contents`, () => {
    expect(customMiteToTest.miteString).toBeDefined()
  })
  it(`has a file name`, () => {
    expect(customMiteToTest.miteFile.name).toBeDefined()
  })
  it(`has the correct file extension`, () => {
    expect(customMiteToTest.miteFile.extension).toStrictEqual(extension)
  })
  it(`has reasonable permissions set`, () => {
    expect(customMiteToTest.miteFile.permissions).toHaveLength(3)
    expect(customMiteToTest.miteFile.permissions).toBeDefined()
    //    expect((customMiteToTest.miteFile.permissions as unknown) as number).toBeGreaterThanOrEqual(0)
    //    expect((customMiteToTest.miteFile.permissions as unknown) as number).toBeLessThanOrEqual(777)
  })
}
