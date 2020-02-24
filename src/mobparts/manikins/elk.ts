//  elk.ts
//  MegaDocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { elkServiceMite } from '../mites/service/elkServiceMite';
import { elkNetworkMite } from '../mites/network/elkNetworkMite';
import elkIcon from '../../images/manikin-icons/elkIcon.png';

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
  memories: [],
  mites: [elkServiceMite, elkNetworkMite],
  name: `ELK`,
  ports: [],
  subfolders: [`Elasticsearch`, `Logstash`, `Kibana`]
};
