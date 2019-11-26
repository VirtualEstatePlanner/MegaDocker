//  runOrdered.ts
//  megadocker
//  runs a shell command with the appended array of
//  command-line parameters and waits for it to finish
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ChildProcess, spawn } from 'child_process';

/**
 * @param command: string describing a cli command
 * @param opt: array of strings describing the arguments passed to a cli command
 * runs a shell command with the appended array of
 * command-line parameters and waits for it to finish
 */
export function runOrdered(command: string, opt?: string[]): void {
  let options: string[] | undefined = opt;
  if (options === undefined) {
    options = [];
  }
  options = [...options, `&`, `wait`];
  const child: ChildProcess = spawn(`${command} ${options}`);
  child.on(`error`, (err) => {
    console.log(`an error occurred with message: ${err.message}`);
  });
  child.on(`exit`, (code) => {
    console.log(`Child process ${command} exited with code ${code}`);
  });
  child.on(`data`, (data) => {
    console.log(`stdout: ${data}`);
  });
  child.unref();
}
