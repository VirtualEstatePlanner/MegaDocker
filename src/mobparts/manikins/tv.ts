//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { tvServiceMite } from '../mites/service/tvServiceMite';
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite';
import { tvNetworkMite } from '../mites/network/tvNetworkMite';
import { plexServiceMite } from '../mites/service/plexServiceMite';
import { plexNetworkMite } from '../mites/network/plexNetworkMite';
import * as tvIcon from '../../images/manikin-icons/tvIcon.png';
import { booksNetworkMite } from '../mites/network/booksNetworkMite';
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite';
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite';
import { musicNetworkMite } from '../mites/network/musicNetworkMite';

/**
 * drupal Manikin
 */
export const tvManikin: IManikin = {
  description: `Automatic TV downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinIcon: tvIcon,
  manikinIndex: 25,
  memories: [],
  mites: [
    tvServiceMite,
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
  subfolders: [`content-tv`, `requests-config`, `plex-config`, `tv-config`],
};