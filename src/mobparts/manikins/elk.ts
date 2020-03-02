//  elk.ts
//  MegaDocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { elkServiceMite } from '../mites/service/elkServiceMite';
import { elkNetworkMite } from '../mites/network/elkNetworkMite';
import { kibanaDotYmlMite } from '../mites/custom/kibanaDotYmlMite';
import elkIcon from '../../images/manikin-icons/elkIcon.png';
import { kibanaUser } from '../memories/kibanaUser';
import { kibanaPassword } from '../memories/kibanaPassword';

/**
 * elk Manikin
 */
export const elkManikin: IManikin = {
  description: `ElasticSearch/Logstash/Kibana Monitoring service`,
  folder: `elk`,
  isCore: false,
  isSelected: false,
  manikinIcon: elkIcon,
  manikinIndex: 2,
  memories: [kibanaUser, kibanaPassword],
  mites: [elkServiceMite, elkNetworkMite, kibanaDotYmlMite],
  name: `ELK`,
  ports: [],
  subfolders: [`elasticsearch-data`, `logstash-config`, `kibana-config`]
};
