/** @format */

//  testTraefikedServiceMite.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { stringYamlValidator } from '../../functions/validators/stringYamlValidator'
import { ITraefikedServiceMite } from '../../interfaces/miteTypeInterfaces/ITraefikedServiceMite'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'

export const testTraefikedServiceMite: Function = (traefikedServiceMiteToTest: ITraefikedServiceMite) => {
  const makeTestableMiteFromString: Function = (mite: ITraefikedServiceMite): ITraefikedServiceMite => {
    const testableMiteString: string = mobFileHeaderSectionString + mite.miteString
    return { ...mite, miteString: testableMiteString }
  }
  const testableMite: ITraefikedServiceMite = makeTestableMiteFromString(traefikedServiceMiteToTest)
  describe('tests a service mite that should sit behind traefik', () => {
    it('has an index in the appropriate range', () => {
      expect(testableMite.miteIndex).toBeGreaterThanOrEqual(30000)
      expect(testableMite.miteIndex).toBeLessThanOrEqual(39999)
    })
    it('has the correct type', () => {
      expect(testableMite.type).toStrictEqual(`DockerSwarmService`)
    })
    it('has at least one host name', () => {
      expect(testableMite.webInterfaceHostnames.length).toBeGreaterThan(0)
    })
    it('has a valid YAML miteString', () => {
      expect(stringYamlValidator(testableMite.miteString)).toStrictEqual(true)
    })
  })
}
