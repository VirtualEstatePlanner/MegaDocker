//  getFile.ts
//  megadocker
//  downloads a URL to a local file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { run } from './run';

/**
 * @param fileName: string describing the name of the saved file
 * @param fileExtension: string describing the extension of the saved file
 * @param pathTo: string describing the path to the saved file
 * @param url: URL to be downloaded
 * downloads a URL to a local file
 */
export function getFile(
  pathTo: string,
  fileName: string,
  fileExtension: string,
  url: URL
): void {
  run(`curl --output ${pathTo}/${fileName}.${fileExtension} ${url}`);
}
