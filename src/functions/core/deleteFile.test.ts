//  deleteFile.ts
//  megadocker
//  removes a file from the hard drive - !! - USE WITH EXTREME CAUTION - !!
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { unlinkSync } from 'fs';

/**
 * @fileName - the name of the file to be deleted
 * @pathTo - the directory where that file exists
 * removes a file from the hard drive - !! - USE WITH EXTREME CAUTION - !!
 */
export function deleteFile(fileName: string, pathTo: string): void {
  const filePath: string = `${pathTo}.${fileName}`;
  unlinkSync(filePath);
}
