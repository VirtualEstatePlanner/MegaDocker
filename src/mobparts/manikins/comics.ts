/** @format */

//  pihole.ts
//  MEGADocker
//  A Manikin to generate a pihole DNS adblocker service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { comicsServiceMite } from '../mites/service/comicsServiceMite'
import { mediaRequestsServiceMite } from '../mites/service/mediaRequestsServiceMite'
import { comicsNetworkMite } from '../mites/network/comicsNetworkMite'
import { plexServiceMite } from '../mites/service/plexServiceMite'
import { plexNetworkMite } from '../mites/network/plexNetworkMite'
import comicsIcon from '../../images/manikin-icons/comicsIcon.png'
import { booksNetworkMite } from '../mites/network/booksNetworkMite'
import { moviesNetworkMite } from '../mites/network/moviesNetworkMite'
import { musicNetworkMite } from '../mites/network/musicNetworkMite'
import { tvNetworkMite } from '../mites/network/tvNetworkMite'
import { comicsLdifMite } from '../mites/ldif/comicsLdifMite'
import { plexLdifMite } from '../mites/ldif/plexLdifMite'
import { mediarequestsLdifMite } from '../mites/ldif/mediarequestsLdifMite'

/**
 * drupal Manikin
 */
export const comicsManikin: IManikin = {
  description: `Automatic Comics Downloader`,
  folder: `media`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Content`],
  manikinIcon: comicsIcon,
  manikinIndex: 10001,
  memories: [],
  mites: [
    comicsLdifMite,
    plexLdifMite,
    mediarequestsLdifMite,
    comicsServiceMite,
    mediaRequestsServiceMite,
    plexServiceMite,
    booksNetworkMite,
    comicsNetworkMite,
    moviesNetworkMite,
    musicNetworkMite,
    tvNetworkMite,
    plexNetworkMite
  ],
  manikinName: `Comics`,
  ports: [],
  subfolders: [`comics-config`, `content`, `newsgroups-config`, `newsgroup-indexer-config`, `plex-config`, `requests-config`, `torrent-config`, `torrent-indexer-config`]
}
