//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { autoTvServiceMite } from '../mites/service/autoTvServiceMite';
import { autoTvNetworkMite } from '../mites/network/autoTvNetworkMite';
import { ombiServiceMite } from '../mites/service/ombiServiceMite';
import { ombiNetworkMite } from '../mites/network/ombiNetworkMite';
import { plexServiceMite } from '../mites/service/plexServiceMite';
import { plexNetworkMite } from '../mites/network/plexNetworkMite';
import * as tvIcon from '../../images/manikin-icons/tvIcon.png';

/**
 * drupal Manikin
 */
export const autoTvManikin: IManikin = {
  description: `Automatic TV downloader`,
  folder: `plex`,
  isCore: false,
  isSelected: false,
  manikinIcon: tvIcon,
  manikinIndex: 1,
  memories: [],
  mites: [
    autoTvServiceMite,
    autoTvNetworkMite,
    ombiServiceMite,
    ombiNetworkMite,
    plexServiceMite,
    plexNetworkMite
  ],
  name: `Auto TV`,
  ports: [],
  subfolders: [
    `ombi-config`,
    `plex-config`,
    `plex-tv`,
    `plex-movies`,
    `plex-music`
  ]
};
