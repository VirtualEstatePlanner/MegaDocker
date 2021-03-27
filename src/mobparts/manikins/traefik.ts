/** @format */

//  traefik.ts
//  MEGADocker
//  A Manikin to generate a Traefik reverse proxy service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { cloudflareAPIToken } from '../memories/cloudflareAPIToken'
import { letsEncryptEmail } from '../memories/letsEncryptEmail'
import { primaryDomain } from '../memories/primaryDomain'
import { traefikServiceMite } from '../mites/service/traefikServiceMite'
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite'
import traefikIcon from '../../images/manikin-icons/traefikIcon.png'
import { mobName } from '../memories/mobName'
import { traefikLdifMite } from '../mites/ldif/traefikLdifMite'

/**
 * traefik Manikin
 */
export const traefikManikin: IManikin = {
  description: `Reverse Proxy`,
  folder: `traefik`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`Core`, `Network`],
  manikinIcon: traefikIcon,
  manikinIndex: 10028,
  memories: [mobName, letsEncryptEmail, cloudflareAPIToken, primaryDomain],
  name: `Traefik`,
  mites: [traefikLdifMite, traefikServiceMite, traefikNetworkMite],
  ports: [],
  subfolders: [`ssl`],
}
