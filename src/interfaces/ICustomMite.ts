//  IMite.ts
//  MegaDocker
//  an interface that represents a non-YML Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite';

export interface ICustomMite extends IMite {
  type: `Custom`;
  miteString: string;
  miteFiles: { name: string; extension: string; contents: string }[];
}
