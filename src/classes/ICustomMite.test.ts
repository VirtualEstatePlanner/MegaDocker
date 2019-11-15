//  IMite.ts
//  MegaDocker
//  an interface that represents a non-YML Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ICustomMite } from './ICustomMite';

const testCustomMite: ICustomMite = {
  type: `Custom`,
  miteString: `this could be empty`,
  miteFiles: [
    {
      name: `someCustomFile`,
      extension: `txt`,
      contents: `this should contain text`
    },
    {
      name: `someOtherCustomFile`,
      extension: `csv`,
      contents: `this, should, be, a, csv, file`
    }
  ]
};

it(`should have a type, string, and an array of files`, () => {
  expect(testCustomMite.type).toStrictEqual(`Custom`);
  expect(testCustomMite.miteString).toStrictEqual(`this could be empty`);
  expect(testCustomMite.miteFiles.length).toStrictEqual(2);
  expect(testCustomMite.miteFiles[0].name).toStrictEqual(`someCustomFile`);
  expect(testCustomMite.miteFiles[0].extension).toStrictEqual(`txt`);
  expect(testCustomMite.miteFiles[0].contents).toStrictEqual(
    `this should contain text`
  );
  expect(testCustomMite.miteFiles[1].name).toStrictEqual(`someOtherCustomFile`);
  expect(testCustomMite.miteFiles[1].extension).toStrictEqual(`csv`);
  expect(testCustomMite.miteFiles[1].contents).toStrictEqual(
    `this, should, be, a, csv, file`
  );
});
