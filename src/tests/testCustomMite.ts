/** @format */

//  ICustomMite.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { ICustomMite } from '../interfaces/ICustomMite'

const testCustomMite: ICustomMite = {
  miteIndex: 4589967145,
  type: `Custom`,
  miteString: `this could be empty`,
  miteFile: {
    permissions: `600`,
    path: `somePath/toSome/otherDirectory`,
    name: `someCustomFile`,
    extension: `txt`,
    contents: `this should contain text`,
  },
}

it(`should have a type, string, a path, and a file`, () => {
  expect(testCustomMite.type).toStrictEqual(`Custom`)
  expect(testCustomMite.miteString).toStrictEqual(`this could be empty`)
  expect(testCustomMite.miteFile.name).toStrictEqual(`someCustomFile`)
  expect(testCustomMite.miteFile.path).toStrictEqual(`somePath/toSome/otherDirectory`)
  expect(testCustomMite.miteFile.extension).toStrictEqual(`txt`)
  expect(testCustomMite.miteFile.contents).toStrictEqual(`this should contain text`)
})
