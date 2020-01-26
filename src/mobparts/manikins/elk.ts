//  elk.ts
//  MegaDocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import elkIcon from '../../images/manikin-icons/elkIcon.png';

/**
 * elk Manikin
 */
export let elkManikin: IManikin = {
  description: `ElasticSearch/Logstash/Kibana Monitoring service`,
  folder: `ELK`,
  isCore: false,
  isSelected: false,
  manikinIcon: elkIcon,
  manikinIndex: 1,
  memories: [],
  mites: [serviceMite, networkMite],
  name: `ELK`,
  ports: [],
  subfolders: [`Elasticsearch`, `Logstash`, `Kibana`]
};
