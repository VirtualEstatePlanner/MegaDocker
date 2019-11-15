//  makeFolder.ts
//  megadocker
//  creates a folder at a given path
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { rmdir } from 'fs';
import { checkForFile } from './checkForFile';

/**
 * @pathTo - the location to make the folder
 * @folderName - the folder to make
 * creates a folder at a given path
 */
export function removeFolder(pathTo: string, folderName: string): void {
  const filePath: string = `${pathTo}/${folderName}`;
  if (checkForFile(pathTo, folderName) !== true) {
    rmdir(
      filePath,
      { recursive: true },
      (err: NodeJS.ErrnoException | null) => {
        if (err !== undefined) {
          throw err;
        }
      }
    );
  }
}
