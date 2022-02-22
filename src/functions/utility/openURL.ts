/** @format */

//  openURL.ts
//  MEGADocker
//  a function that opens a URL
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { runningInTauri } from './runningInTauri'
import { open } from '@tauri-apps/api/shell'

/**
 * opens a URL in a new tab from the current browser or in the default browser from Tauri
 */
export const openURL: Function = (url: URL): void => {
  if (runningInTauri()) {
    open(url.href)
  } else {
    window.open(url.href, `_blank`)
  }
  return
}
