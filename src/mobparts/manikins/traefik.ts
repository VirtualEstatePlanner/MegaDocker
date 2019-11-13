//  traefik/manikin.ts
//  MegaDocker
//  Network Mite for Traefik
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';
import { traefikServiceMite } from '../mites/service/traefikServiceMite';
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite';
import { letsEncryptEmail } from '../memories/letsEncryptEmail';
import { cloudflareAPIKey } from '../memories/cloudflareAPIKey';
import { cloudflareEmail } from '../memories/cloudflareEmail';
import { primaryDomain } from '../memories/primaryDomain';
import { secondaryDomain } from '../memories/secondaryDomain';
import traefikIcon from './traefikIcon.png';
import { httpPort } from '../manikinports/httpPort';
import { httpsPort } from '../manikinports/httpsPort';

export const traefikManikin: IManikin = {
  name: `Traefik`,
  manikinIcon: traefikIcon,
  description: `A modern reverse proxy with Let's Encrypt support`,
  isSelected: true,
  mites: [traefikServiceMite, traefikNetworkMite],
  ports: [httpPort, httpsPort],
  folder: `Traefik`,
  subfolders: [`certs`, `pem`, `private`],
  memories: [
    primaryDomain,
    secondaryDomain,
    letsEncryptEmail,
    cloudflareEmail,
    cloudflareAPIKey
  ]
};
