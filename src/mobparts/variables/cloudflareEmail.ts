//  cloudflareEmail.ts
//  MegaDocker
//  The variable for the user's CloudFlare Email address
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikinVariable } from '../../classes/IManikinVariable';

export let cloudflareEmail: IManikinVariable = {
  name: `CloudFlare Email Address`,
  tooltip: `The email address of your CloudFlare account`,
  value: ``
};
