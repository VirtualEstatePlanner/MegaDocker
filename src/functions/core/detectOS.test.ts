//  detectOS.ts
//  megadocker
//  detects operating system and CPU architecture to enable
//  platform-specific implementations
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { detectOS } from './detectOS';

it(`should return the host operating system`, () => {
  const OSinfo = detectOS();
  expect(OSinfo.length).toStrictEqual(2);
  console.log(OSinfo);
  expect(OSinfo[0]).toBeTruthy;
  expect(OSinfo[1]).toBeTruthy;
});
