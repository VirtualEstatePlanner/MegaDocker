//  traefik/manikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../../classes/IManikin';
import { serviceMite } from './serviceMite';
import { networkMite } from './networkMite';
import { letsEncryptEmail } from '../../variables/letsEncryptEmail';
import { cloudflareAPIKey } from '../../variables/cloudflareAPIKey';
import { cloudflareEmail } from '../../variables/cloudflareEmail';
import { primaryDomain } from '../../variables/primaryDomain';
import { secondaryDomain } from '../../variables/secondaryDomain';
import traefikIcon from './traefikIcon.png';

export const traefikManikin: IManikin = {
  name: `Traefik`,
  manikinIcon: traefikIcon,
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
    cloudflareEmail,
    cloudflareAPIKey
  ]
};
