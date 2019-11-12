//  IManikinWithVariables.ts
//  MegaDocker
//  an interface for a Manikin with variables
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

import { IManikin } from '@renderer/components/IManikin';
import {
  emptyManikinVariable,
  IManikinVariable
} from '@renderer/components/IManikinVariable';

export interface IManikinWithVariables extends IManikin {
  variables: IManikinVariable[];
}

export const emptyManikinWithVariables: IManikinWithVariables = {
  isSelected: false,
  name: 'unnamed Manikin object with variables',
  serviceYML: 'empty Manikin service',
  variables: [emptyManikinVariable]
};
