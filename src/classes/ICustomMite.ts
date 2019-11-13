import { IMite } from './IMite';

//  IMite.ts
//  MegaDocker
//  an interface that represents a non-YML Mite
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019 The MegaDocker Group. All rights reserved.

interface ICustomMiteFile {
  fileExtension: string;
  fileContents: string;
}

export interface ICustomMite extends IMite {
  type: `Custom`;
  miteString: string;
  miteFiles: ICustomMiteFile[];
}
