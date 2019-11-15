//  makeFoldersForManikin.ts
//  megadocker
//  creates Manikin folder and subfolders for a given Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { makeFoldersForManikin } from './makeFoldersForManikin';
import { checkForFile } from './checkForFile';
import { IManikin } from '../../classes/IManikin';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';
import { userMegaDockerFolder } from '../../globals/userMegaDockerFolder';

const myTestManikin: IManikin = {
  name: `my subfolder testing manikin`,
  manikinIcon: defaultIcon,
  description: `it has multiple folders`,
  isCore: false,
  isSelected: false,
  mites: [],
  ports: [],
  folder: `my-test-manikin`,
  subfolders: [
    `my-first-subfolder`,
    `my-second-subfolder`,
    `my-third-subfolder`
  ],
  memories: []
};

it(`should find a folder with three folders inside of it`, () => {
  expect(checkForFile(`${userMegaDockerFolder}`, myTestManikin.folder))
    .toBeFalsy;
  makeFoldersForManikin(myTestManikin);
  expect(checkForFile(`${userMegaDockerFolder}`, myTestManikin.folder))
    .toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[0]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[1]
    )
  ).toBeTruthy;
  expect(
    checkForFile(
      `${userMegaDockerFolder}/${myTestManikin.folder}`,
      myTestManikin.subfolders[2]
    )
  ).toBeTruthy;
});
