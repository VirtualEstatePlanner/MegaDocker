//  openWebpageInBrowser.ts
//  megadocker
//  opens the given URL as a webpage in the default browser
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import opener from 'opener';

/**
 * @param urlString: a string representing a URL to be
 * opened in the external browser application
 * opens the given URL as a webpage in the default browser
 */
export function openWebpageInBrowser(urlString: string): void {
  opener(urlString);
}
