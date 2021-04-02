/** @format */

//  IN8NWorkflow.ts
//  MEGADocker
//  an interface that represents a n8n.io workflow
//  Created by George Georgulas IV on 3/31/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

//  IN8NWorkflow.ts
//  MEGADocker
//  an interface that represents a n8n integration workflow
//  Created by George Georgulas IV on 4/1/21.
//  Copyright © 2021 The MegaDocker Group. All rights reserved.

/**
 * @workflowJson - the meat and bones of the wokflow from n8n.io
 * @workflowIndex -
 */
export interface IN8NWorkflow {
  workflowJson: JSON //just our generic type
  workflowIndex: number
  workflowSecrets: {} // docker secret objects
}
