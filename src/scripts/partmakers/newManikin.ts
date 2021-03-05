#!/usr/bin/env ts-node-script
import * as fs from 'fs';
import readline from 'readline';

/*
type manikinGroup = | `Content` | `Core` | `Development` | `Financial` | `Infrastructure` | `Monitoring` | `Network` | `Organization` | `Productivity` | `Utility`;*/

interface IManikinInput {
  description: string;
  fileName: string;
  uiName: string;
}

interface IManikinTemplateOptions {
  date: Date;
  description: string;
  fileName: string;
  uiName: string;
}

const makeOptions: Function = (
  input: IManikinInput
): IManikinTemplateOptions => {
  const now: Date = new Date();

  const inputOptions: IManikinTemplateOptions = {
    date: now,
    description: input.description,
    fileName: input.fileName,
    uiName: input.uiName,
  };
  return inputOptions;
};

const makeFileString: Function = (options: IManikinTemplateOptions): string => {
  const date: Date = new Date();
  const shortDate = date.toLocaleString().split(',')[0];
  const year: number = date.getFullYear();
  const template: string = `//  ${options.fileName}.ts
  //  MegaDocker
  //  ${options.description}
  //  Created by George Georgulas IV on ${shortDate}.
  //  Copyright © ${year} The MegaDocker Group. All rights reserved.
  
  import { IManikin } from '../../interfaces/IManikin';
  
  import { ${options.fileName}ServiceMite } from '../mites/service/${
    options.fileName
  }ServiceMite';
  //import { ${options.fileName}NetworkMite } from '../mites/network/${
    options.fileName
  }NetworkMite';
  import ${options.fileName}Icon from '../../images/manikin-icons/${
    options.fileName
  }Icon.png';
  
  /**
   * ${options.uiName} Manikin
   */
  export const ${options.fileName}Manikin: IManikin = {
    description: "${options.description}",
    folder: "${options.fileName.toLowerCase()}",
    isCore: false,
    isSelected: false,
    manikinGroups: [],
    manikinIcon: "${options.uiName}Icon",
    manikinIndex: 99999,
    memories: [],
    mites: [],
    name: "${options.fileName}",
    ports: [],
    subfolders: [],
  };`;
  return template;
};
