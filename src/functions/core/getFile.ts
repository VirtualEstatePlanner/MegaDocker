//  getFile.ts
//  megadocker
//  downloads a URL to a local file
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { createWriteStream, WriteStream } from 'fs';
import { IncomingMessage } from 'http';
import { get } from 'https';
import { parse, UrlWithStringQuery } from 'url';

/**
 * @param pathTo: string containing the path to the saved file
 * @param fileName: string containing the name and extension of the file
 * @param url: URL to be downloaded
 * downloads a URL to a local file
 */

const TIMEOUT = 120000;

function getSomeFile(pathTo: string, fileName: string, urlToDownload: string) {
  const uri: UrlWithStringQuery = parse(urlToDownload);
  const file: WriteStream = createWriteStream(`${pathTo}/${fileName}`);

  return new Promise(function(resolve, reject) {
    const request = get(uri.href).on('response', function(
      res: IncomingMessage
    ) {
      res
        .on('data', function(chunk) {
          file.write(chunk);
        })
        .on('end', function() {
          file.end();
          resolve();
        })
        .on('error', function(err) {
          reject(err);
        });
    });
    request.setTimeout(TIMEOUT, function() {
      request.abort();
      reject(new Error(`request timeout after ${TIMEOUT / 1000.0} seconds`));
    });
  });
}

export async function getFile(
  pathTo: string,
  fileName: string,
  urlToDownload: string
) {
  try {
    await getSomeFile(pathTo, fileName, urlToDownload);
  } catch (e) {}
}
