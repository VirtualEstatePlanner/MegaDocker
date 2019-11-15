//  makeFolder.ts
//  megadocker
//  creates a folder at a given path
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { makeFolder } from './makeFolder';
import { checkForFile } from './checkForFile';
import { removeFolder } from './removeFolder';

it(`should create a folder`, () => {
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
  makeFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeTruthy;
  removeFolder(`./`, `testdirectory`);
  expect(checkForFile(`./`, `testdirectory`)).toBeFalsy;
});
