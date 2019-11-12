//  runtime-objects.ts
//  MegaDocker
//  object instances to be used and modified at runtime
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../classes/IManikin';
import {
  IManikinVariable,
  emptyManikinVariable
} from '../classes/IManikinVariable';
import { IMite } from '../classes/IMite';
import { IMob, coreMob } from '../classes/IMob';
import { mobName } from './manikin-variables';

import {
  cloudFlareAPIKey,
  cloudFlareEmail,
  letsEncryptEmail,
  primaryDomain,
  secondaryDomain
} from './manikin-variables';
import {
  myLDAPManikin,
  skoposManikin,
  traefikManikin,
  swarmpitManikin
} from './manikins';

export let userManikins: IManikin[] = [
  myLDAPManikin,
  traefikManikin,
  skoposManikin
];

export let userVariables: IManikinVariable[] = [
  primaryDomain,
  secondaryDomain,
  cloudFlareAPIKey,
  cloudFlareEmail,
  letsEncryptEmail
];

const userMobMites: IMite[] = [];
const myYMLOutputString: string = userMobMites.concat.toString();

export let userMob: IMob = {
  mobManikins: userManikins,
  mobName: 'unnamed Mob',
  mobVariables: [emptyManikinVariable]
};
