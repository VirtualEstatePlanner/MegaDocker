/** @format */

//  elk.ts
//  MEGADocker
//  A Manikin to generate a ELK monitoring service
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IManikin } from '../../interfaces/objectInterfaces/IManikin'

import { elkServiceMite } from '../mites/service/elkServiceMite'
import { elkNetworkMite } from '../mites/network/elkNetworkMite'
import { kibanaDotYmlMite } from '../mites/custom/kibanaDotYmlMite'
import elkIcon from '../../images/manikin-icons/elkIcon.png'
import { kibanaUser } from '../memories/kibanaUser'
import { kibanaPassword } from '../memories/kibanaPassword'
import { elasticsearchDotYmlMite } from '../mites/custom/elasticsearchDotYmlMite'
import { elasticsearchJvmDotOptionsMite } from '../mites/custom/elasticsearchJvmDotOptionsMite'
import { elasticsearchLog4j2DotPropertiesMite } from '../mites/custom/elasticsearchLog4j2DotPropertiesMite'
import { filebeatDotYmlMite } from '../mites/custom/filebeatDotYmlMite'
import { elasticsearchLdifMite } from '../mites/ldif/elasticsearchLdifMite'
import { logstashLdifMite } from '../mites/ldif/logstashLdifMite'
import { kibanaLdifMite } from '../mites/ldif/kibanaLdifMite'

/**
 * elk Manikin
 */
export const elkManikin: IManikin = {
  description: `Log Monitoring`,
  folder: `elk`,
  isCore: false,
  isSelected: false,
  manikinGroups: [`Monitoring`],
  manikinIcon: elkIcon,
  manikinIndex: 10004,
  memories: [kibanaUser, kibanaPassword],
  mites: [
    elasticsearchLdifMite,
    logstashLdifMite,
    kibanaLdifMite,
    elkServiceMite,
    elkNetworkMite,
    kibanaDotYmlMite,
    elasticsearchDotYmlMite,
    elasticsearchJvmDotOptionsMite,
    elasticsearchLog4j2DotPropertiesMite,
    filebeatDotYmlMite
  ],
  manikinName: `ELK`,
  ports: [],
  subfolders: [`elasticsearch-config`, `elasticsearch-data`, `filebeat-config`, `filebeat-modules`, `kibana-config`, `logfiles`]
}
