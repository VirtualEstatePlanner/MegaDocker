/** @format */

//  books.ts
//  MEGADocker
//  A Manikin to create an e-book library
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { booksServiceMite } from '../mites/service/booksServiceMite'
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite'
import { booksNetworkMite } from '../mites/network/booksNetworkMite'
import { plexServiceMite } from '../mites/service/plexServiceMite'
import { plexNetworkMite } from '../mites/network/plexNetworkMite'
import booksIcon from '../../images/manikin-icons/booksIcon.png'
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite'
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite'
import { musicNetworkMite } from '../mites/network/musicNetworkMite'
import { tvNetworkMite } from '../mites/network/tvNetworkMite'
import { booksLdifMite } from '../mites/ldif/booksLdifMite'
import { plexLdifMite } from '../mites/ldif/plexLdifMite'
import { mediarequestsLdifMite } from '../mites/ldif/mediarequestsLdifMite'

/**
 * drupal Manikin
 */
export const booksManikin: IManikin = {
  description: `Automatic Books Downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`],
  manikinIcon: booksIcon,
  manikinIndex: 10000,
  memories: [],
  mites: [
    booksLdifMite,
    mediarequestsLdifMite,
    plexLdifMite,
    booksServiceMite,
    mediaRequestsServiceMite,
    plexServiceMite,
    booksNetworkMite,
    comicsNetworkMite,
    moviesNetworkMite,
    musicNetworkMite,
    tvNetworkMite,
    plexNetworkMite
  ],
  manikinName: `Books`,
  ports: [],
  subfolders: [`books-config`, `content`, `newsgroups-config`, `newsgroup-indexer-config`, `plex-config`, `requests-config`, `torrent-config`, `torrent-indexer-config`]
}
