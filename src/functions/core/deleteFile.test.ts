//  deleteFile.ts
//  megadocker
//  removes a file from the hard drive - !! - USE WITH EXTREME CAUTION - !!
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { deleteFile } from './deleteFile';
import { saveFile } from './saveFile';
import { checkForFile } from './checkForFile';

it(`should delete a file`, () => {
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeFalsy;
  saveFile(`./`, `sometestfile`, `txt`, `sometestfile needs contents`);
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeTruthy;
  deleteFile(`./`, `./sometestfile.txt`);
  expect(checkForFile(`./`, `sometestfile.txt`)).toBeFalsy;
});
