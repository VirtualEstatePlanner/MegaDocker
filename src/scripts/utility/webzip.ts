/** @format */

//  webzip.ts
//  MEGADocker
//  A ts-node script to build the program and output a zipped web folder to deploy on a http server
//  Created by George Georgulas IV on 11/3/2020.
//  Copyright © 2020 The MegaDocker Group. All rights reserved.

import fs from 'fs'
import JSZip from 'jszip';
import path from 'path';
import { version } from '../../../package.json';

const getFilePathsRecursively = (directoryPath: string): string[] => {
  
    // returns a flat array of absolute paths of all files recursively contained in the dir
    let filePaths: string[] = [];
    let directoryContents: string[] = fs.readdirSync(directoryPath);
    let pendingFiles: number = directoryContents.length;
    if (!pendingFiles) return filePaths;
    for (let eachFile of directoryContents) {
        eachFile = path.resolve(directoryPath, eachFile);
      let stat = fs.lstatSync(eachFile);
      if (stat && stat.isDirectory()) {
        filePaths = filePaths.concat(getFilePathsRecursively(eachFile));
      } else {
        filePaths.push(eachFile);
      }
      if (!--pendingFiles) return filePaths;
    }
    return filePaths;
  };
  
  const getZipOfFolder = (directory: string): JSZip => {
    const allPaths: string[] = getFilePathsRecursively(directory);
    let zip = new JSZip();
    for (let filePath of allPaths) {
  
      if (fs.lstatSync(filePath).isSymbolicLink()) {
        zip.file(path.relative(path.join(directory, '..'), filePath), fs.readlinkSync(filePath), {
          unixPermissions: parseInt('120755', 8),
          dir: fs.lstatSync(filePath).isDirectory()
        });
      } else {
        zip.file(path.relative(path.join(directory, '..'), filePath), fs.readFileSync(filePath), {
          unixPermissions: fs.lstatSync(filePath).mode,
          dir: fs.lstatSync(filePath).isDirectory()
        });
      }
    }
    zip.generateAsync({
        compression: `DEFLATE`,
        compressionOptions: { level: 9 },
        platform: `UNIX`,
        type: `nodebuffer`,
      })
      .then(function (content) {
        fs.writeFileSync(`./binaries/web/MEGADocker-${version}-web.zip`, content)
      })
  
    return zip;
  };

  getZipOfFolder(`build`)
