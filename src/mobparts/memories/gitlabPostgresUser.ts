//  ghostRootMariaDBPassword.ts
//  MegaDocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/IMemory';
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const gitlabPostgresUser: IMemory = {
  memoryIndex: 1007,
  memoryMarker: `[[GITLABPOSTGRESUSER]]`,
  shouldAutocomplete: false,
  name: `GitLab Postgres User`,
  tooltip: `Choose a user account for Gitlab to connect to the postgres database`,
  value: ``,
  valueType: 'text',
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
};
