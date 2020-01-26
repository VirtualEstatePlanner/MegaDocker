//  IManikin.ts
//  MegaDocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin';
import { httpPort } from '../mobparts/manikinports/httpPort';
import { mobName } from '../mobparts/memories/mobName';
import { traefikNetworkMite } from '../mobparts/mites/network/traefikNetworkMite';
import defaultIcon from '../images/manikin-icons/defaultIcon.png';

export const someTestManikin: IManikin = {
  name: `someManikinName`,
  manikinIcon: defaultIcon,
  description: `it does something that is your bidding`,
  isCore: true,
  isSelected: true,
  mites: [traefikNetworkMite],
  ports: [httpPort],
  folder: `mainFolder`,
  subfolders: [`subA`, `subB`, `subC`],
  memories: [mobName]
};

it(`should have a name, icon, description, 2 booleans, mite array, ports array, folder, subfolders array, and memories array`, () => {
  expect(someTestManikin).toBeDefined();
  expect(someTestManikin.manikinIcon).toStrictEqual(defaultIcon);
  expect(someTestManikin.description).toStrictEqual(
    `it does something that is your bidding`
  );
  expect(someTestManikin.isCore).toBeTruthy;
  expect(someTestManikin.isSelected).toBeTruthy;
  expect(someTestManikin.mites).toStrictEqual([traefikNetworkMite]);
  expect(someTestManikin.ports).toStrictEqual([httpPort]);
  expect(someTestManikin.folder).toStrictEqual(`mainFolder`);
  expect(someTestManikin.subfolders).toStrictEqual([`subA`, `subB`, `subC`]);
  expect(someTestManikin.memories).toStrictEqual([mobName]);
});
