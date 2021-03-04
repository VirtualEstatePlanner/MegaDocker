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
import { elasticsearchDotYmlMite } from '../mites/custom/elasticsearchDotYmlMite';
import { elasticsearchJvmDotOptionsMite } from '../mites/custom/elasticsearchJvmDotOptions';
import { elasticsearchLog4j2DotPropertiesMite } from '../mites/custom/elasticsearchLog4j2DotPropertiesMite';
import { filebeatDotYmlMite } from '../mites/custom/filebeatDotYmlMite';

/**
 * elk Manikin
 */
export const elkManikin: IManikin = {
  description: `ElasticSearch/Logstash/Kibana Monitoring service`,
  folder: `elk`,
  isCore: false,
  isSelected: false,
  // isCore: true,
  // isSelected: true,
  manikinGroups: [`Monitoring`],
  manikinIcon: elkIcon,
  manikinIndex: 10004,
  memories: [kibanaUser, kibanaPassword],
  mites: [
    elkServiceMite,
    elkNetworkMite,
    kibanaDotYmlMite,
    elasticsearchDotYmlMite,
    elasticsearchJvmDotOptionsMite,
    elasticsearchLog4j2DotPropertiesMite,
    filebeatDotYmlMite,
  ],
  name: `ELK`,
  ports: [],
  subfolders: [
    `elasticsearch-config`,
    `elasticsearch-data`,
    `filebeat-config`,
    `filebeat-modules`,
    `kibana-config`,
    `logfiles`,
  ],
};
