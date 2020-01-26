//  IMob.ts
//  MegaDocker
//  an interface that represents a MEGADocker Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMob } from './IMob';
import { letsEncryptEmail } from '../mobparts/memories/letsEncryptEmail';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { someTestManikin } from './IManikin.test';

export const testMob: IMob = {
  mobManikins: [swarmpitManikin, someTestManikin],
  mobName: `someMobName`,
  mobMemories: [letsEncryptEmail]
};

it('should have all 3 values', () => {
  expect(testMob.mobName).toStrictEqual(`someMobName`);
  expect(testMob.mobManikins.length).toStrictEqual(2);
  expect(testMob.mobMemories.length).toStrictEqual(1);
});
