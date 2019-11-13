//  elk.ts
//  MegaDocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../classes/IManikin';

import { serviceMite } from '../mites/service/_servicemitetemplate';
import { networkMite } from '../mites/network/_networkmitetemplate';
import defaultIcon from '../../images/manikin-icons/defaultIcon.png';

/**
 * elk Manikin
 */
export let elkManikin: IManikin = {
  name: `ELK`,
  description: `ElasticSearch/Logstash/Kibana Monitoring service`,
  isCore: false,
  isSelected: false,
  mites: [serviceMite, networkMite],
  ports: [],
  folder: `ELK`,
  subfolders: [`Elasticsearch`, `Logstash`, `Kibana`],
  memories: [],
  manikinIcon: defaultIcon
};
