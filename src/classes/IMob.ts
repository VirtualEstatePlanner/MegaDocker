//  IMob.ts
//  MegaDocker
//  an interface that represents a MEGADocker Mob
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from './IManikin';
import { IMemory } from './IMemory';
import {
  traefikManikin,
  swarmpitManikin
} from '../mobparts/manikins/_manikins';

export interface IMob {
  mobManikins: IManikin[];
  mobName: string;
  mobMemories: IMemory[];
}

export const coreMob: IMob = {
  mobManikins: [swarmpitManikin, traefikManikin],
  mobName: '',
  mobMemories: []
};
