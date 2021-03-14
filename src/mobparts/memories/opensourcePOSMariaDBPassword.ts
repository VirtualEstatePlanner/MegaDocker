//  opensourcePOSMariaDBPassword.ts
//  MegaDocker
//  The password that opensourcePOS will use to connect to it's MariaDB database
//  Created by George Georgulas IV on 3/5/2021.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

import { IMemory } from "../../interfaces/IMemory";
import { passwordValidator } from '../../functions/validators/passwordValidator';

export const opensourcePOSMariaDBPassword: IMemory = {
  memoryIndex: 20034,
  memoryMarker: "[[OPENSOURCEPOSMARIADBPASSWORD]]",
  memoryType: `SecretMemory`,
  shouldAutocomplete: false,
  name: "osPOS MariaDB password",
  tooltip: "The password that osPOS will use to connect to it's MariaDB database",
  value: "",
  valueType: "password",
  isReady: false,
  validator: passwordValidator,
};