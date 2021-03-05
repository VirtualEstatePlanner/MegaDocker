//  opensourcePOSMariaDBRootPassword.ts
//  MegaDocker
//  The root password for opensourcePOS's MariaDB instance
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from "../../interfaces/IMemory";
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const opensourcePOSMariaDBRootPassword: IMemory = {
  memoryIndex: 20035,
  memoryMarker: "[[OPENSOURCEPOSMARIADBROOTPASSWORD]]",
  shouldAutocomplete: false,
  name: "osPOS MariaDB root password",
  tooltip: "The root password for osPOS's MariaDB instance",
  value: "",
  valueType: "password",
  isReady: false,
  validator: passwordValidator,
};