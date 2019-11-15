//  IManikinPort.ts
//  MegaDocker
//  an interface that represents a port used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinPort } from './IManikinPort';

const testPort: IManikinPort = {
  externalPort: 8080,
  internalPort: 8080,
  isUDP: false
};

it('has all 3 values', () => {
  expect(testPort.externalPort === 8080);
  expect(testPort.internalPort === 8080);
  expect(testPort.isUDP === true);
});
