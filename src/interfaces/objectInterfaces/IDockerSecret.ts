/** @format */

//  IDockerSecret.ts
//  MEGADocker
//  an interface that represents a n8n.io workflow
//  Created by George Georgulas IV on 2/15/22.
//  Copyright © 2022 The MegaDocker Group. All rights reserved.

/**
 * @workflowJson - the meat and bones of the wokflow from n8n.io
 * @workflowIndex -
 */
export interface IDockerSecret {
  secretName: string
  secretValue: string
}
