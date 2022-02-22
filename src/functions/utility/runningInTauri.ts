/** @format */

//  runningInTauri.ts
//  MEGADocker
//  a function that determines whether the application is running in browser or in tarui desktop application
//  Created by George Georgulas IV on 1/20/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * determines where application is running
 */

declare global {
  // suppress unused variable warning because we need this at runtime
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Window {
    __TAURI__: unknown
  }
}

export const runningInTauri = (): boolean => {
  if (window.__TAURI__) {
    return true
  } else {
    return false
  }
}