//  IMite.ts
//  MegaDocker
//  an interface that represents a Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite';

const testMite: IMite = {
  type: `Network`,
  miteString: 'this is some YML',
  miteIndex: 654897
};

it('has all 3 values', () => {
  expect(testMite.type).toStrictEqual(`Network`);
  expect(testMite.miteString).toStrictEqual(`this is some YML`);
  expect(testMite.miteIndex).toStrictEqual(`654897`);
});
