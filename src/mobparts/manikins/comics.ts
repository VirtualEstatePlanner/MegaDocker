//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { comicsServiceMite } from '../mites/service/comicsServiceMite';
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite';
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite';
import { plexServiceMite } from '../mites/service/plexServiceMite';
import { plexNetworkMite } from '../mites/network/plexNetworkMite';
import * as tvIcon from '../../images/manikin-icons/tvIcon.png';
import { booksNetworkMite } from '../mites/network/booksNetworkMite';
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite';
import { musicNetworkMite } from '../mites/network/musicNetworkMite';
import { tvNetworkMite } from '../mites/network/tvNetworkMite';

/**
 * drupal Manikin
 */
export const comicsManikin: IManikin = {
  description: `Automatic TV downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinIcon: tvIcon,
  manikinIndex: 2,
  memories: [],
  mites: [
    comicsServiceMite,
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
