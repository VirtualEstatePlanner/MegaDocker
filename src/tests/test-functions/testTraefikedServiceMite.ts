/** @format */

//  testTraefikedServiceMite.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { miteYamlValidator } from '../../functions/validators/miteYamlValidator'
import { ITraefikedServiceMite } from '../../interfaces/ITraefikedServiceMite'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'

export const testTraefikedServiceMite: Function = (traefikedServiceMiteToTest: ITraefikedServiceMite) => {
  const makeTestableManikin: Function = (mite: ITraefikedServiceMite): ITraefikedServiceMite => {
    const testableMiteString: string = mobFileHeaderSectionString + mite.miteString
    return { ...mite, miteString: testableMiteString }
  }
  const testableManikin = makeTestableManikin(traefikedServiceMiteToTest)
  it('has an index in the appropriate range', () => {
    expect(testableManikin.miteIndex).toBeGreaterThanOrEqual(30000)
    expect(testableManikin.miteIndex).toBeLessThanOrEqual(39999)
  })
  it('has the correct type', () => {
    expect(testableManikin.type).toStrictEqual(`DockerSwarmService`)
  })
  it('has at least one host name', () => {
    expect(testableManikin.webInterfaceHostnames.length).toBeGreaterThan(0)
  })
  it('has a valid YAML miteString', () => {
    expect(miteYamlValidator(testableManikin)).toStrictEqual(true)
    expect(testableManikin.miteString).toBeDefined()
  })
}
