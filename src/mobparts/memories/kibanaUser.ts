//  ghostRootMariaDBPassword.ts
//  MegaDocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const kibanaUser: IMemory = {
  memoryIndex: 1014,
  memoryMarker: `[[KIBANAUSER]]`,
  shouldAutocomplete: false,
  name: `Kibana User`,
  tooltip: `Choose a user account for Kibana to connect to it's Elasticsearch database`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
};
