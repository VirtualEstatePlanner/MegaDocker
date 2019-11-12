//  makeFoldersForManikin.ts
//  megadocker
//  creates Manikin folder and subfolders for a given Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { userMegaDockerFolder } from '../../objects/miscellaneous';
import { makeFolder } from './makeFolder';

/**
 * @aManikin - the Manikin to create a folder for (folder will have this name)
 * @subfolders - the folders to be created inside the Manikin
 * folder (subfolders will have these names)
 * creates Manikin folder and subfolders for a given Manikin
 */
export function makeFoldersForManikin(aManikin: IManikin): void {
  makeFolder(userMegaDockerFolder, aManikin.name);
  if (aManikin.subfolders.length !== 0) {
    makeFolder(
      `${userMegaDockerFolder.toString()}/${aManikin.name}`,
      `${aManikin.subfolders.forEach}`
    );
  }
}
