/** @format */

//  pihole.ts
//  MegaDocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin'

import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite'
import { moviesServiceMite } from '../mites/service/moviesServiceMite'
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite'
import { plexServiceMite } from '../mites/service/plexServiceMite'
import { plexNetworkMite } from '../mites/network/plexNetworkMite'
import moviesIcon from '../../images/manikin-icons/moviesIcon.png'
import { booksNetworkMite } from '../mites/network/booksNetworkMite'
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite'
import { musicNetworkMite } from '../mites/network/musicNetworkMite'
import { tvNetworkMite } from '../mites/network/tvNetworkMite'

/**
 * drupal Manikin
 */
export const moviesManikin: IManikin = {
  description: `Automatic movie downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`],
  manikinIcon: moviesIcon,
  manikinIndex: 10014,
  memories: [],
  mites: [mediaRequestsServiceMite, moviesServiceMite, plexServiceMite, booksNetworkMite, comicsNetworkMite, moviesNetworkMite, musicNetworkMite, tvNetworkMite, plexNetworkMite],
  name: `Movies`,
  ports: [],
  subfolders: [`content`, `movies-config`, `newsgroups-config`, `newsgroup-indexer-config`, `plex-config`, `requests-config`, `torrent-config`, `torrent-indexer-config`],
}
