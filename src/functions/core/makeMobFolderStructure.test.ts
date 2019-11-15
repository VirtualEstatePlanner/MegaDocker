//  makeMobFolderStructure.ts
//  megadocker
//  creates all folders for the Mob and it's Manikins
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { makeMobFolderStructure } from './makeMobFolderStructure';
import { checkForFile } from './checkForFile';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';

it(`should make the folder for all manikins in a mob at once`, () => {
  expect(checkForFile(userMegaDockerFolder, ``)).toBeTruthy;
});
