//  makeMobFolder.ts
//  megadocker
//  creates the main folder for a Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { makeFolder } from './makeFolder';
import { removeFolder } from './removeFolder';
import { checkForFile } from './checkForFile';

it(`should create an example mob folder`, () => {
  const pathTo: string = `./`;
  const folderName: string = `sometestfolder`;
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
  makeFolder(pathTo, folderName);
  expect(checkForFile(pathTo, folderName)).toBeTruthy;
  removeFolder(pathTo, folderName);
  expect(checkForFile(pathTo, folderName)).toBeFalsy;
});
