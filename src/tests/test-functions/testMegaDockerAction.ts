/** @format */

//  IMegaDockerAction.test.ts
//  MEGADocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { MegaContext } from '../../components/MegaContext'

export const testMegaDockerAction = () =>
  describe('tests each possible MegaDockerAction', () => {
    it(`MegaContext has a Consumer and a Provider`, () => {
      expect(MegaContext.Consumer).toBeDefined()
      expect(MegaContext.Provider).toBeDefined()
    })
  })
