//  books.ts
//  MegaDocker
//  A Manikin to create an e-book library
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { booksServiceMite } from '../mites/service/booksServiceMite';
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite';
import { booksNetworkMite } from '../mites/network/booksNetworkMite';
import { plexServiceMite } from '../mites/service/plexServiceMite';
import { plexNetworkMite } from '../mites/network/plexNetworkMite';
import * as booksIcon from '../../images/manikin-icons/booksIcon.png';
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite';
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite';
import { musicNetworkMite } from '../mites/network/musicNetworkMite';
import { tvNetworkMite } from '../mites/network/tvNetworkMite';

/**
 * drupal Manikin
 */
export const booksManikin: IManikin = {
  description: `Automatic books downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinIcon: booksIcon,
  manikinIndex: 1,
  memories: [],
  mites: [
    booksServiceMite,
    mediaRequestsServiceMite,
    plexServiceMite,
    booksNetworkMite,
    comicsNetworkMite,
    moviesNetworkMite,
    musicNetworkMite,
    tvNetworkMite,
    plexNetworkMite,
  ],
  name: `Books`,
  ports: [],
  subfolders: [
    `books-config`,
    `content`,
    `newsgroups-config`,
    `newsgroup-indexer-config`,
    `plex-config`,
    `requests-config`,
    `torrent-config`,
    `torrent-indexer-config`,
  ],
};
