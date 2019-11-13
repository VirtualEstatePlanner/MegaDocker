//  ghostRootMariaDBPassword.ts
//  MegaDocker
//  The variable for Ghost's MariaDB root user's password
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let ghostRootMariaDBPassword: IManikinVariable = {
  name: `Ghost MariaDB SQL root user password`,
  tooltip: `The password for the Ghost root user`,
  value: ``
};
