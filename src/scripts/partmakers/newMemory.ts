#!/usr/bin/env ts-node-script
import * as fs from 'fs';
import IMemoryValueType from '../../interfaces/IMemoryValueType';
import readline from 'readline';

let runtimeAnswers: IInput = {
  autocomplete: false,
  description: `inputDesc`,
  name: `inputName`,
  type: `text`,
  validator: `no`,
};

const getData = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
getData.question(
  `Name this memory (camelCase): `,
  function (memoryName: string) {
    runtimeAnswers.name = memoryName;
    console.log(runtimeAnswers.name);
    getData.question(
      `Choose a html input type for it (text, email, or password): `,
      function (htmltype: string) {
        if (['text', 'email', 'password'].includes(htmltype) == false) {
          console.log(htmltype);
          throw new Error(
            `ERROR: ${htmltype} != 'text', or 'email', or 'password'.  Exiting script`
          );
        } else {
          runtimeAnswers.type = htmltype as IMemoryValueType;
        }
        getData.question(
          `Should it autocomplete ('true' or 'false'): `,
          function (auto: string) {
            switch (auto) {
              case 'true': {
                runtimeAnswers.autocomplete = true;
                break;
              }
              case 'false': {
                runtimeAnswers.autocomplete = false;
                break;
              }
              default: {
                throw new Error(
                  `ERROR: ${auto} != 'true' or 'false'.  Exiting script`
                );
              }
            }
            getData.question(
              `Enter a short description for it (one line of text or less): `,
              function (desc: string) {
                runtimeAnswers.description = desc;
                getData.question(
                  `Choose a validator ('email', 'no', 'noWhitespace' 'noWhiteSpaceOrSymbols' 'password'): `,
                  function (validator: string) {
                    switch (validator) {
                      case 'email': {
                        runtimeAnswers.validator = validator as IValidatorString;
                        break;
                      }
                      case 'no': {
                        runtimeAnswers.validator = validator as IValidatorString;
                        break;
                      }
                      case 'noWhitespace': {
                        runtimeAnswers.validator = validator as IValidatorString;
                        break;
                      }
                      case 'noWhiteSpaceOrSymbols': {
                        runtimeAnswers.validator = validator as IValidatorString;
                        break;
                      }
                      case 'password': {
                        runtimeAnswers.validator = validator as IValidatorString;
                        break;
                      }
                      default: {
                        throw new Error(
                          `ERROR: ${validator} != 'email', 'no', 'noWhitespace' 'noWhiteSpaceOrSymbols' 'password'.  Exiting script`
                        );
                      }
                    }
                    getData.close();
                    let runtimeOptions = makeOptions(runtimeAnswers);

                    const outputNewMemoryString: string = makeFileString(
                      runtimeOptions
                    );

                    fs.writeFileSync(
                      `src/mobparts/memories/${runtimeOptions.fileName}.ts`,
                      outputNewMemoryString
                    );
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

type IValidatorString =
  //  | `domain`
  `email` | `no` | `noWhitespace` | `noWhiteSpaceOrSymbols` | `password`;

interface IInput {
  autocomplete: boolean;
  description: string;
  name: string;
  type: IMemoryValueType;
  validator: IValidatorString;
}

interface ITemplateOptions {
  autocomplete: boolean;
  date: Date;
  description: string;
  fileName: string;
  memoryMarker: string;
  memoryName: string;
  tooltip: string;
  validator: IValidatorString;
  valueType: IMemoryValueType;
}

const makeOptions: Function = (input: IInput): ITemplateOptions => {
  const now: Date = new Date();
  const marker: string = input.name.toUpperCase();

  const inputOptions: ITemplateOptions = {
    autocomplete: input.autocomplete,
    date: now,
    description: input.description,
    fileName: input.name,
    memoryMarker: marker,
    memoryName: input.name,
    tooltip: input.description,
    validator: input.validator,
    valueType: input.type,
  };
  return inputOptions;
};

const makeFileString: Function = (options: ITemplateOptions): string => {
  const date: Date = new Date();
  const shortDate = date.toLocaleString().split(',')[0];
  const year: number = date.getFullYear();
  const template: string = `//  ${options.fileName}.ts
//  MegaDocker
//  ${options.description}
//  Created by George Georgulas IV on ${shortDate}.
//  Copyright © ${year} The MegaDocker Group. All rights reserved.

import { IMemory } from "../../interfaces/IMemory";
import { ${options.validator}Validator } from '../../functions/validators/${options.validator}Validator';

export const ${options.memoryName}: IMemory = {
  memoryIndex: 99999,
  memoryMarker: "[[${options.memoryMarker}]]",
  shouldAutocomplete: ${options.autocomplete},
  name: "${options.description}",
  tooltip: "${options.tooltip}",
  value: "",
  valueType: "${options.valueType}",
  isReady: false,
  validator: ${options.validator}Validator,
};`;
  console.log(template);
  console.log();
  console.log(
    `you still need to add "[[${options.memoryMarker}]]" to the IMemory.memoryMarker type`
  );
  console.log();

  return template;
};
