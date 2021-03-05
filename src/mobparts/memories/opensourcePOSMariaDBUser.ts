//  opensourcePOSMariaDBUser.ts
//  MegaDocker
//  The user opensourcePOS will use to connect to it's MariaDB database
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from "../../interfaces/IMemory";
import { noWhitespaceOrSymbolsValidator } from '../../functions/validators/noWhitespaceOrSymbolsValidator';

export const opensourcePOSMariaDBUser: IMemory = {
  memoryIndex: 20037,
  memoryMarker: "[[OPENSOURCEPOSMARIADBUSER]]",
  shouldAutocomplete: false,
  name: "osPOS MariaDB User",
  tooltip: "The user osPOS will use to connect to it's MariaDB database",
  value: "",
  valueType: "text",
  isReady: false,
  validator: noWhitespaceOrSymbolsValidator,
};