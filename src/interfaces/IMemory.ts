//  IMemory.ts
//  MegaDocker
//  an interface that represents a variable used by a Manikin
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

export interface IMemory {
  isReady: boolean;
  memoryIndex: number;
  name: string;
  shouldAutocomplete: boolean;
  tooltip: string;
  validator(value: string): boolean;
  value: string;
  valueType: 'password' | 'email' | 'text';
}
