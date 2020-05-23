//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite';
import { musicNetworkMite } from '../mites/network/musicNetworkMite';
import { plexServiceMite } from '../mites/service/plexServiceMite';
import { plexNetworkMite } from '../mites/network/plexNetworkMite';
import * as musicIcon from '../../images/manikin-icons/musicIcon.png';
import { booksNetworkMite } from '../mites/network/booksNetworkMite';
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite';
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite';
import { tvNetworkMite } from '../mites/network/tvNetworkMite';

/**
 * drupal Manikin
 */
export const musicManikin: IManikin = {
  description: `Automatic music downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinIcon: musicIcon,
  manikinIndex: 15,
  memories: [],
  mites: [
    mediaRequestsServiceMite,
    plexServiceMite,
    booksNetworkMite,
    comicsNetworkMite,
    moviesNetworkMite,
    musicNetworkMite,
    tvNetworkMite,
    plexNetworkMite,
  ],
  name: `TV`,
  ports: [],
  subfolders: [
    `content-music`,
    `requests-config`,
    `music-config`,
    `plex-config`,
  ],
};
