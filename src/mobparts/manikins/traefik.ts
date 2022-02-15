/** @format */

//  traefik.ts
//  MEGADocker
//  A Manikin to generate a Traefik reverse proxy service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { cloudflareAPIToken } from '../memories/cloudflareAPIToken'
import { letsEncryptEmail } from '../memories/letsEncryptEmail'
import { primaryDomain } from '../memories/primaryDomain'
import { traefikServiceMite } from '../mites/service/traefikServiceMite'
import { traefikNetworkMite } from '../mites/network/traefikNetworkMite'
import traefikIcon from '../../images/manikin-icons/traefikIcon.png'
import { mobName } from '../memories/mobName'
import { traefikLdifMite } from '../mites/ldif/traefikLdifMite'
import { luaDNSAPIToken } from '../memories/luaDNSAPIToken'
import { luaDNSEmailAddress } from '../memories/luaDNSEmailAddress'
import { IMemory } from '../../interfaces/objectInterfaces/IMemory'

/**
 * traefik Manikin
 */
export const traefikManikin: IManikin = {
  description: `Reverse Proxy`,
  folder: `traefik`,
  isCore: true,
  isSelected: true,
  manikinGroups: [`MegaDockerCore`, `Network`],
  manikinIcon: traefikIcon,
  manikinIndex: 10028,
  memories: [mobName, letsEncryptEmail, cloudflareAPIToken, primaryDomain],
  name: `Traefik`,
  mites: [traefikLdifMite, traefikServiceMite, traefikNetworkMite],
  ports: [],
  subfolders: [`ssl`]
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const memoriesToBeAdded: Array<IMemory> = [luaDNSAPIToken, luaDNSEmailAddress]