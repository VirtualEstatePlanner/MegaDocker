//  traefikNetworkMite.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../../classes/IManikin';
import { serviceMite } from './serviceMite';
import { networkMite } from './networkMite';
import {
  primaryDomain,
  secondaryDomain,
  letsEncryptEmail,
  cloudFlareEmail,
  cloudFlareAPIKey
} from '../../../objects/manikin-variables';

export const traefikManikin: IManikin = {
  name: `Traefik`,
  description: `A modern reverse proxy with Let's Encrypt support`,
  isSelected: true,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `Traefik`,
  subfolders: [`certs`, `pem`, `private`],
  variables: [
    primaryDomain,
    secondaryDomain,
    letsEncryptEmail,
    cloudFlareEmail,
    cloudFlareAPIKey
  ]
};
