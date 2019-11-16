//  makeMobFolder.ts
//  megadocker
//  creates the main folder for a Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { documentsFolder } from '../../globals/documentsFolder';
import { userMob } from '../../globals/userMob';
import { makeFolder } from './makeFolder';

/**
 * @mobName - the name of the Mob we are creating a storage
 * location for (folder will have this name)
 * @pathTo - the directory where that folder will be created
 * creates the main folder for a Mob
 */
export function makeMobFolder(): void {
  makeFolder(documentsFolder, userMob.mobName);
}
