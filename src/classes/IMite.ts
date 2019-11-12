import { StringLiteral } from '@babel/types';

//  IMite.ts
//  MegaDocker
//  an interface for a Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IMite {
  type: 'Generic' | 'Service' | 'Network' | 'Other';
  miteString: string;
}

export const emptyMite: IMite = {
  type: 'Generic',
  miteString: ``
};
