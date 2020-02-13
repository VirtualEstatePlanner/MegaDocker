//  IMite.ts
//  MegaDocker
//  an interface that represents a Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IMite {
  type: `Network` | `Service` | `Custom` | `Kubernetes`;
  miteIndex: number;
  miteString: string;
}
