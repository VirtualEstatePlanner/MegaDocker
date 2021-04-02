/** @format */

//  pihole.ts
//  MEGADocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { tvServiceMite } from '../mites/service/tvServiceMite'
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite'
import { tvNetworkMite } from '../mites/network/tvNetworkMite'
import { plexServiceMite } from '../mites/service/plexServiceMite'
import { plexNetworkMite } from '../mites/network/plexNetworkMite'
import tvIcon from '../../images/manikin-icons/tvIcon.png'
import { booksNetworkMite } from '../mites/network/booksNetworkMite'
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite'
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite'
import { musicNetworkMite } from '../mites/network/musicNetworkMite'
import { tvLdifMite } from '../mites/ldif/tvLdifMite'

/**
 * drupal Manikin
 */
export const tvManikin: IManikin = {
  description: `Automatic TV Downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`],
  manikinIcon: tvIcon,
  manikinIndex: 10029,
  memories: [],
  mites: [tvLdifMite, tvServiceMite, mediaRequestsServiceMite, plexServiceMite, booksNetworkMite, comicsNetworkMite, moviesNetworkMite, musicNetworkMite, tvNetworkMite, plexNetworkMite],
  name: `TV`,
  ports: [],
  subfolders: [`content`, `newsgroups-config`, `newsgroup-indexer-config`, `plex-config`, `requests-config`, `torrent-config`, `torrent-indexer-config`, `tv-config`],
}
