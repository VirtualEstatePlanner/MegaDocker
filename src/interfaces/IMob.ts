//  IMob.ts
//  MegaDocker
//  an interface that represents a MEGADocker Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
// import manikins
import { drupalManikin } from '../mobparts/manikins/drupal';
import { ghostManikin } from '../mobparts/manikins/ghost';
import { gitlabManikin } from '../mobparts/manikins/gitlab';
import { elkManikin } from '../mobparts/manikins/elk';
import { ldapManikin } from '../mobparts/manikins/ldap';
import { nginxManikin } from '../mobparts/manikins/nginx';
import { owncloudManikin } from '../mobparts/manikins/owncloud';
import { portainerManikin } from '../mobparts/manikins/portainer';
import { heimdallManikin } from '../mobparts/manikins/heimdall';
import { rocketchatManikin } from '../mobparts/manikins/rocketchat';
import { skoposManikin } from '../mobparts/manikins/skopos';
import { swarmpitManikin } from '../mobparts/manikins/swarmpit';
import { traefikManikin } from '../mobparts/manikins/traefik';
import { visualizerManikin } from '../mobparts/manikins/visualizer';
import { webdavManikin } from '../mobparts/manikins/webdav';
import { wordpressManikin } from '../mobparts/manikins/wordpress';

export interface IMob {
  mobManikins: IManikin[];
  mobName: string;
  mobMemories: IMemory[];
}

export const coreMob: IMob = {
  mobManikins: [swarmpitManikin, traefikManikin],
  mobName: '',
  mobMemories: []
};
