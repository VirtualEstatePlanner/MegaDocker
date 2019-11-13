//  IManikin.ts
//  MegaDocker
//  an interface for a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.
import { IMite, emptyMite } from './IMite';
import { IManikinVariable } from './IManikinVariable';
import { IManikinPort } from './IManikinPort';
export interface IManikin {
  name: string;
  description: string;
  isSelected: Boolean;
  mites: IMite[];
  ports?: IManikinPort[];
  folder?: string;
  subfolders?: string[];
  variables?: IManikinVariable[];
}

export const emptyManikin: IManikin = {
  name: ``,
  description: ``,
  isSelected: false,
  mites: [],
  ports: [],
  folder: ``,
  subfolders: [],
  variables: []
};
