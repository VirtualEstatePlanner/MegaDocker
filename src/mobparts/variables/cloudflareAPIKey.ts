//  cloudflareAPIKey.ts
//  MegaDocker
//  The variable for
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let cloudflareAPIKey: IManikinVariable = {
  name: `CloudFlare API Key`,
  tooltip: `A CloudFlare API Key from your account that has full 'domain' privileges.`,
  value: ``
};
