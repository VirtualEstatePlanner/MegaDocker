//  saveFile.ts
//  megadocker
//  creates a file at the given path with the given contents,
//  name, and extension
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';
import { deleteFile } from './deleteFile';
it(`should see no file`, () => {
  expect(checkForFile('.', 'testfilename.txt')).toBeFalsy;
  saveFile(
    `./`,
    `testfilename`,
    `txt`,
    `blah, blah, blah what the hell does this file even say?`
  );
  expect(checkForFile(`.`, `testfilename.txt`)).toBeTruthy;
  deleteFile(`.`, `testfilename.txt`);
  expect(checkForFile(`.`, `testfilename.txt`)).toBeFalsy;
});
