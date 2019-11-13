//  IManikin.ts
//  MegaDocker
//  an interface that represents a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IMite, emptyMite } from './IMite';
import { IManikinVariable } from './IManikinVariable';
import { IManikinPort } from './IManikinPort';

export interface IManikin {
  name: string;
  manikinIcon: ImageBitmapSource;
  description: string;
  isSelected: Boolean;
  mites: IMite[];
  ports?: IManikinPort[];
  folder?: string;
  subfolders?: string[];
  variables?: IManikinVariable[];
}
