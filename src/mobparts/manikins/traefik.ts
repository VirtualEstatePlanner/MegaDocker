/** @format */

//  traefik.ts
//  MegaDocker
//  A Manikin to generate a Traefik reverse proxy service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { cloudflareAPIToken } from '../memories/cloudflareAPIToken'
import { letsEncryptEmail } from '../memories/letsEncryptEmail'
import { primaryDomain } from '../memories/primaryDomain'
import { traefikServiceMite } from '../mites/service/traefikServiceMite'
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite'
import traefikIcon from '../../images/manikin-icons/traefikIcon.png'
import { mobName } from '../memories/mobName'

/**
 * traefik Manikin
 */
export const traefikManikin: IManikin = {
  description: `Traefik reverse proxy service`,
  folder: `traefik`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Core`, `Network`],
  manikinIcon: traefikIcon,
  manikinIndex: 10027,
  memories: [mobName, letsEncryptEmail, cloudflareAPIToken, primaryDomain],
  name: `Traefik`,
  mites: [traefikServiceMite, traefikNetworkMite],
  ports: [],
  subfolders: [`ssl`],
}
