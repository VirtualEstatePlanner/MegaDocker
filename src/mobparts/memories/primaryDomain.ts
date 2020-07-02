//  primaryDomain.ts
//  MegaDocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { domainValidator } from '../../functions/validators/domainValidator';

export const primaryDomain: IMemory = {
  memoryIndex: 1033,
  memoryMarker: `[[PRIMARYDOMAIN]]`,
  shouldAutocomplete: false,
  name: `Web Domain`,
  tooltip: `Your domain name, such as 'example.com' or 'myawesomemob.org'.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: domainValidator,
};
