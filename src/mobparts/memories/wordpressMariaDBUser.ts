//  wordpressMariaDBUser.ts
//  MegaDocker
//  The variable for the Wordpress MariaDB username
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../classes/IMemory';

export let wordpressMariaDBUser: IMemory = {
  name: `WordPress MariaDB User`,
  tooltip: `Choose a username for WordPress to connect to it's MariaDB database.`,
  value: ``
};