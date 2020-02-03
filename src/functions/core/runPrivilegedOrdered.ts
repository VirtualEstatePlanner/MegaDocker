//  runPrivilegedOrdered.ts
//  megadocker
//  runs an ordered series of shell commands with elevated
//  privileges, offering the user a native prompt for the password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ChildProcess, exec } from 'child_process';

/**
 * @param command: string describing a cli command
 * @param opt: array of strings describing the arguments passed to a cli command
 * runs an ordered series of shell commands with elevated
 * privileges, offering the user a native prompt for the password
 * when calling this function be aware of race conditions and
 * prompting the user repeatedly
 */
export function runPrivilegedOrdered(command: string, opt?: string[]): void {
  let options: string[] | undefined = opt;
  if (options === undefined) {
    options = [];
  }
  options = [...options, `& wait`];
  const child: ChildProcess = exec(`${command} ${options}`);
  child.on(`error`, (err) => {
    // console.log(`an error occurred with message: ${err.message}`);
  });
  child.on(`exit`, (code) => {
    // console.log(`Child process ${command} exited with code ${code}`);
  });
  child.on(`data`, (data) => {
    // console.log(`stdout: ${data}`);
  });
}
