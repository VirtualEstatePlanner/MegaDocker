/** @format */

//  IMissionMite.ts
//  MEGADocker
//  an interface that represents a complex N8N action composed of multiple workflows
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2022 The MegaDocker Group. All rights reserved.

import { IMite } from '../objectInterfaces/IMite'
import { IN8NWorkflow } from '../objectInterfaces/IN8NWorkflow'

/**
 * interface for a mite that represents a complex N8N action composed of multiple workflows
 */

export interface IMissionMite extends IMite {
  type: `N8N`
  workflow: IN8NWorkflow[]
}
