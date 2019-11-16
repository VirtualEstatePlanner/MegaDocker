//  checkForFile.ts
//  megadocker
//  checks to see if a file exists in the file system at a given path
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { checkForFile } from './checkForFile';
it(`should check for a file in a certain directory`, () => {
  console.log(checkForFile('./', 'checkForFile.ts'));
  expect(checkForFile('./', 'checkForFile.ts')).toBeTruthy;
});
