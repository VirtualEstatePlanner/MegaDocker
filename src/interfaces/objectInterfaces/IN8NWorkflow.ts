/** @format */

import { IDockerSecret } from './IDockerSecret'

//  IN8NWorkflow.ts
//  MEGADocker
//  an interface that represents a n8n.io workflow
//  Created by George Georgulas IV on 3/31/21.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * @workflowJson - the meat and bones of the wokflow from n8n.io
 * @workflowIndex -
 */
export interface IN8NWorkflow {
  workflowJson: JSON
  workflowIndex: number
  workflowSecrets: IDockerSecret[] // docker secret objects
}
