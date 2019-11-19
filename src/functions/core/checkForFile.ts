//  checkForFile.ts
//  megadocker
//  checks to see if a file exists in the file system at a given path
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { existsSync } from 'fs';
/**
 * checks to see if a file exists in the file system at a given path
 * @param pathTo: string describing the path to the file
 * @param fileName: string describing the name of the file
 */
export function checkForFile(pathTo: string, fileName: string): boolean {
  const checkingPath: string = `${pathTo}/${fileName}`;

  return existsSync(checkingPath);
}
