//  letsEncryptEmail.ts
//  MegaDocker
//  The variable for the usert's Let's Encrypt account email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let letsEncryptEmail: IManikinVariable = {
  name: 'Let`s Encrypt Email Address',
  tooltip: `The email address used to register your domains`,
  value: ``
};
