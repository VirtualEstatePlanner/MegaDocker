//  primaryDomain.ts
//  MegaDocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let primaryDomain: IManikinVariable = {
  name: `Main Domain`,
  tooltip: `Your main domain name, such as 'example.com' or 'myawesomemob.org'.  Free domains are available at '' and can have their DNS handled for free at 'https://www.cloudflare.com'`,
  value: ``
};
