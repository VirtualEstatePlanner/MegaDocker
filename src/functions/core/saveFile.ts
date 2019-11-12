//  saveFile.ts
//  megadocker
//  creates a file at the given path with the given contents,
//  name, and extension
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { writeFile } from 'fs';

/**
 * @pathTo - the directory where that file will be saved
 * @fileName - the name of the file to be saved
 * @fileType - the 3-character extension of the saved file
 * @fileContents - the raw data that makes up that file
 * creates a file at the given path with the given contents, name, and extension
 */
export function saveFile(
  pathTo: string,
  fileName: string,
  fileType: string,
  fileContents: string
): void {
  writeFile(
    `${pathTo}/${fileName}.${fileType}`,
    fileContents,
    (err: NodeJS.ErrnoException | null) => {
      if (err !== null) {
        // tslint:disable-next-line: no-console
        console.log(err);
      }
    }
  );
}
