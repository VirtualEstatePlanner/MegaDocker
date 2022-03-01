/** @format */

//  primaryDomain.ts
//  MEGADocker
//  The variable for the domain name of your primary web domain
//  Created by George Georgulas IV on 1/26/19.
//  Copyright © 2019-2021 The MegaDocker Group. All rights reserved.

import { IMemory } from '../../interfaces/objectInterfaces/IMemory'
import { domainValidator } from '../../functions/validators/domainValidator'

export const primaryDomain: IMemory = {
  memoryIndex: 20042,
  memoryMarker: `[[PRIMARYDOMAIN]]`,
  memoryType: `NormalMemory`,
  shouldAutocomplete: true,
  memoryName: `Web Domain`,
  tooltip: `The domain name for your MEGADOCKER Mob (such as 'example.com' or 'myawesomemob.org')`,
  value: ``,
  valueType: `text`,
  isReady: false,
  validator: domainValidator
}
