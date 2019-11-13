import { StringLiteral } from '@babel/types';

//  IMite.ts
//  MegaDocker
//  an interface that represents a Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IMite {
  type: `Empty` | `Generic` | `Network` | `Service` | `Other`;
  miteString: string;
}

export const emptyMite: IMite = {
  type: `Generic`,
  miteString: ``
};
