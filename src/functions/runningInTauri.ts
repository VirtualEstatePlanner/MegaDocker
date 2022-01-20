/** @format */

//  runningInTauri.ts
//  MEGADocker
//  a function that determines whether the application is running in browser or in tarui desktop application
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

/**
 * determines where application is running
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    __TAURI__: unknown
  }
}

export const runningInTauri = (): boolean => {
  if (window.__TAURI__) { return true } else { return false }
}
