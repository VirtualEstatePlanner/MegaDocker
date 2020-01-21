//  traefik.ts
//  MegaDocker
//  A Manikin to generate a Traefik reverse proxy service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { cloudflareAPIKey } from '../memories/cloudflareAPIKey';
import { cloudflareEmail } from '../memories/cloudflareEmail';
import { letsEncryptEmail } from '../memories/letsEncryptEmail';
import { primaryDomain } from '../memories/primaryDomain';
import { secondaryDomain } from '../memories/secondaryDomain';
import { traefikServiceMite } from '../mites/service/traefikServiceMite';
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite';
import traefikIcon from '../../images/manikin-icons/traefikIcon.png';
import { mobName } from '../memories/mobName';

/**
 * traefik Manikin
 */
export let traefikManikin: IManikin = {
  name: `Traefik`,
  manikinIcon: traefikIcon,
  description: `Reverse Proxy Service`,
  isCore: true,
  isSelected: true,
  mites: [traefikServiceMite, traefikNetworkMite],
  ports: [],
  folder: `Traefik`,
  subfolders: [`certs`, `private`, `pem`],
  memories: [
    mobName,
    letsEncryptEmail,
    cloudflareEmail,
    cloudflareAPIKey,
    primaryDomain,
    secondaryDomain
  ]
};
