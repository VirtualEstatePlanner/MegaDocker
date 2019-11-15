//  makeMobFolderStructure.ts
//  megadocker
//  creates all folders for the Mob and it's Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { coreManikins, userMob } from '../../globals/_globals';
import { makeFoldersForManikin } from './makeFoldersForManikin';
import { makeMobFolder } from './makeMobFolder';

/**
 * creates all folders for the Mob and it's Manikins
 */
export function makeMobFolderStructure(): void {
  makeMobFolder();
  for (const eachManikin of coreManikins) {
    if (userMob.mobManikins.length !== 0) {
      makeFoldersForManikin(eachManikin);
    }
  }
}