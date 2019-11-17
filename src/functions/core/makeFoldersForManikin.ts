//  makeFoldersForManikin.ts
//  megadocker
//  creates Manikin folder and subfolders for a given Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { IMob } from '../../classes/IMob';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';
import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';

/**
 * @aMob - the Mob this Manikin is part of (determines parent folder to create manikin folder in)
 * @aManikin - the Manikin to create a folder for (manikin folder will have this name)
 * @subfolders - the Manikin subfolders to be created (manikin subfolders will have these names)
 * creates Manikin folder and subfolders for a given Manikin
 */
export function makeFoldersForManikin(aMob: IMob, aManikin: IManikin): void {
  const mobFolderPath: string = `${userMegaDockerFolder}/${aMob.mobName}`;
  const manikinFolderPath: string = `${mobFolderPath}/${aManikin.folder}`;
  if (
    checkForFile(mobFolderPath, `/`) &&
    aManikin.subfolders &&
    aManikin.folder
  ) {
    makeFolder(mobFolderPath, aManikin.folder);
    if (aManikin.subfolders !== []) {
      aManikin.subfolders.map((aSubfolderToMake) => {
        makeFolder(manikinFolderPath, `${aSubfolderToMake}`);
        checkForFile(manikinFolderPath, aSubfolderToMake);
      });
    }
  }
}
