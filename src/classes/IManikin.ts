//  IManikin.ts
//  MegaDocker
//  an interface for a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IManikin {
  isSelected: Boolean;
  name: string;
  serviceYML: string;
}

export const emptyManikin: IManikin = {
  isSelected: false,
  name: 'unnamed Manikin object',
  serviceYML: 'empty Manikin service'
};
