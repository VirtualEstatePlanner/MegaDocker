/** @format */

//  testTraefikedServiceMite.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { miteYamlValidator } from '../functions/validators/miteYamlValidator'
import { ITraefikedServiceMite } from '../interfaces/ITraefikedServiceMite'

export const testTraefikedServiceMite: Function = (traefikedServiceMiteToTest: ITraefikedServiceMite) => {
  it('has an index in the appropriate range', () => {
    expect(traefikedServiceMiteToTest.miteIndex).toBeGreaterThanOrEqual(30000)
    expect(traefikedServiceMiteToTest.miteIndex).toBeLessThanOrEqual(39999)
  })
  it('has the correct type', () => {
    expect(traefikedServiceMiteToTest.type).toStrictEqual(`DockerSwarmService`)
  })
  it('has at least one host name', () => {
    expect(traefikedServiceMiteToTest.webInterfaceHostnames.length).toBeGreaterThan(0)
  })
  it('has a valid YAML miteString', () => {
    expect(miteYamlValidator(traefikedServiceMiteToTest)).toBeTruthy()
    expect(traefikedServiceMiteToTest.miteString).toBeDefined()
  })
}
