//  IMemory.ts
//  MegaDocker
//  an interface that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from './IMemory';

const testMemory: IMemory = {
  name: `some Memory name`,
  tooltip: `some tooltip for this Memory`,
  value: `some value for this Memory`
};

it('has all 3 values', () => {
  expect(testMemory.name).toStrictEqual(`some Memory name`);
  expect(testMemory.tooltip).toStrictEqual(`some tooltip for this Memory`);
  expect(testMemory.value).toStrictEqual(`some value for this Memory`);
});
