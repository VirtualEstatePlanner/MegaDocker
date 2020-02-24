//  traefik.ts
//  MegaDocker
//  A Manikin to generate a Traefik reverse proxy service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { cloudflareAPIKey } from '../memories/cloudflareAPIKey';
import { cloudflareEmail } from '../memories/cloudflareEmail';
import { letsEncryptEmail } from '../memories/letsEncryptEmail';
import { primaryDomain } from '../memories/primaryDomain';
import { secondaryDomain } from '../memories/secondaryDomain';
import { traefikServiceMite } from '../mites/service/traefikServiceMite';
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite';
import traefikIcon from '../../images/manikin-icons/traefikIcon.png';
import { mobName } from '../memories/mobName';
import { traefikDotYmlMite } from '../mites/custom/traefikDotYmlMite';

/**
 * traefik Manikin
 */
export const traefikManikin: IManikin = {
  description: `Traefik reverse proxy service`,
  folder: `traefik`,
  isCore: true,
  isSelected: true,
  manikinIcon: traefikIcon,
  manikinIndex: 17,
  memories: [
    mobName,
    letsEncryptEmail,
    cloudflareEmail,
    cloudflareAPIKey,
    primaryDomain,
    secondaryDomain
  ],
  name: `Traefik`,
  mites: [traefikServiceMite, traefikNetworkMite, traefikDotYmlMite],
  ports: [],
  subfolders: [`certs`, `private`, `pem`]
};
