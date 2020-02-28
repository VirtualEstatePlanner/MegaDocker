//  secondaryDomain.ts
//  MegaDocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { domainValidator } from '../../functions/validators/domainValidator';

export const secondaryDomain: IMemory = {
  memoryIndex: 1021,
  memoryMarker: `[[SECONDARYDOMAIN]]`,
  shouldAutocomplete: false,
  name: `Secondary Domain`,
  tooltip: `Your backup domain name, such as 'example.com' or 'myawesomemob.org'.  It must not be the same as your main domain name.`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: domainValidator
};
