//  IMob.ts
//  MegaDocker
//  an interface that represents a MEGADocker Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin';
import { emptyManikinVariable, IManikinVariable } from './IManikinVariable';
import { traefikManikin, swarmpitManikin } from '../objects/manikins';

export interface IMob {
  mobManikins: IManikin[];
  mobName: string;
  mobVariables: IManikinVariable[];
}

export const coreMob: IMob = {
  mobManikins: [swarmpitManikin, traefikManikin],
  mobName: '',
  mobVariables: [emptyManikinVariable]
};
