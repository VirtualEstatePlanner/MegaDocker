/** @format */

//  testNetworkMite.ts
//  MEGADocker
//  an automated test to be called by testing networkMites
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { stringYamlValidator } from '../../functions/validators/stringYamlValidator'
import { mobFileHeaderSectionString } from '../../mobparts/mites/headers/mobFileHeaderSectionString'
import { INetworkMite } from '../../interfaces/miteTypeInterfaces/INetworkMite'

export const testNetworkMite: Function = (networkMiteToTest: INetworkMite) => {
  const makeTestableMiteFromString: Function = (mite: INetworkMite): INetworkMite => {
    const testableMiteString: string = mobFileHeaderSectionString + mite.miteString
    return { ...mite, miteString: testableMiteString }
  }
  const testableMite: INetworkMite = makeTestableMiteFromString(networkMiteToTest)
  describe('tests a network mite', () => {
    it('has an index in the appropriate range', () => {
      expect(testableMite.miteIndex).toBeGreaterThanOrEqual(40000)
      expect(testableMite.miteIndex).toBeLessThanOrEqual(49999)
    })
    it('has the correct type', () => {
      expect(testableMite.type).toStrictEqual(`DockerSwarmNetwork`)
    })
    it('has a valid YAML miteString', () => {
      expect(stringYamlValidator(testableMite.miteString)).toStrictEqual(true)
    })
  })
}
