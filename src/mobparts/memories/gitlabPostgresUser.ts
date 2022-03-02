/** @format */

//  ghostRootMariaDBPassword.ts
//  MEGADocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator'

export const gitlabPostgresUser: IMemory = {
  memoryIndex: 20012,
  memoryMarker: `[[GITLABPOSTGRESUSER]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `GitLab Postgres User`,
  tooltip: `The GitLab Postgres user`,
  memoryValue: ``,
  valueType: `text`,
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator
}
