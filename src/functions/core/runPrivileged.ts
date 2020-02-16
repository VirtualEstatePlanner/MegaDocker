//  runPrivileged.ts
//  megadocker
//  runs a shell command with elevated privileges, offering
//  the user a native prompt for the password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ChildProcess, exec } from 'child_process';

/**
 * @param command: string describing a cli command
 * @param opt: array of strings describing the arguments passed to a cli command
 * runs a shell command with elevated privileges, offering
 * the user a native prompt for the password
 * when calling this function be aware of race conditions and
 * prompting the user repeatedly
 */
export function runPrivileged(command: string, opt?: string[]): void {
  const child: ChildProcess = exec(`${command} ${opt}`);
  child.on(`error`, (err) => {});
  child.on(`exit`, (code) => {});
  child.on(`data`, (data) => {});
}
