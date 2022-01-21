#!/usr/bin/env ts-node-script
/** @format */

// import Node libraries
import * as fs from 'fs'
import * as os from 'os'

const tauriBundleDirectory: string = process.cwd() + `/src-tauri/target/release/bundle/`

// determine operating system
const getOperatingSystem: Function = (): string => {
  const thisPlatform: string = os.platform()
  switch (thisPlatform) {
    case 'darwin':
      return 'mac'
    case 'win32':
      return 'win'
    case 'linux':
      return 'linux'
    default:
      throw new Error(`Unsupported platform: ${thisPlatform}`)
  }
}
  
const getProcessorArchitecture: Function = (): string => {
  const thisArchitecture: string = os.arch()
  switch (thisArchitecture) {
    case 'arm64':
      return 'arm64'
    case 'x64':
      return 'x86-64'
    case 'x32':
      return 'i686'
    default:
      throw new Error(`Unsupported architecture: ${thisArchitecture}`)
  }
}

console.log(getOperatingSystem())
console.log(getProcessorArchitecture())