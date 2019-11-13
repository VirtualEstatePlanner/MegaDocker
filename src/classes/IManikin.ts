//  IManikin.ts
//  MegaDocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite } from './IMite';
import { IMemory } from './IMemory';
import { IManikinPort } from './IManikinPort';

export interface IManikin {
  name: string;
  manikinIcon: ImageBitmapSource;
  description: string;
  isCore: Boolean;
  isSelected: Boolean;
  mites: IMite[];
  ports?: IManikinPort[];
  folder?: string;
  subfolders?: string[];
  memories?: IMemory[];
}
