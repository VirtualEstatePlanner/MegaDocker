//  primaryDomain.ts
//  MegaDocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const piholePassword: IMemory = {
  memoryIndex: 1032,
  memoryMarker: `[[PIHOLEPASSWORD]]`,
  shouldAutocomplete: false,
  name: `Pihole Password`,
  tooltip: `Choose a password for the Pihole admin account to login to the web interface`,
  value: ``,
  valueType: 'password',
  isReady: false,
  validator: passwordValidator,
};
