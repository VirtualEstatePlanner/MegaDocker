//  IMite.ts
//  MegaDocker
//  an interface that represents a non-YML Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { ICustomMite } from './ICustomMite';

it('should have a type, string, and an array of files', () => {
  const testCustomMite: ICustomMite = {
    type: 'Custom',
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
  console.log(testCustomMite);
});
