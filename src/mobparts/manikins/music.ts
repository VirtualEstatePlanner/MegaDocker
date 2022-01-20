/** @format */

//  pihole.ts
//  MEGADocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite'
import { musicNetworkMite } from '../mites/network/musicNetworkMite'
import { plexServiceMite } from '../mites/service/plexServiceMite'
import { plexNetworkMite } from '../mites/network/plexNetworkMite'
import musicIcon from '../../images/manikin-icons/musicIcon.png'
import { booksNetworkMite } from '../mites/network/booksNetworkMite'
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite'
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite'
import { tvNetworkMite } from '../mites/network/tvNetworkMite'
import { musicLdifMite } from '../mites/ldif/musicLdifMite'
import { mediarequestsLdifMite } from '../mites/ldif/mediarequestsLdifMite'
import { musicServiceMite } from '../mites/service/musicServiceMite'

/**
 * drupal Manikin
 */
export const musicManikin: IManikin = {
  description: `Automatic Music Downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`],
  manikinIcon: musicIcon,
  manikinIndex: 10016,
  memories: [],
  mites: [
    musicLdifMite,
    mediarequestsLdifMite,
    musicServiceMite,
    mediaRequestsServiceMite,
    plexServiceMite,
    booksNetworkMite,
    comicsNetworkMite,
    moviesNetworkMite,
    musicNetworkMite,
    tvNetworkMite,
    plexNetworkMite
  ],
  name: `Music`,
  ports: [],
  subfolders: [`content`, `music-config`, `newsgroups-config`, `newsgroup-indexer-config`, `plex-config`, `requests-config`, `torrent-config`, `torrent-indexer-config`]
}
