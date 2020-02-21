//  IManikin.ts
//  MegaDocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite';
import { IMemory } from './IMemory';
import { IManikinPort } from './IManikinPort';

export interface INewManikin {
  description: string;
  folder: string;
  isCore: boolean;
  isSelected: boolean;
  manikinIcon: string;
  manikinIndex: number;
  memories: IMemory[];
  mites: IMite[];
  name: string;
  ports: IManikinPort[];
  subfolders: string[];
}
