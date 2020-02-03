//  IMemory.ts
//  MegaDocker
//  an interface that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from './IMemory';
import { emailValidator } from '../functions/validators/emailValidator';

const testMemory: IMemory = {
  isReady: false,
  memoryIndex: 741258,
  shouldAutocomplete: true,
  validator: emailValidator,
  name: `some Memory name`,
  tooltip: `some tooltip for this Memory`,
  value: `some value for this Memory`,
  valueType: 'email'
};

it('has all 3 values', () => {
  expect(testMemory.name).toStrictEqual(`some Memory name`);
  expect(testMemory.tooltip).toStrictEqual(`some tooltip for this Memory`);
  expect(testMemory.value).toStrictEqual(`some value for this Memory`);
});
