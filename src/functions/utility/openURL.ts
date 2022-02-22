/** @format */

//  openURL.ts
//  MEGADocker
//  a function that opens a URL in a new tab in the current browser or the default browser
//  Created by George Georgulas IV on 2/22/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

import { runningInTauri } from "./runningInTauri"
import { open } from '@tauri-apps/api/shell'

/**
 * updates allMobMites array based on application state
 */
export const openURL: Function = (url: URL): void => {
    console.log(`clicked button to open docker url`)
    if (runningInTauri() === true) {
      open(url.href)
    } else {
      window.open(url.href, `_blank`)    
    }
    console.log(`theoretically opened url`)
    return
  }
  