/** @format */

//  IMemory.test.ts
//  MegaDocker
//  an automated test
//  Created by George Georgulas IV on 3/11/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../interfaces/IMemory'
import { emailValidator } from '../functions/validators/emailValidator'

const testMemory: IMemory = {
  isReady: false,
  memoryIndex: 741258,
  shouldAutocomplete: true,
  memoryMarker: `[[PRIMARYDOMAIN]]`,
  validator: emailValidator,
  name: `some Memory name`,
  tooltip: `some tooltip for this Memory`,
  value: `some value for this Memory`,
  valueType: 'email',
}

it('has all 3 values', () => {
  expect(testMemory.name).toStrictEqual(`some Memory name`)
  expect(testMemory.tooltip).toStrictEqual(`some tooltip for this Memory`)
  expect(testMemory.value).toStrictEqual(`some value for this Memory`)
})
