#!/usr/bin/env ts-node-script
import * as fs from 'fs';
import readline from 'readline';

interface IServiceMiteInput {
  autocomplete: boolean;
  description: string;
  name: string;
}

interface IServiceMiteTemplateOptions {
  autocomplete: boolean;
  date: Date;
  description: string;
  fileName: string;
  memoryMarker: string;
  memoryName: string;
  tooltip: string;
}

const makeServiceMiteFileString: Function = (
  options: IServiceMiteTemplateOptions
) => {
  const date: Date = new Date();
  const shortDate = date.toLocaleString().split(',')[0];
  const year: number = date.getFullYear();
  const template: string = `//  ${options.fileName}.ts
  //  MegaDocker
  //  ${options.description}
  //  Created by George Georgulas IV on ${shortDate}.
  //  Copyright © ${year} The MegaDocker Group. All rights reserved.`;
};
