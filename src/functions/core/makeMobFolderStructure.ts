//  makeMobFolderStructure.ts
//  megadocker
//  creates all folders for the Mob and it's Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { coreManikins } from '../../globals/coreManikins';
import { userMob } from '../../globals/userMob';
import { makeFoldersForManikin } from './makeFoldersForManikin';
import { makeMobFolder } from './makeMobFolder';
import { IMob } from '../../classes/IMob';

/**
 * creates all folders for the Mob and it's Manikins
 */
export function makeMobFolderStructure(mob: IMob): void {
  makeMobFolder(mob);
  for (const eachManikin of mob.mobManikins) {
    if (userMob.mobManikins !== []) {
      makeFoldersForManikin(mob, eachManikin);
    }
  }
}
